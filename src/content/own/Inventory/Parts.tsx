import {
  Box,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from '../components/CustomDatagrid';
import { GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import Part from '../../../models/owns/part';
import { addPart, deletePart, editPart, getParts } from '../../../slices/part';
import ConfirmDialog from '../components/ConfirmDialog';
import { useDispatch, useSelector } from '../../../store';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import * as Yup from 'yup';
import Form from '../components/form';
import { IField } from '../type';
import PartDetails from './PartDetails';
import { useParams } from 'react-router-dom';
import { isNumeric } from '../../../utils/validators';
import { formatSelectMultiple } from '../../../utils/formatters';
import { UserMiniDTO } from '../../../models/user';
import UserAvatars from '../components/UserAvatars';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';

interface PropsType {
  setAction: (p: () => () => void) => void;
}

const Parts = ({ setAction }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('list');
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { parts } = useSelector((state) => state.parts);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [currentPart, setCurrentPart] = useState<Part>();
  const { partId } = useParams();
  const dispatch = useDispatch();
  const { showSnackBar } = useContext(CustomSnackBarContext);

  const handleOpenUpdate = () => {
    setOpenUpdateModal(true);
  };

  const handleDelete = (id: number) => {
    handleCloseDetails();
    dispatch(deletePart(id)).then(onDeleteSuccess).catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const tabs = [
    { value: 'list', label: t('List View') },
    { value: 'card', label: t('Card View') }
  ];
  const theme = useTheme();
  const onCreationSuccess = () => {
    setOpenAddModal(false);
    showSnackBar(t('The Part has been created successfully'), 'success');
  };
  const onCreationFailure = (err) =>
    showSnackBar(t("The Part couldn't be created"), 'error');
  const onEditSuccess = () => {
    setOpenUpdateModal(false);
    showSnackBar(t('The changes have been saved'), 'success');
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The Part couldn't be edited"), 'error');
  const onDeleteSuccess = () => {
    showSnackBar(t('The Part has been deleted successfully'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t("The meter couldn't be deleted"), 'error');
  useEffect(() => {
    dispatch(getParts());
    const handleOpenModal = () => setOpenAddModal(true);
    setAction(() => handleOpenModal);
  }, []);

  useEffect(() => {
    if (parts.length && partId && isNumeric(partId)) {
      handleOpenDetails(Number(partId));
    }
  }, [parts]);

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const handleOpenDetails = (id: number) => {
    const foundPart = parts.find((part) => part.id === id);
    if (foundPart) {
      setCurrentPart(foundPart);
      window.history.replaceState(
        null,
        'Part details',
        `/app/inventory/parts/${id}`
      );
      setOpenDrawer(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(null, 'Part', `/app/inventory/parts`);
    setOpenDrawer(false);
  };
  const formatValues = (values) => {
    values.assignedTo = formatSelectMultiple(values.assignedTo);
    values.teams = formatSelectMultiple(values.teams);
    values.customers = formatSelectMultiple(values.customers);
    values.vendors = formatSelectMultiple(values.vendors);
    // values.image = formatSelect(values.image);
    // values.files = formatSelect(values.files);
    return values;
  };
  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Name'),
      description: t('Name'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },
    {
      field: 'cost',
      headerName: t('Cost'),
      description: t('Cost'),
      width: 150
    },
    {
      field: 'quantity',
      headerName: t('Quantity'),
      description: t('Quantity'),
      width: 150,
      renderCell: (params: GridRenderCellParams<number>) => (
        <Box sx={params.value < params.row.minQuantity ? { color: 'red' } : {}}>
          {params.value}{' '}
          {params.value < params.row.minQuantity && t('(Running Low !)')}
        </Box>
      )
    },
    {
      field: 'barcode',
      headerName: t('Barcode'),
      description: t('Barcode'),
      width: 150
    },
    {
      field: 'area',
      headerName: t('Area'),
      description: t('Area'),
      width: 150
    },
    {
      field: 'category',
      headerName: t('Category'),
      description: t('Category'),
      width: 150
    },
    {
      field: 'description',
      headerName: t('Description'),
      description: t('Description'),
      width: 150
    },
    {
      field: 'assignedTo',
      headerName: t('Assigned Users'),
      description: t('Assigned Users'),
      width: 150,
      renderCell: (params: GridRenderCellParams<UserMiniDTO[]>) => (
        <UserAvatars users={params.value} />
      )
    },
    {
      field: 'createdAt',
      headerName: t('Date Created'),
      description: t('Date Created'),
      width: 150
    },
    {
      field: 'openWorkOrders',
      headerName: t('Open Work Orders'),
      description: t('Open Work Orders'),
      width: 150
    }
  ];
  const fields: Array<IField> = [
    {
      name: 'name',
      type: 'text',
      label: t('Name'),
      placeholder: t('Enter Part name'),
      required: true
    },
    {
      name: 'description',
      type: 'text',
      label: t('Description'),
      placeholder: t('Description'),
      multiple: true
    },
    {
      name: 'category',
      type: 'text',
      label: t('Category'),
      placeholder: t('Enter Part category')
    },
    {
      name: 'cost',
      type: 'number',
      label: t('Cost'),
      placeholder: t('Enter Part cost')
    },
    {
      name: 'quantity',
      type: 'number',
      label: t('Quantity'),
      placeholder: t('Enter Part quantity')
    },
    {
      name: 'minQuantity',
      type: 'number',
      label: t('Minimum Quantity'),
      placeholder: t('Enter Part minimum quantity')
    },
    {
      name: 'nonStock',
      type: 'checkbox',
      label: t('Non Stock')
    },
    {
      name: 'barcode',
      type: 'text',
      label: t('Barcode'),
      placeholder: t('Enter Part Barcode')
    },
    {
      name: 'area',
      type: 'text',
      label: t('Area'),
      placeholder: t('Enter Part Area')
    },
    {
      name: 'additionalInfos',
      type: 'text',
      label: t('Additional Part Details'),
      placeholder: t('Additional Part Details'),
      multiple: true
    },
    {
      name: 'assignedTo',
      type: 'select',
      type2: 'user',
      multiple: true,
      label: t('Workers'),
      placeholder: 'Select Workers'
    },
    {
      name: 'teams',
      type: 'select',
      type2: 'team',
      multiple: true,
      label: t('Teams'),
      placeholder: 'Select Teams'
    },
    {
      name: 'vendors',
      type: 'select',
      type2: 'vendor',
      multiple: true,
      label: t('Vendors'),
      placeholder: 'Select Vendors'
    },
    {
      name: 'customers',
      type: 'select',
      type2: 'customer',
      multiple: true,
      label: t('Customers'),
      placeholder: 'Select Customers'
    },
    {
      name: 'image',
      type: 'file',
      label: t('Image'),
      fileType: 'image'
    },
    {
      name: 'files',
      type: 'file',
      label: t('Files')
    }
  ];
  const shape = {
    name: Yup.string().required(t('Part name is required'))
  };
  const renderPartAddModal = () => (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openAddModal}
      onClose={() => setOpenAddModal(false)}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add Part')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new Part')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Box>
          <Form
            fields={fields}
            validation={Yup.object().shape(shape)}
            submitText={t('Create Part')}
            values={{}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              const formattedValues = formatValues(values);
              dispatch(addPart(formattedValues))
                .then(onCreationSuccess)
                .catch(onCreationFailure);
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  const BasicField = ({
    label,
    value
  }: {
    label: string | number;
    value: string | number;
  }) => {
    return value ? (
      <Grid item xs={12}>
        <Stack spacing={1} direction="row">
          <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
            {label}
          </Typography>
          <Typography variant="h6">{value}</Typography>
        </Stack>
      </Grid>
    ) : null;
  };
  const fieldsToRender = (part: Part) => [
    {
      label: t('ID'),
      value: part.id
    },
    {
      label: t('Category'),
      value: part.category
    },
    {
      label: t('Quantity'),
      value: part.quantity
    },
    {
      label: t('Cost'),
      value: part.cost
    },
    {
      label: t('Barcode'),
      value: part.barcode
    },
    {
      label: t('Date created'),
      value: part.createdAt
    }
  ];
  const renderPartUpdateModal = () => (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openUpdateModal}
      onClose={() => setOpenUpdateModal(false)}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Update Part')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to update the Part')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Box>
          <Form
            fields={fields}
            validation={Yup.object().shape(shape)}
            submitText={t('Save')}
            values={{
              ...currentPart,
              assignedTo: currentPart?.assignedTo.map((user) => {
                return {
                  label: `${user.firstName} ${user.lastName}`,
                  value: user.id.toString()
                };
              }),
              teams: currentPart?.teams.map((team) => {
                return {
                  label: team.name,
                  value: team.id.toString()
                };
              }),
              vendors: currentPart?.vendors.map((vendor) => {
                return {
                  label: vendor.companyName,
                  value: vendor.id.toString()
                };
              }),
              customers: currentPart?.customers.map((customer) => {
                return {
                  label: customer.name,
                  value: customer.id.toString()
                };
              })
            }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              const formattedValues = formatValues(values);
              dispatch(editPart(currentPart.id, formattedValues))
                .then(onEditSuccess)
                .catch(onEditFailure);
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  return (
    <Box sx={{ p: 2 }}>
      {renderPartAddModal()}
      {renderPartUpdateModal()}
      <Tabs
        sx={{ mb: 2 }}
        onChange={handleTabsChange}
        value={currentTab}
        variant="scrollable"
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      {currentTab === 'list' && (
        <Box sx={{ height: 500, width: '95%' }}>
          <CustomDataGrid
            columns={columns}
            rows={parts}
            components={{
              Toolbar: GridToolbar
            }}
            onRowClick={(params) => {
              handleOpenDetails(Number(params.id));
            }}
            initialState={{
              columns: {
                columnVisibilityModel: {}
              }
            }}
          />
        </Box>
      )}
      {currentTab === 'card' && (
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {parts.map((part) => (
              <Grid item xs={12} lg={3} key={part.id}>
                <Card
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleOpenDetails(part.id)}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image="/static/images/placeholders/covers/2.jpg"
                    alt="..."
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h4">{part.name}</Typography>
                    <Box sx={{ mt: 1 }}>
                      {fieldsToRender(part).map((field) => (
                        <BasicField
                          key={field.label}
                          label={field.label}
                          value={field.value}
                        />
                      ))}
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleCloseDetails}
        PaperProps={{
          sx: { width: '50%' }
        }}
      >
        <PartDetails
          part={currentPart}
          handleOpenUpdate={handleOpenUpdate}
          handleOpenDelete={() => setOpenDelete(true)}
        />
      </Drawer>
      <ConfirmDialog
        open={openDelete}
        onCancel={() => {
          setOpenDelete(false);
          setOpenDrawer(true);
        }}
        onConfirm={() => handleDelete(currentPart?.id)}
        confirmText={t('Delete')}
        question={t('Are you sure you want to delete this Part?')}
      />
    </Box>
  );
};

export default Parts;

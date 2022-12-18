import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Grid,
  Typography
} from '@mui/material';
import {
  addMeter,
  deleteMeter,
  editMeter,
  getMeters
} from '../../../slices/meter';
import { useDispatch, useSelector } from '../../../store';
import ConfirmDialog from '../components/ConfirmDialog';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridRenderCellParams,
  GridToolbar,
  GridValueGetterParams
} from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Meter from '../../../models/owns/meter';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import MeterDetails from './MeterDetails';
import { useParams } from 'react-router-dom';
import { isNumeric } from '../../../utils/validators';
import { formatSelect, formatSelectMultiple } from '../../../utils/formatters';
import { CustomSnackBarContext } from 'src/contexts/CustomSnackBarContext';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import useAuth from '../../../hooks/useAuth';
import { PermissionEntity } from '../../../models/owns/role';
import PermissionErrorMessage from '../components/PermissionErrorMessage';
import FeatureErrorMessage from '../components/FeatureErrorMessage';
import { PlanFeature } from '../../../models/owns/subscriptionPlan';
import NoRowsMessageWrapper from '../components/NoRowsMessageWrapper';

function Meters() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [currentMeter, setCurrentMeter] = useState<Meter>();
  const { meterId } = useParams();
  const {
    hasViewPermission,
    hasCreatePermission,
    getFilteredFields,
    hasFeature
  } = useAuth();
  const dispatch = useDispatch();
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { getFormattedDate, uploadFiles, getUserNameById } = useContext(
    CompanySettingsContext
  );
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { meters, loadingGet } = useSelector((state) => state.meters);

  useEffect(() => {
    setTitle(t('Meters'));
    if (hasViewPermission(PermissionEntity.METERS)) dispatch(getMeters());
  }, []);
  useEffect(() => {
    if (meters.length && meterId && isNumeric(meterId)) {
      handleOpenDetails(Number(meterId));
    }
  }, [meters]);

  const formatValues = (values) => {
    values.users = formatSelectMultiple(values.users);
    //values.teams = formatSelectMultiple(values.teams);
    values.location = formatSelect(values.location);
    values.asset = formatSelect(values.asset);
    values.updateFrequency = Number(values.updateFrequency);
    return values;
  };
  const handleDelete = (id: number) => {
    handleCloseDetails();
    dispatch(deleteMeter(id)).then(onDeleteSuccess).catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const handleOpenUpdate = () => {
    setOpenUpdateModal(true);
  };
  const handleOpenDetails = (id: number) => {
    const foundMeter = meters.find((meter) => meter.id === id);
    if (foundMeter) {
      setCurrentMeter(foundMeter);
      window.history.replaceState(null, 'Meter details', `/app/meters/${id}`);
      setOpenDrawer(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(null, 'Meter', `/app/meters`);
    setOpenDrawer(false);
  };
  const onCreationSuccess = () => {
    setOpenAddModal(false);
    showSnackBar(t('The meter has been created successfully'), 'success');
  };
  const onCreationFailure = (err) =>
    showSnackBar(t("The meter couldn't be created"), 'error');
  const onEditSuccess = () => {
    setOpenUpdateModal(false);
    showSnackBar(t('The changes have been saved'), 'success');
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The meter couldn't be edited"), 'error');
  const onDeleteSuccess = () => {
    showSnackBar(t('The meter has been deleted successfully'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t("The meter couldn't be deleted"), 'error');
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
      field: 'nextReading',
      headerName: t('Next Reading Due'),
      description: t('Next Reading'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<string>) =>
        getFormattedDate(params.value)
    },
    {
      field: 'unit',
      headerName: t('Unit of Measurement'),
      description: t('Unit of Measurement'),
      width: 150
    },
    {
      field: 'lastReading',
      headerName: t('Last Reading'),
      description: t('Last Reading'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<string>) =>
        getFormattedDate(params.value)
    },
    {
      field: 'location',
      headerName: t('Location'),
      description: t('Location'),
      width: 150,
      valueGetter: (params) => params.row.location?.name
    },
    {
      field: 'asset',
      headerName: t('Asset'),
      description: t('Asset'),
      width: 150,
      valueGetter: (params) => params.row.asset.name
    },
    {
      field: 'createdBy',
      headerName: t('Created By'),
      description: t('Created By'),
      width: 150,
      valueGetter: (params) => getUserNameById(params.value)
    },
    {
      field: 'createdAt',
      headerName: t('Date Created'),
      description: t('Date Created'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<string>) =>
        getFormattedDate(params.value)
    }
  ];
  const fields: Array<IField> = [
    {
      name: 'name',
      type: 'text',
      label: t('Name'),
      placeholder: t('Enter Meter name'),
      required: true
    },
    {
      name: 'unit',
      type: 'text',
      label: t('Unit'),
      placeholder: t('Unit'),
      required: true
    },
    {
      name: 'updateFrequency',
      type: 'number',
      label: t('Update Frequency'),
      placeholder: t('Update Frequency in days'),
      required: true
    },
    {
      name: 'category',
      type: 'text',
      label: t('Category'),
      placeholder: t('Category')
    },
    {
      name: 'image',
      type: 'file',
      fileType: 'image',
      label: t('Image')
    },
    {
      name: 'asset',
      type: 'select',
      type2: 'asset',
      label: t('Asset'),
      required: true
    },
    {
      name: 'users',
      type: 'select',
      type2: 'user',
      label: t('Workers'),
      multiple: true
    },
    {
      name: 'location',
      type: 'select',
      type2: 'location',
      label: t('Location')
    }
  ];
  const shape = {
    name: Yup.string().required(t('Meter name is required')),
    unit: Yup.string().required(t('Meter unit is required')),
    updateFrequency: Yup.number().required(
      t('Meter update frequency is required')
    ),
    asset: Yup.object().required(t('Asset is required')).nullable()
  };
  const renderAddModal = () => (
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
          {t('Add Meter')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new Meter')}
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
            fields={getFilteredFields(fields)}
            validation={Yup.object().shape(shape)}
            submitText={t('Add')}
            values={{}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              let formattedValues = formatValues(values);
              return new Promise<void>((resolve, rej) => {
                uploadFiles([], values.image)
                  .then((files) => {
                    formattedValues = {
                      ...formattedValues,
                      image: files.length ? { id: files[0].id } : null
                    };
                    dispatch(addMeter(formattedValues))
                      .then(onCreationSuccess)
                      .catch(onCreationFailure)
                      .finally(resolve);
                  })
                  .catch((err) => {
                    rej(err);
                  });
              });
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  const renderUpdateModal = () => (
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
          {t('Edit Meter')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to edit the Meter')}
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
              ...currentMeter,
              users: currentMeter?.users.map((worker) => {
                return {
                  label: `${worker?.firstName} ${worker.lastName}`,
                  value: worker.id
                };
              }),
              location: currentMeter?.location
                ? {
                    label: currentMeter?.location.name,
                    value: currentMeter?.location.id
                  }
                : null,
              asset: {
                label: currentMeter?.asset.name,
                value: currentMeter?.asset.id
              }
            }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              let formattedValues = formatValues(values);
              return new Promise<void>((resolve, rej) => {
                uploadFiles([], values.image)
                  .then((files) => {
                    formattedValues = {
                      ...formattedValues,
                      image: files.length
                        ? { id: files[0].id }
                        : currentMeter.image
                    };
                    dispatch(editMeter(currentMeter.id, formattedValues))
                      .then(onEditSuccess)
                      .catch(onEditFailure)
                      .finally(resolve);
                  })
                  .catch((err) => {
                    rej(err);
                    onEditFailure(err);
                  });
              });
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  if (hasFeature(PlanFeature.METER)) {
    if (hasViewPermission(PermissionEntity.METERS))
      return (
        <>
          <Helmet>
            <title>{t('Meters')}</title>
          </Helmet>
          {renderAddModal()}
          {renderUpdateModal()}
          <Grid
            container
            justifyContent="center"
            alignItems="stretch"
            spacing={1}
            paddingX={4}
          >
            {hasCreatePermission(PermissionEntity.METERS) && (
              <Grid
                item
                xs={12}
                display="flex"
                flexDirection="row"
                justifyContent="right"
                alignItems="center"
              >
                <Button
                  startIcon={<AddTwoToneIcon />}
                  sx={{ mx: 6, my: 1 }}
                  variant="contained"
                  onClick={() => setOpenAddModal(true)}
                >
                  Meter
                </Button>
              </Grid>
            )}
            <Grid item xs={12}>
              <Card
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ height: 500, width: '95%' }}>
                  <CustomDataGrid
                    columns={columns}
                    loading={loadingGet}
                    rows={meters}
                    onRowClick={({ id }) => handleOpenDetails(Number(id))}
                    components={{
                      Toolbar: GridToolbar,
                      NoRowsOverlay: () => (
                        <NoRowsMessageWrapper
                          message={t(
                            'Meter readings give you the ability to monitor assets and trigger new work orders based on defined conditions'
                          )}
                          action={t("Press the '+' button to create a Meter")}
                        />
                      )
                    }}
                    initialState={{
                      columns: {
                        columnVisibilityModel: {}
                      }
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Drawer
            anchor="right"
            open={openDrawer}
            onClose={handleCloseDetails}
            PaperProps={{
              sx: { width: '50%' }
            }}
          >
            <MeterDetails
              meter={currentMeter}
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
            onConfirm={() => handleDelete(currentMeter?.id)}
            confirmText={t('Delete')}
            question={t('Are you sure you want to delete this Meter?')}
          />
        </>
      );
    else
      return (
        <PermissionErrorMessage
          message={
            "You don't have access to Meters. Please contact your administrator if you should have access"
          }
        />
      );
  } else return <FeatureErrorMessage message={'Upgrade to create Meters'} />;
}

export default Meters;

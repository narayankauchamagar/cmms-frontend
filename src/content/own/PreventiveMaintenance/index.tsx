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
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import {
  addPreventiveMaintenance,
  deletePreventiveMaintenance,
  editPreventiveMaintenance,
  getPreventiveMaintenances,
  patchSchedule
} from '../../../slices/preventiveMaintenance';
import { useDispatch, useSelector } from '../../../store';
import ConfirmDialog from '../components/ConfirmDialog';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import { GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import PMDetails from './PMDetails';
import { useNavigate, useParams } from 'react-router-dom';
import { isNumeric } from '../../../utils/validators';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import PriorityWrapper from '../components/PriorityWrapper';
import {
  formatSelect,
  formatSelectMultiple,
  getPriorityLabel
} from '../../../utils/formatters';
import useAuth from '../../../hooks/useAuth';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import { getWOBaseFields } from '../../../utils/fields';
import { PermissionEntity } from '../../../models/owns/role';
import PermissionErrorMessage from '../components/PermissionErrorMessage';
import NoRowsMessageWrapper from '../components/NoRowsMessageWrapper';
import { getImageAndFiles } from '../../../utils/overall';
import { UserMiniDTO } from '../../../models/user';
import UserAvatars from '../components/UserAvatars';
import PreventiveMaintenance from '../../../models/owns/preventiveMaintenance';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const {
    companySettings,
    hasViewPermission,
    hasCreatePermission,
    getFilteredFields
  } = useAuth();
  const [currentPM, setCurrentPM] = useState<PreventiveMaintenance>();
  const { uploadFiles, getWOFieldsAndShapes } = useContext(
    CompanySettingsContext
  );
  const { preventiveMaintenanceId } = useParams();
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { preventiveMaintenances, loadingGet } = useSelector(
    (state) => state.preventiveMaintenances
  );
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(t('Preventive Maintenance'));
    if (hasViewPermission(PermissionEntity.PREVENTIVE_MAINTENANCES))
      dispatch(getPreventiveMaintenances());
  }, []);
  useEffect(() => {
    if (
      preventiveMaintenances?.length &&
      preventiveMaintenanceId &&
      isNumeric(preventiveMaintenanceId)
    ) {
      handleOpenDetails(Number(preventiveMaintenanceId));
    }
  }, [preventiveMaintenances]);

  const handleDelete = (id: number) => {
    handleCloseDetails();
    dispatch(deletePreventiveMaintenance(id))
      .then(onDeleteSuccess)
      .catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const handleOpenUpdate = () => {
    setOpenUpdateModal(true);
  };
  const onCreationSuccess = () => {
    setOpenAddModal(false);
    showSnackBar(t('Work Order successfully scheduled '), 'success');
  };
  const onCreationFailure = (err) =>
    showSnackBar(
      t("The Work PreventiveMaintenance couldn't be created"),
      'error'
    );
  const onEditSuccess = () => {
    setOpenUpdateModal(false);
    showSnackBar(t('The changes have been saved'), 'success');
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The Preventive Maintenance couldn't be edited"), 'error');
  const onDeleteSuccess = () => {
    showSnackBar(
      t('The Preventive Maintenance has been deleted successfully'),
      'success'
    );
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t("The Preventive Maintenance couldn't be deleted"), 'error');

  const handleOpenDetails = (id: number) => {
    const foundPreventiveMaintenance = preventiveMaintenances.find(
      (preventiveMaintenance) => preventiveMaintenance.id === id
    );
    if (foundPreventiveMaintenance) {
      setCurrentPM(foundPreventiveMaintenance);
      window.history.replaceState(
        null,
        'PreventiveMaintenance details',
        `/app/preventive-maintenances/${id}`
      );
      setOpenDrawer(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(
      null,
      'Preventive',
      `/app/preventive-maintenances`
    );
    setOpenDrawer(false);
  };
  const formatValues = (values) => {
    values.primaryUser = formatSelect(values.primaryUser);
    values.location = formatSelect(values.location);
    values.team = formatSelect(values.team);
    values.asset = formatSelect(values.asset);
    values.assignedTo = formatSelectMultiple(values.assignedTo);
    values.priority = values.priority?.value;
    values.category = formatSelect(values.category);
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
      field: 'title',
      headerName: t('Work Order Title'),
      description: t('Work Order Title'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },

    {
      field: 'priority',
      headerName: t('Priority'),
      description: t('Priority'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <PriorityWrapper priority={params.value} />
      )
    },
    {
      field: 'description',
      headerName: t('Description'),
      description: t('Description'),
      width: 150
    },
    {
      field: 'primaryUser',
      headerName: t('Worker'),
      description: t('Worker'),
      width: 150,
      renderCell: (params: GridRenderCellParams<UserMiniDTO>) =>
        params.value ? <UserAvatars users={[params.value]} /> : null
    },
    {
      field: 'assignedTo',
      headerName: t('Assignees'),
      description: t('Assignees'),
      width: 150,
      renderCell: (params: GridRenderCellParams<UserMiniDTO[]>) => (
        <UserAvatars users={params.value} />
      )
    },
    {
      field: 'location',
      headerName: t('Location name'),
      description: t('Location name'),
      width: 150,
      valueGetter: (params) => params.row.location?.name
    },
    {
      field: 'category',
      headerName: t('Category'),
      description: t('Category'),
      width: 150,
      valueGetter: (params) => params.row.category?.name
    },
    {
      field: 'asset',
      headerName: t('Asset name'),
      description: t('Asset name'),
      width: 150,
      valueGetter: (params) => params.row.asset?.name
    }
  ];
  const defaultFields: Array<IField> = [
    {
      name: 'triggerConfiguration',
      type: 'titleGroupField',
      label: 'Trigger Configuration'
    },
    {
      name: 'name',
      type: 'text',
      label: t('Trigger Name'),
      placeholder: t('Enter trigger Name'),
      required: true
    },
    {
      name: 'startsOn',
      type: 'date',
      label: t('Starts On'),
      required: true,
      midWidth: true
    },
    {
      name: 'endsOn',
      type: 'date',
      label: t('Ends On'),
      midWidth: true
    },
    {
      name: 'frequency',
      type: 'number',
      label: t('Frequency in days'),
      required: true
    },
    {
      name: 'titleGroup',
      type: 'titleGroupField',
      label: 'Work Order Configuration'
    },
    ...getWOBaseFields(t)
  ];
  const defaultShape = {
    name: Yup.string().required(t('Trigger name is required')),
    title: Yup.string().required(t('Work Order title is required')),
    frequency: Yup.number().required(t('The trigger frequency is required'))
  };
  const getFieldsAndShapes = (): [Array<IField>, { [key: string]: any }] => {
    return getWOFieldsAndShapes(defaultFields, defaultShape);
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
          {t('Add Preventive Maintenance')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create a new Preventive Maintenance')}
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
            fields={getFieldsAndShapes()[0]}
            validation={Yup.object().shape(getFieldsAndShapes()[1])}
            submitText={t('Add')}
            values={{ startsOn: null, endsOn: null, dueDate: null }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              let formattedValues = formatValues(values);
              return new Promise<void>((resolve, rej) => {
                uploadFiles(formattedValues.files, formattedValues.image)
                  .then((files) => {
                    const imageAndFiles = getImageAndFiles(files);
                    formattedValues = {
                      ...formattedValues,
                      image: imageAndFiles.image,
                      files: imageAndFiles.files
                    };
                    dispatch(addPreventiveMaintenance(formattedValues))
                      .then(onCreationSuccess)
                      .catch(onCreationFailure)
                      .finally(resolve);
                  })
                  .catch((err) => {
                    onCreationFailure(err);
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
          {t('Edit Preventive Maintenance')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to edit the Preventive Maintenance')}
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
            fields={getFieldsAndShapes()[0]}
            validation={Yup.object().shape(getFieldsAndShapes()[1])}
            submitText={t('Save')}
            values={{
              ...currentPM,
              priority: currentPM?.priority
                ? {
                    label: getPriorityLabel(currentPM?.priority, t),
                    value: currentPM?.priority
                  }
                : null,
              startsOn: currentPM?.schedule.startsOn,
              endsOn: currentPM?.schedule.endsOn,
              frequency: currentPM?.schedule.frequency
            }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              let formattedValues = formatValues(values);
              return new Promise<void>((resolve, rej) => {
                const files = formattedValues.files.find((file) => file.id)
                  ? []
                  : formattedValues.files;
                uploadFiles(files, formattedValues.image)
                  .then((files) => {
                    const imageAndFiles = getImageAndFiles(
                      files,
                      currentPM.image
                    );
                    formattedValues = {
                      ...formattedValues,
                      image: imageAndFiles.image,
                      files: [...currentPM.files, ...imageAndFiles.files]
                    };
                    dispatch(
                      editPreventiveMaintenance(currentPM?.id, formattedValues)
                    )
                      .then(() => {
                        dispatch(
                          patchSchedule(
                            currentPM.schedule.id,
                            currentPM.id,
                            formattedValues
                          )
                        );
                      })
                      .then(onEditSuccess)
                      .catch(onEditFailure)
                      .finally(resolve);
                  })
                  .catch((err) => {
                    onEditFailure(err);
                    rej(err);
                  });
              });
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  if (hasViewPermission(PermissionEntity.PREVENTIVE_MAINTENANCES))
    return (
      <>
        <Helmet>
          <title>{t('Preventive Maintenance')}</title>
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
          {hasCreatePermission(PermissionEntity.PREVENTIVE_MAINTENANCES) && (
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
                {t('Create Trigger')}
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
                  rows={preventiveMaintenances}
                  onRowClick={({ id }) => handleOpenDetails(Number(id))}
                  components={{
                    Toolbar: GridToolbar,
                    NoRowsOverlay: () => (
                      <NoRowsMessageWrapper
                        message={t('Schedule Work Orders with custom triggers')}
                        action={t("Press the '+' button to create a trigger")}
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
          <PMDetails
            onClose={handleCloseDetails}
            preventiveMaintenance={currentPM}
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
          onConfirm={() => handleDelete(currentPM?.id)}
          confirmText={t('Delete')}
          question={t(
            'Are you sure you want to delete this Preventive Maintenance?'
          )}
        />
      </>
    );
  else
    return (
      <PermissionErrorMessage
        message={
          "You don't have access to Preventive Maintenances. Please contact your administrator if you should have access"
        }
      />
    );
}

export default Files;

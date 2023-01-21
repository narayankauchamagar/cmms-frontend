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
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import { IField } from '../type';
import WorkOrder from '../../../models/owns/workOrder';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridRenderCellParams,
  GridToolbar,
  GridValueGetterParams
} from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Form from '../components/form';
import UserAvatars from '../components/UserAvatars';
import * as Yup from 'yup';
import { isNumeric } from '../../../utils/validators';
import { UserMiniDTO } from '../../../models/user';
import WorkOrderDetails from './WorkOrderDetails';
import { useParams, useSearchParams } from 'react-router-dom';
import { LocationMiniDTO } from '../../../models/owns/location';
import { AssetMiniDTO } from '../../../models/owns/asset';
import { formatSelect, formatSelectMultiple } from '../../../utils/formatters';
import {
  addWorkOrder,
  deleteWorkOrder,
  editWorkOrder,
  getWorkOrders
} from '../../../slices/workOrder';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import { useDispatch, useSelector } from '../../../store';
import PriorityWrapper from '../components/PriorityWrapper';
import { patchTasks } from '../../../slices/task';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import useAuth from '../../../hooks/useAuth';
import { getWOBaseValues } from '../../../utils/woBase';
import { PermissionEntity } from '../../../models/owns/role';
import PermissionErrorMessage from '../components/PermissionErrorMessage';
import ConfirmDialog from '../components/ConfirmDialog';
import NoRowsMessageWrapper from '../components/NoRowsMessageWrapper';
import { getImageAndFiles } from '../../../utils/overall';
import { getSingleLocation } from '../../../slices/location';
import { getSingleAsset } from '../../../slices/asset';
import Category from '../../../models/owns/category';
import File from '../../../models/owns/file';
import { dayDiff } from '../../../utils/dates';

function WorkOrders() {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('list');
  const { workOrders, loadingGet } = useSelector((state) => state.workOrders);
  const [searchParams, setSearchParams] = useSearchParams();
  const locationParam = searchParams.get('location');
  const assetParam = searchParams.get('asset');
  const dispatch = useDispatch();
  const { uploadFiles, getWOFieldsAndShapes } = useContext(
    CompanySettingsContext
  );
  const { companySettings, getFilteredFields } = useAuth();
  const { workOrderConfiguration } = companySettings;
  const { getFormattedDate, getUserNameById } = useContext(
    CompanySettingsContext
  );
  const tabs = [
    { value: 'list', label: t('list_view'), disabled: false },
    { value: 'calendar', label: t('calendar_view'), disabled: true },
    { value: 'column', label: t('column_view'), disabled: true }
  ];
  const theme = useTheme();
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const { workOrderId } = useParams();
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { hasViewPermission, hasCreatePermission } = useAuth();
  const [currentWorkOrder, setCurrentWorkOrder] = useState<WorkOrder>();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { tasksByWorkOrder } = useSelector((state) => state.tasks);
  const { locations } = useSelector((state) => state.locations);
  const { assetInfos } = useSelector((state) => state.assets);
  const locationParamObject = locations.find(
    (location) => location.id === Number(locationParam)
  );
  const assetParamObject = assetInfos[assetParam]?.asset;
  const tasks = tasksByWorkOrder[currentWorkOrder?.id] ?? [];
  const handleDelete = (id: number) => {
    dispatch(deleteWorkOrder(id)).then(onDeleteSuccess).catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const handleOpenUpdate = (id: number) => {
    setCurrentWorkOrder(workOrders.find((workOrder) => workOrder.id === id));
    setOpenUpdateModal(true);
  };
  const handleOpenDelete = (id: number) => {
    setCurrentWorkOrder(workOrders.find((workOrder) => workOrder.id === id));
    setOpenDelete(true);
    setOpenDrawer(false);
  };
  const handleOpenDetails = (id: number) => {
    const foundWorkOrder = workOrders.find((workOrder) => workOrder.id === id);
    if (foundWorkOrder) {
      setCurrentWorkOrder(foundWorkOrder);
      window.history.replaceState(
        null,
        'WorkOrder details',
        `/app/work-orders/${id}`
      );
      setOpenDrawer(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(null, 'WorkOrder', `/app/work-orders`);
    setOpenDrawer(false);
  };
  useEffect(() => {
    setTitle(t('work_orders'));
    if (hasViewPermission(PermissionEntity.WORK_ORDERS))
      dispatch(getWorkOrders());
  }, []);

  useEffect(() => {
    if (workOrderId && isNumeric(workOrderId)) {
      handleOpenDetails(Number(workOrderId));
    }
  }, [workOrders]);

  useEffect(() => {
    if (locationParam || assetParam) {
      if (locationParam && isNumeric(locationParam)) {
        dispatch(getSingleLocation(Number(locationParam)));
      }
      if (assetParam && isNumeric(assetParam)) {
        dispatch(getSingleAsset(Number(assetParam)));
      }
    }
  }, []);

  useEffect(() => {
    let shouldOpen1 = locationParam && locationParamObject;
    let shouldOpen2 = assetParam && assetParamObject;
    if (shouldOpen1 || shouldOpen2) {
      setOpenAddModal(true);
    }
  }, [locationParamObject, assetParamObject]);

  const formatValues = (values) => {
    values.primaryUser = formatSelect(values.primaryUser);
    values.location = formatSelect(values.location);
    values.team = formatSelect(values.team);
    values.asset = formatSelect(values.asset);
    values.assignedTo = formatSelectMultiple(values.assignedTo);
    values.customers = formatSelectMultiple(values.customers);
    values.priority = values.priority?.value;
    values.requiredSignature = Array.isArray(values.requiredSignature)
      ? values?.requiredSignature.includes('on')
      : values.requiredSignature;
    values.category = formatSelect(values.category);
    return values;
  };
  const onCreationSuccess = () => {
    setOpenAddModal(false);
    showSnackBar(t('wo_create_success'), 'success');
  };
  const onCreationFailure = (err) =>
    showSnackBar(t('wo_create_failure'), 'error');
  const onEditSuccess = () => {
    setOpenUpdateModal(false);
    showSnackBar(t('changes_saved_success'), 'success');
  };
  const onEditFailure = (err) => showSnackBar(t('wo_update_failure'), 'error');
  const onDeleteSuccess = () => {
    showSnackBar(t('wo_delete_success'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t('wo_delete_failure'), 'error');

  const columns: GridEnrichedColDef[] = [
    {
      field: 'id',
      headerName: t('id'),
      description: t('id')
    },
    {
      field: 'status',
      headerName: t('status'),
      description: t('status'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box display="flex" flexDirection="row" justifyContent="center">
          <CircleTwoToneIcon
            fontSize="small"
            color={
              params.value === 'IN_PROGRESS'
                ? 'success'
                : params.value === 'ON_HOLD'
                ? 'warning'
                : params.value === 'COMPLETE'
                ? 'info'
                : 'secondary'
            }
          />
          <Typography sx={{ ml: 1 }}>{t(params.value)}</Typography>
        </Box>
      )
    },
    {
      field: 'title',
      headerName: t('title'),
      description: t('title'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },

    {
      field: 'priority',
      headerName: t('priority'),
      description: t('priority'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <PriorityWrapper priority={params.value} />
      )
    },
    {
      field: 'description',
      headerName: t('description'),
      description: t('description'),
      width: 150
    },
    {
      field: 'primaryUser',
      headerName: t('worker'),
      description: t('worker'),
      width: 150,
      renderCell: (params: GridRenderCellParams<UserMiniDTO>) =>
        params.value ? <UserAvatars users={[params.value]} /> : null
    },
    {
      field: 'assignedTo',
      headerName: t('assigned_to'),
      description: t('assigned_to'),
      width: 150,
      renderCell: (params: GridRenderCellParams<UserMiniDTO[]>) => (
        <UserAvatars users={params.value} />
      )
    },
    {
      field: 'location',
      headerName: t('location_name'),
      description: t('location_name'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<LocationMiniDTO>) =>
        params.value?.name
    },
    {
      field: 'locationAddress',
      headerName: t('location_address'),
      description: t('location_address'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<null, WorkOrder>) =>
        params.row.location?.address
    },
    {
      field: 'category',
      headerName: t('category'),
      description: t('category'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<Category>) =>
        params.value?.name
    },
    {
      field: 'asset',
      headerName: t('asset_name'),
      description: t('asset_name'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<AssetMiniDTO>) =>
        params.value?.name
    },
    {
      field: 'daysSinceCreated',
      headerName: t('days_since_creation'),
      description: t('days_since_creation'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<null, WorkOrder>) =>
        dayDiff(new Date(), new Date(params.row.createdAt))
    },
    {
      field: 'files',
      headerName: t('files'),
      description: t('files'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<File[]>) =>
        params.value.length
    },
    {
      field: 'requestedBy',
      headerName: t('requested_by'),
      description: t('requested_by'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<null, WorkOrder>) =>
        getUserNameById(params.row.parentRequest?.createdBy)
    },
    {
      field: 'completedOn',
      headerName: t('completed_on'),
      description: t('completed_on'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<string>) =>
        getFormattedDate(params.value)
    },
    {
      field: 'updatedAt',
      headerName: t('updated_at'),
      description: t('updated_at'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<string>) =>
        getFormattedDate(params.value)
    },
    {
      field: 'createdAt',
      headerName: t('created_at'),
      description: t('created_at'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<string>) =>
        getFormattedDate(params.value)
    }
  ];
  const defaultFields: Array<IField> = [
    {
      name: 'title',
      type: 'text',
      label: t('title'),
      placeholder: t('wo.title.description'),
      required: true
    },
    {
      name: 'description',
      type: 'text',
      label: t('description'),
      placeholder: t('description'),
      multiple: true
    },
    {
      name: 'image',
      type: 'file',
      fileType: 'image',
      label: t('image')
    },
    {
      name: 'dueDate',
      type: 'date',
      label: t('due_date')
    },
    {
      name: 'estimatedDuration',
      type: 'number',
      label: t('estimated_duration'),
      placeholder: t('hours')
    },
    {
      name: 'priority',
      type: 'select',
      label: t('priority'),
      type2: 'priority'
    },
    {
      name: 'category',
      type: 'select',
      label: t('category'),
      type2: 'category',
      category: 'work-order-categories'
    },
    {
      name: 'primaryUser',
      type: 'select',
      label: t('primary_worker'),
      type2: 'user'
    },
    {
      name: 'assignedTo',
      type: 'select',
      label: t('additional_workers'),
      type2: 'user',
      multiple: true
    },
    {
      name: 'customers',
      type: 'select',
      label: t('customers'),
      type2: 'customer',
      multiple: true
    },
    {
      name: 'team',
      type: 'select',
      type2: 'team',
      label: t('team'),
      placeholder: t('select_team')
    },
    {
      name: 'location',
      type: 'select',
      type2: 'location',
      label: t('location'),
      placeholder: t('select_location')
    },
    {
      name: 'asset',
      type: 'select',
      type2: 'asset',
      label: t('asset'),
      placeholder: t('select_asset')
    },
    {
      name: 'tasks',
      type: 'select',
      type2: 'task',
      label: t('tasks'),
      placeholder: t('select_tasks')
    },
    {
      name: 'files',
      type: 'file',
      multiple: true,
      label: t('files'),
      fileType: 'file'
    },
    {
      name: 'requiredSignature',
      type: 'switch',
      label: t('requires_signature')
    }
  ];
  const defaultShape: { [key: string]: any } = {
    title: Yup.string().required(t('required_wo_title'))
  };
  const getFieldsAndShapes = (): [Array<IField>, { [key: string]: any }] => {
    return getWOFieldsAndShapes(defaultFields, defaultShape);
  };

  const renderWorkOrderAddModal = () => (
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
          {t('add_wo')}
        </Typography>
        <Typography variant="subtitle2">{t('add_wo.description')}</Typography>
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
            submitText={t('add')}
            values={{
              requiredSignature: false,
              dueDate: null,
              asset: assetParamObject
                ? { label: assetParamObject.name, value: assetParamObject.id }
                : null,
              location: locationParamObject
                ? {
                    label: locationParamObject.name,
                    value: locationParamObject.id
                  }
                : null
            }}
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
                    dispatch(addWorkOrder(formattedValues))
                      .then(() => {
                        onCreationSuccess();
                        resolve();
                      })
                      .catch((err) => {
                        onCreationFailure(err);
                        rej();
                      });
                  })
                  .catch((err) => {
                    onCreationFailure(err);
                    rej();
                  });
              });
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  const renderWorkOrderUpdateModal = () => (
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
          {t('Edit Work Order')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to update the Work Order')}
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
            submitText={t('save')}
            values={{
              ...currentWorkOrder,
              tasks: tasks,
              ...getWOBaseValues(t, currentWorkOrder)
            }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              let formattedValues = formatValues(values);
              return new Promise<void>((resolve, rej) => {
                //differentiate files from api and formattedValues
                const files = formattedValues.files.find((file) => file.id)
                  ? []
                  : formattedValues.files;
                uploadFiles(files, formattedValues.image)
                  .then((files) => {
                    const imageAndFiles = getImageAndFiles(
                      files,
                      currentWorkOrder.image
                    );
                    formattedValues = {
                      ...formattedValues,
                      image: imageAndFiles.image,
                      files: [...currentWorkOrder.files, ...imageAndFiles.files]
                    };
                    dispatch(
                      //TODO editTask
                      patchTasks(
                        currentWorkOrder?.id,
                        formattedValues.tasks.map((task) => {
                          return {
                            ...task.taskBase,
                            options: task.taskBase.options.map(
                              (option) => option.label
                            )
                          };
                        })
                      )
                    )
                      .then(() =>
                        dispatch(
                          editWorkOrder(currentWorkOrder?.id, formattedValues)
                        )
                          .then(onEditSuccess)
                          .then(() => resolve())
                          .catch((err) => {
                            onEditFailure(err);
                            rej();
                          })
                      )
                      .catch((err) => {
                        onEditFailure(err);
                        rej();
                      });
                  })
                  .catch((err) => {
                    onEditFailure(err);
                    rej();
                  });
              });
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  if (hasViewPermission(PermissionEntity.WORK_ORDERS))
    return (
      <>
        <Helmet>
          <title>{t('work_orders')}</title>
        </Helmet>
        <Grid
          container
          justifyContent="center"
          alignItems="stretch"
          spacing={1}
          paddingX={4}
        >
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Tabs
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) =>
                tab.disabled ? (
                  <Tooltip title={t('Coming Soon')} placement="top">
                    <span>
                      <Tab
                        key={tab.value}
                        label={tab.label}
                        value={tab.value}
                        disabled={tab.disabled}
                      />
                    </span>
                  </Tooltip>
                ) : (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                )
              )}
            </Tabs>
            {hasCreatePermission(PermissionEntity.WORK_ORDERS) && (
              <Button
                onClick={() => setOpenAddModal(true)}
                startIcon={<AddTwoToneIcon />}
                sx={{ mx: 6, my: 1 }}
                variant="contained"
              >
                {t('work_order')}
              </Button>
            )}
          </Grid>
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
                  rows={workOrders}
                  loading={loadingGet}
                  components={{
                    Toolbar: GridToolbar,
                    NoRowsOverlay: () => (
                      <NoRowsMessageWrapper
                        message={t('noRows.wo.message')}
                        action={t('noRows.wo.action')}
                      />
                    )
                  }}
                  onRowClick={(params) => handleOpenDetails(Number(params.id))}
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
        {renderWorkOrderAddModal()}
        {renderWorkOrderUpdateModal()}
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={handleCloseDetails}
          PaperProps={{
            sx: { width: '50%' }
          }}
        >
          <WorkOrderDetails
            workOrder={currentWorkOrder}
            onEdit={handleOpenUpdate}
            tasks={tasks}
            onDelete={handleOpenDelete}
          />
        </Drawer>
        <ConfirmDialog
          open={openDelete}
          onCancel={() => {
            setOpenDelete(false);
            setOpenDrawer(true);
          }}
          onConfirm={() => handleDelete(currentWorkOrder?.id)}
          confirmText={t('to_delete')}
          question={t('confirm_delete_wo')}
        />
      </>
    );
  else return <PermissionErrorMessage message={'no_access_wo'} />;
}

export default WorkOrders;

import { Helmet } from 'react-helmet-async';
import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Grid,
  styled,
  Tab,
  Tabs,
  Tooltip,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IField } from '../type';
import WorkOrder, { workOrders } from '../../../models/owns/workOrder';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridRenderCellParams,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Form from '../components/form';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import { isNumeric } from '../../../utils/validators';
import User, { users } from '../../../models/owns/user';
import Team, { teams } from '../../../models/owns/team';
import { Vendor, vendors } from '../../../models/owns/vendor';
import { Customer, customers } from '../../../models/owns/customer';
import WorkOrderDetails from './WorkOrderDetails';
import { useParams } from 'react-router-dom';
import { enumerate } from '../../../utils/displayers';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.primary.lighter};
    color: ${theme.colors.primary.main};
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
`
);

function WorkOrders() {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('list');
  const tabs = [
    { value: 'list', label: t('List View') },
    { value: 'map', label: t('Map View') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const { workOrderId } = useParams();
  const [currentWorkOrder, setCurrentWorkOrder] = useState<WorkOrder>();
  const handleDelete = (id: number) => {};
  const handleUpdate = (id: number) => {
    setCurrentWorkOrder(workOrders.find((workOrder) => workOrder.id === id));
    setOpenUpdateModal(true);
  };
  const renderSingleUser = (user: User) => (
    <Tooltip key={user.id} title={`${user.firstName} ${user.lastName}`} arrow>
      <AvatarPrimary
        sx={{
          my: 2,
          mr: 1
        }}
        variant="rounded"
      >
        <Typography variant="h1">
          {Array.from(user.firstName)[0].toUpperCase()}
        </Typography>
      </AvatarPrimary>
    </Tooltip>
  );
  const renderUsers = (users: User[]) => (
    <Box sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
      {users.map((user) => renderSingleUser(user))}
    </Box>
  );
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
    setTitle(t('Work Orders'));
  }, []);

  useEffect(() => {
    if (workOrderId && isNumeric(workOrderId)) {
      handleOpenDetails(Number(workOrderId));
    }
  }, [workOrders]);

  const columns: GridEnrichedColDef[] = [
    {
      field: 'id',
      headerName: t('ID'),
      description: t('ID')
    },
    {
      field: 'status',
      headerName: t('Status'),
      description: t('Status'),
      width: 150
    },
    {
      field: 'title',
      headerName: t('Title'),
      description: t('Title'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },

    {
      field: 'priority',
      headerName: t('Priority'),
      description: t('Priority'),
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
      headerName: t('Assignees'),
      description: t('Assignees'),
      width: 150,
      renderCell: (params: GridRenderCellParams<User[]>) =>
        renderUsers(params.value)
    },
    {
      field: 'location',
      headerName: t('Location name'),
      description: t('Location name'),
      width: 150,
      valueGetter: (params) => params.row.location.name
    },
    {
      field: 'locationAddress',
      headerName: t('Location address'),
      description: t('Location address'),
      width: 150,
      valueGetter: (params) => params.row.location.address
    },
    {
      field: 'category',
      headerName: t('Category'),
      description: t('Category'),
      width: 150
    },
    {
      field: 'asset',
      headerName: t('Asset name'),
      description: t('Asset name'),
      width: 150,
      valueGetter: (params) => params.row.asset.name
    },
    {
      field: 'address',
      headerName: t('Address'),
      description: t('Address'),
      width: 150
    },
    {
      field: 'daysSinceCreated',
      headerName: t('Days since created'),
      description: t('Days since created'),
      width: 150
    },
    {
      field: 'additionalCost',
      headerName: t('Additional Cost'),
      description: t('Additional Cost'),
      width: 150
    },
    {
      field: 'files',
      headerName: t('Files'),
      description: t('Files'),
      width: 150,
      valueGetter: (params) =>
        enumerate(params.row.files.map((file) => file.name))
    },
    {
      field: 'tasks',
      headerName: t('Tasks'),
      description: t('Tasks'),
      width: 150
    },
    {
      field: 'requestedBy',
      headerName: t('Requested By'),
      description: t('Requested By'),
      width: 150,
      valueGetter: (params) => params.row.parentRequest.createdBy
    },
    {
      field: 'laborCost',
      headerName: t('Labor Cost'),
      description: t('Labor Cost'),
      width: 150
    },
    {
      field: 'parts',
      headerName: t('Parts'),
      description: t('Parts'),
      width: 150,
      valueGetter: (params) =>
        enumerate(params.row.parts.map((part) => part.name))
    },
    {
      field: 'completedOn',
      headerName: t('Completed On'),
      description: t('Completed On'),
      width: 150
    },
    {
      field: 'updatedAt',
      headerName: t('Updated At'),
      description: t('Updated At'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Created At'),
      description: t('Created At'),
      width: 150
    }
  ];
  const currentWorkOrderWorkers: User[] = users;
  const currentWorkOrderTeams: Team[] = teams;
  const currentWorkOrderVendors: Vendor[] = vendors;
  const currentWorkOrderCustomers: Customer[] = customers;

  const fields: Array<IField> = [
    {
      name: 'title',
      type: 'text',
      label: t('Title'),
      placeholder: t('Enter workOrder name'),
      required: true
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      placeholder: 'Casa, Maroc',
      required: true
    },
    {
      name: 'workers',
      multiple: true,
      type: 'select',
      type2: 'user',
      label: 'Workers',
      placeholder: 'Select workers'
    },
    {
      name: 'teams',
      multiple: true,
      type: 'select',
      type2: 'team',
      label: 'Teams',
      placeholder: 'Select teams'
    },
    {
      name: 'vendors',
      multiple: true,
      type: 'select',
      type2: 'vendor',
      label: 'Vendors',
      placeholder: 'Select vendors'
    },
    {
      name: 'customers',
      multiple: true,
      type: 'select',
      type2: 'customer',
      label: 'Customers',
      placeholder: 'Select customers'
    }
  ];

  const shape = {
    title: Yup.string().required(t('WorkOrder title is required')),
    address: Yup.string().required(t('WorkOrder address is required'))
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
          {t('Add workOrder')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new workOrder')}
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
            submitText={t('Add')}
            values={{}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                await wait(2000);
                setOpenAddModal(false);
              } catch (err) {
                console.error(err);
              }
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
          {t('Edit workOrder')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to update the workOrder')}
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
              ...currentWorkOrder,
              workers: currentWorkOrderWorkers.map((worker) => {
                return {
                  label: `${worker.firstName} ${worker.lastName}`,
                  value: worker.id.toString()
                };
              }),
              teams: currentWorkOrderTeams.map((team) => {
                return {
                  label: team.name,
                  value: team.id.toString()
                };
              }),
              vendors: currentWorkOrderVendors.map((vendor) => {
                return {
                  label: vendor.name,
                  value: vendor.id.toString()
                };
              }),
              customers: currentWorkOrderCustomers.map((customer) => {
                return {
                  label: customer.name,
                  value: customer.id.toString()
                };
              })
            }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                await wait(2000);
                setOpenUpdateModal(false);
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  return (
    <>
      <Helmet>
        <title>{t('WorkOrders')}</title>
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
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
          <Button
            onClick={() => setOpenAddModal(true)}
            startIcon={<AddTwoToneIcon />}
            sx={{ mx: 6, my: 1 }}
            variant="contained"
          >
            Work Order
          </Button>
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
                components={{
                  Toolbar: GridToolbar
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
          handleUpdate={handleUpdate}
        />
      </Drawer>
    </>
  );
}

export default WorkOrders;

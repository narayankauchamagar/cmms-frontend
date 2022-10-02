import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  Grid,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IField, TableCustomizedColumnType } from '../type';
import TableCustomized from '../components/TableCustomized';
import Location from '../../../models/owns/location';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Form from '../components/form';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import {
  emailRegExp,
  phoneRegExp,
  websiteRegExp
} from '../../../utils/validators';
import User from '../../../models/owns/user';
import Team from '../../../models/owns/team';
import { Vendor } from '../../../models/owns/vendor';
import { Customer } from '../../../models/owns/customer';
import LocationDetails from './LocationDetails';

function Files() {
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
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const [currentLocation, setCurrentLocation] = useState<Location>();
  const handleDelete = (id: number) => {};
  const handleRename = (id: number) => {};
  useEffect(() => {
    setTitle(t('Locations'));
  }, []);

  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Name'),
      description: t('Name'),
      width: 150
    },
    {
      field: 'address',
      headerName: t('Address'),
      description: t('Address'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Created At'),
      description: t('Created At'),
      width: 150
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: t('Actions'),
      description: t('Actions'),
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key="rename"
          icon={<EditTwoToneIcon fontSize="small" color="primary" />}
          onClick={() => handleRename(Number(params.id))}
          label="Rename"
        />,
        <GridActionsCellItem
          key="delete"
          icon={<DeleteTwoToneIcon fontSize="small" color="error" />}
          onClick={() => handleDelete(Number(params.id))}
          label="Delete"
        />
      ]
    }
  ];
  const locations: Location[] = [
    {
      id: 74,
      name: 'ghgvhb',
      address: 'GHJ HIjnjb',
      createdAt: 'dfggj',
      createdBy: 'ghu',
      updatedAt: 'ghfgj',
      updatedBy: 'ghfgj'
    }
  ];
  const workers: User[] = [
    {
      id: 21,
      firstName: 'gfgb',
      lastName: 'fglink'
    }
  ];
  const teams: Team[] = [
    {
      id: 21,
      name: 'team1'
    }
  ];
  const vendors: Vendor[] = [
    {
      id: '1',
      companyName: 'Company Name',
      address: 'casa, maroc',
      phone: '+00212611223344',
      website: 'https://web-site.com',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      vendorType: 'Plumbing',
      description: 'Describe...',
      rate: 15
    },
    {
      id: '2',
      companyName: 'Company Name 2',
      address: 'casa, maroc',
      phone: '+00212611223344',
      website: 'https://web-site.com',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      vendorType: 'Plumbing',
      description: 'Describe...',
      rate: 20
    }
  ];
  const customers: Customer[] = [
    {
      id: '1',
      name: 'Customer 1',
      address: 'casa, maroc',
      phone: '+00212611223344',
      website: 'https://web-site.com',
      email: 'john.doe@gmail.com',
      customerType: 'Plumbing',
      description: 'Describe...',
      rate: 10,
      address1: 'Add 1',
      address2: '-',
      address3: 'Add 3',
      currency: 'MAD, dirham'
    },
    {
      id: '2',
      name: 'Customer 2',
      address: 'casa, maroc',
      phone: '+00212611223344',
      website: 'https://web-site.com',
      email: 'john.doe@gmail.com',
      customerType: 'Electrical',
      description: 'Describe 2...',
      rate: 15,
      address1: 'Add 1',
      address2: '-',
      address3: '-',
      currency: 'Euro'
    }
  ];
  const fields: Array<IField> = [
    {
      name: 'title',
      type: 'text',
      label: t('Title'),
      placeholder: t('Enter location name'),
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
      name: 'worker',
      multiple: true,
      type: 'select',
      label: 'Workers',
      placeholder: 'Select workers',
      items: workers.map((worker) => {
        return {
          label: `${worker.firstName} ${worker.lastName}`,
          value: worker.id.toString()
        };
      })
    },
    {
      name: 'team',
      multiple: true,
      type: 'select',
      label: 'Teams',
      placeholder: 'Select teams',
      items: teams.map((team) => {
        return {
          label: team.name,
          value: team.id.toString()
        };
      })
    },
    {
      name: 'vendor',
      multiple: true,
      type: 'select',
      label: 'Vendors',
      placeholder: 'Select vendors',
      items: vendors.map((vendor) => {
        return {
          label: vendor.name,
          value: vendor.id.toString()
        };
      })
    },
    {
      name: 'customer',
      multiple: true,
      type: 'select',
      label: 'Customers',
      placeholder: 'Select customers',
      items: customers.map((customer) => {
        return {
          label: customer.name,
          value: customer.id.toString()
        };
      })
    }
  ];

  const shape = {
    title: Yup.string().required(t('Location title is required')),
    address: Yup.string().required(t('Location address is required'))
  };

  const renderLocationAddModal = () => (
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
          {t('Add location')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new location')}
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
        <title>{t('Locations')}</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        padding={4}
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
            Location
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
                rows={locations}
                components={{
                  Toolbar: GridToolbar
                }}
                onRowClick={(params) => {
                  setCurrentLocation(
                    locations.find((location) => location.id === params.id)
                  );
                  setOpenDrawer(true);
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
      {renderLocationAddModal()}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <LocationDetails location={currentLocation} />
      </Drawer>
    </>
  );
}

export default Files;

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
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IField } from '../type';
import Location, { locations } from '../../../models/owns/location';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import {
  addLocation,
  getLocations,
  editLocation,
  deleteLocation
} from '../../../slices/location';
import ConfirmDialog from '../components/ConfirmDialog';
import { useDispatch, useSelector } from '../../../store';
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
import LocationDetails from './LocationDetails';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';
import { formatSelect } from '../../../utils/formatters';

function Files() {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('list');
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { locations } = useSelector((state) => state.locations);
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
  const { locationId } = useParams();
  const [currentLocation, setCurrentLocation] = useState<Location>();
  const handleUpdate = (id: number) => {
    setCurrentLocation(locations.find((location) => location.id === id));
    setOpenUpdateModal(true);
  };
  useEffect(() => {
    dispatch(getLocations());
  }, []);

  const onOpenDeleteDialog = (id: number) => {
    setCurrentLocation(locations.find((location) => location.id === id));
    setOpenDelete(true);
  };

  const handleDelete = (id: number) => {
    setOpenDrawer(false);
    dispatch(deleteLocation(id));
    setOpenDelete(false);
  };
  const handleOpenDetails = (id: number) => {
    const foundLocation = locations.find((location) => location.id === id);
    if (foundLocation) {
      setCurrentLocation(foundLocation);
      window.history.replaceState(
        null,
        'Location details',
        `/app/locations/${id}`
      );
      setOpenDrawer(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(null, 'Location', `/app/locations`);
    setOpenDrawer(false);
  };
  useEffect(() => {
    setTitle(t('Locations'));
  }, []);

  useEffect(() => {
    if (locations?.length && locationId && isNumeric(locationId)) {
      handleOpenDetails(Number(locationId));
    }
  }, [locations]);

  const formatValues = (values) => {
    values.customers = formatSelect(values.customers);
    values.vendors = formatSelect(values.vendors);
    values.workers = formatSelect(values.workers);
    delete values.teams;
    values.longitude = values.coordinates?.lng;
    values.latitude = values.coordinates?.lat;
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
          key="edit"
          icon={<EditTwoToneIcon fontSize="small" color="primary" />}
          onClick={() => handleUpdate(Number(params.id))}
          label="Edit"
        />,
        <GridActionsCellItem
          key="delete"
          icon={<DeleteTwoToneIcon fontSize="small" color="error" />}
          onClick={() => {
            onOpenDeleteDialog(Number(params.id));
          }}
          label="Delete"
        />
      ]
    }
  ];
  const currentLocationWorkers: User[] = users;
  const currentLocationTeams: Team[] = teams;

  const fields: Array<IField> = [
    {
      name: 'name',
      type: 'text',
      label: t('Name'),
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
    },
    {
      name: 'mapTitle',
      type: 'titleGroupField',
      label: t('Map Coordinates')
    },
    {
      name: 'coordinates',
      type: 'coordinates',
      label: 'Map Coordinates'
    }
  ];

  const shape = {
    name: Yup.string().required(t('Location title is required')),
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
                const formattedValues = formatValues(values);
                dispatch(addLocation(formattedValues));
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
  const renderLocationUpdateModal = () => (
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
          {t('Edit location')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to update the location')}
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
              ...currentLocation,
              title: currentLocation?.name,
              workers: currentLocation?.workers.map((worker) => {
                return {
                  label: `${worker.firstName} ${worker.lastName}`,
                  value: worker.id.toString()
                };
              }),
              teams: currentLocationTeams.map((team) => {
                return {
                  label: team.name,
                  value: team.id.toString()
                };
              }),
              vendors: currentLocation?.vendors.map((vendor) => {
                return {
                  label: vendor.companyName,
                  value: vendor.id.toString()
                };
              }),
              customers: currentLocation?.customers.map((customer) => {
                return {
                  label: customer.name,
                  value: customer.id.toString()
                };
              }),
              coordinates: currentLocation?.longitude
                ? {
                    lng: currentLocation.longitude,
                    lat: currentLocation.latitude
                  }
                : null
            }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              const formattedValues = formatValues(values);
              try {
                dispatch(editLocation(currentLocation.id, formattedValues));
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
        <title>{t('Locations')}</title>
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
            Location
          </Button>
        </Grid>
        {currentTab === 'list' && (
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
        )}
        {currentTab === 'map' && (
          <Grid item xs={12}>
            <Card
              sx={{
                p: 2,
                justifyContent: 'center'
              }}
            >
              <Map
                dimensions={{ width: 1000, height: 500 }}
                locations={locations
                  .filter((location) => location.longitude)
                  .map(({ name, longitude, latitude, address, id }) => {
                    return {
                      title: name,
                      coordinates: {
                        lng: longitude,
                        lat: latitude
                      },
                      address,
                      id
                    };
                  })}
              />
            </Card>
          </Grid>
        )}
      </Grid>
      {renderLocationAddModal()}
      {renderLocationUpdateModal()}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleCloseDetails}
        PaperProps={{
          sx: { width: '50%' }
        }}
      >
        <LocationDetails
          location={currentLocation}
          handleUpdate={handleUpdate}
          handleDelete={onOpenDeleteDialog}
        />
      </Drawer>
      <ConfirmDialog
        open={openDelete}
        onCancel={() => {
          setOpenDelete(false);
        }}
        onConfirm={() => handleDelete(currentLocation?.id)}
        confirmText={t('Delete')}
        question={t('Are you sure you want to delete this Location?')}
      />
    </>
  );
}

export default Files;

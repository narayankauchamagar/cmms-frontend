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
import Location from '../../../models/owns/location';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import {
  addLocation,
  deleteLocation,
  editLocation,
  getLocationChildren,
  getLocations
} from '../../../slices/location';
import ConfirmDialog from '../components/ConfirmDialog';
import { useDispatch, useSelector } from '../../../store';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridEventListener,
  GridRenderCellParams,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Form from '../components/form';
import * as Yup from 'yup';
import { isNumeric } from '../../../utils/validators';
import { teams } from '../../../models/owns/team';
import { vendors } from '../../../models/owns/vendor';
import LocationDetails from './LocationDetails';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';
import { formatSelect, formatSelectMultiple } from '../../../utils/formatters';
import { CustomSnackBarContext } from 'src/contexts/CustomSnackBarContext';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import { DataGridProProps, useGridApiRef } from '@mui/x-data-grid-pro';
import { GroupingCellWithLazyLoading } from '../Assets/GroupingCellWithLazyLoading';
import { AssetRow } from '../../../models/owns/asset';
import useAuth from '../../../hooks/useAuth';
import { PermissionEntity } from '../../../models/owns/role';
import PermissionErrorMessage from '../components/PermissionErrorMessage';
import NoRowsMessageWrapper from '../components/NoRowsMessageWrapper';

function Locations() {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('list');
  const dispatch = useDispatch();
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { getFormattedDate } = useContext(CompanySettingsContext);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { locationsHierarchy, locations, loadingGet } = useSelector(
    (state) => state.locations
  );
  const apiRef = useGridApiRef();
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
  const {
    hasViewPermission,
    hasEditPermission,
    hasCreatePermission,
    hasDeletePermission
  } = useAuth();
  const [currentLocation, setCurrentLocation] = useState<Location>();
  const handleOpenUpdate = () => {
    setOpenUpdateModal(true);
  };
  const onOpenDeleteDialog = () => {
    setOpenDelete(true);
  };

  const changeCurrentLocation = (id: number) => {
    setCurrentLocation(locations.find((location) => location.id === id));
  };
  const handleDelete = (id: number) => {
    handleCloseDetails();
    dispatch(deleteLocation(id)).then(onDeleteSuccess).catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const onCreationSuccess = () => {
    setOpenAddModal(false);
    showSnackBar(t('The location has been created successfully'), 'success');
  };
  const onCreationFailure = (err) =>
    showSnackBar(t("The location couldn't be created"), 'error');
  const onEditSuccess = () => {
    setOpenUpdateModal(false);
    showSnackBar(t('The changes have been saved'), 'success');
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The location couldn't be edited"), 'error');
  const onDeleteSuccess = () => {
    showSnackBar(t('The location has been deleted successfully'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t("The location couldn't be deleted"), 'error');

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
    if (hasViewPermission(PermissionEntity.LOCATIONS)) {
      dispatch(getLocations());
      dispatch(getLocationChildren(0, []));
    }
  }, []);

  useEffect(() => {
    if (apiRef.current.getRow) {
      const handleRowExpansionChange: GridEventListener<
        'rowExpansionChange'
      > = async (node) => {
        const row = apiRef.current.getRow(node.id) as AssetRow | null;
        if (!node.childrenExpanded || !row || row.childrenFetched) {
          return;
        }
        apiRef.current.updateRows([
          {
            id: `Loading Locations under ${row.name} #${node.id}`,
            hierarchy: [...row.hierarchy, '']
          }
        ]);
        dispatch(getLocationChildren(row.id, row.hierarchy));
      };
      /**
       * By default, the grid does not toggle the expansion of rows with 0 children
       * We need to override the `cellKeyDown` event listener to force the expansion if there are children on the server
       */
      const handleCellKeyDown: GridEventListener<'cellKeyDown'> = (
        params,
        event
      ) => {
        const cellParams = apiRef.current.getCellParams(
          params.id,
          params.field
        );
        if (cellParams.colDef.type === 'treeDataGroup' && event.key === ' ') {
          event.stopPropagation();
          event.preventDefault();
          event.defaultMuiPrevented = true;

          apiRef.current.setRowChildrenExpansion(
            params.id,
            !params.rowNode.childrenExpanded
          );
        }
      };

      apiRef.current.subscribeEvent(
        'rowExpansionChange',
        handleRowExpansionChange
      );
      apiRef.current.subscribeEvent('cellKeyDown', handleCellKeyDown, {
        isFirst: true
      });
    }
  }, [apiRef]);

  useEffect(() => {
    if (locations?.length && locationId && isNumeric(locationId)) {
      handleOpenDetails(Number(locationId));
    }
  }, [locations]);

  const formatValues = (values) => {
    values.customers = formatSelectMultiple(values.customers);
    values.vendors = formatSelectMultiple(values.vendors);
    values.workers = formatSelectMultiple(values.workers);
    values.teams = formatSelectMultiple(values.teams);
    values.parentLocation = formatSelect(values.parentLocation);
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
      width: 150,
      valueGetter: (params) => getFormattedDate(params.row.createdAt)
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: t('Actions'),
      description: t('Actions'),
      getActions: (params: GridRowParams) => {
        let actions = [
          <GridActionsCellItem
            key="edit"
            icon={<EditTwoToneIcon fontSize="small" color="primary" />}
            onClick={() => {
              changeCurrentLocation(Number(params.id));
              handleOpenUpdate();
            }}
            label="Edit"
          />,
          <GridActionsCellItem
            key="delete"
            icon={<DeleteTwoToneIcon fontSize="small" color="error" />}
            onClick={() => {
              changeCurrentLocation(Number(params.id));
              setOpenDelete(true);
            }}
            label="Delete"
          />
        ];
        if (!hasEditPermission(PermissionEntity.LOCATIONS, params.row)) {
          actions.shift();
        }
        if (!hasDeletePermission(PermissionEntity.LOCATIONS, params.row)) {
          actions.pop();
        }
        return actions;
      }
    }
  ];

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
      name: 'parentLocation',
      type: 'select',
      type2: 'parentLocation',
      label: t('Parent Location'),
      placeholder: t('Select Location')
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

  const getEditFields = () => {
    const fieldsClone = [...fields];
    const parentLocationIndex = fieldsClone.findIndex(
      (field) => field.name === 'parentLocation'
    );
    fieldsClone.splice(parentLocationIndex, 1);
    return fieldsClone;
  };
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
              const formattedValues = formatValues(values);
              return dispatch(addLocation(formattedValues))
                .then(onCreationSuccess)
                .then(() => dispatch(getLocationChildren(0, [])))
                .catch(onCreationFailure);
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  const groupingColDef: DataGridProProps['groupingColDef'] = {
    headerName: 'Hierarchy',
    renderCell: (params) => <GroupingCellWithLazyLoading {...params} />
  };

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
            fields={getEditFields()}
            validation={Yup.object().shape(shape)}
            submitText={t('Save')}
            values={{
              ...currentLocation,
              title: currentLocation?.name,
              workers: currentLocation?.workers.map((worker) => {
                return {
                  label: `${worker.firstName} ${worker.lastName}`,
                  value: worker.id
                };
              }),
              teams: currentLocation?.teams.map((team) => {
                return {
                  label: team.name,
                  value: team.id
                };
              }),
              vendors: currentLocation?.vendors.map((vendor) => {
                return {
                  label: vendor.companyName,
                  value: vendor.id
                };
              }),
              customers: currentLocation?.customers.map((customer) => {
                return {
                  label: customer.name,
                  value: customer.id
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
              return dispatch(editLocation(currentLocation.id, formattedValues))
                .then(onEditSuccess)
                .catch(onEditFailure);
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  if (hasViewPermission(PermissionEntity.LOCATIONS))
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
            {hasCreatePermission(PermissionEntity.LOCATIONS) && (
              <Button
                onClick={() => setOpenAddModal(true)}
                startIcon={<AddTwoToneIcon />}
                sx={{ mx: 6, my: 1 }}
                variant="contained"
              >
                Location
              </Button>
            )}
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
                    treeData
                    columns={columns}
                    rows={locationsHierarchy}
                    loading={loadingGet}
                    apiRef={apiRef}
                    getTreeDataPath={(row) =>
                      row.hierarchy.map((id) => id.toString())
                    }
                    groupingColDef={groupingColDef}
                    components={{
                      Toolbar: GridToolbar,
                      NoRowsOverlay: () => (
                        <NoRowsMessageWrapper
                          message={t(
                            'Locations let you manage more efficiently assets and workers'
                          )}
                          action={t(
                            "Press the '+' button to create a Location"
                          )}
                        />
                      )
                    }}
                    onRowClick={(params) =>
                      handleOpenDetails(Number(params.id))
                    }
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
            handleOpenUpdate={handleOpenUpdate}
            handleOpenDelete={onOpenDeleteDialog}
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
  else
    return (
      <PermissionErrorMessage
        message={
          "You don't have access to Locations. Please contact your administrator if you should have access"
        }
      />
    );
}

export default Locations;

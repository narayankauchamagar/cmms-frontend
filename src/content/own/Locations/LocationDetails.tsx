import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import Location from '../../../models/owns/location';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Asset, { assets } from '../../../models/owns/asset';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import { useDispatch, useSelector } from '../../../store';
import { getAssetsByLocation } from '../../../slices/asset';
import { useNavigate } from 'react-router-dom';
import { workOrders } from '../../../models/owns/workOrder';
import { getWorkOrdersByLocation } from '../../../slices/workOrder';
import {
  createFloorPlan,
  deleteFloorPlan,
  getFloorPlans
} from '../../../slices/floorPlan';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import { getAssetUrl } from '../../../utils/urlPaths';

interface LocationDetailsProps {
  location: Location;
  handleOpenUpdate: () => void;
  handleOpenDelete: () => void;
}
export default function LocationDetails(props: LocationDetailsProps) {
  const { location, handleOpenUpdate, handleOpenDelete } = props;
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const { getFormattedDate, uploadFiles } = useContext(CompanySettingsContext);
  const [openAddFloorPlan, setOpenAddFloorPlan] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>('assets');
  const { locations } = useSelector((state) => state.assets);
  const { locations1 } = useSelector((state) => state.workOrders);
  const { locationRoot } = useSelector((state) => state.floorPlans);
  const locationAssets = locations[location.id] ?? [];
  const locationWorkOrders = locations1[location.id] ?? [];
  const floorPlans = locationRoot[location.id] ?? [];
  const theme = useTheme();
  const navigate = useNavigate();
  const tabs = [
    { value: 'assets', label: t('Assets') },
    { value: 'files', label: t('Files') },
    { value: 'workOrders', label: t('Work Orders') },
    { value: 'floorPlans', label: t('Floor Plans') },
    { value: 'people', label: t('People') }
  ];

  const fields: Array<IField> = [
    {
      name: 'name',
      type: 'text',
      label: t('Name'),
      placeholder: t('Floor plan name'),
      required: true
    },
    {
      name: 'area',
      type: 'number',
      label: 'Area',
      placeholder: t('Floor plan area in m²')
    },
    {
      name: 'image',
      type: 'file',
      label: 'File',
      placeholder: t('Upload an image')
    }
  ];
  const floorPlanShape = {
    name: Yup.string().required(t('Floor plan name is required'))
  };

  useEffect(() => {
    dispatch(getAssetsByLocation(location.id));
    dispatch(getWorkOrdersByLocation(location.id));
    dispatch(getFloorPlans(location.id));
  }, [location]);

  const renderAddFloorPlanModal = () => (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={openAddFloorPlan}
      onClose={() => setOpenAddFloorPlan(false)}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add new Floor Plan')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create a new Floor Plan')}
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
            validation={Yup.object().shape(floorPlanShape)}
            submitText={t('Add Floor Plan')}
            values={{}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              return new Promise<void>((resolve, rej) => {
                uploadFiles([], values.image)
                  .then((files) => {
                    values = {
                      ...values,
                      image: files.length ? { id: files[0].id } : null
                    };
                    dispatch(createFloorPlan(location.id, values))
                      .then(() => setOpenAddFloorPlan(false))
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
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      padding={4}
    >
      {renderAddFloorPlanModal()}
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h2">{location?.name}</Typography>
          <Typography variant="h6">{location?.address}</Typography>
        </Box>
        <Box>
          <IconButton onClick={handleOpenUpdate} style={{ marginRight: 10 }}>
            <EditTwoToneIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleOpenDelete}>
            <DeleteTwoToneIcon color="error" />
          </IconButton>
        </Box>
      </Grid>
      <Divider />
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
        {currentTab === 'assets' && (
          <Box>
            <Box display="flex" justifyContent="right">
              <Button startIcon={<AddTwoToneIcon fontSize="small" />}>
                {t('Asset')}
              </Button>
            </Box>
            <List sx={{ width: '100%' }}>
              {locationAssets.map((asset) => (
                <ListItemButton
                  key={asset.id}
                  divider
                  onClick={() => navigate(getAssetUrl(asset.id))}
                >
                  <ListItemText
                    primary={asset.name}
                    secondary={getFormattedDate(asset.createdAt)}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        )}
        {currentTab === 'workOrders' && (
          <Box>
            <Box display="flex" justifyContent="right">
              <Button startIcon={<AddTwoToneIcon fontSize="small" />}>
                {t('Work Order')}
              </Button>
            </Box>
            <List sx={{ width: '100%' }}>
              {locationWorkOrders.map((workOrder) => (
                <ListItemButton
                  key={workOrder.id}
                  divider
                  onClick={() => navigate(`/app/work-orders/${workOrder.id}`)}
                >
                  <ListItemText
                    primary={workOrder.title}
                    secondary={getFormattedDate(workOrder.createdAt)}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        )}
        {currentTab === 'floorPlans' && (
          <Box>
            <Box display="flex" justifyContent="right">
              <Button
                onClick={() => setOpenAddFloorPlan(true)}
                startIcon={<AddTwoToneIcon fontSize="small" />}
              >
                {t('Floor plan')}
              </Button>
            </Box>
            <List sx={{ width: '100%' }}>
              {floorPlans.map((floorPlan) => (
                <ListItemButton key={floorPlan.id} divider>
                  <ListItem
                    secondaryAction={
                      <IconButton
                        sx={{ ml: 1 }}
                        onClick={() =>
                          dispatch(deleteFloorPlan(location.id, floorPlan.id))
                        }
                      >
                        <DeleteTwoToneIcon fontSize="small" color="error" />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={floorPlan.name}
                      secondary={`${floorPlan.area} m²`}
                    />
                  </ListItem>
                </ListItemButton>
              ))}
            </List>
          </Box>
        )}
        {currentTab === 'people' && (
          <Grid container>
            {!!location.workers.length && (
              <Grid item xs={12} lg={6}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.colors.alpha.black[70] }}
                >
                  {t('Assigned Workers')}
                </Typography>
                {location.workers.map((worker, index) => (
                  <Box key={worker.id}>
                    <Link
                      href={`/app/people-teams/${worker.id}`}
                      variant="h6"
                      fontWeight="bold"
                    >
                      {`${worker.firstName} ${worker.lastName}`}
                    </Link>
                  </Box>
                ))}
              </Grid>
            )}
            {!!location.teams.length && (
              <Grid item xs={12} lg={6}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.colors.alpha.black[70] }}
                >
                  {t('Assigned Teams')}
                </Typography>
                {location.teams.map((team, index) => (
                  <Box key={team.id}>
                    <Link
                      href={`/app/people-teams/teams/${team.id}`}
                      variant="h6"
                      fontWeight="bold"
                    >
                      {team.name}
                    </Link>
                  </Box>
                ))}
              </Grid>
            )}
            {!!location.customers.length && (
              <Grid item xs={12} lg={6}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.colors.alpha.black[70] }}
                >
                  {t('Assigned Customers')}
                </Typography>
                {location.customers.map((customer, index) => (
                  <Box key={customer.id}>
                    <Link
                      href={`/app/vendors-customers/customers/${customer.id}`}
                      variant="h6"
                      fontWeight="bold"
                    >
                      {customer.name}
                    </Link>
                  </Box>
                ))}
              </Grid>
            )}
            {!!location.vendors.length && (
              <Grid item xs={12} lg={6}>
                <Typography
                  variant="h6"
                  sx={{ color: theme.colors.alpha.black[70] }}
                >
                  {t('Assigned Vendors')}
                </Typography>
                {location.vendors.map((vendor, index) => (
                  <Box key={vendor.id}>
                    <Link
                      href={`/app/vendors-customers/vendors/${vendor.id}`}
                      variant="h6"
                      fontWeight="bold"
                    >
                      {vendor.companyName}
                    </Link>
                  </Box>
                ))}
              </Grid>
            )}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

import {
  Box,
  Button,
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
import { ChangeEvent, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Asset, { assets } from '../../../models/owns/asset';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Part from '../../../models/owns/part';
import { files } from 'src/models/owns/file';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';

interface PartDetailsProps {
  part: Part;
  handleOpenUpdate: () => void;
  handleOpenDelete: () => void;
}
export default function PartDetails(props: PartDetailsProps) {
  const { part, handleOpenUpdate, handleOpenDelete } = props;
  const { t }: { t: any } = useTranslation();
  const { getFormattedDate } = useContext(CompanySettingsContext);
  const [currentTab, setCurrentTab] = useState<string>('details');
  const theme = useTheme();
  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'assets', label: t('Assets') },
    { value: 'files', label: t('Files') },
    { value: 'workOrders', label: t('Work Orders') }
    //TODO events
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const BasicField = ({
    label,
    value
  }: {
    label: string | number;
    value: string | number;
  }) => {
    return value ? (
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
          {label}
        </Typography>
        <Typography variant="h6">{value}</Typography>
      </Grid>
    ) : null;
  };
  const firstFieldsToRender = (part: Part): { label: string; value: any }[] => [
    {
      label: t('Name'),
      value: part.name
    },
    {
      label: t('ID'),
      value: part.id
    },
    {
      label: t('Description'),
      value: part.description
    },
    {
      label: t('Cost'),
      value: part.cost
    },
    {
      label: t('Quantity'),
      value: part.quantity
    },
    {
      label: t('Minimum quantity'),
      value: part.minQuantity
    },
    {
      label: t('Barcode'),
      value: part.barcode
    }
  ];
  const areaFieldsToRender = (part: Part): { label: string; value: any }[] => [
    {
      label: t('Area'),
      value: part.area
    }
  ];

  return (
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
      >
        <Box>
          <Typography variant="h2">{part?.name}</Typography>
          <Typography variant="h6">{part?.description}</Typography>
        </Box>
        <Box>
          <IconButton onClick={handleOpenUpdate} style={{ marginRight: 10 }}>
            <EditTwoToneIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleOpenDelete}>
            <DeleteTwoToneIcon style={{ cursor: 'pointer' }} color="error" />
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
        {currentTab === 'details' && (
          <Box>
            <Typography sx={{ mb: 1 }} variant="h4">
              Part details
            </Typography>
            <Grid container spacing={2}>
              {firstFieldsToRender(part).map((field) => (
                <BasicField
                  key={field.label}
                  label={field.label}
                  value={field.value}
                />
              ))}
            </Grid>
            <Typography sx={{ mt: 2, mb: 1 }} variant="h4">
              Area details
            </Typography>
            <Grid container spacing={2}>
              {areaFieldsToRender(part).map((field) => (
                <BasicField
                  key={field.label}
                  label={field.label}
                  value={field.value}
                />
              ))}
            </Grid>
            <Typography sx={{ mt: 2, mb: 1 }} variant="h4">
              Assigned people
            </Typography>
            <Grid container spacing={2}>
              {!!part.assignedTo.length && (
                <Grid item xs={12} lg={6}>
                  <Typography
                    variant="h6"
                    sx={{ color: theme.colors.alpha.black[70] }}
                  >
                    Assigned users
                  </Typography>
                  {part.assignedTo.map((user) => (
                    <Link
                      key={user.id}
                      href={`/app/people-teams/${user.id}`}
                      variant="h6"
                    >{`${user.firstName} ${user.lastName}`}</Link>
                  ))}
                </Grid>
              )}
              {!!part.customers.length && (
                <Grid item xs={12} lg={6}>
                  <Typography
                    variant="h6"
                    sx={{ color: theme.colors.alpha.black[70] }}
                  >
                    Assigned customers
                  </Typography>
                  {part.customers.map((customer) => (
                    <Link
                      key={customer.id}
                      href={`/app/vendors-customers/customers/${customer.id}`}
                      variant="h6"
                    >
                      {customer.name}
                    </Link>
                  ))}
                </Grid>
              )}
              {!!part.vendors.length && (
                <Grid item xs={12} lg={6}>
                  <Typography
                    variant="h6"
                    sx={{ color: theme.colors.alpha.black[70] }}
                  >
                    Assigned vendors
                  </Typography>
                  {part.vendors.map((vendor) => (
                    <Link
                      key={vendor.id}
                      href={`/app/vendors-customers/vendors/${vendor.id}`}
                      variant="h6"
                    >
                      {vendor.companyName}
                    </Link>
                  ))}
                </Grid>
              )}
              {!!part.teams.length && (
                <Grid item xs={12} lg={6}>
                  <Typography
                    variant="h6"
                    sx={{ color: theme.colors.alpha.black[70] }}
                  >
                    Assigned teams
                  </Typography>
                  {part.teams.map((team) => (
                    <Link
                      key={team.id}
                      href={`/app/people-teams/teams/${team.id}`}
                      variant="h6"
                    >
                      {team.name}
                    </Link>
                  ))}
                </Grid>
              )}
            </Grid>
          </Box>
        )}
        {currentTab === 'assets' && (
          <Box>
            <Box display="flex" justifyContent="right">
              <Button startIcon={<AddTwoToneIcon fontSize="small" />}>
                {t('Asset')}
              </Button>
            </Box>
            <List sx={{ width: '100%' }}>
              {assets.map((asset) => (
                <ListItemButton key={asset.id} divider>
                  <ListItem
                    secondaryAction={
                      <Typography>
                        {getFormattedDate(asset.createdAt)}
                      </Typography>
                    }
                  >
                    <ListItemText
                      primary={asset.name}
                      secondary={asset.description}
                    />
                  </ListItem>
                </ListItemButton>
              ))}
            </List>
          </Box>
        )}
        {currentTab === 'files' && (
          <Box>
            <Box display="flex" justifyContent="right">
              <Button startIcon={<AddTwoToneIcon fontSize="small" />}>
                {t('File')}
              </Button>
            </Box>
            <List sx={{ width: '100%' }}>
              {files.map((file) => (
                <ListItemButton key={file.id} divider>
                  <ListItem
                    secondaryAction={
                      <Typography>
                        {getFormattedDate(file.createdAt)}
                      </Typography>
                    }
                  >
                    <ListItemText
                      primary={file.name}
                      secondary={`#${file.id}`}
                    />
                  </ListItem>
                </ListItemButton>
              ))}
            </List>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

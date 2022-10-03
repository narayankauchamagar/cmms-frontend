import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import Location from '../../../models/owns/location';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Asset from '../../../models/owns/asset';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

interface LocationDetailsProps {
  location: Location;
}
export default function LocationDetails(props: LocationDetailsProps) {
  const { location } = props;
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('assets');
  const tabs = [
    { value: 'assets', label: t('Assets') },
    { value: 'files', label: t('Files') },
    { value: 'workorders', label: t('Work Orders') },
    { value: 'parts', label: t('Parts') },
    { value: 'floorplans', label: t('Floor Plans') }
  ];
  const assets: Asset[] = [
    {
      id: 212,
      name: 'cgvg',
      createdAt: 'dfggj',
      createdBy: 'ghu',
      updatedAt: 'ghfgj',
      updatedBy: 'ghfgj'
    },
    {
      id: 44,
      name: 'fcgvc',
      createdAt: 'dfggj',
      createdBy: 'ghu',
      updatedAt: 'ghfgj',
      updatedBy: 'ghfgj'
    }
  ];

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
          <EditTwoToneIcon
            style={{ cursor: 'pointer', marginRight: 10 }}
            color="primary"
          />
          <DeleteTwoToneIcon style={{ cursor: 'pointer' }} color="error" />
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
              {assets.map((asset) => (
                <ListItemButton key={asset.id} divider>
                  <ListItemText
                    primary={asset.name}
                    secondary={asset.createdAt}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

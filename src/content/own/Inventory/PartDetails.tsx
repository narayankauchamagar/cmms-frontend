import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import Location from '../../../models/owns/location';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Asset, { assets } from '../../../models/owns/asset';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Part, { parts } from '../../../models/owns/part';
import FloorPlan from '../../../models/owns/floorPlan';
import Form from '../components/form';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import { IField } from '../type';
import SetType from '../../../models/owns/setType';

interface PartDetailsProps {
  part: Part;
  handleUpdate: (id: number) => void;
}
export default function PartDetails(props: PartDetailsProps) {
  const { part, handleUpdate } = props;
  const { t }: { t: any } = useTranslation();
  const [openAddFloorPlan, setOpenAddFloorPlan] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>('details');
  const theme = useTheme();
  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'assets', label: t('Assets') },
    { value: 'files', label: t('Files') },
    { value: 'workOrders', label: t('Work Orders') }
    //TODO events
  ];

  const floorPlans: FloorPlan[] = [
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
      placeholder: 'Floor plan area'
    },
    {
      name: 'image',
      type: 'file',
      label: 'File',
      placeholder: 'Upload a file or image'
    }
  ];
  const floorPlanShape = {
    name: Yup.string().required(t('Floor plan name is required'))
  };
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
              try {
                await wait(2000);
                setOpenAddFloorPlan(false);
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const renderField = (label, value) => {
    return (
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
          {label}
        </Typography>
        <Typography variant="h6">{value}</Typography>
      </Grid>
    );
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
      value: part.barCode
    }
  ];
  const areaFieldsToRender = (part: Part): { label: string; value: any }[] => [
    {
      label: t('Area'),
      value: part.area
    },
    {
      label: t('Assigned Location'),
      value: part.location
    }
  ];
  const assignedFieldsToRender = (
    part: Part
  ): { label: string; value: any }[] => [
    {
      label: t('Assigned Users'),
      value: part.users
    },
    {
      label: t('Assigned Vendors'),
      value: part.vendors
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
      {renderAddFloorPlanModal()}
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h2">{part?.name}</Typography>
          <Typography variant="h6">{part?.location}</Typography>
        </Box>
        <Box>
          <EditTwoToneIcon
            onClick={() => handleUpdate(part.id)}
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
        {currentTab === 'details' && (
          <Box>
            <Typography sx={{ mb: 1 }} variant="h4">
              Part details
            </Typography>
            <Grid container spacing={2}>
              {firstFieldsToRender(part).map((field) =>
                renderField(field.label, field.value)
              )}
            </Grid>
            <Typography sx={{ mt: 2, mb: 1 }} variant="h4">
              Area details
            </Typography>
            <Grid container spacing={2}>
              {areaFieldsToRender(part).map((field) =>
                renderField(field.label, field.value)
              )}
            </Grid>
            <Typography sx={{ mt: 2, mb: 1 }} variant="h4">
              Assigned people
            </Typography>
            <Grid container spacing={2}>
              {assignedFieldsToRender(part).map((field) =>
                renderField(field.label, field.value)
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

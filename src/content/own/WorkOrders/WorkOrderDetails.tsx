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
  Typography
} from '@mui/material';
import WorkOrder from '../../../models/owns/workOrder';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Asset, { assets } from '../../../models/owns/asset';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { parts } from '../../../models/owns/part';
import FloorPlan from '../../../models/owns/floorPlan';
import Form from '../components/form';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import { IField } from '../type';

interface WorkOrderDetailsProps {
  workOrder: WorkOrder;
  handleUpdate: (id: number) => void;
}
export default function WorkOrderDetails(props: WorkOrderDetailsProps) {
  const { workOrder, handleUpdate } = props;
  const { t }: { t: any } = useTranslation();
  const [openAddFloorPlan, setOpenAddFloorPlan] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>('assets');
  const tabs = [
    { value: 'assets', label: t('Assets') },
    { value: 'files', label: t('Files') },
    { value: 'workOrders', label: t('Work Orders') },
    { value: 'parts', label: t('Parts') },
    { value: 'floorPlans', label: t('Floor Plans') }
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
          <Typography variant="h2">{workOrder?.title}</Typography>
          <Typography variant="h6">{workOrder?.address}</Typography>
        </Box>
        <Box>
          <EditTwoToneIcon
            onClick={() => handleUpdate(workOrder.id)}
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
        {currentTab === 'parts' && (
          <Box>
            <Box display="flex" justifyContent="right">
              <Button startIcon={<AddTwoToneIcon fontSize="small" />}>
                {t('Parts')}
              </Button>
            </Box>
            <List sx={{ width: '100%' }}>
              {parts.map((part) => (
                <ListItemButton key={part.id} divider>
                  <ListItemText
                    primary={part.name}
                    secondary={part.createdAt}
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
                  <ListItemText
                    primary={floorPlan.name}
                    secondary={floorPlan.createdAt}
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

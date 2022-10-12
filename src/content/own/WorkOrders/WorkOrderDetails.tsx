import {
  Box,
  Divider,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import WorkOrder from '../../../models/owns/workOrder';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Asset from '../../../models/owns/asset';

interface WorkOrderDetailsProps {
  workOrder: WorkOrder;
  handleUpdate: (id: number) => void;
}
export default function WorkOrderDetails(props: WorkOrderDetailsProps) {
  const { workOrder, handleUpdate } = props;
  const theme = useTheme();
  const { t }: { t: any } = useTranslation();
  const [openAddFloorPlan, setOpenAddFloorPlan] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>('details');
  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'updates', label: t('Updates') }
  ];

  const getPath = (resource, id) => {
    switch (resource) {
      case 'asset':
        return `/app/assets/${id}/work-orders`;
      default:
        return `/app/${resource}s/${id}`;
    }
  };
  const renderField = (label, value, type?, id?) => {
    return (
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
          {label}
        </Typography>
        {type ? (
          <Link href={getPath(type, id)} variant="h6" fontWeight="bold">
            {value}
          </Link>
        ) : (
          <Typography variant="h6">{value}</Typography>
        )}
      </Grid>
    );
  };
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const detailsFieldsToRender = (
    workOrder: WorkOrder
  ): {
    label: string;
    value: any;
    type?: 'location' | 'asset';
    id?: number;
  }[] => [
    {
      label: t('ID'),
      value: workOrder.id
    },
    {
      label: t('Due Date'),
      value: workOrder.dueDate
    },
    {
      label: t('Category'),
      value: workOrder.category
    },
    {
      label: t('Location'),
      value: workOrder.location.name,
      type: 'location',
      id: workOrder.location.id
    },
    {
      label: t('Asset'),
      value: workOrder.asset.name,
      type: 'asset',
      id: workOrder.asset.id
    },
    {
      label: t('Date created'),
      value: workOrder.createdAt
    },
    {
      label: t('Created By'),
      value: workOrder.createdBy
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
        {currentTab === 'details' && (
          <Grid container spacing={2}>
            {detailsFieldsToRender(workOrder).map((field) =>
              renderField(field.label, field.value, field.type, field.id)
            )}
            <Grid item xs={12} lg={6}>
              <Typography
                variant="h6"
                sx={{ color: theme.colors.alpha.black[70] }}
              >
                Assigned To
              </Typography>
              {workOrder.assignedTo.map((user, index) => (
                <Box
                  key={user.id}
                  sx={{ display: 'flex', flexDirection: 'row' }}
                >
                  <Link
                    href={`/app/people-teams/users/${user.id}`}
                    variant="h6"
                    fontWeight="bold"
                  >{`${user.firstName} ${user.lastName}`}</Link>
                  {index == 0 ? '' : ','}
                </Box>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

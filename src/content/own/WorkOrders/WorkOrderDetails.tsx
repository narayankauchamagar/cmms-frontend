import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
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
import { labors } from '../../../models/owns/labor';
import AddTimeModal from './AddTimeModal';

interface WorkOrderDetailsProps {
  workOrder: WorkOrder;
  handleUpdate: (id: number) => void;
}
export default function WorkOrderDetails(props: WorkOrderDetailsProps) {
  const { workOrder, handleUpdate } = props;
  const theme = useTheme();
  const { t }: { t: any } = useTranslation();
  const [openAddTimeModal, setOpenAddTimeModal] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>('details');
  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'updates', label: t('Updates') }
  ];

  const getPath = (resource, id) => {
    switch (resource) {
      case 'asset':
        return `/app/assets/${id}/work-orders`;
      case 'team':
        return `/app/people-teams/teams/${id}`;
      default:
        return `/app/${resource}s/${id}`;
    }
  };
  const renderField = (label, value, type?, id?) => {
    if (!type || (type && id))
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
    value: string | number;
    type?: 'location' | 'asset' | 'team';
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
      value: workOrder.category.name
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
      label: t('Team'),
      value: workOrder.team.name,
      type: 'team',
      id: workOrder.team.id
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
          {/*//TODO format*/}
          <Typography variant="h6">{workOrder?.priority} Priority</Typography>
          <Typography variant="h2">{workOrder?.title}</Typography>
          <Typography variant="h6">{workOrder?.description}</Typography>
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
          <Box>
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
                  <Box key={user.id}>
                    <Link
                      href={`/app/people-teams/users/${user.id}`}
                      variant="h6"
                      fontWeight="bold"
                    >{`${user.firstName} ${user.lastName}`}</Link>
                  </Box>
                ))}
              </Grid>
            </Grid>
            <Divider sx={{ mt: 2 }} />
            <Typography sx={{ mt: 2, mb: 1 }} variant="h3">
              Files
            </Typography>
            <List>
              {workOrder.files.map((file) => (
                <ListItem
                  key={file.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteTwoToneIcon color="error" />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={
                      <Link href={file.url} variant="h6">
                        {file.name}
                      </Link>
                    }
                    secondary={file.createdAt}
                  />
                </ListItem>
              ))}
            </List>
            <Box>
              <Divider sx={{ mt: 2 }} />
              <Typography sx={{ mt: 2, mb: 1 }} variant="h3">
                Labors
              </Typography>
              {!labors.length ? (
                <Typography sx={{ color: theme.colors.alpha.black[70] }}>
                  {t(
                    "No labor costs have been added yet. They'll show up here when a user logs time and has an hourly rate stored in Grash."
                  )}
                </Typography>
              ) : (
                <List>
                  {labors.map((labor) => (
                    <ListItem
                      key={labor.id}
                      secondaryAction={
                        <Typography variant="h6">
                          {labor.laborCost.cost} $
                        </Typography>
                      }
                    >
                      <ListItemText
                        primary={
                          <Link
                            href={`/app/people-teams/users/${labor.user.id}`}
                            variant="h6"
                          >
                            {`${labor.user.firstName} ${labor.user.lastName}`}
                          </Link>
                        }
                        secondary={labor.createdAt}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
              <Button
                onClick={() => setOpenAddTimeModal(true)}
                variant="outlined"
                sx={{ mt: 1 }}
              >
                Add Time
              </Button>
            </Box>
          </Box>
        )}
      </Grid>
      <AddTimeModal
        open={openAddTimeModal}
        onClose={() => setOpenAddTimeModal(false)}
      />
    </Grid>
  );
}

import { Fragment, ChangeEvent, useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import type { DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'src/store';
import { getBoard, moveTask } from 'src/slices/projects_board';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import PageHeader from './PageHeader';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import Results from './Results';
import Label from 'src/components/Label';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import {
  styled,
  Tabs,
  Tooltip,
  Tab,
  CardActionArea,
  CardContent,
  Grid,
  Avatar,
  Box,
  Autocomplete,
  TextField,
  Chip,
  Divider,
  Typography,
  Card,
  LinearProgress,
  Zoom
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const TasksWrapper = styled(Box)(
  ({ theme }) => `
      display: flex;
      overflow-y: hidden;
      overflow-x: auto;
      flex-direction: row;
      padding: ${theme.spacing(2)};
  `
);

const TasksWrapperContent = styled(Box)(
  ({ theme }) => `
      margin: 0 -${theme.spacing(2)};
  `
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100px;
        flex: 1;
        min-width: 120px;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const FilterOptions = styled(Card)(
  ({ theme }) => `
      padding: ${theme.spacing(2)};
      border: 1px solid ${theme.colors.alpha.black[10]};
  `
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
      flex-grow: 1;
      height: 6px;
      background-color: ${theme.colors.alpha.black[10]};

      .MuiLinearProgress-barColorPrimary {
        background-color: ${theme.colors.primary.main};
        border-top-right-radius: ${theme.general.borderRadius};
        border-bottom-right-radius: ${theme.general.borderRadius};
      }
`
);

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      padding: 0 ${theme.spacing(2)};
      position: relative;
      bottom: -1px;

      .MuiTabs-root {
        height: 44px;
        min-height: 44px;
      }

      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          min-height: 4px;
          height: 4px;
          box-shadow: none;
          bottom: -4px;
          background: none;
          border: 0;

          &:after {
            position: absolute;
            left: 50%;
            width: 28px;
            content: ' ';
            margin-left: -14px;
            background: ${theme.colors.primary.main};
            border-radius: inherit;
            height: 100%;
          }
      }

      .MuiTab-root {
          &.MuiButtonBase-root {
              height: 44px;
              min-height: 44px;
              background: ${theme.colors.alpha.white[50]};
              border: 1px solid ${theme.colors.alpha.black[10]};
              border-bottom: 0;
              position: relative;
              margin-right: ${theme.spacing(1)};
              font-size: ${theme.typography.pxToRem(13)};
              color: ${theme.colors.alpha.black[80]};
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;

              .MuiTouchRipple-root {
                opacity: .1;
              }

              &:after {
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                bottom: 0;
                height: 1px;
                content: '';
                background: ${theme.colors.alpha.black[10]};
              }

              &:hover {
                color: ${theme.colors.alpha.black[100]};
              }
          }

          &.Mui-selected {
              color: ${theme.colors.alpha.black[100]};
              background: ${theme.colors.alpha.white[100]};
              border-bottom-color: ${theme.colors.alpha.white[100]};

              &:after {
                height: 0;
              }
          }
      }
  `
);

function ApplicationsProjectsBoard() {
  const { t }: { t: any } = useTranslation();

  const [currentTab, setCurrentTab] = useState<string>('development_meeting');

  const tabs = [
    { value: 'react_migration', label: t('React Project Migration') },
    { value: 'development_meeting', label: t('Development Meeting') },
    { value: 'marketing_campaign', label: t('Marketing Campaign') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.projectsBoard);
  const { enqueueSnackbar } = useSnackbar();

  const handleDragEnd = async ({
    source,
    destination,
    draggableId
  }: DropResult): Promise<void> => {
    try {
      if (!destination) {
        return;
      }

      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      ) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        await dispatch(moveTask(draggableId, destination.index));
      } else {
        await dispatch(
          moveTask(draggableId, destination.index, destination.droppableId)
        );
      }

      enqueueSnackbar(t('Task has been successfully moved'), {
        variant: 'info',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
      });
    } catch (err) {
      console.error(err);
      enqueueSnackbar(t('There was an error, try again later'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
      });
    }
  };

  useEffect(() => {
    dispatch(getBoard());
  }, [dispatch]);

  const assignees = [
    {
      avatar: '/static/images/avatars/1.jpg',
      name: 'Maren Lipshutz'
    },
    {
      avatar: '/static/images/avatars/2.jpg',
      name: 'Zain Vetrovs'
    },
    {
      avatar: '/static/images/avatars/3.jpg',
      name: 'Hanna Siphron'
    },
    {
      avatar: '/static/images/avatars/4.jpg',
      name: 'Cristofer Aminoff'
    },
    {
      avatar: '/static/images/avatars/5.jpg',
      name: 'Maria Calzoni'
    }
  ];

  const sprints = [
    {
      progress: 58,
      name: 'Sprint 1'
    },
    {
      progress: 43,
      name: 'Sprint 2'
    },
    {
      progress: 65,
      name: 'Sprint 3'
    },
    {
      progress: 84,
      name: 'Sprint 4'
    },
    {
      progress: 43,
      name: 'Sprint 5'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Projects Board - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <TabsContainerWrapper>
            <Tabs
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
              <Tab
                href="#"
                label={
                  <Tooltip placement="top" arrow title={t('Add new project')}>
                    <AddTwoToneIcon />
                  </Tooltip>
                }
                disabled
              />
            </Tabs>
          </TabsContainerWrapper>
          <FilterOptions>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={4}
            >
              <Grid item xs={12} md={6}>
                <Autocomplete
                  multiple
                  fullWidth
                  limitTags={2}
                  // @ts-ignore
                  getOptionLabel={(option) => option.title}
                  options={assignees}
                  renderOption={(props, option) => (
                    <li {...props}>
                      <Avatar
                        sx={{
                          mr: 1
                        }}
                        src={option.avatar}
                      />
                      {option.name}
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true
                      }}
                      label={t('Assigned')}
                      placeholder={t('Select assignees...')}
                    />
                  )}
                  renderTags={(assignees, getTagProps) =>
                    assignees.map((ev, index: number) => (
                      <Chip
                        key={ev.name}
                        label={ev.name}
                        {...getTagProps({ index })}
                        avatar={<Avatar src={ev.avatar} />}
                      />
                    ))
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  limitTags={2}
                  fullWidth
                  autoHighlight
                  // @ts-ignore
                  getOptionLabel={(option) => option.title}
                  options={sprints}
                  renderOption={(props, option) => (
                    <Fragment key={option.name}>
                      <li {...props}>
                        <Box flex={1} py={1}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            pb={1}
                          >
                            <Typography variant="h5">{option.name}</Typography>
                            <Label color="success">{option.progress}%</Label>
                          </Box>

                          <LinearProgressWrapper
                            value={option.progress}
                            color="primary"
                            variant="determinate"
                          />
                        </Box>
                      </li>
                      <Divider />
                    </Fragment>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true
                      }}
                      label={t('Sprint')}
                      placeholder={t('Select sprint...')}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </FilterOptions>
        </Grid>
        <Grid item xs={12}>
          <TasksWrapperContent>
            <DragDropContext onDragEnd={handleDragEnd}>
              <TasksWrapper>
                {lists.allIds.map((listId: string) => (
                  <Results key={listId} listId={listId} />
                ))}

                <Tooltip arrow title={t('Add a new project panel')}>
                  <CardAddAction>
                    <CardActionArea
                      sx={{
                        px: 1
                      }}
                    >
                      <CardContent>
                        <AvatarAddWrapper>
                          <AddTwoToneIcon fontSize="large" />
                        </AvatarAddWrapper>
                      </CardContent>
                    </CardActionArea>
                  </CardAddAction>
                </Tooltip>
              </TasksWrapper>
            </DragDropContext>
          </TasksWrapperContent>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ApplicationsProjectsBoard;

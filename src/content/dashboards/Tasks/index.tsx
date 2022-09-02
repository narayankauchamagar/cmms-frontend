import { ChangeEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import {
  Grid,
  Tab,
  Tabs,
  Typography,
  Divider,
  Card,
  Box,
  Button,
  useTheme,
  Avatar,
  styled
} from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import TeamOverview from './TeamOverview';
import TasksAnalytics from './TasksAnalytics';
import Performance from './Performance';
import Projects from './Projects';
import Checklist from './Checklist';
import Profile from './Profile';
import TaskSearch from './TaskSearch';
import { useTranslation } from 'react-i18next';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      padding: 0 ${theme.spacing(8)};
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
              font-size: ${theme.typography.pxToRem(14)};
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

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(10)};
      height: ${theme.spacing(10)};
      margin: 0 auto ${theme.spacing(2)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(42)};
      }
`
);

function DashboardTasks() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState<string>('analytics');

  const tabs = [
    { value: 'analytics', label: t('Analytics Overview') },
    { value: 'taskSearch', label: t('Task Search') },
    { value: 'projectsBoard', label: t('Projects Board') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Helmet>
        <title>Tasks Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <TabsContainerWrapper>
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
      </TabsContainerWrapper>
      <Card
        variant="outlined"
        sx={{
          mx: 4
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={0}
        >
          {currentTab === 'analytics' && (
            <>
              <Grid item xs={12}>
                <Box p={4}>
                  <TeamOverview />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider />
                <Box
                  p={4}
                  sx={{
                    background: `${theme.colors.alpha.black[5]}`
                  }}
                >
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={8}>
                      <TasksAnalytics />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Performance />
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box p={4}>
                  <Projects />
                </Box>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    background: `${theme.colors.alpha.black[5]}`
                  }}
                >
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                      <Box
                        p={4}
                        sx={{
                          background: `${theme.colors.alpha.white[70]}`
                        }}
                      >
                        <Checklist />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box p={4}>
                        <Profile />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </>
          )}
          {currentTab === 'taskSearch' && (
            <Grid item xs={12}>
              <Box p={4}>
                <TaskSearch />
              </Box>
            </Grid>
          )}
          {currentTab === 'projectsBoard' && (
            <Grid item xs={12}>
              <Box
                sx={{
                  py: { xs: 3, md: 8, lg: 12 },
                  textAlign: 'center'
                }}
              >
                <AvatarPrimary>
                  <NotificationsActiveTwoToneIcon />
                </AvatarPrimary>
                <Typography variant="h2">{t('No boards available')}</Typography>
                <Typography
                  variant="h4"
                  sx={{
                    pt: 1,
                    pb: 3
                  }}
                  fontWeight="normal"
                  color="text.secondary"
                >
                  {t(
                    'Browse the projects board application or create a new one right here'
                  )}
                  !
                </Typography>
                <Button
                  color="primary"
                  variant="outlined"
                  sx={{
                    borderWidth: '2px',
                    '&:hover': {
                      borderWidth: '2px'
                    }
                  }}
                >
                  {t('Create project board')}
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </Card>
      <Footer />
    </>
  );
}

export default DashboardTasks;

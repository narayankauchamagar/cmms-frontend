import { useState } from 'react';
import { Avatar, Box, Button, Divider, Grid, styled, Typography, useTheme } from '@mui/material';

import TeamOverview from './TeamOverview';
import TasksAnalytics from './TasksAnalytics';
import Performance from './Performance';
import Projects from './Projects';
import Checklist from './Checklist';
import Profile from './Profile';
import TaskSearch from './TaskSearch';
import { useTranslation } from 'react-i18next';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import SettingsLayout from './SettingsLayout';


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
  return (
    <SettingsLayout>
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
    </SettingsLayout>
  );
}

export default DashboardTasks;

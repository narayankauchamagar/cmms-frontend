import { ChangeEvent, useState } from 'react';
import {
  Button,
  Typography,
  Card,
  Box,
  CardContent,
  CardHeader,
  Link,
  Divider,
  Tabs,
  Tab,
  Chip,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  useTheme,
  Pagination,
  CardActions,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import Text from 'src/components/Text';
import PendingTwoToneIcon from '@mui/icons-material/PendingTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import InsertInvitationTwoToneIcon from '@mui/icons-material/InsertInvitationTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';

const TabsContainerWrapper = styled(CardContent)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
`
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color: ${theme.colors.success.main};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      margin-right: ${theme.spacing(1)};
`
);

const AvatarPending = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color: ${theme.colors.warning.main};
      width: ${theme.spacing(10)};
      height: ${theme.spacing(10)};
      margin: 0 auto ${theme.spacing(2)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(42)};
      }
`
);

const AvatarEvents = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.info.lighter};
      color: ${theme.colors.info.main};
      width: ${theme.spacing(10)};
      height: ${theme.spacing(10)};
      margin: 0 auto ${theme.spacing(2)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(42)};
      }
`
);

const AvatarInfo = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.info.lighter};
      color: ${theme.colors.info.main};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      margin-right: ${theme.spacing(1)};
`
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
      color: ${theme.colors.alpha.black[70]};
      
      &:hover {
        color: ${theme.colors.alpha.black[100]};
      }
`
);

function RecentCourses() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    enqueueSnackbar(t('You clicked on delete!'), {
      variant: 'error'
    });
  };

  const handleClick = () => {
    enqueueSnackbar(t('You clicked on the chip!'), {
      variant: 'success'
    });
  };

  const [currentTab, setCurrentTab] = useState<string>('all');

  const tabs = [
    { value: 'all', label: t('All Courses') },
    { value: 'active', label: t('Active') },
    { value: 'upcoming', label: t('Upcoming') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <Card>
      <CardHeader title={t('Recent Courses')} />
      <Divider />
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
      <Divider />

      {currentTab === 'all' && (
        <>
          <List disablePadding>
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 3
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 2
                }}
              >
                <Link
                  underline="none"
                  sx={{
                    transition: 'all .2s',
                    opacity: 1,
                    '&:hover': { opacity: 0.8 }
                  }}
                  href="#"
                >
                  <img
                    src="/static/images/placeholders/fitness/1.jpg"
                    alt="..."
                  />
                </Link>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Box
                      sx={{
                        pb: 1
                      }}
                    >
                      <Chip
                        sx={{
                          mr: 1
                        }}
                        size="small"
                        label={t('Software')}
                        color="secondary"
                        onClick={handleClick}
                        onDelete={handleDelete}
                      />
                      <Chip
                        sx={{
                          mr: 1
                        }}
                        size="small"
                        label={t('Development')}
                        color="secondary"
                        onClick={handleClick}
                        onDelete={handleDelete}
                      />
                      <Chip
                        sx={{
                          mr: 1
                        }}
                        size="small"
                        label={t('AML')}
                        color="secondary"
                        onClick={handleClick}
                        onDelete={handleDelete}
                      />
                    </Box>
                    <Link
                      underline="none"
                      sx={{
                        '&:hover': { color: theme.colors.primary.dark }
                      }}
                      href="#"
                    >
                      Machine learning basics: Regression
                    </Link>
                  </>
                }
                primaryTypographyProps={{ variant: 'h3' }}
                secondary={
                  <>
                    March 14, 2021 - March 28, 2021
                    <Box
                      display="flex"
                      alignItems="center"
                      sx={{
                        pt: 1
                      }}
                    >
                      <AvatarInfo>
                        <TimerTwoToneIcon />
                      </AvatarInfo>
                      <Text color="info">
                        <b>{t('In Progress')}</b>
                      </Text>
                    </Box>
                  </>
                }
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  sx: {
                    pt: 1
                  }
                }}
              />
              <Box
                sx={{
                  my: { xs: 2, md: 0 }
                }}
                display="flex"
                alignItems="center"
                justifyContent="flex-right"
              >
                <Box display="flex" alignItems="center">
                  <Text color="warning">
                    <LocalFireDepartmentTwoToneIcon />
                  </Text>
                  <b>9.2</b>
                </Box>
                <Button
                  sx={{
                    mx: 2
                  }}
                  variant="outlined"
                  size="small"
                >
                  View course
                </Button>
                <IconButtonWrapper size="small" color="secondary">
                  <PendingTwoToneIcon />
                </IconButtonWrapper>
              </Box>
            </ListItem>
            <Divider component="li" />
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 3
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 2
                }}
              >
                <Link
                  underline="none"
                  sx={{
                    transition: 'all .2s',
                    opacity: 1,
                    '&:hover': { opacity: 0.8 }
                  }}
                  href="#"
                >
                  <img
                    src="/static/images/placeholders/fitness/2.jpg"
                    alt="..."
                  />
                </Link>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Box
                      sx={{
                        pb: 1
                      }}
                    >
                      <Chip
                        sx={{
                          mr: 1
                        }}
                        size="small"
                        label={t('Dev Tools')}
                        color="secondary"
                        onClick={handleClick}
                        onDelete={handleDelete}
                      />
                      <Chip
                        sx={{
                          mr: 1
                        }}
                        size="small"
                        label={t('Frontend')}
                        color="secondary"
                        onClick={handleClick}
                        onDelete={handleDelete}
                      />
                    </Box>
                    <Link
                      underline="none"
                      sx={{
                        '&:hover': { color: theme.colors.primary.dark }
                      }}
                      href="#"
                    >
                      Project Management: Managing Front-End Planning
                    </Link>
                  </>
                }
                primaryTypographyProps={{ variant: 'h3' }}
                secondary={
                  <>
                    April 5, 2021 - April 12, 2021
                    <Box
                      display="flex"
                      alignItems="center"
                      sx={{
                        pt: 1
                      }}
                    >
                      <AvatarSuccess>
                        <CheckTwoToneIcon />
                      </AvatarSuccess>
                      <Text color="success">
                        <b>{t('Completed')}</b>
                      </Text>
                    </Box>
                  </>
                }
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  sx: {
                    pt: 1
                  }
                }}
              />
              <Box
                sx={{
                  my: { xs: 2, md: 0 }
                }}
                display="flex"
                alignItems="center"
                justifyContent="flex-right"
              >
                <Box display="flex" alignItems="center">
                  <Text color="warning">
                    <LocalFireDepartmentTwoToneIcon />
                  </Text>
                  <b>9.2</b>
                </Box>
                <Button
                  sx={{
                    mx: 2
                  }}
                  variant="contained"
                  size="small"
                >
                  Get your certificate
                </Button>
                <IconButtonWrapper size="small" color="secondary">
                  <PendingTwoToneIcon />
                </IconButtonWrapper>
              </Box>
            </ListItem>
            <Divider component="li" />
          </List>
          <CardActions
            disableSpacing
            sx={{
              p: 3,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination size="large" count={7} color="primary" />
          </CardActions>
        </>
      )}

      {currentTab === 'active' && (
        <Box
          sx={{
            py: { xs: 2, md: 6, lg: 8 },
            textAlign: 'center'
          }}
        >
          <AvatarPending>
            <NotificationsActiveTwoToneIcon />
          </AvatarPending>
          <Typography variant="h2">{t('Start learning today')}!</Typography>
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
              'Browse over 500 quality courses to start learning something useful today'
            )}
            !
          </Typography>
          <Button
            color="warning"
            variant="outlined"
            sx={{
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px'
              }
            }}
          >
            {t('Browse courses')}
          </Button>
        </Box>
      )}

      {currentTab === 'upcoming' && (
        <Box
          sx={{
            py: { xs: 2, md: 6, lg: 8 },
            textAlign: 'center'
          }}
        >
          <AvatarEvents>
            <InsertInvitationTwoToneIcon />
          </AvatarEvents>
          <Typography variant="h2">{t('Upcoming events')}</Typography>
          <Typography
            variant="h4"
            sx={{
              pt: 1,
              pb: 3
            }}
            fontWeight="normal"
            color="text.secondary"
          >
            {t('Right now there are no upcoming events available')}!
          </Typography>
          <Button
            color="info"
            variant="outlined"
            startIcon={<MarkEmailReadTwoToneIcon />}
            sx={{
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px'
              }
            }}
          >
            {t('Subscribe to newsletter')}
          </Button>
        </Box>
      )}
    </Card>
  );
}

export default RecentCourses;

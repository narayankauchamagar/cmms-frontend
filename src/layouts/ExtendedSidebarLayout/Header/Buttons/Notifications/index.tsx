import { ChangeEvent, useRef, useState } from 'react';

import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Tab,
  Tabs,
  CardMedia,
  CardActionArea,
  AvatarGroup,
  Card,
  Popover,
  useTheme,
  styled,
  Tooltip,
  Typography
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Scrollbar from 'src/components/Scrollbar';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Text from 'src/components/Text';

import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const BoxComposed = styled(Box)(
  () => `
  position: relative;
`
);

const BoxComposedContent = styled(Box)(
  ({ theme }) => `
  position: relative;
  z-index: 7;

  .MuiTypography-root {
      color: ${theme.palette.primary.contrastText};

      & + .MuiTypography-root {
          color: ${alpha(theme.palette.primary.contrastText, 0.7)};
      }
  }
  
`
);

const BoxComposedImage = styled(Box)(
  () => `
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  filter: grayscale(80%);
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: inherit;
`
);

const BoxComposedBg = styled(Box)(
  () => `
  position: absolute;
  left: 0;
  top: 0;
  z-index: 6;
  height: 100%;
  width: 100%;
  border-radius: inherit;
`
);

const TabsWrapper = styled(Tabs)(
  ({ theme }) => `
      overflow: visible !important;

      .MuiTabs-scroller {
          overflow: visible !important;
      }

      .MuiButtonBase-root {
          text-transform: uppercase;
          font-size: ${theme.typography.pxToRem(12)};

          &:last-child {
            margin-right: 0;
          }
      }
  `
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color: ${theme.colors.success.main};
      width: ${theme.spacing(10)};
      height: ${theme.spacing(10)};
      margin: 0 auto ${theme.spacing(2)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(42)};
      }
`
);

const LabelPrimary = styled(Box)(
  ({ theme }) => `
    font-weight: bold;
    border-radius: ${theme.general.borderRadiusSm};
    background: ${theme.colors.primary.main};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    padding: ${theme.spacing(0.5, 1.5)};
    color: ${theme.palette.primary.contrastText};
`
);

const DividerVertialPrimary = styled(Box)(
  ({ theme }) => `
  height: 60%;
  width: 6px;
  left: -3px;
  border-radius: 50px;
  position: absolute;
  top: 20%;
  background: ${theme.colors.primary.main};
`
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  border-radius: ${theme.general.borderRadiusLg};
`
);

function HeaderNotifications() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState<string>('timeline');

  const tabs = [
    { value: 'timeline', label: t('Timeline') },
    { value: 'tasks', label: t('Tasks') },
    { value: 'reports', label: t('Reports') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      },
      stacked: true
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        horizontal: false,
        columnWidth: '65%'
      }
    },
    stroke: {
      show: false,
      width: 0,
      colors: ['transparent']
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    colors: [theme.colors.secondary.light, theme.colors.secondary.dark],
    fill: {
      opacity: 1
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last week',
      'Last month',
      'Last year',
      'Last quarter'
    ],
    legend: {
      show: false
    },
    tooltip: {
      fixed: {
        enabled: true
      },
      x: {
        show: true
      },
      marker: {
        show: true
      }
    }
  };
  const chartData = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  return (
    <>
      <Tooltip arrow title={t('Notifications')}>
        <Badge
          variant="dot"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          sx={{
            '.MuiBadge-badge': {
              background: theme.colors.success.main,
              animation: 'pulse 1s infinite',
              transition: `${theme.transitions.create(['all'])}`
            }
          }}
        >
          <IconButtonWrapper
            sx={{
              background: alpha(theme.colors.primary.main, 0.1),
              transition: `${theme.transitions.create(['background'])}`,
              color: theme.colors.primary.main,

              '&:hover': {
                background: alpha(theme.colors.primary.main, 0.2)
              }
            }}
            color="primary"
            ref={ref}
            onClick={handleOpen}
          >
            <NotificationsActiveTwoToneIcon fontSize="small" />
          </IconButtonWrapper>
        </Badge>
      </Tooltip>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box minWidth={440} maxWidth={440} p={2}>
          <BoxComposed
            mb={2}
            sx={{
              borderRadius: `${theme.general.borderRadius}`,
              background: `${theme.colors.gradients.black1}`
            }}
          >
            <BoxComposedBg
              sx={{
                opacity: 0.3,
                background: `${theme.colors.gradients.green2}`
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.2,
                backgroundImage:
                  'url("/static/images/placeholders/covers/1.jpg")'
              }}
            />
            <BoxComposedContent py={3}>
              <Typography
                textAlign="center"
                sx={{
                  pb: 0.5
                }}
                variant="h4"
              >
                {t('Notifications')}
              </Typography>
              <Typography textAlign="center" variant="subtitle2">
                You have{' '}
                <Text color="success">
                  <b>483</b>
                </Text>{' '}
                new messages
              </Typography>
            </BoxComposedContent>
          </BoxComposed>
          <TabsWrapper
            centered
            onChange={handleTabsChange}
            value={currentTab}
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </TabsWrapper>
        </Box>
        <Divider />
        {currentTab === 'timeline' && (
          <Box
            sx={{
              height: 220
            }}
          >
            <Scrollbar>
              <Timeline
                sx={{
                  px: 2,
                  py: 1,
                  m: 2
                }}
              >
                <TimelineItem
                  sx={{
                    p: 0
                  }}
                >
                  <TimelineSeparator
                    sx={{
                      position: 'relative'
                    }}
                  >
                    <TimelineDot
                      sx={{
                        marginTop: 0,
                        left: `-${theme.spacing(2.1)} !important`,
                        top: `-${theme.spacing(0.5)}`
                      }}
                      color="success"
                    >
                      <BusinessCenterTwoToneIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      pl: 3,
                      pb: 4
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      Java exam day
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bill Clinton's presidential scandal makes it online.
                    </Typography>
                    <Box display="flex" mt={1} alignItems="flex-start">
                      <AvatarGroup max={4}>
                        <Tooltip arrow title="Remy Sharp">
                          <Avatar
                            component={RouterLink}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            to="#"
                            alt="Remy Sharp"
                            src="/static/images/avatars/1.jpg"
                          />
                        </Tooltip>
                        <Tooltip arrow title="Travis Howard">
                          <Avatar
                            component={RouterLink}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            to="#"
                            alt="Travis Howard"
                            src="/static/images/avatars/2.jpg"
                          />
                        </Tooltip>
                        <Tooltip arrow title="Cindy Baker">
                          <Avatar
                            component={RouterLink}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            to="#"
                            alt="Cindy Baker"
                            src="/static/images/avatars/3.jpg"
                          />
                        </Tooltip>
                        <Tooltip arrow title="Cindy Baker">
                          <Avatar
                            component={RouterLink}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            to="#"
                            alt="Cindy Baker"
                            src="/static/images/avatars/4.jpg"
                          />
                        </Tooltip>
                        <Tooltip arrow title="Agnes Walker">
                          <Avatar
                            component={RouterLink}
                            sx={{
                              width: 32,
                              height: 32
                            }}
                            to="#"
                            alt="Agnes Walker"
                            src="/static/images/avatars/5.jpg"
                          />
                        </Tooltip>
                      </AvatarGroup>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem
                  sx={{
                    p: 0
                  }}
                >
                  <TimelineSeparator
                    sx={{
                      position: 'relative'
                    }}
                  >
                    <TimelineDot
                      sx={{
                        marginTop: 0,
                        left: `-${theme.spacing(2.1)} !important`,
                        top: `-${theme.spacing(0.5)}`
                      }}
                      color="primary"
                    >
                      <AssignmentIndTwoToneIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      pl: 3,
                      pb: 4
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      Business investor meeting
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Mosaic, the first graphical browser, is introduced to the
                      average consumer.
                    </Typography>
                    <Box display="flex" mt={2} alignItems="flex-start">
                      <Card
                        sx={{
                          mr: 2
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="64"
                            image="/static/images/placeholders/fitness/1.jpg"
                            alt="..."
                          />
                        </CardActionArea>
                      </Card>
                      <Card
                        sx={{
                          mr: 2
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="64"
                            image="/static/images/placeholders/fitness/2.jpg"
                            alt="..."
                          />
                        </CardActionArea>
                      </Card>
                      <Card
                        sx={{
                          mr: 2
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="64"
                            image="/static/images/placeholders/fitness/3.jpg"
                            alt="..."
                          />
                        </CardActionArea>
                      </Card>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem
                  sx={{
                    p: 0
                  }}
                >
                  <TimelineSeparator
                    sx={{
                      position: 'relative'
                    }}
                  >
                    <TimelineDot
                      sx={{
                        marginTop: 0,
                        top: theme.spacing(1.2)
                      }}
                      variant="outlined"
                      color="error"
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      pl: 3,
                      pb: 4
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      Learning round table gathering
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      First ever iPod launches.
                    </Typography>
                    <Box display="flex" mt={1} alignItems="flex-start">
                      <Button size="small" variant="contained">
                        {t('Submit report')}
                      </Button>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Scrollbar>
          </Box>
        )}
        {currentTab === 'tasks' && (
          <Box
            sx={{
              height: 220
            }}
          >
            <Scrollbar>
              <Box p={3}>
                <Typography
                  sx={{
                    pb: 1
                  }}
                  component="div"
                  variant="caption"
                  fontWeight="bold"
                >
                  {t('Tasks for today')}
                </Typography>
                <Card
                  sx={{
                    overflow: 'visible',
                    position: 'relative',
                    p: 2
                  }}
                  variant="outlined"
                >
                  <DividerVertialPrimary />
                  <Link
                    color="text.primary"
                    component="a"
                    variant="h4"
                    fontWeight="normal"
                    href="#"
                  >
                    Presentation site design
                  </Link>
                  <Box mt={1.5} display="flex" alignItems="center">
                    <LabelPrimary>{t('On hold')}</LabelPrimary>
                    <Text flex color="error">
                      <AccessTimeTwoToneIcon
                        sx={{
                          ml: 1,
                          mr: 0.5
                        }}
                        fontSize="small"
                      />
                      2:35 pm
                    </Text>
                  </Box>
                </Card>
                <Typography
                  sx={{
                    pt: 3,
                    pb: 2
                  }}
                  component="div"
                  variant="caption"
                  fontWeight="bold"
                >
                  {t("Tomorrow's schedule")}
                </Typography>
                <Box
                  sx={{
                    textAlign: 'center'
                  }}
                >
                  <AvatarSuccess>
                    <CheckTwoToneIcon />
                  </AvatarSuccess>
                  <Typography gutterBottom variant="h4">
                    {t('Nothing to report')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t("You don't have any other pending tasks in progress")}!
                  </Typography>
                </Box>
              </Box>
            </Scrollbar>
          </Box>
        )}
        {currentTab === 'reports' && (
          <Box
            sx={{
              height: 220
            }}
          >
            <Box p={3}>
              <Box
                sx={{
                  textAlign: 'center'
                }}
              >
                <Typography gutterBottom variant="h4">
                  {t('Total Sales')}
                </Typography>
                <Typography variant="subtitle2">
                  {t('Total sales performance for last week')}
                </Typography>
              </Box>
              <Chart
                options={chartOptions}
                series={chartData}
                type="bar"
                height={146}
              />
            </Box>
          </Box>
        )}
        <Divider />
        <Box
          p={2}
          sx={{
            textAlign: 'center'
          }}
        >
          <Button
            sx={{
              px: 2,
              py: 0.5,
              fontWeight: 'normal',
              borderRadius: 10,
              background: 'transparent',
              color: `${theme.colors.primary.main}`,
              border: `${theme.colors.primary.main} solid 2px`,
              transition: `${theme.transitions.create(['all'])}`,

              '.MuiSvgIcon-root': {
                color: `${theme.colors.primary.main}`,
                transition: `${theme.transitions.create(['color'])}`
              },

              '&:hover': {
                px: 3,
                background: `${theme.colors.primary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.dark
                )}`,
                boxShadow: `${theme.colors.shadows.primary}`,

                '.MuiSvgIcon-root': {
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.dark
                  )}`
                }
              },
              '&:active': {
                boxShadow: 'none'
              }
            }}
            variant="contained"
            endIcon={<ArrowForwardTwoToneIcon />}
            color="primary"
          >
            {t('View all')}
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderNotifications;

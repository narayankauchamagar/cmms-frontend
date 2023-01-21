import { ChangeEvent, useState } from 'react';
import {
  alpha,
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  styled,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import Text from 'src/components/Text';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Link as RouterLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import Scrollbar from 'src/components/Scrollbar';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

const BoxComposed = styled(Box)(
  () => `
    position: relative;
  `
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.success.lighter};
        color: ${theme.colors.success.main};
        width: ${theme.spacing(14)};
        height: ${theme.spacing(14)};
        margin-right: ${theme.spacing(1)};
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
  () => `
        overflow: visible !important;

        .MuiTabs-scroller {
            overflow: visible !important;
        }
    `
);

function Block4() {
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

  const chart1Options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
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
        horizontal: false,
        borderRadius: 5,
        columnWidth: '65%'
      }
    },
    stroke: {
      show: false,
      width: 0,
      colors: ['transparent']
    },
    theme: {
      mode: theme.palette.mode
    },
    colors: [theme.colors.secondary.dark, theme.colors.secondary.light],
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
    }
  };
  const chart1Data = [
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
    <Card>
      <CardHeader
        sx={{
          p: 3
        }}
        disableTypography
        action={
          <Button
            endIcon={<KeyboardArrowDownTwoToneIcon />}
            variant="outlined"
            size="small"
          >
            {t('actions')}
          </Button>
        }
        title={
          <>
            <Typography variant="h4">{t('Tasks for today')}</Typography>
          </>
        }
      />
      <BoxComposed
        sx={{
          background: `${theme.colors.gradients.pink2}`
        }}
      >
        <BoxComposedBg
          sx={{
            opacity: 0.1,
            background: `${theme.colors.gradients.black2}`
          }}
        />
        <BoxComposedImage
          sx={{
            opacity: 0.1,
            backgroundImage: 'url("/static/images/placeholders/covers/2.jpg")'
          }}
        />
        <BoxComposedContent py={4}>
          <Typography
            textAlign="center"
            sx={{
              pb: 1
            }}
            variant="h3"
          >
            {t('Notifications')}
          </Typography>
          <Typography textAlign="center" fontWeight="normal" variant="h4">
            {t('You have')}{' '}
            <Text color="warning">
              <b>574</b>
            </Text>{' '}
            {t('notifications')}
          </Typography>
        </BoxComposedContent>
      </BoxComposed>
      <Box p={2}>
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
      {currentTab === 'timeline' && (
        <Box
          sx={{
            height: 300
          }}
        >
          <Scrollbar>
            <Timeline
              sx={{
                m: 0
              }}
            >
              <TimelineItem
                sx={{
                  p: 0
                }}
              >
                <TimelineOppositeContent
                  sx={{
                    width: '120px',
                    flex: 'none'
                  }}
                  color="text.secondary"
                >
                  09:25
                </TimelineOppositeContent>
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
                    color="primary"
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    pb: 4
                  }}
                >
                  <Typography variant="h4" gutterBottom>
                    1991
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The World Wide Web goes live with its first web page.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem
                sx={{
                  p: 0
                }}
              >
                <TimelineOppositeContent
                  sx={{
                    width: '120px',
                    flex: 'none'
                  }}
                  color="text.secondary"
                >
                  09:45
                </TimelineOppositeContent>
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
                    color="primary"
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    pb: 4
                  }}
                >
                  <Typography variant="h4" gutterBottom>
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
                <TimelineOppositeContent
                  sx={{
                    width: '120px',
                    flex: 'none'
                  }}
                  color="text.secondary"
                >
                  10:30
                </TimelineOppositeContent>
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
                    color="primary"
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    pb: 4
                  }}
                >
                  <Typography variant="h4" gutterBottom>
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
                <TimelineOppositeContent
                  sx={{
                    width: '120px',
                    flex: 'none'
                  }}
                  color="text.secondary"
                >
                  11:15
                </TimelineOppositeContent>
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
                    color="primary"
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    pb: 4
                  }}
                >
                  <Typography variant="h4" gutterBottom>
                    Learning round table gathering
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    First ever iPod launches.
                  </Typography>
                  <Box display="flex" mt={1} alignItems="flex-start">
                    <Button size="small" variant="outlined">
                      {t('Submit report')}
                    </Button>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem
                sx={{
                  p: 0
                }}
              >
                <TimelineOppositeContent
                  sx={{
                    width: '120px',
                    flex: 'none'
                  }}
                  color="text.secondary"
                >
                  12:15
                </TimelineOppositeContent>
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
                    color="primary"
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    pb: 4
                  }}
                >
                  <Typography variant="h4" gutterBottom>
                    2003
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    MySpace becomes the most popular social network.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Scrollbar>
        </Box>
      )}
      {currentTab === 'tasks' && (
        <>
          <Box
            sx={{
              height: 300
            }}
          >
            <Scrollbar>
              <Box
                display="flex"
                py={4}
                flexDirection="column"
                alignItems="center"
                sx={{
                  textAlign: 'center'
                }}
              >
                <AvatarSuccess
                  sx={{
                    mb: 3
                  }}
                >
                  <CheckTwoToneIcon fontSize="large" />
                </AvatarSuccess>
                <Typography variant="h3" gutterBottom>
                  {t('Incoming messages')}
                </Typography>
                <Typography variant="subtitle2">
                  {t("You don't have any pending actions to look at.")}
                </Typography>
              </Box>
            </Scrollbar>
          </Box>
        </>
      )}
      {currentTab === 'reports' && (
        <>
          <Box
            sx={{
              height: 300
            }}
          >
            <Scrollbar>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  textAlign: 'center'
                }}
              >
                <ButtonGroup
                  sx={{
                    mt: 1,
                    mb: 2
                  }}
                  size="small"
                  variant="outlined"
                >
                  <Button variant="contained">{t('Income')}</Button>
                  <Button>{t('Expenses')}</Button>
                </ButtonGroup>
                <Typography textAlign="center" variant="h3" gutterBottom>
                  {t('Total Sales')}
                </Typography>
                <Typography textAlign="center" variant="subtitle2">
                  {t('Total performance for selected period')}
                </Typography>

                <Box
                  sx={{
                    width: '100%'
                  }}
                >
                  <Chart
                    options={chart1Options}
                    series={chart1Data}
                    type="bar"
                    height={180}
                  />
                </Box>
              </Box>
            </Scrollbar>
          </Box>
        </>
      )}
      <Box
        p={3}
        sx={{
          textAlign: 'center'
        }}
      >
        <Badge color="success" variant="dot">
          <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
            {t('Learn more')}
          </Button>
        </Badge>
      </Box>
    </Card>
  );
}

export default Block4;

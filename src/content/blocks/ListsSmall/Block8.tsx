import { MouseEvent, useState } from 'react';

import {
  Box,
  Card,
  Typography,
  ListItemText,
  ListItem,
  Avatar,
  List,
  Button,
  ListItemAvatar,
  CardActionArea,
  CardMedia,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  AvatarGroup,
  styled,
  useTheme
} from '@mui/material';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Link as RouterLink } from 'react-router-dom';
import Text from 'src/components/Text';

import { useTranslation } from 'react-i18next';
import Scrollbar from 'src/components/Scrollbar';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(0.5, 1)};
  `
);

function Block8() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [tabs, setTab] = useState<string | null>('activity');

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setTab(newValue);
  };

  return (
    <Card>
      <Box
        p={2.5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography gutterBottom variant="h4">
            {t('Recent Activity')}
          </Typography>
          <Typography variant="subtitle2">
            {t('Your recent crypto activities')}
          </Typography>
        </Box>
        <ToggleButtonGroup
          size="small"
          value={tabs}
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton
            sx={{
              px: 2,
              py: 0.5,
              lineHeight: 1.5,
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
            disableRipple
            value="activity"
          >
            {t('Activity')}
          </ToggleButton>
          <ToggleButton
            sx={{
              px: 2,
              py: 0.5,
              lineHeight: 1.5,
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
            disableRipple
            value="trading"
          >
            {t('Trading')}
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Divider />

      {tabs === 'activity' && (
        <>
          <Box
            sx={{
              height: 350
            }}
          >
            <Scrollbar>
              <Timeline>
                <TimelineItem
                  sx={{
                    p: 0
                  }}
                >
                  <TimelineOppositeContent
                    sx={{
                      width: '85px',
                      flex: 'none'
                    }}
                    color="text.secondary"
                  >
                    12 Feb
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
                    <LabelWrapper
                      component="span"
                      sx={{
                        background: `${theme.colors.success.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.success.dark
                        )}`
                      }}
                    >
                      {t('Sell / Market')}
                    </LabelWrapper>
                    <Typography
                      sx={{
                        pt: 1
                      }}
                      variant="body2"
                      color="text.primary"
                    >
                      You sold <b>10 ETH</b> for <b>48,500 USD</b>.
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
                      width: '85px',
                      flex: 'none'
                    }}
                    color="text.secondary"
                  >
                    11 Feb
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
                    <Typography variant="h5" gutterBottom>
                      Invite code sent
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Your friends joined the platform.
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
                      width: '85px',
                      flex: 'none'
                    }}
                    color="text.secondary"
                  >
                    9 Feb
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
                      Uploaded documents
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      You uploaded the following documents onto the crypto
                      platform:
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
                      width: '85px',
                      flex: 'none'
                    }}
                    color="text.secondary"
                  >
                    9 Feb
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
                      Profile verification
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      You partially submitted the required documents.
                    </Typography>
                    <Box display="flex" mt={1} alignItems="flex-start">
                      <Button size="small" variant="contained" color="warning">
                        {t('Submit remaining docs')}
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
                      width: '85px',
                      flex: 'none'
                    }}
                    color="text.secondary"
                  >
                    6 Feb
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
                      Joined CryptoIO Platform
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Welcome to the platform. Enjoy your stay here!
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Scrollbar>
          </Box>
          <Divider />
          <Box
            p={2}
            sx={{
              textAlign: 'center'
            }}
          >
            <Button
              sx={{
                textTransform: 'uppercase',
                fontSize: `${theme.typography.pxToRem(12)}`
              }}
              variant="contained"
              endIcon={<KeyboardArrowRightTwoToneIcon />}
            >
              {t('View all activity')}
            </Button>
          </Box>
        </>
      )}
      {tabs === 'trading' && (
        <>
          <Box
            sx={{
              height: 350
            }}
          >
            <Scrollbar>
              <List disablePadding>
                <ListItem
                  sx={{
                    p: 2.5
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      mr: 1,
                      display: 'flex',
                      alignItems: 'center',
                      minWidth: 0
                    }}
                  >
                    <Avatar
                      sx={{
                        background: `${theme.colors.success.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.success.dark
                        )}`,
                        width: 44,
                        height: 44
                      }}
                    >
                      <TrendingDownTwoToneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography gutterBottom variant="h4">
                        {t('Received Bitcoin')}
                      </Typography>
                    }
                    secondary={
                      <Typography noWrap variant="subtitle2">
                        {t('To')} <b>My Bitcoin Wallet</b>
                      </Typography>
                    }
                  />
                  <Box
                    sx={{
                      textAlign: 'right'
                    }}
                  >
                    <Typography variant="h4">0.234894 BTC</Typography>
                    <Typography fontWeight="bold" variant="subtitle2">
                      $438 USD
                    </Typography>
                  </Box>
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    p: 2.5
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      mr: 1,
                      display: 'flex',
                      alignItems: 'center',
                      minWidth: 0
                    }}
                  >
                    <Avatar
                      sx={{
                        background: `${theme.colors.info.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.info.dark
                        )}`,
                        width: 44,
                        height: 44
                      }}
                    >
                      <TrendingUpTwoToneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography gutterBottom variant="h4">
                        {t('Sent Ethereum')}
                      </Typography>
                    }
                    secondary={
                      <Typography noWrap variant="subtitle2">
                        {t('From')} <b>Ether Wallet</b>
                      </Typography>
                    }
                  />
                  <Box
                    sx={{
                      textAlign: 'right'
                    }}
                  >
                    <Typography variant="h4">1.398456 ETH</Typography>
                    <Typography fontWeight="bold" variant="subtitle2">
                      $5,495 USD
                    </Typography>
                  </Box>
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    p: 2.5
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      mr: 1,
                      display: 'flex',
                      alignItems: 'center',
                      minWidth: 0
                    }}
                  >
                    <Avatar
                      sx={{
                        background: `${theme.colors.error.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.error.dark
                        )}`,
                        width: 44,
                        height: 44
                      }}
                    >
                      <TrendingFlatTwoToneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography gutterBottom variant="h4">
                        {t('Withdraw to bank account')}
                      </Typography>
                    }
                    secondary={
                      <Typography noWrap variant="subtitle2">
                        {t('From')} <b>Total Balance</b>
                      </Typography>
                    }
                  />
                  <Box
                    sx={{
                      textAlign: 'right'
                    }}
                  >
                    <Typography variant="h4">
                      <Text color="error">-23,584 USD</Text>
                    </Typography>
                  </Box>
                </ListItem>
                <Divider />
                <ListItem
                  sx={{
                    p: 2.5
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      mr: 1,
                      display: 'flex',
                      alignItems: 'center',
                      minWidth: 0
                    }}
                  >
                    <Avatar
                      sx={{
                        background: `${theme.colors.success.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.success.dark
                        )}`,
                        width: 44,
                        height: 44
                      }}
                    >
                      <TrendingDownTwoToneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography gutterBottom variant="h4">
                        {t('Transferred Ripple')}
                      </Typography>
                    }
                    secondary={
                      <Typography noWrap variant="subtitle2">
                        {t('To')} <b>John's XRP Stash</b>
                      </Typography>
                    }
                  />
                  <Box
                    sx={{
                      textAlign: 'right'
                    }}
                  >
                    <Typography variant="h4">
                      <Text color="success">+5.473 XRP</Text>
                    </Typography>
                    <Typography fontWeight="bold" variant="subtitle2">
                      $1,564 USD
                    </Typography>
                  </Box>
                </ListItem>
                <Divider />
              </List>
              <Box
                px={2}
                py={3}
                sx={{
                  textAlign: 'center'
                }}
              >
                <Typography variant="subtitle2">
                  {t("You've reached the end of the trading list")}!
                </Typography>
              </Box>
            </Scrollbar>
          </Box>
          <Divider />
          <Box
            p={2}
            sx={{
              textAlign: 'center'
            }}
          >
            <Button
              sx={{
                textTransform: 'uppercase',
                fontSize: `${theme.typography.pxToRem(12)}`
              }}
              variant="contained"
              endIcon={<KeyboardArrowRightTwoToneIcon />}
            >
              {t('View all transactions')}
            </Button>
          </Box>
        </>
      )}
      {!tabs && (
        <Box
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: 422,
            textAlign: 'center'
          }}
        >
          <Box>
            <Typography
              align="center"
              variant="h2"
              fontWeight="normal"
              color="text.secondary"
              sx={{
                mt: 3
              }}
              gutterBottom
            >
              {t('Select one of the tabs to continue')}
            </Typography>
            <Button
              sx={{
                mt: 4
              }}
            >
              Maybe, a button?
            </Button>
          </Box>
        </Box>
      )}
    </Card>
  );
}

export default Block8;

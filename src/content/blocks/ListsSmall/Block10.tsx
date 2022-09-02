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
  Divider,
  ListSubheader,
  useTheme
} from '@mui/material';
import { format, subDays } from 'date-fns';

import Text from 'src/components/Text';

import { useTranslation } from 'react-i18next';
import Scrollbar from 'src/components/Scrollbar';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';

function Block10() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Box p={2.5}>
        <Typography variant="h4">{t('All transactions')}</Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 458
        }}
      >
        <Scrollbar>
          <List disablePadding>
            <ListSubheader
              sx={{
                fontWeight: 'bold'
              }}
            >
              {format(subDays(new Date(), 3), 'MMMM dd yyyy')}
            </ListSubheader>
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
            <ListSubheader
              sx={{
                fontWeight: 'bold'
              }}
            >
              {format(subDays(new Date(), 5), 'MMMM dd yyyy')}
            </ListSubheader>
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
            <ListSubheader
              sx={{
                fontWeight: 'bold'
              }}
            >
              {format(subDays(new Date(), 7), 'MMMM dd yyyy')}
            </ListSubheader>
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
          </List>
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
    </Card>
  );
}

export default Block10;

import {
  Box,
  Card,
  Typography,
  IconButton,
  ListItemText,
  ListItem,
  Avatar,
  List,
  Button,
  ListItemAvatar,
  Divider,
  Tooltip,
  useTheme
} from '@mui/material';

import Text from 'src/components/Text';

import { useTranslation } from 'react-i18next';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import CountUp from 'react-countup';

function Block9() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

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
            {t('My Portfolio')}
          </Typography>
          <Typography variant="subtitle2">
            {t('Status of your crypto assets')}
          </Typography>
        </Box>
        <Box>
          <Tooltip arrow title={t('View stats for last week')}>
            <IconButton
              color="primary"
              sx={{
                fontWeight: 'bold',
                fontSize: `${theme.typography.pxToRem(12)}`
              }}
            >
              1W
            </IconButton>
          </Tooltip>
          <Tooltip arrow title={t('View stats for last month')}>
            <IconButton
              color="primary"
              sx={{
                fontWeight: 'bold',
                fontSize: `${theme.typography.pxToRem(12)}`
              }}
            >
              1M
            </IconButton>
          </Tooltip>
          <Tooltip arrow title={t('View stats for last year')}>
            <IconButton
              color="primary"
              sx={{
                fontWeight: 'bold',
                fontSize: `${theme.typography.pxToRem(12)}`
              }}
            >
              1Y
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider />
      <Box
        px={2}
        py={4}
        sx={{
          textAlign: 'center'
        }}
      >
        <Typography
          fontWeight="bold"
          sx={{
            lineHeight: 1,
            fontSize: `${theme.typography.pxToRem(40)}`
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: `${theme.typography.pxToRem(30)}`
            }}
            component="span"
          >
            $
          </Typography>
          <CountUp
            start={0}
            end={487.385}
            duration={4}
            separator=""
            delay={3}
            decimals={3}
            decimal=","
            prefix=""
            suffix=""
          />
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: `${theme.typography.pxToRem(15)}`
          }}
          fontWeight="bold"
        >
          {t('Total Balance')}
        </Typography>
      </Box>
      <Divider />
      <List disablePadding>
        <ListItem
          sx={{
            p: 2.5
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 1.5,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <Avatar
              sx={{
                border: `${theme.colors.warning.main} solid 3px`,
                background: `${theme.colors.alpha.trueWhite[100]}`,
                padding: '2px',
                width: 48,
                height: 48,

                '& img': {
                  borderRadius: 'inherit'
                }
              }}
              src="/static/images/placeholders/logo/bitcoin.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('BTC')}</Typography>}
            secondary={
              <Typography variant="subtitle2">
                <Text color="warning">Bitcoin</Text>
              </Typography>
            }
          />
          <Box
            display="flex"
            alignItems="center"
            sx={{
              textAlign: 'right'
            }}
          >
            <Box mr={1}>
              <Typography variant="h4">2.4895 BTC</Typography>
              <Typography variant="body1" color="text.secondary">
                98,584 USD
              </Typography>
            </Box>
            <Text color="success">
              <TrendingUpTwoToneIcon />
            </Text>
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
              mr: 1.5,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <Avatar
              sx={{
                border: `${theme.colors.info.main} solid 3px`,
                background: `${theme.colors.alpha.trueWhite[100]}`,
                padding: '2px',
                width: 48,
                height: 48,

                '& img': {
                  borderRadius: 'inherit'
                }
              }}
              src="/static/images/placeholders/logo/ethereum.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('ETH')}</Typography>}
            secondary={
              <Typography variant="subtitle2">
                <Text color="info">Ethereum</Text>
              </Typography>
            }
          />
          <Box
            display="flex"
            alignItems="center"
            sx={{
              textAlign: 'right'
            }}
          >
            <Box mr={1}>
              <Typography variant="h4">14.122 ETH</Typography>
              <Typography variant="body1" color="text.secondary">
                56,584 USD
              </Typography>
            </Box>
            <Text color="error">
              <TrendingDownTwoToneIcon />
            </Text>
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
              mr: 1.5,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <Avatar
              sx={{
                border: `${theme.colors.success.main} solid 3px`,
                color: `${theme.colors.success.main}`,
                background: `${theme.colors.alpha.trueWhite[100]}`,
                padding: '0',
                width: 48,
                height: 48
              }}
            >
              <MonetizationOnTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('USD')}</Typography>}
            secondary={
              <Typography variant="subtitle2">
                <Text color="success">Dollar</Text>
              </Typography>
            }
          />
          <Box
            display="flex"
            alignItems="center"
            sx={{
              textAlign: 'right'
            }}
          >
            <Box mr={1}>
              <Typography variant="h4">37,238 USD</Typography>
            </Box>
            <Text color="warning">
              <TrendingFlatTwoToneIcon />
            </Text>
          </Box>
        </ListItem>
      </List>
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

export default Block9;

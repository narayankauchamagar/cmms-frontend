import {
  Tooltip,
  Box,
  Badge,
  Card,
  MenuList,
  MenuItem,
  ListItemText,
  Checkbox,
  Divider,
  Typography,
  Link,
  Avatar,
  ListItemAvatar,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import Text from 'src/components/Text';
import { formatDistance, subMinutes } from 'date-fns';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import SpeakerTwoToneIcon from '@mui/icons-material/SpeakerTwoTone';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';

const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: ${theme.spacing(2.5)};
      height: ${theme.spacing(2.5)};
      display: inline-block;
      border: ${theme.colors.alpha.white[100]} solid 2px;
      position: relative;

      &::after {
          content: ' ';
          border-radius: 22px;
          position: absolute;
          width: ${theme.spacing(1.1)};
          height: ${theme.spacing(1.1)};
          top: ${theme.spacing(0.5)};
          left: ${theme.spacing(0.5)};
          background: ${theme.colors.alpha.white[100]};
      }
  `
);

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 7;
  `
);

function Block3() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative'
      }}
    >
      <CardActions>
        <Checkbox />
      </CardActions>
      <Box p={3} display="flex" alignItems="center">
        <Badge
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          overlap="rectangular"
          badgeContent={
            <Tooltip
              arrow
              placement="top"
              title={
                t('Offline since') +
                ' ' +
                formatDistance(subMinutes(new Date(), 12), new Date(), {
                  addSuffix: true
                })
              }
            >
              <DotLegend style={{ background: `${theme.colors.error.main}` }} />
            </Tooltip>
          }
        >
          <Avatar
            variant="rounded"
            sx={{
              width: 104,
              height: 104,
              fontSize: `${theme.typography.pxToRem(18)}`,
              background: `${theme.colors.primary.lighter}`,
              color: `${theme.colors.primary.main}`
            }}
          >
            KA
          </Avatar>
        </Badge>
        <Box ml={2.5}>
          <Link href="#" gutterBottom variant="h4">
            Kris Alexander
          </Link>
          <Typography
            sx={{
              mb: 1
            }}
            variant="subtitle2"
          >
            Project Manager, Apple Inc.
          </Typography>
          <Button size="small" variant="contained" color="primary">
            {t('Chat')}
          </Button>
          <Button
            size="small"
            variant="contained"
            color="success"
            sx={{
              background: `${theme.colors.success.lighter}`,
              color: `${theme.colors.success.main}`,
              ml: 1,

              '&:hover': {
                background: `${theme.colors.success.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.success.dark
                )}`
              }
            }}
          >
            {t('View')}
          </Button>
        </Box>
      </Box>
      <Divider />
      <MenuList disablePadding>
        <MenuItem
          sx={{
            p: 2.5,
            borderRadius: 0
          }}
          divider
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
                background: `${theme.colors.success.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.success.dark
                )}`,
                width: 44,
                height: 44
              }}
            >
              <AccountBalanceWalletTwoToneIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography gutterBottom variant="h4">
                {t('Sales')}
              </Typography>
            }
            secondary={<Text color="success">15.4% {t('increase')}</Text>}
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: `${theme.colors.alpha.black[30]}`,
              opacity: 0.8
            }}
          />
        </MenuItem>
        <MenuItem
          sx={{
            p: 2.5,
            borderRadius: 0
          }}
          divider
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
                background: `${theme.colors.error.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.error.dark
                )}`,
                width: 44,
                height: 44
              }}
            >
              <SpeakerTwoToneIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography gutterBottom variant="h4">
                {t('Income')}
              </Typography>
            }
            secondary={<Text color="error">-4.75% {t('decrease')}</Text>}
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: `${theme.colors.alpha.black[30]}`,
              opacity: 0.8
            }}
          />
        </MenuItem>
        <MenuItem
          sx={{
            p: 2.5,
            borderRadius: 0
          }}
          divider
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
                background: `${theme.colors.warning.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.warning.dark
                )}`,
                width: 44,
                height: 44
              }}
            >
              <VerifiedTwoToneIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography gutterBottom variant="h4">
                {t('Expenses')}
              </Typography>
            }
            secondary={<Text color="warning">62.5% {t('down')}</Text>}
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: `${theme.colors.alpha.black[30]}`,
              opacity: 0.8
            }}
          />
        </MenuItem>
      </MenuList>
    </Card>
  );
}

export default Block3;

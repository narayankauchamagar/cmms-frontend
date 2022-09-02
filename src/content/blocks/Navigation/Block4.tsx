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
  Avatar,
  ListItemAvatar,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import { formatDistance, subMinutes } from 'date-fns';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import SpeakerTwoToneIcon from '@mui/icons-material/SpeakerTwoTone';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';

const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: ${theme.spacing(1.8)};
      height: ${theme.spacing(1.8)};
      display: inline-block;
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

const MenuItemWrapper = styled(MenuItem)(
  ({ theme }) => `
    border-color: ${theme.colors.alpha.trueWhite[10]};

    & > .MuiSvgIcon-root {
        transition: ${theme.transitions.create(['color'])};
    }

    &.MuiMenuItem-root.MuiButtonBase-root:active,
    &:hover {
        background: ${theme.colors.alpha.trueWhite[10]};
        color: ${theme.colors.alpha.trueWhite[100]};

        & > .MuiSvgIcon-root {
            color: ${theme.colors.alpha.trueWhite[70]};
        }
    }

    .MuiTouchRipple-root {
        opacity: .05;
    }
  `
);

const ButtonWrapper = styled(Button)(
  ({ theme }) => `
    transform: translateY(0px);
    box-shadow: 0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1);
    transition: ${theme.transitions.create(['transform', 'box-shadow'])};

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 .413rem .9rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1);
    }
    
    &:active {
        transform: translateY(-2px);
        box-shadow: none;
    }
  `
);

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        position: 'relative',
        background: `${theme.colors.gradients.blue1}`,
        color: `${theme.colors.alpha.trueWhite[100]}`
      }}
    >
      <CardActions>
        <Checkbox
          sx={{
            color: `${theme.colors.alpha.trueWhite[100]}`,
            '&.Mui-checked': {
              color: `${theme.colors.alpha.trueWhite[100]}`
            }
          }}
        />
      </CardActions>
      <Box p={3} display="flex" alignItems="center">
        <Badge
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          overlap="rectangular"
          badgeContent={
            <Tooltip
              arrow
              placement="top"
              title={
                t('Online since') +
                ' ' +
                formatDistance(subMinutes(new Date(), 65), new Date(), {
                  addSuffix: true
                })
              }
            >
              <DotLegend
                style={{ background: `${theme.colors.success.main}` }}
              />
            </Tooltip>
          }
        >
          <Avatar
            variant="rounded"
            sx={{
              width: 104,
              height: 104,
              boxShadow: `0 .313rem .8rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)`,
              fontSize: `${theme.typography.pxToRem(18)}`,
              background: `${theme.colors.primary.lighter}`,
              color: `${theme.colors.primary.main}`
            }}
            src="/static/images/avatars/5.jpg"
          />
        </Badge>
        <Box ml={2.5}>
          <Typography gutterBottom variant="h4">
            Matteo Mcphee
          </Typography>
          <Typography
            sx={{
              mb: 1,
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
            variant="subtitle2"
          >
            Frontend Developer, Stripe Inc.
          </Typography>
          <ButtonWrapper
            sx={{
              background: `${theme.colors.alpha.trueWhite[100]}`,
              color: `${theme.palette.getContrastText(
                theme.colors.alpha.trueWhite[100]
              )}`,

              '&:hover': {
                background: `${theme.colors.alpha.trueWhite[100]}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.alpha.trueWhite[100]
                )}`
              }
            }}
            size="small"
            variant="contained"
          >
            {t('Chat')}
          </ButtonWrapper>
          <ButtonWrapper
            size="small"
            variant="contained"
            sx={{
              background: `${theme.colors.info.main}`,
              color: `${theme.palette.getContrastText(theme.colors.info.dark)}`,
              ml: 1,

              '&:hover': {
                background: `${theme.colors.info.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.info.dark
                )}`
              }
            }}
          >
            {t('View')}
          </ButtonWrapper>
        </Box>
      </Box>
      <Divider
        sx={{
          background: `${theme.colors.alpha.trueWhite[10]}`
        }}
      />
      <MenuList disablePadding>
        <MenuItemWrapper
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
              variant="rounded"
              sx={{
                background: `${theme.colors.info.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.info.dark
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
            secondary={
              <Typography
                sx={{
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
              >
                15.4% {t('increase')}
              </Typography>
            }
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: `${theme.colors.alpha.trueWhite[30]}`,
              opacity: 0.8
            }}
          />
        </MenuItemWrapper>
        <MenuItemWrapper
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
              variant="rounded"
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
            secondary={
              <Typography
                sx={{
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
              >
                -4.75% {t('decrease')}
              </Typography>
            }
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: `${theme.colors.alpha.trueWhite[30]}`,
              opacity: 0.8
            }}
          />
        </MenuItemWrapper>
        <MenuItemWrapper
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
              variant="rounded"
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
            secondary={
              <Typography
                sx={{
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
              >
                62.5% {t('down')}
              </Typography>
            }
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: `${theme.colors.alpha.trueWhite[30]}`,
              opacity: 0.8
            }}
          />
        </MenuItemWrapper>
      </MenuList>
    </Card>
  );
}

export default Block4;

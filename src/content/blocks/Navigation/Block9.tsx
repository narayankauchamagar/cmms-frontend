import {
  Box,
  Card,
  Tooltip,
  Avatar,
  ListItemAvatar,
  MenuItem,
  Typography,
  ListItemText,
  alpha,
  MenuList,
  IconButton,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import Label from 'src/components/Label';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import AlarmOnTwoToneIcon from '@mui/icons-material/AlarmOnTwoTone';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import EnhancedEncryptionTwoToneIcon from '@mui/icons-material/EnhancedEncryptionTwoTone';
import GppGoodTwoToneIcon from '@mui/icons-material/GppGoodTwoTone';

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(11)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(1, 1.5, 0.8)};
    line-height: 1;
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

const MenuListWrapperRounded = styled(MenuList)(
  ({ theme }) => `
    & .MuiMenuItem-root {
        border-radius: ${theme.general.borderRadiusLg};
        padding: ${theme.spacing(0.9, 1.1)};
        margin-bottom: 2px;
        position: relative;
        color: ${theme.colors.alpha.black[70]};

        &.Mui-selected,
        &:hover,
        &.MuiButtonBase-root:active {
            background: ${alpha(theme.colors.alpha.black[100], 0.08)};
            color: ${theme.colors.primary.main};
        }

        &:last-child {
            margin-bottom: 0;
        }
      }
  `
);

function Block9() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <CardActions>
        <Tooltip arrow placement="top" title={t('Get in touch via email')}>
          <IconButton
            color="primary"
            sx={{
              alignSelf: 'center',
              backgroundColor: `${theme.colors.error.lighter}`,
              color: `${theme.colors.error.main}`,

              '&:hover': {
                backgroundColor: `${theme.colors.error.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.error.dark
                )}`
              }
            }}
          >
            <EmailTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Box pt={6} pb={3} px={3}>
        <Avatar
          variant="rounded"
          sx={{
            mx: 'auto',
            width: 104,
            height: 104,
            boxShadow: `0 .213rem .5rem ${alpha(
              theme.colors.alpha.black[100],
              0.4
            )}, 0 .226rem .225rem ${alpha(theme.colors.alpha.black[100], 0.1)}`
          }}
          src="/static/images/avatars/3.jpg"
        />
        <Typography
          sx={{
            pb: 1,
            pt: 2
          }}
          variant="h2"
        >
          Boyd Hardin
        </Typography>
        <Label color="error">
          <b>{t('Offline')}</b>
        </Label>
        <Typography
          sx={{
            px: 3,
            pt: 3
          }}
          variant="subtitle2"
          textAlign="center"
        >
          {t(
            'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
          )}
          .
        </Typography>
        <Box mt={3} mx={3}>
          <Tooltip arrow placement="top" title="Facebook">
            <IconButton
              sx={{
                background: `${theme.colors.primary.lighter}`,
                width: 54,
                height: 54,
                color: `${theme.colors.primary.main}`,
                '&:hover': {
                  background: `${alpha(theme.colors.primary.main, 0.2)}`,
                  color: `${theme.colors.primary.main}`
                }
              }}
              color="primary"
              size="large"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title="Twitter">
            <IconButton
              sx={{
                mx: 1,
                background: `${theme.colors.primary.lighter}`,
                width: 54,
                height: 54,
                color: `${theme.colors.primary.main}`,
                '&:hover': {
                  background: `${alpha(theme.colors.primary.main, 0.2)}`,
                  color: `${theme.colors.primary.main}`
                }
              }}
              color="primary"
              size="large"
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title="Instagram">
            <IconButton
              sx={{
                background: `${theme.colors.primary.lighter}`,
                width: 54,
                height: 54,
                color: `${theme.colors.primary.main}`,
                '&:hover': {
                  background: `${alpha(theme.colors.primary.main, 0.2)}`,
                  color: `${theme.colors.primary.main}`
                }
              }}
              color="primary"
              size="large"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <MenuListWrapperRounded
        disablePadding
        sx={{
          textAlign: 'left',
          mb: 3,
          mx: 3
        }}
      >
        <MenuItem selected>
          <ListItemAvatar
            sx={{
              minWidth: 32,
              display: 'flex'
            }}
          >
            <EnhancedEncryptionTwoToneIcon
              sx={{
                opacity: 0.5
              }}
              fontSize="small"
            />
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5'
            }}
            primary={t('Analytics')}
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: `${theme.colors.alpha.black[30]}`,
              opacity: 0.8
            }}
          />
        </MenuItem>
        <MenuItem>
          <ListItemAvatar
            sx={{
              minWidth: 32,
              display: 'flex'
            }}
          >
            <GppGoodTwoToneIcon
              sx={{
                opacity: 0.5
              }}
              fontSize="small"
            />
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5'
            }}
            primary={t('Server Status')}
          />
          <Box display="flex" alignItems="center">
            <LabelWrapper
              component="span"
              sx={{
                background: `${theme.colors.error.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.error.dark
                )}`
              }}
            >
              675
            </LabelWrapper>
            <ChevronRightTwoToneIcon
              sx={{
                ml: 1,
                color: `${theme.colors.alpha.black[30]}`,
                opacity: 0.8
              }}
            />
          </Box>
        </MenuItem>
        <MenuItem disabled>
          <ListItemAvatar
            sx={{
              minWidth: 32,
              display: 'flex'
            }}
          >
            <AlarmOnTwoToneIcon
              sx={{
                opacity: 0.5
              }}
              fontSize="small"
            />
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5'
            }}
            primary={t('Reports Management')}
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: `${theme.colors.alpha.black[30]}`,
              opacity: 0.8
            }}
          />
        </MenuItem>
        <MenuItem>
          <ListItemAvatar
            sx={{
              minWidth: 32,
              display: 'flex'
            }}
          >
            <DateRangeTwoToneIcon
              sx={{
                opacity: 0.5
              }}
              fontSize="small"
            />
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5'
            }}
            primary={t('Real Estate')}
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: `${theme.colors.alpha.black[30]}`,
              opacity: 0.8
            }}
          />
        </MenuItem>
      </MenuListWrapperRounded>
    </Card>
  );
}

export default Block9;

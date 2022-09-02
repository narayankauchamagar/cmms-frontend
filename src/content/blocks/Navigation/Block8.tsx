import {
  Box,
  Card,
  Tooltip,
  Avatar,
  MenuItem,
  Typography,
  ListItemText,
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
import { formatDistance, subMinutes } from 'date-fns';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

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
        border-radius: ${theme.general.borderRadius};
        padding: ${theme.spacing(1, 1, 1, 2.5)};
        margin-bottom: 2px;
        position: relative;
        color: ${theme.colors.alpha.black[70]};

        &.Mui-selected,
        &:hover,
        &.MuiButtonBase-root:active {
            background: ${theme.colors.info.lighter};
            color: ${theme.colors.info.main};
        }

        &:last-child {
            margin-bottom: 0;
        }
      }
  `
);

function Block8() {
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
              backgroundColor: `${theme.colors.warning.lighter}`,
              color: `${theme.colors.warning.main}`,

              '&:hover': {
                backgroundColor: `${theme.colors.warning.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.warning.dark
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
          sx={{
            mx: 'auto',
            width: 123,
            height: 123
          }}
          src="/static/images/avatars/4.jpg"
        />
        <Typography
          sx={{
            pb: 1,
            pt: 2
          }}
          variant="h2"
        >
          Leopold Magana
        </Typography>
        <Label color="warning">
          {t('Idle for')}{' '}
          {formatDistance(subMinutes(new Date(), 12), new Date(), {
            addSuffix: true
          })}
        </Label>

        <Card
          elevation={0}
          sx={{
            background: `${theme.colors.gradients.blue4}`,
            textAlign: 'center',
            p: 3,
            mt: 3
          }}
        >
          <Tooltip arrow placement="top" title="Facebook">
            <IconButton
              sx={{
                borderRadius: 50,
                background: `${theme.colors.alpha.trueWhite[10]}`,
                color: `${theme.colors.alpha.trueWhite[100]}`,
                '&:hover': {
                  background: `${theme.colors.alpha.trueWhite[30]}`,
                  color: `${theme.colors.alpha.trueWhite[100]}`
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
                borderRadius: 50,
                mx: 1,
                background: `${theme.colors.alpha.trueWhite[10]}`,
                color: `${theme.colors.alpha.trueWhite[100]}`,
                '&:hover': {
                  background: `${theme.colors.alpha.trueWhite[30]}`,
                  color: `${theme.colors.alpha.trueWhite[100]}`
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
                borderRadius: 50,
                background: `${theme.colors.alpha.trueWhite[10]}`,
                color: `${theme.colors.alpha.trueWhite[100]}`,
                '&:hover': {
                  background: `${theme.colors.alpha.trueWhite[30]}`,
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }
              }}
              color="primary"
              size="large"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Card>
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
                background: `${theme.colors.primary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.dark
                )}`
              }}
            >
              {t('Hot')}
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

export default Block8;

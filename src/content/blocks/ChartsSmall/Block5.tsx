import {
  Box,
  Card,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  AvatarGroup,
  Divider,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import MicTwoToneIcon from '@mui/icons-material/MicTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';

import { Link as RouterLink } from 'react-router-dom';

const AvatarGradient1 = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.gradients.purple3};
        color: ${theme.palette.getContrastText(theme.colors.primary.dark)};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
  `
);

const AvatarGradient2 = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.gradients.green2};
        color: ${theme.palette.getContrastText(theme.colors.primary.dark)};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
  `
);

const AvatarGradient3 = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.gradients.pink2};
        color: ${theme.palette.getContrastText(theme.colors.primary.dark)};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <Box
            pt={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarGradient1>
              <CameraAltTwoToneIcon />
            </AvatarGradient1>
            <Typography
              noWrap
              variant="h3"
              sx={{
                pt: 3
              }}
            >
              {t('Recent Visitors')}
            </Typography>
            <Typography
              noWrap
              variant="subtitle2"
              sx={{
                fontSize: `${theme.typography.pxToRem(15)}`
              }}
            >
              {t("Today's analytics")}
            </Typography>
            <AvatarGroup
              sx={{
                mt: 2
              }}
              max={5}
            >
              <Tooltip arrow title="Remy Sharp">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Remy Sharp"
                  src="/static/images/avatars/1.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Travis Howard">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Travis Howard"
                  src="/static/images/avatars/2.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Cindy Baker">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Cindy Baker"
                  src="/static/images/avatars/3.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Agnes Walker">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Agnes Walker"
                  src="/static/images/avatars/4.jpg"
                />
              </Tooltip>
            </AvatarGroup>
            <Divider
              sx={{
                width: '60%',
                alignSelf: 'center',
                mt: 3
              }}
              flexItem
            />
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Tooltip title={t('View profile')}>
                <IconButton color="secondary">
                  <VisibilityTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Add to favourites')}>
                <IconButton
                  sx={{
                    mx: 1
                  }}
                  color="secondary"
                >
                  <FavoriteTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Start voice call')}>
                <IconButton color="secondary">
                  <MicTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <Box
            pt={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarGradient2>
              <ExtensionTwoToneIcon />
            </AvatarGradient2>
            <Typography
              noWrap
              variant="h3"
              sx={{
                pt: 3
              }}
            >
              {t('New Customers')}
            </Typography>
            <Typography
              noWrap
              variant="subtitle2"
              sx={{
                fontSize: `${theme.typography.pxToRem(15)}`
              }}
            >
              {t('Latest statistics')}
            </Typography>
            <AvatarGroup
              sx={{
                mt: 2
              }}
              max={5}
            >
              <Tooltip arrow title="Remy Sharp">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Remy Sharp"
                  src="/static/images/avatars/5.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Travis Howard">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Travis Howard"
                  src="/static/images/avatars/3.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Cindy Baker">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Cindy Baker"
                  src="/static/images/avatars/2.jpg"
                />
              </Tooltip>
            </AvatarGroup>
            <Divider
              sx={{
                width: '60%',
                alignSelf: 'center',
                mt: 3
              }}
              flexItem
            />
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Tooltip title={t('View profile')}>
                <IconButton color="secondary">
                  <VisibilityTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Add to favourites')}>
                <IconButton
                  sx={{
                    mx: 1
                  }}
                  color="secondary"
                >
                  <FavoriteTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Start voice call')}>
                <IconButton color="secondary">
                  <MicTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <Box
            pt={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarGradient3>
              <ContactSupportTwoToneIcon />
            </AvatarGradient3>
            <Typography
              noWrap
              variant="h3"
              sx={{
                pt: 3
              }}
            >
              {t("Today's Revenue")}
            </Typography>
            <Typography
              noWrap
              variant="subtitle2"
              sx={{
                fontSize: `${theme.typography.pxToRem(15)}`
              }}
            >
              {t('Successful orders')}
            </Typography>
            <AvatarGroup
              sx={{
                mt: 2
              }}
              max={4}
            >
              <Tooltip arrow title="Remy Sharp">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Remy Sharp"
                  src="/static/images/avatars/3.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Travis Howard">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Travis Howard"
                  src="/static/images/avatars/5.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Cindy Baker">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Cindy Baker"
                  src="/static/images/avatars/1.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Agnes Walker">
                <Avatar
                  sx={{
                    width: 46,
                    height: 46
                  }}
                  component={RouterLink}
                  to="#"
                  alt="Agnes Walker"
                  src="/static/images/avatars/2.jpg"
                />
              </Tooltip>
            </AvatarGroup>
            <Divider
              sx={{
                width: '60%',
                alignSelf: 'center',
                mt: 3
              }}
              flexItem
            />
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Tooltip title={t('View profile')}>
                <IconButton color="secondary">
                  <VisibilityTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Add to favourites')}>
                <IconButton
                  sx={{
                    mx: 1
                  }}
                  color="secondary"
                >
                  <FavoriteTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Start voice call')}>
                <IconButton color="secondary">
                  <MicTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block5;

import {
  Box,
  Card,
  Grid,
  Typography,
  Avatar,
  Button,
  Tooltip,
  alpha,
  AvatarGroup,
  Divider,
  IconButton,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

import { Link as RouterLink } from 'react-router-dom';

const IconButtonFav = styled(IconButton)(
  ({ theme }) => `
        position: absolute;
        right: ${theme.spacing(2)};
        top: ${theme.spacing(2)};
        border-radius: 55px;
        padding: ${theme.spacing(1)};
        transition: ${theme.transitions.create(['all'])};

        &:hover {
            background: ${theme.palette.primary.main};
            color: ${theme.palette.primary.contrastText};
        }
  `
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.white[100]};
        width: ${theme.spacing(9)};
        height: ${theme.spacing(9)};
        padding: ${theme.spacing(1.8)};
        box-shadow: 0 0.180rem .3rem ${alpha(
          theme.colors.alpha.black[100],
          0.3
        )}, 0 .326rem 3rem ${alpha(theme.colors.alpha.black[100], 0.2)};
  `
);

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative'
          }}
        >
          <IconButtonFav size="small" color="primary">
            <FavoriteTwoToneIcon fontSize="small" />
          </IconButtonFav>
          <Box
            pt={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarWrapper
              variant="rounded"
              alt="Spotify"
              src="/static/images/placeholders/logo/spotify.svg"
            />
            <Typography
              gutterBottom
              noWrap
              variant="h4"
              sx={{
                pt: 3,
                fontSize: `${theme.typography.pxToRem(17)}`
              }}
            >
              {t('Development')}
            </Typography>
            <Typography noWrap variant="subtitle2">
              {t('Build React Interface')}
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
                    width: 32,
                    height: 32
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
                    width: 32,
                    height: 32
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
                    width: 32,
                    height: 32
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
                    width: 32,
                    height: 32
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
                mt: 3
              }}
              flexItem
            />
            <Box
              p={2}
              sx={{
                width: '100%'
              }}
            >
              <Button
                fullWidth
                startIcon={<AccountCircleTwoToneIcon />}
                variant="outlined"
                color="secondary"
              >
                {t('Company profile')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative'
          }}
        >
          <IconButtonFav size="small" color="primary">
            <FavoriteTwoToneIcon fontSize="small" />
          </IconButtonFav>
          <Box
            pt={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarWrapper
              variant="rounded"
              alt="Adobe"
              src="/static/images/placeholders/logo/adobe.jpg"
            />
            <Typography
              gutterBottom
              noWrap
              variant="h4"
              sx={{
                pt: 3,
                fontSize: `${theme.typography.pxToRem(17)}`
              }}
            >
              {t('Bugfixes')}
            </Typography>
            <Typography noWrap variant="subtitle2">
              {t('Resolve Github Issues')}
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
                    width: 32,
                    height: 32
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
                    width: 32,
                    height: 32
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
                    width: 32,
                    height: 32
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
                mt: 3
              }}
              flexItem
            />
            <Box
              p={2}
              sx={{
                width: '100%'
              }}
            >
              <Button
                fullWidth
                startIcon={<AccountCircleTwoToneIcon />}
                variant="outlined"
                color="secondary"
              >
                {t('Company profile')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative'
          }}
        >
          <IconButtonFav size="small" color="primary">
            <FavoriteTwoToneIcon fontSize="small" />
          </IconButtonFav>
          <Box
            pt={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarWrapper
              variant="rounded"
              alt="Slack"
              src="/static/images/placeholders/logo/slack.svg"
            />
            <Typography
              gutterBottom
              noWrap
              variant="h4"
              sx={{
                pt: 3,
                fontSize: `${theme.typography.pxToRem(17)}`
              }}
            >
              {t('Marketing')}
            </Typography>
            <Typography noWrap variant="subtitle2">
              {t('Create UI Designs')}
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
                    width: 32,
                    height: 32
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
                    width: 32,
                    height: 32
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
                    width: 32,
                    height: 32
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
                    width: 32,
                    height: 32
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
                mt: 3
              }}
              flexItem
            />
            <Box
              p={2}
              sx={{
                width: '100%'
              }}
            >
              <Button
                fullWidth
                startIcon={<AccountCircleTwoToneIcon />}
                variant="outlined"
                color="secondary"
              >
                {t('Company profile')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block6;

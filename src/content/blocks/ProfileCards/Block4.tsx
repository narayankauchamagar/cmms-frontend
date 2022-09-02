import {
  Stack,
  Box,
  Grid,
  Divider,
  Link,
  Tooltip,
  Card,
  Typography,
  alpha,
  Avatar,
  IconButton,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone';

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5
          }}
          variant="outlined"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.main
                  )}`,
                  width: 50,
                  height: 50,
                  boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`
                }}
              >
                SW
              </Avatar>
              <Box ml={1.5}>
                <Link
                  href="#"
                  color="text.primary"
                  underline="none"
                  sx={{
                    transition: `${theme.transitions.create(['color'])}`,

                    '&:hover': {
                      color: `${theme.colors.primary.main}`
                    }
                  }}
                  variant="h5"
                >
                  Shanelle Wynn
                </Link>
                <Typography variant="subtitle2">
                  UI Engineer, Apple Inc.
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  mr: 0.8,
                  width: 32,
                  height: 32,
                  background: `${alpha(theme.colors.success.main, 0.1)}`,
                  color: `${theme.colors.success.main}`
                }}
              >
                <CheckTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </Avatar>
              <Typography
                variant="body1"
                sx={{
                  fontSize: `${theme.typography.pxToRem(12)}`,
                  color: `${theme.colors.success.main}`
                }}
              >
                {t('Profile Verified')}
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              mt: 2.5
            }}
          />
          <Box display="flex" justifyContent="center" py={2}>
            <Tooltip arrow placement="top" title={t('View details')}>
              <IconButton color="primary">
                <VisibilityTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Add to favourites')}>
              <IconButton
                sx={{
                  mx: 1
                }}
                color="primary"
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('View user profile')}>
              <IconButton color="primary">
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Divider />
          <Stack
            sx={{
              mt: 2.5,
              textAlign: 'center'
            }}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Projects')}
              </Typography>
              <Typography variant="h4">381</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Reviews')}
              </Typography>
              <Typography variant="h4">198</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Revenue')}
              </Typography>
              <Typography variant="h4">$685</Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5
          }}
          variant="outlined"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`
                }}
                src="/static/images/avatars/3.jpg"
              />
              <Box ml={1.5}>
                <Link
                  href="#"
                  color="text.primary"
                  underline="none"
                  sx={{
                    transition: `${theme.transitions.create(['color'])}`,

                    '&:hover': {
                      color: `${theme.colors.primary.main}`
                    }
                  }}
                  variant="h5"
                >
                  Richard Doyle
                </Link>
                <Typography variant="subtitle2">
                  Senior Consultant, Google
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  mr: 0.8,
                  width: 32,
                  height: 32,
                  background: `${alpha(theme.colors.warning.main, 0.1)}`,
                  color: `${theme.colors.warning.main}`
                }}
              >
                <HourglassTopTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </Avatar>
              <Typography
                variant="body1"
                sx={{
                  fontSize: `${theme.typography.pxToRem(12)}`,
                  color: `${theme.colors.warning.main}`
                }}
              >
                {t('Review pending')}
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              mt: 2.5
            }}
          />
          <Box display="flex" justifyContent="center" py={2}>
            <Tooltip arrow placement="top" title={t('View details')}>
              <IconButton color="success">
                <VisibilityTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Add to favourites')}>
              <IconButton
                sx={{
                  mx: 1
                }}
                color="success"
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('View user profile')}>
              <IconButton color="success">
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(18)}`
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Divider />
          <Stack
            sx={{
              mt: 2.5,
              textAlign: 'center'
            }}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Projects')}
              </Typography>
              <Typography variant="h4">34</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Reviews')}
              </Typography>
              <Typography variant="h4">21</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Revenue')}
              </Typography>
              <Typography variant="h4">$283</Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5
          }}
          variant="outlined"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`
                }}
                src="/static/images/avatars/2.jpg"
              />
              <Box ml={1.5}>
                <Link
                  href="#"
                  color="text.primary"
                  underline="none"
                  sx={{
                    transition: `${theme.transitions.create(['color'])}`,

                    '&:hover': {
                      color: `${theme.colors.primary.main}`
                    }
                  }}
                  variant="h5"
                >
                  Johanna Becks
                </Link>
                <Typography variant="subtitle2">
                  Lead UX Designer, Spotify
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  mr: 0.8,
                  width: 32,
                  height: 32,
                  background: `${alpha(theme.colors.error.main, 0.1)}`,
                  color: `${theme.colors.error.main}`
                }}
              >
                <CloseTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </Avatar>
              <Typography
                variant="body1"
                sx={{
                  fontSize: `${theme.typography.pxToRem(12)}`,
                  color: `${theme.colors.error.main}`
                }}
              >
                {t('Rejected')}
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              mt: 2.5
            }}
          />
          <Box display="flex" justifyContent="center" py={2}>
            <IconButton disabled color="error">
              <VisibilityTwoToneIcon
                sx={{
                  fontSize: `${theme.typography.pxToRem(18)}`
                }}
              />
            </IconButton>
            <IconButton
              disabled
              sx={{
                mx: 1
              }}
              color="error"
            >
              <FavoriteTwoToneIcon
                sx={{
                  fontSize: `${theme.typography.pxToRem(18)}`
                }}
              />
            </IconButton>
            <IconButton disabled color="error">
              <PersonSearchTwoToneIcon
                sx={{
                  fontSize: `${theme.typography.pxToRem(18)}`
                }}
              />
            </IconButton>
          </Box>
          <Divider />
          <Stack
            sx={{
              mt: 2.5,
              opacity: 0.7,
              textAlign: 'center'
            }}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Projects')}
              </Typography>
              <Typography variant="h4">1</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Reviews')}
              </Typography>
              <Typography variant="h4">0</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Revenue')}
              </Typography>
              <Typography variant="h4">$87</Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block4;

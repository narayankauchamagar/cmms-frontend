import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Divider,
  ListItem,
  List,
  Rating,
  Tooltip,
  Button,
  useTheme,
  IconButton,
  Avatar,
  lighten,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';
import { US } from 'country-flag-icons/react/3x2';
import { DE } from 'country-flag-icons/react/3x2';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';

const IconButtonSuccess = styled(IconButton)(
  ({ theme }) => `
      background: ${theme.colors.success.lighter};
      color: ${theme.colors.success.main};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      margin: ${theme.spacing(0.5)};

      &:hover {
          background: ${lighten(theme.colors.success.lighter, 0.4)};
      }
`
);

const IconButtonError = styled(IconButton)(
  ({ theme }) => `
      background: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      margin: ${theme.spacing(0.5)};

      &:hover {
          background: ${lighten(theme.colors.error.lighter, 0.4)};
      }
`
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
    background-color: ${theme.colors.success.lighter};
    color: ${theme.colors.success.main};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
      flex-grow: 1;
      height: 6px;
      background-color: ${theme.colors.alpha.black[10]};

      .MuiLinearProgress-barColorPrimary {
        background-color: ${theme.colors.primary.main};
        border-top-right-radius: ${theme.general.borderRadius};
        border-bottom-right-radius: ${theme.general.borderRadius};
      }
`
);

function ReviewsTab() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={0}>
        <Grid
          xs={12}
          md={6}
          item
          sx={{
            position: 'relative'
          }}
        >
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' }
            }}
          >
            <Divider
              absolute
              sx={{
                height: '100%',
                left: 'auto',
                right: 0
              }}
              orientation="vertical"
              flexItem
            />
          </Box>
          <Box p={3}>
            <Typography variant="h2">
              {t('Customer Reviews')}{' '}
              <Typography component="span" variant="h2" color="text.secondary">
                (75)
              </Typography>
            </Typography>

            <List
              sx={{
                mt: 3
              }}
            >
              <ListItem
                disableGutters
                sx={{
                  py: 1
                }}
              >
                <Box
                  sx={{
                    minWidth: 50
                  }}
                >
                  <Typography variant="h5">5 {t('stars')}</Typography>
                </Box>
                <Box px={2} flexGrow={1}>
                  <LinearProgressWrapper
                    value={84}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 30
                  }}
                >
                  <Typography variant="h4">84%</Typography>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  py: 1
                }}
              >
                <Box
                  sx={{
                    minWidth: 50
                  }}
                >
                  <Typography variant="h5">4 {t('stars')}</Typography>
                </Box>
                <Box px={2} flexGrow={1}>
                  <LinearProgressWrapper
                    value={7}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 30
                  }}
                >
                  <Typography variant="h4">7%</Typography>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  py: 1
                }}
              >
                <Box
                  sx={{
                    minWidth: 50
                  }}
                >
                  <Typography variant="h5">3 {t('stars')}</Typography>
                </Box>
                <Box px={2} flexGrow={1}>
                  <LinearProgressWrapper
                    value={5}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 30
                  }}
                >
                  <Typography variant="h4">5%</Typography>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  py: 1
                }}
              >
                <Box
                  sx={{
                    minWidth: 50
                  }}
                >
                  <Typography variant="h5">2 {t('stars')}</Typography>
                </Box>
                <Box px={2} flexGrow={1}>
                  <LinearProgressWrapper
                    value={3}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 30
                  }}
                >
                  <Typography variant="h4">3%</Typography>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  py: 1
                }}
              >
                <Box
                  sx={{
                    minWidth: 50
                  }}
                >
                  <Typography variant="h5">1 {t('star')}</Typography>
                </Box>
                <Box px={2} flexGrow={1}>
                  <LinearProgressWrapper
                    value={1}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 30
                  }}
                >
                  <Typography variant="h4">1%</Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={4} flex={1}>
            <Box>
              <Typography
                sx={{
                  fontSize: `${theme.typography.pxToRem(51)}`
                }}
                variant="h1"
              >
                4.9
                <Typography
                  component="span"
                  color="text.secondary"
                  variant="h1"
                >
                  /5
                </Typography>
              </Typography>
            </Box>
            <Box py={2}>
              <Rating size="large" defaultValue={4} precision={1} />
            </Box>
            <Tooltip
              placement="top"
              arrow
              title={t('Only verified customers can write reviews')}
            >
              <Box component="span">
                <Button
                  disabled
                  startIcon={<RateReviewTwoToneIcon />}
                  variant="contained"
                  size="large"
                >
                  {t('Write review')}
                </Button>
              </Box>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <List>
        <ListItem
          sx={{
            display: { xs: 'block', sm: 'flex' },
            p: 3
          }}
        >
          <Box
            sx={{
              minWidth: 210,
              pb: { xs: 2, sm: 0 },
              svg: {
                width: 38
              }
            }}
          >
            <Avatar src="/static/images/avatars/5.jpg" />
            <Typography
              sx={{
                mt: 1,
                mb: 2
              }}
              variant="h5"
            >
              Brook Holding
            </Typography>
            <US title="USA" />
          </Box>
          <Box flex={1}>
            <Typography
              sx={{
                mb: 3
              }}
            >
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </Typography>
            <Box
              sx={{
                display: { xs: 'block', md: 'flex' }
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <AvatarSuccess
                  sx={{
                    mr: 1
                  }}
                >
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mr: 4
                  }}
                >
                  {t('Verified purchase')}
                </Typography>
                <Typography variant="subtitle2" color="text.primary">
                  21 July 2021
                </Typography>
              </Box>
              <Box
                sx={{
                  pt: { xs: 2, md: 0 }
                }}
              >
                <Typography
                  sx={{
                    pr: 1
                  }}
                  component="span"
                >
                  {t('Helpful')}?
                </Typography>
                <IconButtonSuccess>
                  <ThumbUpTwoToneIcon fontSize="small" />
                </IconButtonSuccess>
                <IconButtonError>
                  <ThumbDownTwoToneIcon fontSize="small" />
                </IconButtonError>
              </Box>
            </Box>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            display: { xs: 'block', sm: 'flex' },
            p: 3
          }}
        >
          <Box
            sx={{
              minWidth: 210,
              pb: { xs: 2, sm: 0 },
              svg: {
                width: 38
              }
            }}
          >
            <Avatar src="/static/images/avatars/4.jpg" />
            <Typography
              sx={{
                mt: 1,
                mb: 2
              }}
              variant="h5"
            >
              Emerson Bothman
            </Typography>
            <DE title="Germany" />
          </Box>
          <Box flex={1}>
            <Typography
              sx={{
                mb: 3
              }}
            >
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </Typography>
            <Box
              sx={{
                display: { xs: 'block', md: 'flex' }
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <AvatarSuccess
                  sx={{
                    mr: 1
                  }}
                >
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mr: 4
                  }}
                >
                  {t('Verified purchase')}
                </Typography>
                <Typography variant="subtitle2" color="text.primary">
                  20 March 2021
                </Typography>
              </Box>
              <Box
                sx={{
                  pt: { xs: 2, md: 0 }
                }}
              >
                <Typography
                  sx={{
                    pr: 1
                  }}
                  component="span"
                >
                  {t('Helpful')}?
                </Typography>
                <IconButtonSuccess>
                  <ThumbUpTwoToneIcon fontSize="small" />
                </IconButtonSuccess>
                <IconButtonError>
                  <ThumbDownTwoToneIcon fontSize="small" />
                </IconButtonError>
              </Box>
            </Box>
          </Box>
        </ListItem>
      </List>
    </>
  );
}

export default ReviewsTab;

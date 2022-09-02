import {
  Box,
  Link,
  Card,
  Badge,
  Typography,
  Avatar,
  AvatarGroup,
  IconButton,
  Divider,
  Grid,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const CardBorderBottom = styled(Card)(
  () => `
        border-bottom: transparent 5px solid;
  `
);

const CardBorderTop = styled(Card)(
  () => `
        border-top: transparent 5px solid;
  `
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
        transform: translateY(0px);
        transition: ${theme.transitions.create(['color', 'transform'])};

        .MuiSvgIcon-root {
            transform: scale(1);
            transition: ${theme.transitions.create(['transform'])};
        }

        &:hover {
            transform: translateY(-2px);
    
            .MuiSvgIcon-root {
                transform: scale(1.3);
            }
        }
  `
);

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.primary.main}`
          }}
        >
          <Box p={2}>
            <Link
              href="#"
              color="text.primary"
              underline="none"
              sx={{
                transition: `${theme.transitions.create(['color'])}`,
                fontSize: `${theme.typography.pxToRem(17)}`,

                '&:hover': {
                  color: `${theme.colors.primary.main}`
                }
              }}
              variant="h3"
            >
              Create Figma design files
            </Link>
            <Box mt={1.5} display="flex">
              <Avatar
                variant="rounded"
                sx={{
                  fontSize: `${theme.typography.pxToRem(12)}`,
                  fontWeight: 'normal',
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.main
                  )}`,
                  borderRadius: `${theme.general.borderRadiusSm}`,
                  width: 34,
                  height: 34,
                  mr: 0.5
                }}
              >
                JK
              </Avatar>
              <Box mr={0.5}>
                <Badge
                  color="success"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  variant="dot"
                  overlap="rectangular"
                >
                  <Avatar
                    variant="rounded"
                    sx={{
                      fontSize: `${theme.typography.pxToRem(12)}`,
                      fontWeight: 'normal',
                      background: `${theme.colors.alpha.black[100]}`,
                      color: `${theme.palette.getContrastText(
                        theme.colors.alpha.black[100]
                      )}`,
                      borderRadius: `${theme.general.borderRadiusSm}`,
                      width: 34,
                      height: 34
                    }}
                  >
                    HA
                  </Avatar>
                </Badge>
              </Box>
              <Avatar
                variant="rounded"
                sx={{
                  borderRadius: `${theme.general.borderRadiusSm}`,
                  width: 34,
                  mr: 0.5,
                  height: 34
                }}
                alt="Cindy Baker"
                src="/static/images/avatars/3.jpg"
              />
              <Avatar
                variant="rounded"
                sx={{
                  borderRadius: `${theme.general.borderRadiusSm}`,
                  width: 34,
                  mr: 0.5,
                  height: 34
                }}
                alt="Agnes Walker"
                src="/static/images/avatars/4.jpg"
              />
            </Box>
          </Box>
          <Divider />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            sx={{
              background: `${theme.colors.alpha.black[5]}`
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButtonWrapper
                size="small"
                sx={{
                  mr: 1.5,
                  boxShadow: `${theme.colors.shadows.primary}`,
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.main
                  )}`,

                  '&:hover': {
                    background: `${theme.colors.primary.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.primary.main
                    )}`
                  }
                }}
              >
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center'
                }}
                variant="subtitle1"
              >
                <LinkTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                55
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center'
                }}
                variant="subtitle1"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                458
              </Typography>
            </Box>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              variant="subtitle1"
            >
              <ScheduleTwoToneIcon
                sx={{
                  mr: 0.4
                }}
                fontSize="small"
              />
              {t('Today')} - 9:45 am
            </Typography>
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardBorderTop
          sx={{
            textAlign: 'center',
            borderTopColor: `${theme.colors.success.main}`
          }}
        >
          <Box p={2}>
            <Link
              href="#"
              color="text.primary"
              underline="none"
              sx={{
                transition: `${theme.transitions.create(['color'])}`,
                fontSize: `${theme.typography.pxToRem(17)}`,

                '&:hover': {
                  color: `${theme.colors.primary.main}`
                }
              }}
              variant="h3"
            >
              Implements package.json update
            </Link>
            <AvatarGroup
              sx={{
                mt: 1.5,
                justifyContent: 'center'
              }}
            >
              <Avatar
                sx={{
                  width: 44,
                  height: 44
                }}
                alt="Cindy Baker"
                src="/static/images/avatars/1.jpg"
              />
              <Avatar
                sx={{
                  width: 44,
                  height: 44
                }}
                alt="Shelly Hays"
                src="/static/images/avatars/2.jpg"
              />
              <Avatar
                sx={{
                  width: 44,
                  height: 44
                }}
                alt="Agnes Walker"
                src="/static/images/avatars/5.jpg"
              />
            </AvatarGroup>
          </Box>
          <Divider />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={1.16}
            sx={{
              background: `${theme.colors.alpha.black[5]}`
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButtonWrapper
                size="small"
                sx={{
                  mr: 1.5,
                  boxShadow: `${theme.colors.shadows.success}`,
                  background: `${theme.colors.success.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.success.dark
                  )}`,

                  '&:hover': {
                    background: `${theme.colors.success.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.success.dark
                    )}`
                  }
                }}
              >
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center'
                }}
                variant="subtitle1"
              >
                <LinkTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                34
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center'
                }}
                variant="subtitle1"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                51.2k
              </Typography>
            </Box>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              variant="subtitle1"
            >
              <ScheduleTwoToneIcon
                sx={{
                  mr: 0.4
                }}
                fontSize="small"
              />
              {t('Tomorrow')} - 5:30 pm
            </Typography>
          </Box>
        </CardBorderTop>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.error.main}`
          }}
        >
          <Box p={2}>
            <Link
              href="#"
              color="text.primary"
              underline="none"
              sx={{
                transition: `${theme.transitions.create(['color'])}`,
                fontSize: `${theme.typography.pxToRem(17)}`,

                '&:hover': {
                  color: `${theme.colors.primary.main}`
                }
              }}
              variant="h3"
            >
              Release new features
            </Link>
            <Box mt={1.5} display="flex">
              <Box mr={0.5}>
                <Badge
                  color="primary"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  overlap="circular"
                  badgeContent="7"
                >
                  <Avatar
                    sx={{
                      width: 44,
                      height: 44
                    }}
                    alt="Cindy Baker"
                    src="/static/images/avatars/1.jpg"
                  />
                </Badge>
              </Box>
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44
                }}
                alt="Travis Howard"
                src="/static/images/avatars/2.jpg"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44
                }}
                alt="Remy Sharp"
                src="/static/images/avatars/3.jpg"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44
                }}
                alt="Shelly Hays"
                src="/static/images/avatars/4.jpg"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44
                }}
                alt="Agnes Walker"
                src="/static/images/avatars/5.jpg"
              />
            </Box>
          </Box>
          <Divider />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={1.5}
            sx={{
              background: `${theme.colors.alpha.black[5]}`
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButtonWrapper
                size="small"
                sx={{
                  mr: 1.5,
                  boxShadow: `${theme.colors.shadows.error}`,
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.main
                  )}`,

                  '&:hover': {
                    background: `${theme.colors.error.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.error.main
                    )}`
                  }
                }}
              >
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center'
                }}
                variant="subtitle1"
              >
                <LinkTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                55
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center'
                }}
                variant="subtitle1"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                458
              </Typography>
            </Box>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              variant="subtitle1"
            >
              <ScheduleTwoToneIcon
                sx={{
                  mr: 0.4
                }}
                fontSize="small"
              />
              {t('Today')} - 9:45 am
            </Typography>
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            background: `${theme.colors.gradients.blue3}`
          }}
          variant="outlined"
        >
          <Box p={2}>
            <Link
              href="#"
              sx={{
                transition: `${theme.transitions.create(['color'])}`,
                color: `${theme.colors.alpha.trueWhite[100]}`,
                fontSize: `${theme.typography.pxToRem(17)}`,

                '&:hover': {
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }
              }}
              variant="h3"
            >
              Create Figma design files
            </Link>
            <Box mt={1.5} display="flex">
              <Avatar
                variant="rounded"
                sx={{
                  fontSize: `${theme.typography.pxToRem(12)}`,
                  fontWeight: 'normal',
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.main
                  )}`,
                  borderRadius: `${theme.general.borderRadiusSm}`,
                  width: 34,
                  height: 34,
                  mr: 0.5,
                  boxShadow:
                    '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                }}
              >
                JK
              </Avatar>
              <Box mr={0.5}>
                <Badge
                  color="success"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  variant="dot"
                  overlap="rectangular"
                >
                  <Avatar
                    variant="rounded"
                    sx={{
                      fontSize: `${theme.typography.pxToRem(12)}`,
                      fontWeight: 'normal',
                      background: `${theme.colors.primary.main}`,
                      color: `${theme.palette.getContrastText(
                        theme.colors.primary.dark
                      )}`,
                      borderRadius: `${theme.general.borderRadiusSm}`,
                      width: 34,
                      height: 34,
                      boxShadow:
                        '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                    }}
                  >
                    HA
                  </Avatar>
                </Badge>
              </Box>
              <Avatar
                variant="rounded"
                sx={{
                  borderRadius: `${theme.general.borderRadiusSm}`,
                  width: 34,
                  mr: 0.5,
                  height: 34,
                  boxShadow:
                    '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                }}
                alt="Cindy Baker"
                src="/static/images/avatars/3.jpg"
              />
              <Avatar
                variant="rounded"
                sx={{
                  borderRadius: `${theme.general.borderRadiusSm}`,
                  width: 34,
                  mr: 0.5,
                  height: 34,
                  boxShadow:
                    '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                }}
                alt="Agnes Walker"
                src="/static/images/avatars/4.jpg"
              />
            </Box>
          </Box>
          <Divider
            sx={{
              background: `${theme.colors.alpha.trueWhite[10]}`
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            sx={{
              background: `${theme.colors.alpha.trueWhite[5]}`
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButtonWrapper
                size="small"
                sx={{
                  mr: 1.5,
                  boxShadow: `${theme.colors.shadows.primary}`,
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.main
                  )}`,

                  '&:hover': {
                    background: `${theme.colors.primary.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.primary.main
                    )}`
                  }
                }}
              >
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
                variant="subtitle1"
              >
                <LinkTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                55
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
                variant="subtitle1"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                458
              </Typography>
            </Box>
            <Typography
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="subtitle1"
            >
              <ScheduleTwoToneIcon
                sx={{
                  mr: 0.4
                }}
                fontSize="small"
              />
              {t('Today')} - 9:45 am
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            background: `${theme.colors.gradients.black2}`,
            textAlign: 'center'
          }}
          variant="outlined"
        >
          <Box p={2}>
            <Link
              href="#"
              sx={{
                transition: `${theme.transitions.create(['color'])}`,
                color: `${theme.colors.alpha.trueWhite[100]}`,
                fontSize: `${theme.typography.pxToRem(17)}`,

                '&:hover': {
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }
              }}
              variant="h3"
            >
              Implements package.json update
            </Link>
            <Box display="flex" mt={1.5} justifyContent="center">
              <Avatar
                sx={{
                  width: 44,
                  height: 44,
                  boxShadow:
                    '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                }}
                alt="Cindy Baker"
                src="/static/images/avatars/1.jpg"
              />
              <Avatar
                sx={{
                  width: 44,
                  height: 44,
                  mx: 1,
                  boxShadow:
                    '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                }}
                alt="Shelly Hays"
                src="/static/images/avatars/2.jpg"
              />
              <Avatar
                sx={{
                  width: 44,
                  height: 44,
                  boxShadow:
                    '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                }}
                alt="Agnes Walker"
                src="/static/images/avatars/5.jpg"
              />
            </Box>
          </Box>
          <Divider
            sx={{
              background: `${theme.colors.alpha.trueWhite[10]}`
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={1.5}
            sx={{
              background: `${theme.colors.alpha.trueWhite[5]}`
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButtonWrapper
                size="small"
                sx={{
                  mr: 1.5,
                  boxShadow: `${theme.colors.shadows.success}`,
                  background: `${theme.colors.success.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.success.dark
                  )}`,

                  '&:hover': {
                    background: `${theme.colors.success.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.success.dark
                    )}`
                  }
                }}
              >
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
                variant="subtitle1"
              >
                <LinkTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                34
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
                variant="subtitle1"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                51.2k
              </Typography>
            </Box>
            <Typography
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="subtitle1"
            >
              <ScheduleTwoToneIcon
                sx={{
                  mr: 0.4
                }}
                fontSize="small"
              />
              {t('Tomorrow')} - 5:30 pm
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            background: `${theme.colors.gradients.black1}`
          }}
          variant="outlined"
        >
          <Box p={2}>
            <Link
              href="#"
              sx={{
                transition: `${theme.transitions.create(['color'])}`,
                color: `${theme.colors.alpha.trueWhite[100]}`,
                fontSize: `${theme.typography.pxToRem(17)}`,

                '&:hover': {
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }
              }}
              variant="h3"
            >
              Release new features
            </Link>
            <Box mt={1.5} display="flex">
              <Box mr={0.5}>
                <Badge
                  color="primary"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  overlap="circular"
                  badgeContent="7"
                >
                  <Avatar
                    sx={{
                      width: 44,
                      height: 44,
                      boxShadow:
                        '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                    }}
                    alt="Cindy Baker"
                    src="/static/images/avatars/1.jpg"
                  />
                </Badge>
              </Box>
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                  boxShadow:
                    '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                }}
                alt="Travis Howard"
                src="/static/images/avatars/2.jpg"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                  boxShadow:
                    '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                }}
                alt="Remy Sharp"
                src="/static/images/avatars/3.jpg"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                  boxShadow:
                    '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                }}
                alt="Shelly Hays"
                src="/static/images/avatars/4.jpg"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                  boxShadow:
                    '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)'
                }}
                alt="Agnes Walker"
                src="/static/images/avatars/5.jpg"
              />
            </Box>
          </Box>
          <Divider
            sx={{
              background: `${theme.colors.alpha.trueWhite[10]}`
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={1.5}
            sx={{
              background: `${theme.colors.alpha.trueWhite[5]}`
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButtonWrapper
                size="small"
                sx={{
                  mr: 1.5,
                  boxShadow: `${theme.colors.shadows.error}`,
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.main
                  )}`,

                  '&:hover': {
                    background: `${theme.colors.error.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.error.main
                    )}`
                  }
                }}
              >
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
                variant="subtitle1"
              >
                <LinkTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                55
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
                variant="subtitle1"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    mr: 0.4
                  }}
                  fontSize="small"
                />
                458
              </Typography>
            </Box>
            <Typography
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="subtitle1"
            >
              <ScheduleTwoToneIcon
                sx={{
                  mr: 0.4
                }}
                fontSize="small"
              />
              {t('Today')} - 9:45 am
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block1;

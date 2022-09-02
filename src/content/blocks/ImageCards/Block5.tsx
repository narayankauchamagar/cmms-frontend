import {
  alpha,
  Box,
  Card,
  Avatar,
  darken,
  Grid,
  CardMedia,
  Typography,
  Link,
  Divider,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import { format, subDays } from 'date-fns';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    top: ${theme.spacing(2)};
    right: ${theme.spacing(2)};
    z-index: 7;
    display: flex;
  `
);

const Label = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.success.main};
    color: ${theme.palette.success.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 1.2)};
    border-radius: 50px;
  `
);

const BgComposed = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 6;
    background: ${darken(alpha(theme.colors.secondary.main, 0.7), 0.8)};
    box-shadow: inset 0 0 4rem 1rem ${darken(theme.colors.secondary.main, 0.9)};
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={6}>
        <Card
          sx={{
            textAlign: 'center',
            position: 'relative',
            transition: `${theme.transitions.create(['box-shadow'])}`,

            '&:hover': {
              boxShadow: `0 2rem 8rem 0 ${alpha(
                theme.colors.alpha.black[100],
                0.05
              )}, 
                0 0.6rem 1.6rem ${alpha(theme.colors.alpha.black[100], 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.colors.alpha.black[100], 0.1)}`
            }
          }}
        >
          <BgComposed
            sx={{
              p: { xs: 3, md: 5, lg: 10 }
            }}
          >
            <Link
              href="#"
              underline="none"
              lineHeight={1.5}
              variant="h1"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`,

                '&:hover': {
                  color: `${alpha(theme.colors.alpha.trueWhite[100], 0.9)}`
                }
              }}
            >
              {t('The Ultimate UI Design System at your fingertips!')}
            </Link>
            <Typography
              variant="subtitle2"
              sx={{
                mt: 2,
                fontSize: `${theme.typography.pxToRem(16)}`,
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              {t(
                'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
              )}
              .
            </Typography>
            <Divider
              sx={{
                my: 3,
                background: `${theme.colors.alpha.trueWhite[10]}`
              }}
            />
            <Avatar
              sx={{
                width: 72,
                height: 72,
                mx: 'auto',
                mb: 1
              }}
              src="/static/images/avatars/1.jpg"
            />
            <Typography
              variant="h4"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              Dalia Finney
            </Typography>
            <Divider
              sx={{
                my: 3,
                background: `${theme.colors.alpha.trueWhite[10]}`
              }}
            />
            <Button
              sx={{
                px: 2.5,
                py: 1.5,
                borderRadius: 10,
                transform: 'scale(1)',
                transition: `${theme.transitions.create(['all'])}`,
                boxShadow: `${theme.colors.shadows.error}`,

                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: `${theme.colors.shadows.error}`
                },
                '&:active': {
                  boxShadow: 'none'
                }
              }}
              variant="contained"
              color="error"
            >
              {t('Read more')}
            </Button>
          </BgComposed>
          <CardMedia
            component="img"
            height={'100%'}
            width={'auto'}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              borderRadius: 'inherit',
              zIndex: 5
            }}
            image="/static/images/placeholders/covers/5.jpg"
            alt="..."
          />
          <CardActions>
            <Label
              sx={{
                mr: 1,
                background: `${theme.palette.info.main}`,
                color: `${theme.palette.info.contrastText}`
              }}
            >
              {t('Marketing')}
            </Label>
            <Label
              sx={{
                background: `${theme.palette.warning.main}`,
                color: `${theme.palette.warning.contrastText}`
              }}
            >
              {t('Development')}
            </Label>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Card
          sx={{
            position: 'relative',
            transition: `${theme.transitions.create(['box-shadow'])}`,

            '&:hover': {
              boxShadow: `0 2rem 8rem 0 ${alpha(
                theme.colors.alpha.black[100],
                0.05
              )}, 
                0 0.6rem 1.6rem ${alpha(theme.colors.alpha.black[100], 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.colors.alpha.black[100], 0.1)}`
            }
          }}
        >
          <BgComposed
            sx={{
              p: { xs: 3, md: 5, lg: 8 }
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <Avatar
                  sx={{
                    width: 44,
                    height: 44
                  }}
                  src="/static/images/avatars/3.jpg"
                />

                <Box ml={1.5}>
                  <Link
                    href="#"
                    variant="h4"
                    gutterBottom
                    sx={{
                      color: `${theme.colors.alpha.trueWhite[100]}`
                    }}
                  >
                    Shanelle Wynn
                  </Link>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: `${theme.colors.alpha.trueWhite[70]}`
                    }}
                  >
                    UI Engineer, Apple Inc.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex">
                <Label
                  sx={{
                    mr: 1,
                    borderRadius: `${theme.general.borderRadiusSm}`,
                    background: `${theme.palette.error.main}`,
                    color: `${theme.palette.error.contrastText}`
                  }}
                >
                  {t('Sales')}
                </Label>
                <Label
                  sx={{
                    borderRadius: `${theme.general.borderRadiusSm}`,
                    background: `${theme.palette.success.main}`,
                    color: `${theme.palette.success.contrastText}`
                  }}
                >
                  {t('Deploys')}
                </Label>
              </Box>
            </Box>
            <Divider
              sx={{
                my: 3,
                background: `${theme.colors.alpha.trueWhite[10]}`
              }}
            />
            <Link
              href="#"
              underline="none"
              lineHeight={1.5}
              variant="h1"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`,

                '&:hover': {
                  color: `${alpha(theme.colors.alpha.trueWhite[100], 0.9)}`
                }
              }}
            >
              {t('The Ultimate UI Design System at your fingertips!')}
            </Link>
            <Typography
              variant="subtitle2"
              sx={{
                mt: 2,
                fontSize: `${theme.typography.pxToRem(16)}`,
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              {t(
                'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
              )}
              .
            </Typography>
            <Divider
              sx={{
                my: 3,
                background: `${theme.colors.alpha.trueWhite[10]}`
              }}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="subtitle1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
              >
                <AccessTimeTwoToneIcon
                  fontSize="small"
                  sx={{
                    opacity: 0.7,
                    mr: 0.5
                  }}
                />
                {format(subDays(new Date(), 2), 'MMMM dd yyyy')}
              </Typography>
              <Button variant="contained" color="primary">
                {t('Read more')}
              </Button>
            </Box>
          </BgComposed>
          <CardMedia
            component="img"
            height={'100%'}
            width={'auto'}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              borderRadius: 'inherit',
              zIndex: 5
            }}
            image="/static/images/placeholders/covers/3.jpg"
            alt="..."
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block5;

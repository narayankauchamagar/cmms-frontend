import {
  alpha,
  Box,
  Card,
  Link,
  Grid,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
    z-index: 7;
    display: flex;
  `
);

const LabelWrapper = styled(Box)(
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

const CardActionAreaWrapper = styled(CardActionArea)(
  () => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .MuiTouchRipple-root {
        opacity: .3;
    }

    &:hover {
        .MuiCardActionArea-focusHighlight {
            opacity: .05;
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
        <Box>
          <Card
            sx={{
              textAlign: 'center',
              transition: `${theme.transitions.create([
                'box-shadow',
                'transform'
              ])}`,
              transform: 'translateY(0px)',

              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: `0 2rem 8rem 0 ${alpha(
                  theme.colors.alpha.black[100],
                  0.1
                )}, 
                                0 0.6rem 1.6rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.2
                                )}, 
                                0 0.2rem 0.2rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.15
                                )}`
              }
            }}
          >
            <CardActionAreaWrapper>
              <CardMedia
                component="img"
                height="230"
                image="/static/images/placeholders/covers/1.jpg"
                alt="..."
              />
              <CardActions>
                <LabelWrapper>{t('Updated')}</LabelWrapper>
              </CardActions>
            </CardActionAreaWrapper>
          </Card>
          <Box
            sx={{
              px: { md: 2, lg: 1.5, xl: 3 },
              pt: 3,
              textAlign: 'center'
            }}
          >
            <Link
              lineHeight={1.5}
              href="#"
              sx={{
                transition: `${theme.transitions.create(['color'])}`,
                color: `${theme.colors.alpha.black[100]}`,

                '&:hover': {
                  color: `${theme.colors.primary.main}`
                }
              }}
              color="text.primary"
              variant="h3"
              underline="none"
            >
              {t('The Ultimate UI Design System at your fingertips!')}
            </Link>
            <Typography
              variant="subtitle2"
              sx={{
                py: 2
              }}
            >
              {t(
                'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
              )}
              .
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              {t('View details')}
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <Card
            sx={{
              textAlign: 'center',
              transition: `${theme.transitions.create([
                'box-shadow',
                'transform'
              ])}`,
              transform: 'translateY(0px)',

              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: `0 2rem 8rem 0 ${alpha(
                  theme.colors.alpha.black[100],
                  0.1
                )}, 
                                0 0.6rem 1.6rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.2
                                )}, 
                                0 0.2rem 0.2rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.15
                                )}`
              }
            }}
          >
            <CardActionAreaWrapper>
              <CardMedia
                component="img"
                height="230"
                image="/static/images/placeholders/covers/3.jpg"
                alt="..."
              />
              <CardActions
                sx={{
                  bottom: 'auto',
                  top: `${theme.spacing(2)}`
                }}
              >
                <LabelWrapper
                  sx={{
                    mr: 1,
                    background: `${theme.colors.primary.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.primary.dark
                    )}`
                  }}
                >
                  {t('Hot')}
                </LabelWrapper>
                <LabelWrapper
                  sx={{
                    background: `${theme.colors.error.main}`,
                    color: `${theme.palette.getContrastText(
                      theme.colors.error.dark
                    )}`
                  }}
                >
                  {t('New')}
                </LabelWrapper>
              </CardActions>
            </CardActionAreaWrapper>
          </Card>
          <Box
            sx={{
              px: { md: 2, lg: 1.5, xl: 3 },
              pt: 3,
              textAlign: 'center'
            }}
          >
            <Link
              lineHeight={1.5}
              href="#"
              sx={{
                transition: `${theme.transitions.create(['color'])}`,
                color: `${theme.colors.alpha.black[100]}`,

                '&:hover': {
                  color: `${theme.colors.primary.main}`
                }
              }}
              color="text.primary"
              variant="h3"
              underline="none"
            >
              {t('The Ultimate UI Design System at your fingertips!')}
            </Link>
            <Typography
              variant="subtitle2"
              sx={{
                py: 2
              }}
            >
              {t(
                'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
              )}
              .
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              {t('View details')}
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <Card
            sx={{
              textAlign: 'center',
              transition: `${theme.transitions.create([
                'box-shadow',
                'transform'
              ])}`,
              transform: 'translateY(0px)',

              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: `0 2rem 8rem 0 ${alpha(
                  theme.colors.alpha.black[100],
                  0.1
                )}, 
                                0 0.6rem 1.6rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.2
                                )}, 
                                0 0.2rem 0.2rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.15
                                )}`
              }
            }}
          >
            <CardActionAreaWrapper>
              <CardMedia
                component="img"
                height="230"
                image="/static/images/placeholders/covers/5.jpg"
                alt="..."
              />
              <CardActions
                sx={{
                  right: 'auto',
                  left: `${theme.spacing(2)}`
                }}
              >
                <LabelWrapper
                  sx={{
                    background: `${theme.colors.gradients.blue1}`,
                    color: `${theme.colors.alpha.trueWhite[100]}`
                  }}
                >
                  {t('New')}
                </LabelWrapper>
              </CardActions>
            </CardActionAreaWrapper>
          </Card>
          <Box
            sx={{
              px: { md: 2, lg: 1.5, xl: 3 },
              pt: 3,
              textAlign: 'center'
            }}
          >
            <Link
              lineHeight={1.5}
              href="#"
              sx={{
                transition: `${theme.transitions.create(['color'])}`,
                color: `${theme.colors.alpha.black[100]}`,

                '&:hover': {
                  color: `${theme.colors.primary.main}`
                }
              }}
              color="text.primary"
              variant="h3"
              underline="none"
            >
              {t('The Ultimate UI Design System at your fingertips!')}
            </Link>
            <Typography
              variant="subtitle2"
              sx={{
                py: 2
              }}
            >
              {t(
                'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
              )}
              .
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              {t('View details')}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Block1;

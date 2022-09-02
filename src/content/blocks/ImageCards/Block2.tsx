import {
  alpha,
  Box,
  Card,
  Link,
  Grid,
  Avatar,
  CardMedia,
  Typography,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import { format, formatDistance, subMinutes, subDays } from 'date-fns';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

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

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
        width: ${theme.spacing(10)};
        height: ${theme.spacing(10)};
        box-shadow: ${theme.colors.shadows.primary};
        top: -${theme.spacing(5)};
        position: absolute;
        border: ${theme.colors.alpha.white[100]} solid 3px;
  `
);

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            transition: `${theme.transitions.create([
              'box-shadow',
              'transform',
              'border-radius'
            ])}`,
            transform: 'translateY(0px)',

            '&:hover': {
              transform: `translateY(-${theme.spacing(1)})`,
              boxShadow: `0 2rem 8rem 0 ${alpha(
                theme.colors.alpha.black[100],
                0.05
              )}, 
                    0 0.6rem 1.6rem ${alpha(
                      theme.colors.alpha.black[100],
                      0.15
                    )}, 
                    0 0.2rem 0.2rem ${alpha(
                      theme.colors.alpha.black[100],
                      0.1
                    )}`
            }
          }}
        >
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image="/static/images/placeholders/covers/2.jpg"
              alt="..."
            />
            <CardActions>
              <LabelWrapper
                sx={{
                  background: `${theme.colors.gradients.pink2}`,
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
              >
                {t('Updated')}
              </LabelWrapper>
            </CardActions>
          </Box>
          <Box
            sx={{
              position: 'relative',
              px: 3,
              pt: 8,
              pb: 3
            }}
          >
            <AvatarWrapper src="/static/images/avatars/1.jpg" />
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
              variant="subtitle1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                pt: 1
              }}
            >
              <AccessTimeTwoToneIcon
                fontSize="small"
                sx={{
                  opacity: 0.7,
                  mr: 0.5
                }}
              />
              {format(subDays(new Date(), 1), 'MMMM dd yyyy')}
            </Typography>
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
              endIcon={<ArrowForwardTwoToneIcon />}
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              {t('Read more')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            transition: `${theme.transitions.create([
              'box-shadow',
              'transform',
              'border-radius'
            ])}`,
            transform: 'translateY(0px)',

            '&:hover': {
              transform: `translateY(-${theme.spacing(1)})`,
              boxShadow: `0 2rem 8rem 0 ${alpha(
                theme.colors.alpha.black[100],
                0.05
              )}, 
                    0 0.6rem 1.6rem ${alpha(
                      theme.colors.alpha.black[100],
                      0.15
                    )}, 
                    0 0.2rem 0.2rem ${alpha(
                      theme.colors.alpha.black[100],
                      0.1
                    )}`
            }
          }}
        >
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image="/static/images/placeholders/covers/4.jpg"
              alt="..."
            />
            <CardActions
              sx={{
                bottom: 'auto',
                top: `${theme.spacing(2)}`,
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
                {t('New & Hot')}
              </LabelWrapper>
            </CardActions>
          </Box>
          <Box
            sx={{
              position: 'relative',
              px: 3,
              pt: 8,
              pb: 3
            }}
          >
            <AvatarWrapper
              variant="rounded"
              sx={{
                boxShadow: 'none',
                borderWidth: 5
              }}
              src="/static/images/avatars/2.jpg"
            />
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
              variant="subtitle1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                pt: 1
              }}
            >
              <AccessTimeTwoToneIcon
                fontSize="small"
                sx={{
                  opacity: 0.7,
                  mr: 0.5
                }}
              />
              {formatDistance(subMinutes(new Date(), 12), new Date(), {
                addSuffix: true
              })}
            </Typography>
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
              endIcon={<ArrowForwardTwoToneIcon />}
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              {t('Read more')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block2;

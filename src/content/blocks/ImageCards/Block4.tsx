import {
  alpha,
  Box,
  Card,
  Avatar,
  darken,
  Grid,
  CardMedia,
  Typography,
  IconButton,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
    z-index: 7;
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
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: ${theme.transitions.create(['opacity'])};
    background: ${darken(alpha(theme.colors.primary.main, 0.9), 0.8)};
    z-index: 6;
    opacity: 0;
    box-shadow: inset 0 0 2.3rem 0.5rem ${darken(
      theme.colors.primary.main,
      0.9
    )};
  `
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
        width: ${theme.spacing(6)};
        height: ${theme.spacing(6)};
        transition: ${theme.transitions.create(['color', 'transform'])};
        border-radius: 100px;

        .MuiSvgIcon-root {
            transform: scale(1);
            transition: ${theme.transitions.create(['transform'])};
        }

        &:hover {
            .MuiSvgIcon-root {
                transform: scale(1.3);
            }
        }
  `
);

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            textAlign: 'center',
            position: 'relative',
            transition: `${theme.transitions.create([
              'box-shadow',
              'transform'
            ])}`,
            transform: 'translateY(0px)',

            '&:hover': {
              transform: `translateY(-${theme.spacing(0.5)})`,
              boxShadow: `0 2rem 8rem 0 ${alpha(
                theme.colors.alpha.black[100],
                0.05
              )}, 
                0 0.6rem 1.6rem ${alpha(theme.colors.alpha.black[100], 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.colors.alpha.black[100], 0.1)}`,

              '& .MuiBgComposed': {
                opacity: 1
              }
            }
          }}
        >
          <BgComposed
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="MuiBgComposed"
          >
            <IconButtonWrapper
              sx={{
                mx: 0.5,
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
              <FacebookIcon fontSize="small" />
            </IconButtonWrapper>
            <IconButtonWrapper
              sx={{
                mx: 0.5,
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
              <TwitterIcon fontSize="small" />
            </IconButtonWrapper>
          </BgComposed>
          <CardMedia
            component="img"
            height="260"
            sx={{
              borderRadius: 'inherit',
              position: 'relative',
              zIndex: 5
            }}
            image="/static/images/placeholders/covers/5.jpg"
            alt="..."
          />
          <CardActions
            sx={{
              right: 'auto',
              left: `${theme.spacing(2)}`
            }}
          >
            <Label
              sx={{
                background: `${theme.palette.primary.main}`,
                color: `${theme.palette.primary.contrastText}`
              }}
            >
              {t('Development')}
            </Label>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            textAlign: 'center',
            position: 'relative',
            transition: `${theme.transitions.create([
              'box-shadow',
              'transform'
            ])}`,
            transform: 'translateY(0px)',

            '&:hover': {
              transform: `translateY(-${theme.spacing(0.5)})`,
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
                        )}`,

              '& .MuiBgComposed': {
                opacity: 1
              }
            }
          }}
        >
          <BgComposed
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            className="MuiBgComposed"
          >
            <Avatar
              sx={{
                width: 62,
                height: 62,
                mb: 1,
                border: `${theme.colors.alpha.trueWhite[100]} solid 3px`
              }}
              src="/static/images/avatars/3.jpg"
            />
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              Darrell Devlin
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 2,
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              Senior UX Developer, Slack.com
            </Typography>
            <Button
              sx={{
                px: 2.5,
                borderRadius: 10,
                transform: 'scale(1)',
                transition: `${theme.transitions.create(['all'])}`,
                boxShadow: `${theme.colors.shadows.info}`,

                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: `${theme.colors.shadows.info}`
                },
                '&:active': {
                  boxShadow: 'none'
                }
              }}
              variant="contained"
              color="info"
              startIcon={<AccountBoxTwoToneIcon />}
            >
              {t('View profile')}
            </Button>
          </BgComposed>
          <CardMedia
            component="img"
            height="260"
            sx={{
              borderRadius: 'inherit',
              position: 'relative',
              zIndex: 5
            }}
            image="/static/images/placeholders/covers/3.jpg"
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
            <Label
              sx={{
                background: `${theme.palette.info.main}`,
                color: `${theme.palette.info.contrastText}`
              }}
            >
              {t('Travel')}
            </Label>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            textAlign: 'center',
            position: 'relative',
            transition: `${theme.transitions.create([
              'box-shadow',
              'transform'
            ])}`,
            transform: 'translateY(0px)',

            '&:hover': {
              transform: `translateY(-${theme.spacing(0.5)})`,
              boxShadow: `0 2rem 8rem 0 ${alpha(
                theme.colors.alpha.black[100],
                0.05
              )}, 
                0 0.6rem 1.6rem ${alpha(theme.colors.alpha.black[100], 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.colors.alpha.black[100], 0.1)}`,

              '& .MuiBgComposed': {
                opacity: 1
              }
            }
          }}
        >
          <BgComposed
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="MuiBgComposed"
          >
            <IconButtonWrapper
              sx={{
                mx: 0.5,
                border: `${theme.colors.alpha.trueWhite[100]} solid 2px`,
                background: `${theme.colors.alpha.trueWhite[5]}`,
                color: `${theme.colors.alpha.trueWhite[100]}`,
                transition: `${theme.transitions.create(['all'])}`,

                '&:hover': {
                  background: `${theme.colors.alpha.trueWhite[100]}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.alpha.trueWhite[100]
                  )}`
                }
              }}
            >
              <FacebookIcon fontSize="small" />
            </IconButtonWrapper>
            <IconButtonWrapper
              sx={{
                mx: 0.5,
                border: `${theme.colors.alpha.trueWhite[100]} solid 2px`,
                background: `${theme.colors.alpha.trueWhite[5]}`,
                color: `${theme.colors.alpha.trueWhite[100]}`,
                transition: `${theme.transitions.create(['all'])}`,

                '&:hover': {
                  background: `${theme.colors.alpha.trueWhite[100]}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.alpha.trueWhite[100]
                  )}`
                }
              }}
            >
              <TwitterIcon fontSize="small" />
            </IconButtonWrapper>
          </BgComposed>
          <CardMedia
            component="img"
            height="260"
            sx={{
              borderRadius: 'inherit',
              position: 'relative',
              zIndex: 5
            }}
            image="/static/images/placeholders/covers/4.jpg"
            alt="..."
          />
          <CardActions
            sx={{
              right: 'auto',
              left: `${theme.spacing(2)}`
            }}
          >
            <Label
              sx={{
                background: `${theme.palette.success.main}`,
                color: `${theme.palette.success.contrastText}`
              }}
            >
              {t('Marketing')}
            </Label>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block4;

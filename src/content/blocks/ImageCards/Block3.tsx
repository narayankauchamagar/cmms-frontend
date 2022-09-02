import {
  Box,
  Card,
  Link,
  Grid,
  Avatar,
  CardMedia,
  Divider,
  Typography,
  CardActionArea,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import { format, subDays } from 'date-fns';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
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
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .MuiTouchRipple-root {
        opacity: .3;
    }

    .MuiCardActionArea-focusHighlight {
        background: ${theme.colors.alpha.trueWhite[100]};
    }

    &:hover {
        .MuiCardActionArea-focusHighlight {
            opacity: .1;
        }
    }
  `
);

const CardContentWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: ${theme.spacing(3)};
    display: flex;
    align-items: flex-end;
    background: linear-gradient(180deg, rgba(7,9,25,0.1) 0%, rgba(7,9,25,0.1) 40%, rgba(7,9,25,0.85) 100%);
  `
);

function Block3() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardActionAreaWrapper>
            <CardMedia
              component="img"
              height="280"
              image="/static/images/placeholders/covers/2.jpg"
              alt="..."
            />
            <CardActions>
              <LabelWrapper
                sx={{
                  background: `${theme.colors.gradients.orange1}`,
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
              >
                {t('New')}
              </LabelWrapper>
            </CardActions>
            <CardContentWrapper>
              <Typography
                lineHeight={1.5}
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
                variant="h2"
              >
                {t('The Ultimate UI Design System at your fingertips!')}
              </Typography>
            </CardContentWrapper>
          </CardActionAreaWrapper>
          <Box
            sx={{
              position: 'relative',
              p: 3
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
                  <Link href="#" variant="h4" gutterBottom>
                    Shanelle Wynn
                  </Link>
                  <Typography variant="subtitle2">
                    UI Engineer, Apple Inc.
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <AccessTimeTwoToneIcon
                  fontSize="small"
                  sx={{
                    opacity: 0.7,
                    mr: 0.5
                  }}
                />
                {format(subDays(new Date(), 5), 'MMMM dd yyyy')}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              color="text.secondary"
              fontWeight="normal"
              sx={{
                py: 2
              }}
            >
              {t(
                'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
              )}
              .
            </Typography>
            <Divider
              sx={{
                mb: 2
              }}
            />
            <Button
              variant="contained"
              color="info"
              endIcon={<ArrowForwardTwoToneIcon />}
              sx={{
                borderRadius: 10,
                px: 3
              }}
            >
              {t('Learn more')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            p: 3
          }}
        >
          <CardActionAreaWrapper
            sx={{
              overflow: 'hidden',
              borderRadius: `${theme.general.borderRadius}`,
              mb: 3
            }}
          >
            <CardMedia
              component="img"
              height="199"
              image="/static/images/placeholders/covers/1.jpg"
              alt="..."
            />
            <CardActions>
              <LabelWrapper
                sx={{
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.main
                  )}`
                }}
              >
                {t('Updated')}
              </LabelWrapper>
            </CardActions>
            <CardContentWrapper justifyContent="center">
              <Typography
                lineHeight={1.5}
                textAlign="center"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
                variant="h2"
              >
                {t('The Ultimate UI Design System at your fingertips!')}
              </Typography>
            </CardContentWrapper>
          </CardActionAreaWrapper>
          <Box
            sx={{
              textAlign: 'center',
              position: 'relative'
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
            >
              <Avatar
                sx={{
                  width: 74,
                  height: 74,
                  mb: 1
                }}
                src="/static/images/avatars/5.jpg"
              />
              <Link href="#" variant="h3" gutterBottom>
                Johanna Becks
              </Link>
              <Typography variant="subtitle2">
                Lead UX Designer, Spotify
              </Typography>
            </Box>
            <Typography
              textAlign="center"
              lineHeight="1.5"
              variant="h4"
              color="text.primary"
              fontWeight="normal"
              sx={{
                py: 3
              }}
            >
              {t(
                'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
              )}
              .
            </Typography>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardTwoToneIcon />}
              sx={{
                borderRadius: 10,
                px: 3
              }}
            >
              {t('Learn more')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block3;

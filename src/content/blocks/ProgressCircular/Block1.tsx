import {
  Grid,
  Box,
  Card,
  Typography,
  IconButton,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar';

const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: 10px;
      height: 10px;
      display: inline-block;
      margin-right: ${theme.spacing(0.5)};
  `
);

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 7;
  `
);

const LabelError = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.error.main};
    color: ${theme.palette.error.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(16)};
    font-weight: bold;
    padding: ${theme.spacing(1, 2)};
    border-radius: 80px;
  `
);

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const data = {
    percentage1: 63,
    percentage2: 87,
    percentage3: 75
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative'
          }}
        >
          <Typography
            sx={{
              py: 3,
              fontSize: `${theme.typography.pxToRem(18)}`
            }}
            variant="h4"
            textAlign="center"
          >
            {t('Storage Status')}
          </Typography>
          <CardActions>
            <IconButton size="small" color="secondary">
              <MoreVertTwoToneIcon />
            </IconButton>
          </CardActions>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '170px'
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={1}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 4,
                trailColor: theme.colors.warning.main,
                pathColor: theme.colors.primary.main,
                strokeLinecap: 'round'
              })}
              strokeWidth={9}
              value={data.percentage1}
            >
              <Typography
                color="primary"
                sx={{
                  mt: -2
                }}
                variant="h1"
              >
                {`${data.percentage1}%`}
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Box
            my={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              mx={0.5}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <DotLegend
                style={{
                  background: `${theme.colors.primary.main}`
                }}
              />
              <Typography
                sx={{
                  fontWeight: 'bold',
                  lineHeight: 1
                }}
                variant="subtitle2"
                color="text.primary"
              >
                {t('Available')}
              </Typography>
            </Box>
            <Box
              mx={0.5}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <DotLegend
                style={{
                  background: `${theme.colors.warning.main}`
                }}
              />
              <Typography
                sx={{
                  fontWeight: 'bold',
                  lineHeight: 1
                }}
                variant="subtitle2"
                color="text.primary"
              >
                {t('Total')}
              </Typography>
            </Box>
          </Box>
          <Box mx={3} pt={1} mb={3}>
            <Button
              fullWidth
              variant="text"
              color="secondary"
              sx={{
                backgroundColor: `${theme.colors.secondary.lighter}`,
                py: 1,
                fontSize: `${theme.typography.pxToRem(13)}`,
                textTransform: 'uppercase',
                '&:hover': {
                  backgroundColor: `${theme.colors.secondary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.secondary.main
                  )}`
                }
              }}
            >
              {t('Increase storage')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative'
          }}
        >
          <Typography
            sx={{
              py: 3,
              fontSize: `${theme.typography.pxToRem(18)}`
            }}
            variant="h4"
            textAlign="center"
          >
            {t('Active Issues')}
          </Typography>
          <CardActions>
            <IconButton size="small" color="secondary">
              <MoreVertTwoToneIcon />
            </IconButton>
          </CardActions>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '163px'
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2.2 + 1 / 5.85,
                trailColor: theme.colors.error.lighter,
                pathColor: theme.colors.error.main,
                strokeLinecap: 'round'
              })}
              strokeWidth={6}
              value={data.percentage2}
            >
              <LabelError
                sx={{
                  mt: '-20px'
                }}
              >
                765
              </LabelError>
            </CircularProgressbarWithChildren>
          </Box>
          <Box my={2}>
            <Typography textAlign="center" variant="subtitle2">
              {t('These issues require immediate action')} !
            </Typography>
          </Box>
          <Box mx={3} pt={1} mb={3}>
            <Button
              fullWidth
              variant="text"
              color="secondary"
              sx={{
                backgroundColor: `${theme.colors.secondary.lighter}`,
                py: 1,
                fontSize: `${theme.typography.pxToRem(13)}`,
                textTransform: 'uppercase',
                '&:hover': {
                  backgroundColor: `${theme.colors.secondary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.secondary.main
                  )}`
                }
              }}
            >
              {t('View all issues')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative'
          }}
        >
          <Typography
            sx={{
              py: 3,
              fontSize: `${theme.typography.pxToRem(18)}`
            }}
            variant="h4"
            textAlign="center"
          >
            {t('Email Marketing')}
          </Typography>
          <CardActions>
            <IconButton size="small" color="secondary">
              <MoreVertTwoToneIcon />
            </IconButton>
          </CardActions>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '132px'
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={1}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 5.7,
                trailColor: theme.colors.alpha.black[10],
                pathColor: theme.colors.warning.main,
                strokeLinecap: 'round'
              })}
              strokeWidth={4}
              value={data.percentage3}
            >
              <Typography
                color="warning"
                sx={{
                  mt: '-15px'
                }}
                variant="h2"
              >
                {data.percentage3}
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Box
            sx={{
              mx: { xs: 3, md: 10 }
            }}
          >
            <Grid container spacing={2} mt={1} mb={2}>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <DotLegend
                    style={{
                      background: `${theme.colors.success.main}`
                    }}
                  />
                  <Typography
                    sx={{
                      lineHeight: 1
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    {t('successful')}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <DotLegend
                    style={{
                      background: `${theme.colors.error.main}`
                    }}
                  />
                  <Typography
                    sx={{
                      lineHeight: 1
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    {t('failed')}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <DotLegend
                    style={{
                      background: `${theme.colors.warning.main}`
                    }}
                  />
                  <Typography
                    sx={{
                      lineHeight: 1
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    {t('opened')}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <DotLegend
                    style={{
                      background: `${theme.colors.info.main}`
                    }}
                  />
                  <Typography
                    sx={{
                      lineHeight: 1
                    }}
                    variant="body1"
                    color="text.secondary"
                  >
                    {t('reported')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box mx={3} pt={1} mb={3}>
            <Button
              fullWidth
              variant="text"
              color="secondary"
              sx={{
                backgroundColor: `${theme.colors.secondary.lighter}`,
                py: 1,
                fontSize: `${theme.typography.pxToRem(13)}`,
                textTransform: 'uppercase',
                '&:hover': {
                  backgroundColor: `${theme.colors.secondary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.secondary.main
                  )}`
                }
              }}
            >
              {t('Generate report')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block1;

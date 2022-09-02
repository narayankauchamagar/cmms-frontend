import {
  Box,
  Grid,
  Button,
  Card,
  Avatar,
  Typography,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone';
import GaugeChart from 'react-gauge-chart';
import Text from 'src/components/Text';
import DnsTwoToneIcon from '@mui/icons-material/DnsTwoTone';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 12;
  `
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.success.main};
        margin: 0 auto;
        color: ${theme.palette.getContrastText(theme.colors.success.dark)};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
        box-shadow: ${theme.colors.shadows.success};
  `
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.error.main};
        margin: 0 auto;
        color: ${theme.palette.getContrastText(theme.colors.error.dark)};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
        box-shadow: ${theme.colors.shadows.error};
        animation: pulse 1.2s infinite ease-in-out;

  `
);

const AvatarGradient = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.gradients.blue3};
        margin: 0 auto;
        color: ${theme.colors.alpha.trueWhite[100]};
        width: ${theme.spacing(7)};
        height: ${theme.spacing(7)};
  `
);

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={4}>
        <Card
          sx={{
            p: 3.5,
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <CardActions display="flex" alignItems="center">
            <Label color="success">+0.32%</Label>
          </CardActions>
          <AvatarSuccess variant="rounded">
            <AssessmentTwoToneIcon />
          </AvatarSuccess>
          <Typography
            gutterBottom
            sx={{
              pt: 3.5
            }}
            variant="h2"
          >
            Hal9000
          </Typography>
          <Typography variant="subtitle2">
            This server has a{' '}
            <Text color="success">
              <b>regular</b>
            </Text>{' '}
            load at the moment.
          </Typography>
          <Box
            sx={{
              mx: 'auto',
              mt: 3,
              mb: 0.5,
              maxWidth: '340px'
            }}
          >
            <GaugeChart
              hideText
              nrOfLevels={6}
              colors={[
                theme.colors.error.main,
                theme.colors.warning.main,
                theme.colors.success.main
              ]}
              needleColor={theme.colors.alpha.black[50]}
              needleBaseColor={theme.colors.alpha.black[100]}
              arcWidth={0.3}
              percent={0.27}
            />
          </Box>
          <Button
            sx={{
              px: 2.5,
              py: 0.5,
              fontWeight: 'normal',
              borderRadius: 10,
              background: 'transparent',
              color: `${theme.colors.success.main}`,
              border: `${theme.colors.success.main} solid 2px`,
              transition: `${theme.transitions.create(['all'])}`,

              '&:hover': {
                px: 3,
                background: `${theme.colors.success.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.success.dark
                )}`,
                boxShadow: `${theme.colors.shadows.success}`
              },
              '&:active': {
                boxShadow: 'none'
              }
            }}
            variant="contained"
            color="success"
          >
            {t('View server dashboard')}
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card
          sx={{
            p: 3.5,
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <CardActions display="flex" alignItems="center">
            <Label color="warning">+76.55%</Label>
          </CardActions>
          <AvatarError variant="rounded">
            <NewReleasesTwoToneIcon />
          </AvatarError>
          <Typography
            gutterBottom
            sx={{
              pt: 3.5
            }}
            variant="h2"
          >
            Optimus
          </Typography>
          <Typography variant="subtitle2">
            This server has a{' '}
            <Text color="error">
              <b>high</b>
            </Text>{' '}
            load at the moment.
          </Typography>
          <Box
            sx={{
              mx: 'auto',
              mt: 3,
              mb: 0.5,
              maxWidth: '340px'
            }}
          >
            <GaugeChart
              hideText
              nrOfLevels={6}
              colors={[theme.colors.error.lighter, theme.colors.error.main]}
              needleColor={theme.colors.alpha.black[50]}
              needleBaseColor={theme.colors.alpha.black[100]}
              arcWidth={0.3}
              percent={0.86}
            />
          </Box>
          <Button
            sx={{
              px: 2.5,
              py: 0.5,
              fontWeight: 'normal',
              borderRadius: 10,
              background: 'transparent',
              color: `${theme.colors.error.main}`,
              border: `${theme.colors.error.main} solid 2px`,
              transition: `${theme.transitions.create(['all'])}`,

              '&:hover': {
                px: 3,
                background: `${theme.colors.error.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.error.dark
                )}`,
                boxShadow: `${theme.colors.shadows.error}`
              },
              '&:active': {
                boxShadow: 'none'
              }
            }}
            variant="contained"
            color="error"
          >
            {t('View server dashboard')}
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card
          sx={{
            p: 3.5,
            textAlign: 'center',
            position: 'relative',
            background: `${theme.colors.gradients.blue1}`
          }}
        >
          <CardActions display="flex" alignItems="center">
            <Label color="black">+3.22%</Label>
          </CardActions>
          <AvatarGradient variant="rounded">
            <DnsTwoToneIcon />
          </AvatarGradient>
          <Typography
            gutterBottom
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`,
              pt: 3.5
            }}
            variant="h2"
          >
            Kitt2
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
          >
            This server has a{' '}
            <Typography
              component="span"
              variant="subtitle2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <b>low</b>
            </Typography>{' '}
            load at the moment.
          </Typography>
          <Box
            sx={{
              mx: 'auto',
              mt: 3,
              mb: 0.5,
              maxWidth: '340px'
            }}
          >
            <GaugeChart
              hideText
              nrOfLevels={6}
              colors={[
                theme.colors.alpha.trueWhite[10],
                theme.colors.alpha.trueWhite[100]
              ]}
              needleColor={theme.colors.alpha.trueWhite[30]}
              needleBaseColor={theme.colors.alpha.trueWhite[100]}
              arcWidth={0.3}
              percent={0.21}
            />
          </Box>
          <Button
            sx={{
              px: 2.5,
              py: 0.5,
              fontWeight: 'normal',
              borderRadius: 10,
              background: 'transparent',
              color: `${theme.colors.alpha.trueWhite[100]}`,
              border: `${theme.colors.alpha.trueWhite[100]} solid 2px`,
              transition: `${theme.transitions.create(['all'])}`,

              '&:hover': {
                px: 3,
                background: `${theme.colors.alpha.trueWhite[100]}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.alpha.trueWhite[100]
                )}`
              }
            }}
            variant="contained"
            color="error"
          >
            {t('View server dashboard')}
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block1;

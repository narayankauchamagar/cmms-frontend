import {
  Grid,
  Card,
  Typography,
  Box,
  alpha,
  LinearProgress,
  Avatar,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';
import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.1)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.primary.dark,
              0.2
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.primary.main};
        }
    `
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.success.main, 0.1)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.success.dark,
              0.2
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.success.main};
        }
    `
);

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.1)};
            box-shadow: inset 0 1px 2px ${alpha(theme.colors.error.dark, 0.2)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
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
            p: 2.5,
            flexGrow: 1
          }}
        >
          <Box
            mb={2.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 44,
                height: 44,
                p: 0,
                background: `${theme.colors.primary.lighter}`,
                color: `${theme.colors.primary.main}`
              }}
            >
              <ShowChartTwoToneIcon fontSize="small" />
            </Avatar>
            <Box
              sx={{
                textAlign: 'right'
              }}
            >
              <Typography color="text.primary" variant="h3">
                $3,495
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {t('Sales')}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{
              mb: 0.6
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5" fontWeight="normal">
              {t('Remaining')}
            </Typography>
            <Typography
              sx={{
                color: `${theme.colors.primary.main}`
              }}
              variant="h4"
            >
              55%
            </Typography>
          </Box>
          <LinearProgressPrimary variant="determinate" value={45} />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5,
            flexGrow: 1
          }}
        >
          <Box
            mb={2.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 44,
                height: 44,
                p: 0,
                background: `${theme.colors.success.lighter}`,
                color: `${theme.colors.success.main}`
              }}
            >
              <BugReportTwoToneIcon fontSize="small" />
            </Avatar>
            <Box
              sx={{
                textAlign: 'right'
              }}
            >
              <Typography color="text.primary" variant="h3">
                762
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {t('Reports')}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{
              mb: 0.6
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5" fontWeight="normal">
              {t('Remaining')}
            </Typography>
            <Typography
              sx={{
                color: `${theme.colors.success.main}`
              }}
              variant="h4"
            >
              35%
            </Typography>
          </Box>
          <LinearProgressSuccess variant="determinate" value={65} />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5,
            flexGrow: 1
          }}
        >
          <Box
            mb={2.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 44,
                height: 44,
                p: 0,
                background: `${theme.colors.error.lighter}`,
                color: `${theme.colors.error.main}`
              }}
            >
              <PeopleAltTwoToneIcon fontSize="small" />
            </Avatar>
            <Box
              sx={{
                textAlign: 'right'
              }}
            >
              <Typography color="text.primary" variant="h3">
                12,543k
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {t('Visitors')}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{
              mb: 0.6
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5" fontWeight="normal">
              {t('Remaining')}
            </Typography>
            <Typography
              sx={{
                color: `${theme.colors.error.main}`
              }}
              variant="h4"
            >
              75%
            </Typography>
          </Box>
          <LinearProgressError variant="determinate" value={25} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block4;

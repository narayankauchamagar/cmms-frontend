import {
  CardContent,
  Box,
  CardHeader,
  Card,
  Stack,
  Typography,
  Divider,
  IconButton,
  styled,
  useTheme
} from '@mui/material';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { format, subHours, subDays } from 'date-fns';

const DividerInfo = styled(Divider)(
  ({ theme }) => `
        height: 4px;
        background: ${theme.colors.info.main}
  `
);

const DividerSuccess = styled(Divider)(
  ({ theme }) => `
        height: 4px;
        background: ${theme.colors.success.main}
  `
);

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chart3Options: ApexOptions = {
    markers: {
      hover: {
        sizeOffset: 2
      },
      shape: 'circle',
      size: 7,
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeColors: theme.colors.alpha.white[100],
      colors: theme.colors.success.main
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    theme: {
      mode: theme.palette.mode
    },
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        columnWidth: '40%'
      }
    },
    colors: [theme.colors.info.main, theme.colors.success.main],
    fill: {
      opacity: 1
    },
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
    },
    legend: {
      show: false
    },
    yaxis: {
      show: false,
      min: 0
    }
  };

  const chart3Data = [
    {
      name: 'Income',
      type: 'column',
      data: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879]
    },
    {
      name: 'Expenses',
      type: 'line',
      data: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
    }
  ];

  return (
    <Card>
      <CardHeader
        sx={{ p: 3 }}
        titleTypographyProps={{
          component: 'h5',
          variant: 'h6',
          fontWeight: 'bold',
          sx: {
            textTransform: 'uppercase',
            textAlign: 'center'
          }
        }}
        action={
          <IconButton size="small" color="secondary">
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={t('Total Revenue')}
      />

      <CardContent
        sx={{
          pt: 0
        }}
      >
        <Chart
          options={chart3Options}
          series={chart3Data}
          type="line"
          height={257}
        />
        <Stack
          sx={{
            px: 4
          }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box
            py={3}
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="caption"
              fontWeight="bold"
              textAlign="center"
              sx={{
                color: `${theme.colors.alpha.black[100]}`,
                pb: 1
              }}
            >
              {t('Income')}
            </Typography>
            <DividerInfo />
          </Box>
          <Box
            py={3}
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="caption"
              fontWeight="bold"
              textAlign="center"
              sx={{
                color: `${theme.colors.alpha.black[100]}`,
                pb: 1
              }}
            >
              {t('Expenses')}
            </Typography>
            <DividerSuccess />
          </Box>
        </Stack>
        <Typography
          component="h6"
          variant="subtitle2"
          fontWeight="bold"
          textAlign="center"
        >
          {format(subHours(new Date(), 5), 'MMMM dd yyyy')}
        </Typography>
        <Stack
          sx={{
            mt: 2,
            px: 4
          }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="h2"
              textAlign="center"
              sx={{
                color: `${theme.colors.info.main}`,
                pb: 1
              }}
            >
              32.5%
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="h2"
              textAlign="center"
              sx={{
                color: `${theme.colors.success.main}`,
                pb: 1
              }}
            >
              67.5%
            </Typography>
          </Box>
        </Stack>
        <Divider
          sx={{
            my: 3
          }}
        />
        <Typography
          component="h6"
          variant="subtitle2"
          fontWeight="bold"
          textAlign="center"
        >
          {format(subDays(new Date(), 2), 'MMMM dd yyyy')}
        </Typography>
        <Stack
          sx={{
            mt: 1,
            px: 4
          }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="h2"
              textAlign="center"
              sx={{
                color: `${theme.colors.info.main}`,
                pb: 1
              }}
            >
              25.0%
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="h2"
              textAlign="center"
              sx={{
                color: `${theme.colors.success.main}`,
                pb: 1
              }}
            >
              75.0%
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Block2;

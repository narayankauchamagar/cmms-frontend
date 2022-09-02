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

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import CountUp from 'react-countup';
import Label from 'src/components/Label';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const CardHeaderWrapper = styled(CardHeader)(
  ({ theme }) => `
          position: relative;

          .MuiCardHeader-action {
              position: absolute;
              right: ${theme.spacing(3)};
              top: ${theme.spacing(3)};
          }
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chart1Options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '60%'
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    labels: ['2018', '2019', '2020', '2021', '2022'],
    fill: {
      opacity: 1,
      colors: [theme.colors.warning.main, theme.colors.primary.main]
    },
    colors: [theme.colors.warning.main, theme.colors.primary.main],
    legend: {
      show: false
    },
    grid: {
      strokeDashArray: 6,
      borderColor: theme.palette.divider
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };
  const chart1Data = [
    {
      name: 'Net Profit',
      data: [1008, 940, 1010, 821, 1035]
    },
    {
      name: 'Net Loss',
      data: [648, 745, 897, 743, 635]
    }
  ];

  return (
    <Card>
      <CardHeaderWrapper
        disableTypography
        sx={{
          p: 3
        }}
        action={
          <IconButton size="small" color="secondary">
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={
          <>
            <Typography
              component="div"
              sx={{
                fontSize: `${theme.typography.pxToRem(17)}`
              }}
              textAlign="center"
              gutterBottom
              variant="h3"
            >
              {t('Financial year')}
            </Typography>
          </>
        }
        subheader={
          <>
            <Typography
              component="div"
              textAlign="center"
              fontWeight="normal"
              color="text.secondary"
              variant="h5"
            >
              {t('Expenses statistics to date')}
            </Typography>
          </>
        }
      />
      <Divider />
      <Typography
        component="div"
        textAlign="center"
        fontWeight="bold"
        sx={{
          py: 4,
          fontSize: `${theme.typography.pxToRem(40)}`
        }}
      >
        <CountUp
          start={0}
          end={458.695}
          duration={4}
          separator=""
          delay={3}
          decimals={3}
          decimal=","
          prefix="$"
          suffix=""
        />
      </Typography>
      <Divider />
      <Stack
        sx={{
          mt: 4
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={0}
      >
        <Box>
          <Typography
            component="h6"
            variant="subtitle2"
            textAlign="center"
            gutterBottom
          >
            {t('Current month')}
          </Typography>
          <Typography
            component="h6"
            variant="subtitle2"
            color="text.primary"
            fontWeight="bold"
            textAlign="center"
            sx={{
              pb: 2
            }}
          >
            <Box component="span" pr={1}>
              <small>$</small> 46,594
            </Box>
            <Label color="error">-8%</Label>
          </Typography>
        </Box>
        <Box>
          <Typography
            component="h6"
            variant="subtitle2"
            textAlign="center"
            gutterBottom
          >
            {t('Last year')}
          </Typography>
          <Typography
            component="h6"
            variant="subtitle2"
            color="text.primary"
            fontWeight="bold"
            textAlign="center"
            sx={{
              pb: 2
            }}
          >
            <Box component="span" pr={1}>
              <small>$</small> 34,742
            </Box>
            <Label color="success">+14%</Label>
          </Typography>
        </Box>
      </Stack>
      <Typography
        component="div"
        sx={{
          mt: 3,
          fontSize: `${theme.typography.pxToRem(17)}`
        }}
        textAlign="center"
        variant="h3"
      >
        {t('Monthly report')}
      </Typography>
      <CardContent>
        <Chart
          options={chart1Options}
          series={chart1Data}
          type="bar"
          height={302}
        />
      </CardContent>
    </Card>
  );
}

export default Block5;

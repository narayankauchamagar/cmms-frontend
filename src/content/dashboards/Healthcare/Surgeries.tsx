import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  Box,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import MedicalServicesTwoToneIcon from '@mui/icons-material/MedicalServicesTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const AvatarWarning = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color: ${theme.colors.warning.main};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
      margin-top: -${theme.spacing(1)};
`
);

function Surgeries() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const Box1Options: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '80%'
      }
    },
    colors: [theme.colors.warning.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    legend: {
      show: false
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
    tooltip: {
      enabled: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false,
      min: 0
    }
  };
  const Box1Data = [
    {
      data: [221, 377, 445, 453, 276, 352, 240, 282, 330, 247, 443, 173]
    }
  ];

  return (
    <Card
      sx={{
        px: 1,
        pt: 1
      }}
    >
      <CardHeader
        sx={{
          textAlign: 'right',
          pb: 0
        }}
        avatar={
          <AvatarWarning>
            <MedicalServicesTwoToneIcon />
          </AvatarWarning>
        }
        action={
          <>
            <Label color="error">
              <ArrowDownwardTwoToneIcon fontSize="small" />
              <b>-12%</b>
            </Label>
            <Typography
              align="right"
              variant="subtitle1"
              color="text.secondary"
            >
              {t('since last month')}
            </Typography>
          </>
        }
      />
      <Box
        sx={{
          pl: 2,
          pt: 2
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Surgeries')}
            </Typography>
            <Typography variant="h2">82</Typography>
          </Box>
          <Box height={90} width={200}>
            <Chart
              options={Box1Options}
              series={Box1Data}
              type="bar"
              height={90}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default Surgeries;

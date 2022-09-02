import {
  Box,
  Card,
  Typography,
  Divider,
  Button,
  alpha,
  Stack,
  styled,
  useTheme
} from '@mui/material';
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: ${theme.spacing(1.8)};
      height: ${theme.spacing(1.8)};
      display: inline-block;
      margin-right: ${theme.spacing(0.8)};
      border: ${theme.colors.alpha.white[100]} solid 2px;
  `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.08)};
  `
);

function Block8() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chart3Options: ApexOptions = {
    stroke: {
      curve: 'smooth',
      colors: [
        theme.colors.info.main,
        theme.colors.error.main,
        theme.colors.success.main
      ],
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
    colors: [
      theme.colors.info.main,
      theme.colors.error.main,
      theme.colors.success.main
    ],
    fill: {
      opacity: 1,
      colors: [
        theme.colors.info.main,
        theme.colors.error.main,
        theme.colors.success.main
      ],
      type: 'solid'
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
      show: false
    }
  };

  const chart3Data = [
    {
      name: 'Total Loss',
      data: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879]
    },
    {
      name: 'Net Profit',
      data: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
    },
    {
      name: 'Gross Profit',
      data: [1030, 897, 463, 856, 285, 764, 426, 635, 1030, 1021, 1008, 821]
    }
  ];

  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        p={3}
        justifyContent="space-between"
      >
        <Box>
          <Typography
            component="div"
            sx={{
              fontSize: `${theme.typography.pxToRem(17)}`
            }}
            gutterBottom
            variant="h3"
          >
            {t('Sales')}
          </Typography>
          <Typography
            component="div"
            fontWeight="normal"
            color="text.secondary"
            variant="h5"
          >
            {t('Last 7 days sales statistics report')}
          </Typography>
        </Box>
        <Button
          size="small"
          variant="outlined"
          startIcon={<ScreenSearchDesktopTwoToneIcon />}
        >
          {t('Advanced search')}
        </Button>
      </Box>
      <CardWrapper
        sx={{
          mx: 3,
          p: 3
        }}
      >
        <Stack
          direction="row"
          divider={
            <Divider
              sx={{
                background: `${theme.colors.alpha.black[10]}`
              }}
              orientation="vertical"
              flexItem
            />
          }
          justifyContent="space-evenly"
          alignItems="center"
          spacing={4}
        >
          <Box py={2} textAlign="center">
            <Typography
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              gutterBottom
            >
              {t("Today's Earnings")}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <DotLegend
                style={{
                  background: `${theme.colors.info.main}`
                }}
              />
              <Typography color="text.primary" variant="h4">
                <small>$</small>8,685
              </Typography>
            </Box>
          </Box>
          <Box py={2} textAlign="center">
            <Typography
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              gutterBottom
            >
              {t('Current Week')}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <DotLegend
                style={{
                  background: `${theme.colors.success.main}`
                }}
              />
              <Typography color="text.primary" variant="h4">
                <small>$</small>34,543
              </Typography>
            </Box>
          </Box>
          <Box py={2} textAlign="center">
            <Typography
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              gutterBottom
            >
              {t('Previous Week')}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <DotLegend
                style={{
                  background: `${theme.colors.error.main}`
                }}
              />
              <Typography color="text.primary" variant="h4">
                <small>$</small>76,645
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardWrapper>
      <Box px={3}>
        <Chart
          options={chart3Options}
          series={chart3Data}
          type="line"
          height={318}
        />
      </Box>
    </Card>
  );
}

export default Block8;

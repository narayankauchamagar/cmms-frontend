import {
  Box,
  CardHeader,
  Card,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AutoAwesomeMosaicTwoToneIcon from '@mui/icons-material/AutoAwesomeMosaicTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import EvStationTwoToneIcon from '@mui/icons-material/EvStationTwoTone';
import Text from 'src/components/Text';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

function Block2() {
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
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    fill: {
      opacity: 1,
      colors: [theme.colors.success.lighter],
      type: 'solid'
    },
    stroke: {
      show: true,
      colors: [theme.colors.success.main],
      width: 2
    },
    legend: {
      show: false
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
      show: false
    }
  };
  const Box1Data = [
    {
      name: 'Top grossing products',
      data: [4, 54, 30, 57, 11, 30, 10, 30, 6]
    }
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        sx={{
          p: 2
        }}
        disableTypography
        title={
          <Typography
            variant="h4"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
          >
            {t('Updates')}
          </Typography>
        }
      />
      <Divider />
      <List>
        <ListItem
          sx={{
            px: 2,
            py: 1.5
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0,
              opacity: 0.3
            }}
          >
            <ContactPhoneTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(28)}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('Reports')}</Typography>}
          />
          <Box>
            <Typography variant="h4">
              <Text color="error">29.544</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            px: 2,
            py: 1.5
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0,
              opacity: 0.3
            }}
          >
            <EvStationTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(28)}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('User')}</Typography>}
          />
          <Box>
            <Typography variant="h4">
              <Text color="success">684</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            px: 2,
            py: 1.5
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0,
              opacity: 0.3
            }}
          >
            <AutoAwesomeMosaicTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(28)}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('Sales')}</Typography>}
          />
          <Box>
            <Typography variant="h4">
              <Text color="warning">$1,24M</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            px: 2,
            py: 1.5
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0,
              opacity: 0.3
            }}
          >
            <CardTravelTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(28)}`
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h4">{t('Stats')}</Typography>}
          />
          <Box>
            <Typography variant="h4">
              <Text color="info">786</Text>
            </Typography>
          </Box>
        </ListItem>
      </List>
      <Chart options={Box1Options} series={Box1Data} type="area" height={143} />
    </Card>
  );
}

export default Block2;

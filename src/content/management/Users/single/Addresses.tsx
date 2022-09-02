import {
  Box,
  Button,
  Typography,
  Card,
  CardHeader,
  Divider,
  Grid
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ArrowForwardTwoTone } from '@mui/icons-material';

function Addresses() {
  const { t }: { t: any } = useTranslation();

  const addresses = {
    delivery: 12,
    shipping: 8
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader
            title={t('Delivery Addresses')}
            subheader={addresses.delivery + t(' saved addresses')}
          />
          <Divider />
          <Box p={2}>
            <Typography variant="caption" fontWeight="bold">
              {t('Favourite')}
            </Typography>
            <Box
              sx={{
                minHeight: { xs: 0, md: 243 }
              }}
              p={2}
            >
              <Typography variant="h5">Kadin Westervelt</Typography>
              <Typography
                variant="h5"
                sx={{
                  py: 1
                }}
                fontWeight="normal"
              >
                714-650-6297
              </Typography>
              <Typography variant="subtitle1">
                348 W. Goldfield Street Bethel Park, PA 15102
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              endIcon={<ArrowForwardTwoTone />}
            >
              {t('Manage')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader
            title={t('Shipping Addresses')}
            subheader={addresses.shipping + t(' saved addresses')}
          />
          <Divider />
          <Box p={2}>
            <Typography variant="caption" fontWeight="bold">
              {t('Saved Locations')}
            </Typography>
            <Box
              sx={{
                minHeight: { xs: 0, md: 243 }
              }}
              p={2}
            >
              <Typography variant="h5">Kadin Westervelt</Typography>
              <Typography
                variant="h5"
                sx={{
                  py: 1
                }}
                fontWeight="normal"
              >
                714-650-6297
              </Typography>
              <Typography variant="subtitle1">
                10 E. Wrangler Avenue Sioux Falls, SD 57103
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              endIcon={<ArrowForwardTwoTone />}
            >
              {t('Manage')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Addresses;

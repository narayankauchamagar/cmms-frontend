import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

function PageHeader() {
  const { t }: { t: any } = useTranslation();
  const location = useLocation();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h3" component="h3" gutterBottom>
              {t('Storefront')}
            </Typography>
            <Typography variant="subtitle2">
              {t('This is a list of all commerce products')}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Button
          sx={{
            mt: { xs: 2, sm: 0 }
          }}
          component={RouterLink}
          startIcon={<EditTwoToneIcon />}
          to={`/${
            location.pathname.split('/')[1]
          }/management/commerce/products`}
          variant="contained"
        >
          {t('Manage products')}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

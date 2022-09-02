import { Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function PageHeader() {
  const { t }: { t: any } = useTranslation();
  const location = useLocation();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <Typography variant="h3" component="h3" gutterBottom>
          {t('Hospital Administration')}
        </Typography>
        <Typography variant="subtitle2">
          {t("This is your hospital's overview status page")}
        </Typography>
      </Box>
      <Box>
        <Button
          component={RouterLink}
          to={`/${
            location.pathname.split('/')[1]
          }/dashboards/healthcare/doctor`}
          variant="contained"
          fullWidth
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {t('Switch to Doctor Overview')}
        </Button>
      </Box>
    </Box>
  );
}

export default PageHeader;

import { Typography, Button, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const { t }: { t: any } = useTranslation();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {t('Projects Board')}
        </Typography>
        <Typography variant="subtitle2">
          {t('This is your Kanban style projects board')}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{
            mt: { xs: 2, md: 0 }
          }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          {t('Add task')}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

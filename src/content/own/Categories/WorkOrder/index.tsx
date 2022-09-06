import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CategoriesLayout from '../CategoriesLayout';


function DashboardTasks() {
  const { t }: { t: any } = useTranslation();
  return (
    <CategoriesLayout tabIndex={0}>
      <Grid item xs={12}>
        <Box p={4}>
        </Box>
      </Grid>
    </CategoriesLayout>
  );
}

export default DashboardTasks;

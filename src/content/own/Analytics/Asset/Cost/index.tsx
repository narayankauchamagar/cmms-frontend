import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import { TitleContext } from '../../../../../contexts/TitleContext';
import Overview from './Overview';
import DowntimesAndCosts from './DowntimesAndCosts';
import { Filter } from '../WOModal';
import DowntimesByMonth from './DowntimesByMonth';

interface WOStatusStatsProps {
  handleOpenWOModal: (
    columns: string[],
    filters: Filter[],
    title: string
  ) => void;
}
function AssetCost({ handleOpenWOModal }: WOStatusStatsProps) {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle(t('total_maintenance_cost'));
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('total_maintenance_cost')}</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={1}
        my={2}
        paddingX={1}
      >
        <Grid item xs={12} md={12}>
          <Overview handleOpenModal={handleOpenWOModal} />
        </Grid>
        <Grid item xs={12} md={6}>
          <DowntimesAndCosts handleOpenModal={handleOpenWOModal} />
        </Grid>
        <Grid item xs={12} md={6}>
          <DowntimesByMonth handleOpenModal={handleOpenWOModal} />
        </Grid>
      </Grid>
    </>
  );
}

export default AssetCost;

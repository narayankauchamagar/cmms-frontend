import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import { TitleContext } from '../../../../../contexts/TitleContext';
import Overview from './Overview';
import RepairTimeByAsset from './RepairTimeByAsset';
import DowntimesByAsset from './DowntimesByAsset';
import MeantimesTrends from './MeantimesTrends';
import { Filter } from '../WOModal';

interface WOStatusStatsProps {
  handleOpenWOModal: (
    columns: string[],
    filters: Filter[],
    title: string
  ) => void;
}
function WOStatusStats({ handleOpenWOModal }: WOStatusStatsProps) {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle(t('reliability_dashboard'));
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('reliability_dashboard')}</title>
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
        <Grid item xs={12} md={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <RepairTimeByAsset handleOpenModal={handleOpenWOModal} />
            </Grid>
            <Grid item xs={12} md={6}>
              <DowntimesByAsset handleOpenModal={handleOpenWOModal} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <MeantimesTrends handleOpenModal={handleOpenWOModal} />
        </Grid>
      </Grid>
    </>
  );
}

export default WOStatusStats;

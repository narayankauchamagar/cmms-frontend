import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import { TitleContext } from '../../../../../contexts/TitleContext';
import Overview from './Overview';
import { Filter } from '../WOModal';
import PartConsumptionsByMonth from './PartConsumptionsByMonth';

interface WOStatusStatsProps {
  handleOpenWOModal: (
    columns: string[],
    filters: Filter[],
    title: string
  ) => void;
}
function PartsConsumption({ handleOpenWOModal }: WOStatusStatsProps) {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle(t('parts_consumption'));
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('parts_consumption')}</title>
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
        <Grid item xs={12}>
          <PartConsumptionsByMonth handleOpenModal={handleOpenWOModal} />
        </Grid>
      </Grid>
    </>
  );
}

export default PartsConsumption;

import { Helmet } from 'react-helmet-async';
import { Card, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Files() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('Files')}</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        padding={4}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          ></Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Files;

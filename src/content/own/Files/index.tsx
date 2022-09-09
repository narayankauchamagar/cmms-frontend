import { Helmet } from 'react-helmet-async';
import { Card, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TableCustomizedColumnType } from '../type';
import TableCustomized from '../components/TableCustomized';
import File from '../../../models/file';
import { useContext, useEffect } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle(t('Files'));
  }, []);
  const columns: TableCustomizedColumnType[] = [
    { label: t('ID'), accessor: 'id' },
    { label: t('Name'), accessor: 'name' },
    { label: t('Uploaded By'), accessor: 'createdBy' },
    { label: t('Uploaded on'), accessor: 'createdAt' }
  ];

  const files: File[] = [
    {
      id: 74,
      name: 'ghgvhb',
      createdAt: 'dfggj',
      createdBy: 'ghu',
      updatedAt: 'ghfgj',
      updatedBy: 'ghfgj'
    }
  ];
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
          >
            <TableCustomized data={files} columns={columns} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Files;

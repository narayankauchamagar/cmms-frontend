import { Helmet } from 'react-helmet-async';
import { Box, Button, Card, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { files } from '../../../models/owns/file';
import { useContext, useEffect } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridRenderCellParams,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { meters } from '../../../models/owns/meter';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const handleDelete = (id: number) => {};
  const handleRename = (id: number) => {};
  useEffect(() => {
    setTitle(t('Meters'));
  }, []);

  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Name'),
      description: t('Name'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },
    {
      field: 'nextReading',
      headerName: t('Next Reading Due'),
      description: t('Next Reading'),
      width: 150
    },
    {
      field: 'unit',
      headerName: t('Unit of Measurement'),
      description: t('Unit of Measurement'),
      width: 150
    },
    {
      field: 'lastReading',
      headerName: t('Last Reading'),
      description: t('Last Reading'),
      width: 150,
      valueGetter: (params) =>
        params.row.readings[params.row.readings.length - 1].value
    },
    {
      field: 'location',
      headerName: t('Location'),
      description: t('Location'),
      width: 150,
      valueGetter: (params) => params.row.location.name
    },
    {
      field: 'asset',
      headerName: t('Asset'),
      description: t('Asset'),
      width: 150,
      valueGetter: (params) => params.row.asset.name
    },
    {
      field: 'createdBy',
      headerName: t('Created By'),
      description: t('Created By'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Date Created'),
      description: t('Date Created'),
      width: 150
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('Meters')}</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={1}
        paddingX={4}
      >
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="row"
          justifyContent="right"
          alignItems="center"
        >
          <Button
            startIcon={<AddTwoToneIcon />}
            sx={{ mx: 6, my: 1 }}
            variant="contained"
          >
            Meter
          </Button>
        </Grid>
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
            <Box sx={{ height: 500, width: '95%' }}>
              <CustomDataGrid
                columns={columns}
                rows={meters}
                components={{
                  Toolbar: GridToolbar
                }}
                initialState={{
                  columns: {
                    columnVisibilityModel: {}
                  }
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Files;

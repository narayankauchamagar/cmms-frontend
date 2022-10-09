import { Helmet } from 'react-helmet-async';
import { Box, Button, Card, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TableCustomizedColumnType } from '../type';
import TableCustomized from '../components/TableCustomized';
import File, { files } from '../../../models/owns/file';
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
import { purchaseOrders } from '../../../models/owns/purchaseOrder';

function PurchaseOrders() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const handleDelete = (id: number) => {};
  const handleRename = (id: number) => {};
  useEffect(() => {
    setTitle(t('Purchase Orders'));
  }, []);

  const columns: GridEnrichedColDef[] = [
    {
      field: 'id',
      headerName: t('ID'),
      description: t('ID'),
      width: 150
    },
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
      field: 'itemsNumber',
      headerName: t('Number of items'),
      description: t('Number of items'),
      width: 150,
      valueGetter: (params: GridRenderCellParams<string>) =>
        params.row.partPurchases.length
    },
    {
      field: 'totalCost',
      headerName: t('Total Cost'),
      description: t('Total Cost'),
      width: 150,
      valueGetter: (params: GridRenderCellParams<string>) =>
        params.row.partPurchases.reduce(
          (acc, partPurchase) =>
            acc + partPurchase.quantity * partPurchase.part.cost,
          0
        )
    },
    {
      field: 'totalQuantity',
      headerName: t('Total Quantity'),
      description: t('Total Quantity'),
      width: 150,
      valueGetter: (params: GridRenderCellParams<string>) =>
        params.row.partPurchases.reduce(
          (acc, partPurchase) => acc + partPurchase.quantity,
          0
        )
    },
    {
      field: 'createdBy',
      headerName: t('Uploaded By'),
      description: t('Uploaded By'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Uploaded On'),
      description: t('Uploaded On'),
      width: 150
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('Purchase Orders')}</title>
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
            File
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
                rows={purchaseOrders}
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

export default PurchaseOrders;

import { Helmet } from 'react-helmet-async';
import { Box, Button, Card, Drawer, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import { GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import PurchaseOrder, {
  purchaseOrders
} from '../../../models/owns/purchaseOrder';
import { useNavigate } from 'react-router-dom';
import PurchaseOrderDetails from './PurchaseOrderDetails';

function PurchaseOrders() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const [currentPurchaseOrder, setCurrentPurchaseOrder] =
    useState<PurchaseOrder>();

  const handleUpdate = (id: number) => {
    setCurrentPurchaseOrder(
      purchaseOrders.find((purchaseOrder) => purchaseOrder.id === id)
    );
    setOpenUpdateModal(true);
  };
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
      field: 'category',
      headerName: t('Category'),
      description: t('Category'),
      width: 150
    },
    {
      field: 'shippingShipToName',
      headerName: t('Shipping to'),
      description: t('Shipping to'),
      width: 150
    },
    {
      field: 'shippingAddress',
      headerName: t('Shipping Address'),
      description: t('Shipping Address'),
      width: 150
    },
    {
      field: 'shippingPhone',
      headerName: t('Phone'),
      description: t('Phone'),
      width: 150
    },
    {
      field: 'createdBy',
      headerName: t('Created By'),
      description: t('Created By'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Created On'),
      description: t('Created On'),
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
            onClick={() => navigate('/app/purchase-orders/create')}
            startIcon={<AddTwoToneIcon />}
            sx={{ mx: 6, my: 1 }}
            variant="contained"
          >
            Purchase Order
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
                onRowClick={(params) => {
                  setCurrentPurchaseOrder(
                    purchaseOrders.find(
                      (purchaseOrder) => purchaseOrder.id === params.id
                    )
                  );
                  setOpenDrawer(true);
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
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: { width: '60%' }
        }}
      >
        <PurchaseOrderDetails
          purchaseOrder={currentPurchaseOrder}
          handleUpdate={handleUpdate}
        />
      </Drawer>
    </>
  );
}

export default PurchaseOrders;

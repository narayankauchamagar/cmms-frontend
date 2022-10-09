import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Grid,
  Typography
} from '@mui/material';
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
import { useNavigate, useParams } from 'react-router-dom';
import PurchaseOrderDetails from './PurchaseOrderDetails';
import { IField } from '../type';
import Form from '../components/form';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import { isNumeric } from '../../../utils/validators';

function PurchaseOrders() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const { purchaseOrderId } = useParams();

  const [currentPurchaseOrder, setCurrentPurchaseOrder] =
    useState<PurchaseOrder>();

  const handleUpdate = (id: number) => {
    setCurrentPurchaseOrder(
      purchaseOrders.find((purchaseOrder) => purchaseOrder.id === id)
    );
    setOpenUpdateModal(true);
  };
  const handleOpenDetails = (id: number) => {
    const foundPurchaseOrder = purchaseOrders.find(
      (purchaseOrder) => purchaseOrder.id === id
    );
    if (foundPurchaseOrder) {
      setCurrentPurchaseOrder(foundPurchaseOrder);
      window.history.replaceState(
        null,
        'PurchaseOrder details',
        `/app/purchase-orders/${id}`
      );
      setOpenDrawer(true);
    }
  };
  useEffect(() => {
    setTitle(t('Purchase Orders'));
  }, []);

  useEffect(() => {
    if (purchaseOrderId && isNumeric(purchaseOrderId)) {
      handleOpenDetails(Number(purchaseOrderId));
    }
  }, [purchaseOrders]);

  const handleCloseDetails = () => {
    window.history.replaceState(null, 'PurchaseOrder', `/app/purchase-orders`);
    setOpenDrawer(false);
  };

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
  const fields: Array<IField> = [
    {
      name: 'purchaseOrderDetails',
      type: 'titleGroupField',
      label: t('Purchase Order Details')
    },
    {
      name: 'name',
      type: 'text',
      label: t('Name'),
      placeholder: t('Enter Purchase Order name'),
      required: true,
      midWidth: true
    },
    {
      name: 'category',
      type: 'text',
      label: t('Category'),
      placeholder: t('Category'),
      midWidth: true
    },
    {
      name: 'dueDate',
      type: 'date',
      label: t('Due Date'),
      midWidth: true
    },
    {
      name: 'additionalDetails',
      type: 'text',
      label: t('Additional Details'),
      midWidth: true,
      multiple: true
    },
    {
      name: 'vendors',
      type: 'select',
      type2: 'vendor',
      label: t('Vendors'),
      midWidth: true,
      multiple: true
    },
    {
      name: 'parts',
      type: 'select',
      type2: 'part',
      label: t('Parts'),
      midWidth: true,
      multiple: true
    },
    {
      name: 'shippingInformation',
      type: 'titleGroupField',
      label: t('Shipping Information')
    },
    {
      name: 'useCompanyAddress',
      type: 'checkbox',
      label: t('Use Company address')
    },
    {
      name: 'companyName',
      type: 'text',
      label: t('Company name'),
      placeholder: t('Company name'),
      midWidth: true
    },
    {
      name: 'shipToName',
      type: 'text',
      label: t('Ship To'),
      placeholder: t('Ship To'),
      midWidth: true
    },
    {
      name: 'address',
      type: 'text',
      label: t('Address'),
      placeholder: t('Address'),
      midWidth: true
    },
    {
      name: 'city',
      type: 'text',
      label: t('City'),
      placeholder: t('City'),
      midWidth: true
    },
    {
      name: 'state',
      type: 'text',
      label: t('State'),
      placeholder: t('State'),
      midWidth: true
    },
    {
      name: 'zipCode',
      type: 'text',
      label: t('Zip Code'),
      placeholder: t('Zip Code'),
      midWidth: true
    },
    {
      name: 'phone',
      type: 'text',
      label: t('Phone number'),
      placeholder: t('Phone number'),
      midWidth: true
    },
    {
      name: 'faxNumber',
      type: 'text',
      label: t('Fax Number'),
      placeholder: t('Fax Number'),
      midWidth: true
    },
    {
      name: 'additionalInformation',
      type: 'titleGroupField',
      label: t('Additional Information')
    },
    {
      name: 'purchaseOrderDate',
      type: 'date',
      label: t('Purchase Order Date'),
      placeholder: t('Purchase Order Date'),
      midWidth: true
    },
    {
      name: 'notes',
      type: 'text',
      label: t('Notes'),
      placeholder: t('Add Notes'),
      midWidth: true,
      multiple: true
    },
    {
      name: 'requisitioner',
      type: 'text',
      label: t('Requisitioner'),
      placeholder: t('Requisitioner'),
      midWidth: true
    },
    {
      name: 'terms',
      type: 'text',
      label: t('Terms'),
      placeholder: t('Terms'),
      midWidth: true
    },
    {
      name: 'shippingMethod',
      type: 'text',
      label: t('Shipping Method'),
      placeholder: t('Shipping Method'),
      midWidth: true
    }
  ];
  const shape = {
    name: Yup.string().required(t('The name is required'))
  };
  const renderUpdateModal = () => (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openUpdateModal}
      onClose={() => setOpenUpdateModal(false)}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Edit Purchase Order')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to update the Purchase Order')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Box>
          <Form
            fields={fields}
            validation={Yup.object().shape(shape)}
            submitText={t('Save')}
            values={currentPurchaseOrder}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                await wait(2000);
                setOpenUpdateModal(false);
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
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
                onRowClick={(params) => handleOpenDetails(Number(params.id))}
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
        onClose={handleCloseDetails}
        PaperProps={{
          sx: { width: '60%' }
        }}
      >
        <PurchaseOrderDetails
          purchaseOrder={currentPurchaseOrder}
          handleUpdate={handleUpdate}
        />
      </Drawer>
      {renderUpdateModal()}
    </>
  );
}

export default PurchaseOrders;

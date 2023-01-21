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
import PurchaseOrder from '../../../models/owns/purchaseOrder';
import { useDispatch, useSelector } from '../../../store';
import {
  deletePurchaseOrder,
  editPurchaseOrder,
  getPurchaseOrders
} from '../../../slices/purchaseOrder';
import ConfirmDialog from '../components/ConfirmDialog';
import { useNavigate, useParams } from 'react-router-dom';
import PurchaseOrderDetails from './PurchaseOrderDetails';
import { IField } from '../type';
import Form from '../components/form';
import * as Yup from 'yup';
import { isNumeric } from '../../../utils/validators';
import { formatSelect } from '../../../utils/formatters';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import useAuth from '../../../hooks/useAuth';
import { PermissionEntity } from '../../../models/owns/role';
import PermissionErrorMessage from '../components/PermissionErrorMessage';
import { PlanFeature } from '../../../models/owns/subscriptionPlan';
import FeatureErrorMessage from '../components/FeatureErrorMessage';
import NoRowsMessageWrapper from '../components/NoRowsMessageWrapper';
import {
  editPOPartQuantities,
  getPartQuantitiesByPurchaseOrder
} from '../../../slices/partQuantity';
import Category from '../../../models/owns/category';

function PurchaseOrders() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const { getFormattedDate, getUserNameById, getFormattedCurrency } =
    useContext(CompanySettingsContext);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const { partQuantitiesByPurchaseOrder } = useSelector(
    (state) => state.partQuantities
  );
  const { purchaseOrderId } = useParams();
  const { hasViewPermission, hasCreatePermission, hasFeature } = useAuth();
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { purchaseOrders, loadingGet } = useSelector(
    (state) => state.purchaseOrders
  );
  const [currentPurchaseOrder, setCurrentPurchaseOrder] =
    useState<PurchaseOrder>();
  const partQuantities =
    partQuantitiesByPurchaseOrder[currentPurchaseOrder?.id] ?? [];
  const { showSnackBar } = useContext(CustomSnackBarContext);

  const handleOpenUpdate = () => {
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
    setTitle(t('purchase_orders'));
    if (hasViewPermission(PermissionEntity.PURCHASE_ORDERS))
      dispatch(getPurchaseOrders());
  }, []);

  useEffect(() => {
    if (
      purchaseOrders?.length &&
      purchaseOrderId &&
      isNumeric(purchaseOrderId)
    ) {
      handleOpenDetails(Number(purchaseOrderId));
    }
  }, [purchaseOrders]);

  useEffect(() => {
    if (currentPurchaseOrder)
      dispatch(getPartQuantitiesByPurchaseOrder(currentPurchaseOrder.id));
  }, [currentPurchaseOrder?.id]);

  const handleDelete = (id: number) => {
    handleCloseDetails();
    dispatch(deletePurchaseOrder(id))
      .then(onDeleteSuccess)
      .catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const handleCloseDetails = () => {
    window.history.replaceState(null, 'PurchaseOrder', `/app/purchase-orders`);
    setOpenDrawer(false);
  };
  const onEditSuccess = () => {
    setOpenUpdateModal(false);
    showSnackBar(t('changes_saved_success'), 'success');
  };
  const onEditFailure = (err) => showSnackBar(t('po_edit_failure'), 'error');
  const onDeleteSuccess = () => {
    showSnackBar(t('po_delete_success'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t('po_delete_failure'), 'error');
  const columns: GridEnrichedColDef[] = [
    {
      field: 'id',
      headerName: t('id'),
      description: t('id'),
      width: 150
    },
    {
      field: 'name',
      headerName: t('name'),
      description: t('name'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },
    {
      field: 'itemsNumber',
      headerName: t('number_of_items'),
      description: t('number_of_items'),
      width: 150,
      valueGetter: (params: GridRenderCellParams<null, PurchaseOrder>) =>
        params.row.partQuantities.length
    },
    {
      field: 'totalCost',
      headerName: t('total_cost'),
      description: t('total_cost'),
      width: 150,
      valueGetter: (params: GridRenderCellParams<null, PurchaseOrder>) =>
        getFormattedCurrency(
          params.row.partQuantities.reduce((acc, partQuantity) => {
            return acc + partQuantity.part.cost * partQuantity.quantity;
          }, 0)
        )
    },
    {
      field: 'totalQuantity',
      headerName: t('total_quantity'),
      description: t('total_quantity'),
      width: 150,
      valueGetter: (params: GridRenderCellParams<null, PurchaseOrder>) =>
        params.row.partQuantities.reduce((acc, partQuantity) => {
          return acc + partQuantity.quantity;
        }, 0)
    },
    {
      field: 'category',
      headerName: t('category'),
      description: t('category'),
      width: 150,
      valueGetter: (params: GridRenderCellParams<Category>) =>
        params.value?.name
    },
    {
      field: 'status',
      headerName: t('status'),
      description: t('status'),
      width: 150,
      valueGetter: (params: GridRenderCellParams<string>) => t(params.value)
    },
    {
      field: 'shippingShipToName',
      headerName: t('shipping_to'),
      description: t('shipping_to'),
      width: 150
    },
    {
      field: 'shippingAddress',
      headerName: t('shipping_address'),
      description: t('shipping_address'),
      width: 150
    },
    {
      field: 'shippingPhone',
      headerName: t('phone'),
      description: t('phone'),
      width: 150
    },
    {
      field: 'createdBy',
      headerName: t('created_by'),
      description: t('created_by'),
      width: 150,
      valueGetter: (params) => getUserNameById(params.value)
    },
    {
      field: 'createdAt',
      headerName: t('created_at'),
      description: t('created_at'),
      width: 150,
      valueGetter: (params) => getFormattedDate(params.row.createdAt)
    }
  ];
  const fields: Array<IField> = [
    {
      name: 'purchaseOrderDetails',
      type: 'titleGroupField',
      label: t('po_details')
    },
    {
      name: 'name',
      type: 'text',
      label: t('name'),
      placeholder: t('enter_po_name'),
      required: true,
      midWidth: true
    },
    {
      name: 'category',
      type: 'select',
      label: t('category'),
      type2: 'category',
      category: 'purchase-order-categories',
      placeholder: t('category'),
      midWidth: true
    },
    {
      name: 'shippingDueDate',
      type: 'date',
      label: t('due_date'),
      midWidth: true
    },
    {
      name: 'shippingAdditionalDetail',
      type: 'text',
      label: t('additional_details'),
      midWidth: true,
      multiple: true
    },
    {
      name: 'vendor',
      type: 'select',
      type2: 'vendor',
      label: t('vendor'),
      midWidth: true
    },
    {
      name: 'partQuantities',
      type: 'partQuantity',
      label: t('parts'),
      midWidth: true
    },
    {
      name: 'shippingInformation',
      type: 'titleGroupField',
      label: t('shipping_information')
    },
    {
      name: 'shippingCompanyName',
      type: 'text',
      label: t('company_name'),
      placeholder: t('company_name'),
      midWidth: true
    },
    {
      name: 'shippingShipToName',
      type: 'text',
      label: t('ship_to'),
      placeholder: t('ship_to'),
      midWidth: true
    },
    {
      name: 'shippingAddress',
      type: 'text',
      label: t('address'),
      placeholder: t('address'),
      midWidth: true
    },
    {
      name: 'shippingCity',
      type: 'text',
      label: t('city'),
      placeholder: t('city'),
      midWidth: true
    },
    {
      name: 'shippingState',
      type: 'text',
      label: t('state'),
      placeholder: t('state'),
      midWidth: true
    },
    {
      name: 'shippingZipCode',
      type: 'number',
      label: t('zip_code'),
      placeholder: t('zip_code'),
      midWidth: true
    },
    {
      name: 'shippingPhone',
      type: 'text',
      label: t('phone'),
      placeholder: t('phone'),
      midWidth: true
    },
    {
      name: 'shippingFax',
      type: 'text',
      label: t('fax_number'),
      placeholder: t('fax_number'),
      midWidth: true
    },
    {
      name: 'additionalInformation',
      type: 'titleGroupField',
      label: t('additional_information')
    },
    {
      name: 'additionalInfoDate',
      type: 'date',
      label: t('po_date'),
      placeholder: t('po_date'),
      midWidth: true
    },
    {
      name: 'additionalInfoNotes',
      type: 'text',
      label: t('notes'),
      placeholder: t('add_notes'),
      midWidth: true,
      multiple: true
    },
    {
      name: 'additionalInfoRequisitionedName',
      type: 'text',
      label: t('requisitioner'),
      placeholder: t('requisitioner'),
      midWidth: true
    },
    {
      name: 'additionalInfoTerm',
      type: 'text',
      label: t('terms'),
      placeholder: t('terms'),
      midWidth: true
    },
    {
      name: 'additionalInfoShippingOrderCategory',
      type: 'text',
      label: t('shipping_method'),
      placeholder: t('shipping_method'),
      midWidth: true
    }
  ];
  const shape = {
    name: Yup.string().required(t('required_name'))
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
          {t('edit_po')}
        </Typography>
        <Typography variant="subtitle2">{t('edit_po.description')}</Typography>
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
            submitText={t('save')}
            values={{
              ...currentPurchaseOrder,
              vendor: currentPurchaseOrder?.vendor
                ? {
                    label: currentPurchaseOrder.vendor.name,
                    value: currentPurchaseOrder.vendor.id.toString()
                  }
                : null,
              category: currentPurchaseOrder?.category
                ? {
                    label: currentPurchaseOrder.category.name,
                    values: currentPurchaseOrder?.category.id
                  }
                : null,
              partQuantities
            }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              values.vendor = formatSelect(values.vendor);
              values.category = formatSelect(values.category);
              return new Promise<void>((resolve, rej) => {
                dispatch(editPurchaseOrder(currentPurchaseOrder.id, values))
                  .then(() => {
                    dispatch(
                      editPOPartQuantities(
                        currentPurchaseOrder.id,
                        values.partQuantities
                      )
                    ).then(() =>
                      setTimeout(
                        () =>
                          dispatch(
                            getPartQuantitiesByPurchaseOrder(
                              currentPurchaseOrder.id
                            )
                          ),
                        //I don't know why direct call to API doesn't have updated values
                        1000
                      )
                    );
                  })
                  .then(onEditSuccess)
                  .catch(onEditFailure)
                  .finally(resolve);
              });
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  if (hasFeature(PlanFeature.PURCHASE_ORDER)) {
    if (hasViewPermission(PermissionEntity.PURCHASE_ORDERS))
      return (
        <>
          <Helmet>
            <title>{t('purchase_orders')}</title>
          </Helmet>
          <Grid
            container
            justifyContent="center"
            alignItems="stretch"
            spacing={1}
            paddingX={4}
          >
            {hasCreatePermission(PermissionEntity.PURCHASE_ORDERS) && (
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
                  {t('purchase_order')}
                </Button>
              </Grid>
            )}
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
                    loading={loadingGet}
                    components={{
                      Toolbar: GridToolbar,
                      NoRowsOverlay: () => (
                        <NoRowsMessageWrapper
                          message={t('noRows.po.message')}
                          action={t('noRows.po.action')}
                        />
                      )
                    }}
                    onRowClick={(params) =>
                      handleOpenDetails(Number(params.id))
                    }
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
              sx: { width: '50%' }
            }}
          >
            <PurchaseOrderDetails
              purchaseOrder={currentPurchaseOrder}
              handleOpenUpdate={handleOpenUpdate}
              handleDelete={() => setOpenDelete(true)}
              partQuantities={partQuantities}
            />
          </Drawer>
          {renderUpdateModal()}
          <ConfirmDialog
            open={openDelete}
            onCancel={() => {
              setOpenDelete(false);
              setOpenDrawer(true);
            }}
            onConfirm={() => handleDelete(currentPurchaseOrder?.id)}
            confirmText={t('to_delete')}
            question={t('confirm_remove_po')}
          />
        </>
      );
    else
      return <PermissionErrorMessage message={'no_access_purchase_orders'} />;
  } else return <FeatureErrorMessage message={'upgrade_po'} />;
}

export default PurchaseOrders;

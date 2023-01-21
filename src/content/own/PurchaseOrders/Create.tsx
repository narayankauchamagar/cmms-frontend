import { Helmet } from 'react-helmet-async';
import { Card, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IField } from '../type';
import { useContext, useEffect } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import {
  addPurchaseOrder,
  respondPurchaseOrder
} from '../../../slices/purchaseOrder';
import { useDispatch } from '../../../store';
import Form from '../components/form';
import * as Yup from 'yup';
import { phoneRegExp } from '../../../utils/validators';
import { formatSelect, formatSwitch } from '../../../utils/formatters';
import { useNavigate } from 'react-router-dom';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import PermissionErrorMessage from '../components/PermissionErrorMessage';
import useAuth from '../../../hooks/useAuth';
import { PermissionEntity } from '../../../models/owns/role';
import FeatureErrorMessage from '../components/FeatureErrorMessage';
import { PlanFeature } from '../../../models/owns/subscriptionPlan';
import { editPOPartQuantities } from '../../../slices/partQuantity';

function CreatePurchaseOrder() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hasCreatePermission, hasFeature, hasViewPermission } = useAuth();
  const { showSnackBar } = useContext(CustomSnackBarContext);
  useEffect(() => {
    setTitle(t('New Purchase Order'));
  }, []);
  const onCreationSuccess = () => {
    showSnackBar(
      t('The Purchase Order has been created successfully'),
      'success'
    );
    navigate('/app/purchase-orders');
  };
  const onMissingPartQuantities = () => {
    showSnackBar(t('Select at least 1 part '), 'error');
  };
  const onCreationFailure = (err) =>
    showSnackBar(t("The Purchase Order couldn't be created"), 'error');
  const defaultFields: Array<IField> = [
    {
      name: 'purchaseOrderDetails',
      type: 'titleGroupField',
      label: t('Purchase Order Details')
    },
    {
      name: 'name',
      type: 'text',
      label: t('name'),
      placeholder: t('Enter Purchase Order name'),
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
      label: t('Due Date'),
      midWidth: true
    },
    {
      name: 'shippingAdditionalDetail',
      type: 'text',
      label: t('Additional Details'),
      midWidth: true,
      multiple: true
    },
    {
      name: 'vendor',
      type: 'select',
      type2: 'vendor',
      label: t('Vendor'),
      midWidth: true
    },
    {
      name: 'partQuantities',
      type: 'partQuantity',
      label: t('parts'),
      midWidth: true,
      multiple: true
    },
    {
      name: 'shippingInformation',
      type: 'titleGroupField',
      label: t('Shipping Information')
    },
    {
      name: 'shippingCompanyName',
      type: 'text',
      label: t('Company name'),
      placeholder: t('Company name'),
      midWidth: true
    },
    {
      name: 'shippingShipToName',
      type: 'text',
      label: t('Ship To'),
      placeholder: t('Ship To'),
      midWidth: true
    },
    {
      name: 'shippingAddress',
      type: 'text',
      label: t('Address'),
      placeholder: t('Address'),
      midWidth: true
    },
    {
      name: 'shippingCity',
      type: 'text',
      label: t('City'),
      placeholder: t('City'),
      midWidth: true
    },
    {
      name: 'shippingState',
      type: 'text',
      label: t('State'),
      placeholder: t('State'),
      midWidth: true
    },
    {
      name: 'shippingZipCode',
      type: 'number',
      label: t('Zip Code'),
      placeholder: t('Zip Code'),
      midWidth: true
    },
    {
      name: 'shippingPhone',
      type: 'text',
      label: t('Phone number'),
      placeholder: t('Phone number'),
      midWidth: true
    },
    {
      name: 'shippingFax',
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
      name: 'additionalInfoDate',
      type: 'date',
      label: t('Purchase Order Date'),
      placeholder: t('Purchase Order Date'),
      midWidth: true
    },
    {
      name: 'additionalInfoNotes',
      type: 'text',
      label: t('Notes'),
      placeholder: t('Add Notes'),
      midWidth: true,
      multiple: true
    },
    {
      name: 'additionalInfoRequisitionedName',
      type: 'text',
      label: t('Requisitioner'),
      placeholder: t('Requisitioner'),
      midWidth: true
    },
    {
      name: 'additionalInfoTerm',
      type: 'text',
      label: t('Terms'),
      placeholder: t('Terms'),
      midWidth: true
    },
    {
      name: 'additionalInfoShippingOrderCategory',
      type: 'text',
      label: t('Shipping Method'),
      placeholder: t('Shipping Method'),
      midWidth: true
    }
  ];
  const getFields = () => {
    let fields = [...defaultFields];
    if (hasViewPermission(PermissionEntity.SETTINGS)) {
      fields.push({
        name: 'approveOnSubmit',
        type: 'switch',
        label: t('Approve while submitting')
      });
    }
    return fields;
  };
  const shape = {
    name: Yup.string().required(t('The name is required')),
    shippingFax: Yup.string().matches(
      phoneRegExp,
      t('The fax number is invalid')
    ),
    shippingPhone: Yup.string().matches(
      phoneRegExp,
      t('The phone number is invalid')
    )
  };
  if (hasFeature(PlanFeature.PURCHASE_ORDER)) {
    if (hasCreatePermission(PermissionEntity.PURCHASE_ORDERS))
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
                <Form
                  fields={getFields()}
                  validation={Yup.object().shape(shape)}
                  submitText={t('Submit')}
                  values={{
                    shippingDueDate: null,
                    additionalInfoDate: null,
                    approveOnSubmit: false
                  }}
                  onChange={({ field, e }) => {}}
                  onSubmit={async (values) => {
                    if (!values.partQuantities?.length) {
                      onMissingPartQuantities();
                      return;
                    }
                    if (
                      values.partQuantities.some(
                        (partQuantity) => partQuantity.quantity <= 0
                      )
                    ) {
                      showSnackBar(
                        t('Each Item quantity must be superior to 0'),
                        'error'
                      );
                      return;
                    }
                    values.category = formatSelect(values.category);
                    values.vendor = formatSelect(values.vendor);
                    values.approveOnSubmit = formatSwitch(
                      values,
                      'approveOnSubmit'
                    );
                    return dispatch(addPurchaseOrder(values))
                      .then((id: number) => {
                        dispatch(
                          editPOPartQuantities(id, values.partQuantities)
                        )
                          .then(() => {
                            if (values.approveOnSubmit) {
                              dispatch(respondPurchaseOrder(id, true));
                            }
                          })
                          .then(onCreationSuccess)
                          .catch(onCreationFailure);
                      })
                      .catch(onCreationFailure);
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </>
      );
    else
      return <PermissionErrorMessage message={'no_access_purchase_orders'} />;
  } else
    return (
      <FeatureErrorMessage message={'Upgrade to create Purchase Orders'} />
    );
}

export default CreatePurchaseOrder;

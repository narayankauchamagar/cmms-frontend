import {
  Box,
  debounce,
  Divider,
  Grid,
  IconButton,
  Link,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import { ChangeEvent, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import PurchaseOrder from '../../../models/owns/purchaseOrder';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import useAuth from '../../../hooks/useAuth';
import { PermissionEntity } from '../../../models/owns/role';
import { editPartQuantity } from '../../../slices/partQuantity';
import { useDispatch } from '../../../store';
import PartQuantitiesList from '../components/PartQuantitiesList';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import PartQuantity from 'src/models/owns/partQuantity';

interface PurchaseOrderDetailsProps {
  purchaseOrder: PurchaseOrder;
  handleOpenUpdate: () => void;
  handleDelete: () => void;
  partQuantities: PartQuantity[];
}
export default function PurchaseOrderDetails(props: PurchaseOrderDetailsProps) {
  const { purchaseOrder, handleOpenUpdate, handleDelete, partQuantities } =
    props;
  const { t }: { t: any } = useTranslation();
  const { getFormattedDate } = useContext(CompanySettingsContext);
  const { hasEditPermission, hasDeletePermission } = useAuth();
  const dispatch = useDispatch();
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState<string>('details');
  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'parts', label: t('Parts') },
    { value: 'shipping', label: t('Shipping Information') },
    { value: 'additionalInfos', label: t('Additional Informations') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const onPartQuantityChange = (value: string, partQuantity) => {
    dispatch(
      editPartQuantity(purchaseOrder.id, partQuantity.id, Number(value), true)
    )
      .then(() => showSnackBar(t('Quantity changed successfully'), 'success'))
      .catch((err) => showSnackBar(t("Quantity couldn't be changed"), 'error'));
  };
  const debouncedPartQuantityChange = useMemo(
    () => debounce(onPartQuantityChange, 1500),
    []
  );
  const BasicField = ({
    label,
    value,
    id,
    type
  }: {
    label: string | number;
    value: string | number;
    type?: string;
    id?: number;
  }) => {
    return value ? (
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
          {label}
        </Typography>
        {type === 'vendor' ? (
          <Link
            href={`/app/vendors-customers/vendors/${id}`}
            variant="h6"
            fontWeight="bold"
          >
            {value}
          </Link>
        ) : (
          <Typography variant="h6">{value}</Typography>
        )}
      </Grid>
    ) : null;
  };
  const detailsFieldsToRender = (
    purchaseOrder1: PurchaseOrder
  ): { label: string; value: any; type?: 'vendor'; id?: number }[] => [
    {
      label: t('Name'),
      value: purchaseOrder1.name
    },
    {
      label: t('ID'),
      value: purchaseOrder1.id
    },
    {
      label: t('Due Date'),
      value: purchaseOrder1.shippingDueDate
    },
    {
      label: t('Category'),
      value: purchaseOrder1.category
    },
    {
      label: t('Date created'),
      value: getFormattedDate(purchaseOrder1.createdAt)
    },
    {
      label: t('Vendor'),
      type: 'vendor',
      value: purchaseOrder1.vendor?.companyName,
      id: purchaseOrder1.vendor?.id
    }
  ];
  const shippingFieldsToRender = (
    purchaseOrder1: PurchaseOrder
  ): { label: string; value: any }[] => [
    {
      label: t('Company Name'),
      value: purchaseOrder1.shippingCompanyName
    },
    {
      label: t('Address'),
      value: purchaseOrder1.shippingAddress
    },
    {
      label: t('City'),
      value: purchaseOrder1.shippingCity
    },
    {
      label: t('State'),
      value: purchaseOrder1.shippingState
    },
    {
      label: t('Phone'),
      value: purchaseOrder1.shippingPhone
    },
    {
      label: t('Fax'),
      value: purchaseOrder1.shippingFax
    },
    {
      label: t('Ship To'),
      value: purchaseOrder1.shippingShipToName
    },
    {
      label: t('Additional Detail'),
      value: purchaseOrder1.shippingAdditionalDetail
    }
  ];
  const additionalInfosFieldsToRender = (
    purchaseOrder1: PurchaseOrder
  ): { label: string; value: any }[] => [
    {
      label: t('Requisitioner'),
      value: purchaseOrder1.additionalInfoRequistionerName
    },
    {
      label: t('Shipping method'),
      value: purchaseOrder1.additionalInfoShippingMethod
    },
    {
      label: t('Notes'),
      value: purchaseOrder1.additionalInfoNotes
    },
    {
      label: t('Terms'),
      value: purchaseOrder1.additionalInfoTerm
    }
  ];
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      padding={4}
    >
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h2">{purchaseOrder?.name}</Typography>
          <Typography variant="h6">{purchaseOrder?.shippingAddress}</Typography>
        </Box>
        <Box>
          {hasEditPermission(
            PermissionEntity.PURCHASE_ORDERS,
            purchaseOrder
          ) && (
            <IconButton onClick={handleOpenUpdate} style={{ marginRight: 10 }}>
              <EditTwoToneIcon color="primary" />
            </IconButton>
          )}
          {hasDeletePermission(
            PermissionEntity.PURCHASE_ORDERS,
            purchaseOrder
          ) && (
            <IconButton onClick={handleDelete}>
              <DeleteTwoToneIcon color="error" />
            </IconButton>
          )}
        </Box>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <Tabs
          onChange={handleTabsChange}
          value={currentTab}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        {currentTab === 'details' && (
          <Grid container spacing={2}>
            {detailsFieldsToRender(purchaseOrder).map((field) => (
              <BasicField
                key={field.id}
                label={field.label}
                value={field.value}
                type={field.type}
                id={field.id}
              />
            ))}
          </Grid>
        )}
        {currentTab === 'parts' && (
          <PartQuantitiesList
            partQuantities={partQuantities}
            onChange={debouncedPartQuantityChange}
          />
        )}
        {currentTab === 'shipping' && (
          <Grid container spacing={2}>
            {shippingFieldsToRender(purchaseOrder).map((field) => (
              <BasicField
                key={field.label}
                label={field.label}
                value={field.value}
              />
            ))}
          </Grid>
        )}
        {currentTab === 'additionalInfos' && (
          <Grid container spacing={2}>
            {additionalInfosFieldsToRender(purchaseOrder).map((field) => (
              <BasicField
                key={field.label}
                label={field.label}
                value={field.value}
              />
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

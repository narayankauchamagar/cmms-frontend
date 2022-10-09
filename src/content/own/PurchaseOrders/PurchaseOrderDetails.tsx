import {
  Box,
  Divider,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import PurchaseOrder from '../../../models/owns/purchaseOrder';

interface PurchaseOrderDetailsProps {
  purchaseOrder: PurchaseOrder;
  handleUpdate: (id: number) => void;
}
export default function PurchaseOrderDetails(props: PurchaseOrderDetailsProps) {
  const { purchaseOrder, handleUpdate } = props;
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState<string>('details');
  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'shipping', label: t('Shipping Information') },
    { value: 'additionalInfos', label: t('Additional Informations') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const renderField = (label, value, type?, id?) => {
    return (
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
          {label}
        </Typography>
        {type === 'vendor' ? (
          <Link href={`/app/vendors-customers/vendors/${id}`} variant="h6">
            {value}
          </Link>
        ) : (
          <Typography variant="h6">{value}</Typography>
        )}
      </Grid>
    );
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
      value: purchaseOrder1.createdAt
    },
    {
      label: t('Vendor'),
      type: 'vendor',
      value: purchaseOrder1.vendor.name,
      id: purchaseOrder1.vendor.id
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
          <EditTwoToneIcon
            onClick={() => handleUpdate(purchaseOrder.id)}
            style={{ cursor: 'pointer', marginRight: 10 }}
            color="primary"
          />
          <DeleteTwoToneIcon style={{ cursor: 'pointer' }} color="error" />
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
            {detailsFieldsToRender(purchaseOrder).map((field) =>
              renderField(field.label, field.value, field.type, field.id)
            )}
          </Grid>
        )}
        {currentTab === 'shipping' && (
          <Grid container spacing={2}>
            {shippingFieldsToRender(purchaseOrder).map((field) =>
              renderField(field.label, field.value)
            )}
          </Grid>
        )}
        {currentTab === 'additionalInfos' && (
          <Grid container spacing={2}>
            {additionalInfosFieldsToRender(purchaseOrder).map((field) =>
              renderField(field.label, field.value)
            )}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

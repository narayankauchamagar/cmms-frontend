import { Box, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
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
  const [currentTab, setCurrentTab] = useState<string>('details');
  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'shipping', label: t('Shipping Information') },
    { value: 'additionalInfos', label: t('Additional Informations') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
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
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

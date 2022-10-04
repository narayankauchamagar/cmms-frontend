import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../../components/MultipleTabsLayout';
import { TitleContext } from '../../../../contexts/TitleContext';
import { useLocation, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Asset, { assets } from '../../../../models/owns/asset';
import AssetWorkOrders from './AssetWorkOrders';
import AssetDetails from './AssetDetails';
import AssetParts from './AssetParts';

interface PropsType {}

const VendorsAndCustomers = ({}: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const { assetId } = useParams();
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [asset, setAsset] = useState<Asset>();
  const { setTitle } = useContext(TitleContext);
  const location = useLocation();

  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);

  useEffect(() => {
    setAsset(assets.find((asset) => asset.id === Number(assetId)));
  }, []);

  useEffect(() => {
    setTitle(asset?.name);
  }, [asset]);

  const arr = location.pathname.split('/');

  const tabs = [
    { value: 'work-orders', label: t('Work Orders') },
    { value: 'details', label: t('Details') },
    { value: 'parts', label: t('Parts') }
  ];
  const tabIndex = tabs.findIndex((tab) => tab.value === arr[arr.length - 1]);

  return (
    <MultipleTabsLayout
      basePath={`/app/assets/${assetId}`}
      tabs={tabs}
      tabIndex={tabIndex}
      title={`Asset`}
      action={handleOpenUpdateModal}
      actionTitle={t('Edit')}
      withoutCard={true}
    >
      {asset ? (
        tabIndex === 0 ? (
          <AssetWorkOrders asset={asset} />
        ) : tabIndex === 1 ? (
          <AssetDetails asset={asset} />
        ) : (
          tabIndex === 2 && <AssetParts asset={asset} />
        )
      ) : null}
    </MultipleTabsLayout>
  );
};

export default VendorsAndCustomers;

import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../../components/MultipleTabsLayout';
import { TitleContext } from '../../../../contexts/TitleContext';
import { useLocation, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Asset from '../../../../models/owns/asset';
import AssetWorkOrders from './AssetWorkOrders';

interface PropsType {}

const VendorsAndCustomers = ({}: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const { assetId } = useParams();
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [asset, setAsset] = useState<Asset>();
  const { setTitle } = useContext(TitleContext);
  const location = useLocation();
  const assets: Asset[] = [
    {
      id: 212,
      name: 'cgvg',
      createdAt: 'dfggj',
      createdBy: 'ghu',
      updatedAt: 'ghfgj',
      updatedBy: 'ghfgj'
    },
    {
      id: 44,
      name: 'fcgvc',
      createdAt: 'dfggj',
      createdBy: 'ghu',
      updatedAt: 'ghfgj',
      updatedBy: 'ghfgj'
    }
  ];

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
      {tabIndex === 0 && <AssetWorkOrders asset={asset} />}
      {tabIndex === 1 && <Box>gf</Box>}
    </MultipleTabsLayout>
  );
};

export default VendorsAndCustomers;

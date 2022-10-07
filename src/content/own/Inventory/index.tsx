import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';
import { TitleContext } from '../../../contexts/TitleContext';
import { useLocation, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Parts from './Parts';
import Sets from './Sets';

interface PropsType {}

const VendorsAndCustomers = ({}: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const [action, setAction] = useState<() => void>();
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const location = useLocation();

  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);

  useEffect(() => {
    setTitle('Parts&Inventory');
  }, []);

  const arr = location.pathname.split('/');

  const tabs = [
    { value: 'parts', label: t('Parts') },
    { value: 'sets', label: t('Sets of Parts') }
  ];
  const tabIndex = tabs.findIndex((tab) => tab.value === arr[arr.length - 1]);

  return (
    <MultipleTabsLayout
      basePath={`/app/inventory`}
      tabs={tabs}
      tabIndex={tabIndex}
      title={`Inventory`}
      action={action}
      actionTitle={tabs[tabIndex].label}
    >
      {tabIndex === 0 && <Parts setAction={setAction} />}
      {tabIndex === 1 && <Sets setAction={setAction} />}
    </MultipleTabsLayout>
  );
};

export default VendorsAndCustomers;

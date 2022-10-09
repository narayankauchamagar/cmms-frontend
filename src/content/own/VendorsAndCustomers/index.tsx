import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';
import { TitleContext } from '../../../contexts/TitleContext';
import { useLocation, useParams } from 'react-router-dom';
import Vendors from './Vendors';
import Customers from './Customers';

interface PropsType {}

const VendorsAndCustomers = ({}: PropsType) => {
  const { t }: { t: any } = useTranslation();

  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const location = useLocation();

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);
  const { customerId, vendorId } = useParams();

  useEffect(() => {
    setTitle(t('Vendors & Customers'));
  }, []);

  const tabs = [
    { value: 'vendors', label: t('Vendors') },
    { value: 'customers', label: t('Customers') }
  ];
  const arr = location.pathname.split('/');
  const minus = customerId || vendorId ? 2 : 1;
  const tabIndex = tabs.findIndex(
    (tab) => tab.value === arr[arr.length - minus]
  );

  return (
    <MultipleTabsLayout
      basePath="/app/vendors-customers"
      tabs={tabs}
      tabIndex={tabIndex}
      title={`Vendors & Customers`}
      action={handleOpenAddModal}
      actionTitle={t(`${tabs[tabIndex].label}`)}
    >
      {tabIndex === 0 ? (
        <Vendors
          // values={values}
          openModal={openAddModal}
          handleCloseModal={handleCloseAddModal}
        />
      ) : (
        <Customers
          // values={values}
          openModal={openAddModal}
          handleCloseModal={handleCloseAddModal}
        />
      )}
    </MultipleTabsLayout>
  );
};

export default VendorsAndCustomers;

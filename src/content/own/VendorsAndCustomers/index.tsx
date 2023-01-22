import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';
import { TitleContext } from '../../../contexts/TitleContext';
import { useLocation, useParams } from 'react-router-dom';
import Vendors from './Vendors';
import Customers from './Customers';
import useAuth from '../../../hooks/useAuth';
import { PermissionEntity } from '../../../models/owns/role';
import PermissionErrorMessage from '../components/PermissionErrorMessage';

interface PropsType {}

const VendorsAndCustomers = ({}: PropsType) => {
  const { t }: { t: any } = useTranslation();

  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const { hasViewPermission, hasCreatePermission } = useAuth();
  const location = useLocation();

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);
  const { customerId, vendorId } = useParams();

  useEffect(() => {
    setTitle(t('Vendors_Customers'));
  }, []);

  const tabs = [
    { value: 'vendors', label: t('vendors') },
    { value: 'customers', label: t('customers') }
  ];
  const arr = location.pathname.split('/');
  const minus = customerId || vendorId ? 2 : 1;
  const tabIndex = tabs.findIndex(
    (tab) => tab.value === arr[arr.length - minus]
  );

  if (hasViewPermission(PermissionEntity.VENDORS_AND_CUSTOMERS))
    return (
      <MultipleTabsLayout
        basePath="/app/vendors-customers"
        tabs={tabs}
        tabIndex={tabIndex}
        title={t('Vendors_Customers')}
        action={
          hasCreatePermission(PermissionEntity.VENDORS_AND_CUSTOMERS)
            ? handleOpenAddModal
            : null
        }
        actionTitle={t(`${tabs[tabIndex].label}`)}
      >
        {tabIndex === 0 ? (
          <Vendors
            openModal={openAddModal}
            handleCloseModal={handleCloseAddModal}
          />
        ) : (
          <Customers
            openModal={openAddModal}
            handleCloseModal={handleCloseAddModal}
          />
        )}
      </MultipleTabsLayout>
    );
  else
    return <PermissionErrorMessage message={'no_access_vendors_customers'} />;
};

export default VendorsAndCustomers;

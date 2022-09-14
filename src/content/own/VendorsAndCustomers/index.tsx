import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';
import { TitleContext } from '../../../contexts/TitleContext';
import { useLocation } from 'react-router-dom';
import Vendors from './Vendors';

interface PropsType {}

const VendorsAndCustomers = ({}: PropsType) => {
  const { t }: { t: any } = useTranslation();

  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const location = useLocation();

  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptTerm, setAcceptTerm] = useState(false);

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  const values = {
    companyName: companyName,
    phone: phone,
    term: acceptTerm
  };
  console.log('values-> ', values);

  useEffect(() => {
    setTitle(t('Vendors & Customers'));
  }, []);

  console.log('location ', location);
  const tabIndex =
    location.pathname === '/app/vendors-customers/vendors' ? 0 : 1;

  const tabs = [
    { value: 'vendors', label: t('Vendors') },
    { value: 'customers', label: t('Customers') }
  ];

  return (
    <MultipleTabsLayout
      basePath="/app/vendors-customers"
      tabs={tabs}
      tabIndex={tabIndex}
      title={`Vendors&Customers`}
      action={handleOpenAddModal}
      actionTitle={t(`${tabs[tabIndex].label}`)}
    >
      <Vendors
        values={values}
        openModal={openAddModal}
        handleCloseModal={handleCloseAddModal}
      />
    </MultipleTabsLayout>
  );
};

export default VendorsAndCustomers;

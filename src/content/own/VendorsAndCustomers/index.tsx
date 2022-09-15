import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';
import { TitleContext } from '../../../contexts/TitleContext';
import { useLocation } from 'react-router-dom';
import Vendors from './Vendors';
import Customers from './Customers';

interface PropsType {}

const VendorsAndCustomers = ({}: PropsType) => {
  const { t }: { t: any } = useTranslation();

  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const location = useLocation();

  // const [companyName, setCompanyName] = useState<string>('');
  // const [phone, setPhone] = useState<string>('');

  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  // const values = {
  //   companyName: companyName,
  //   phone: phone
  // };
  // console.log('values-> ', values);

  useEffect(() => {
    setTitle(t('Vendors & Customers'));
  }, []);

  let regex = /(\/app\/vendors-customers)\/?$/;
  const tabIndex = regex.test(location.pathname) ? 0 : 1;

  const tabs = [
    { value: '', label: t('Vendors') },
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

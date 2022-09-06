import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';

interface CategoriesLayoutProps {
  children?: ReactNode;
  tabIndex: number;
}

function CategoriesLayout(props: CategoriesLayoutProps) {
  const { children, tabIndex } = props;
  const { t }: { t: any } = useTranslation();
  const tabs = [
    { value: '', label: t('Work Orders') },
    { value: 'asset-status', label: t('Asset Status') },
    { value: 'purchase-order', label: t('Purchase Orders') },
    { value: 'meter', label: t('Meter') },
    { value: 'timer', label: t('Timer') },
  ];

  return <MultipleTabsLayout basePath='/app/categories' tabs={tabs} tabIndex={tabIndex} title='Categories'>
    {children}
  </MultipleTabsLayout>
    ;
}

export default CategoriesLayout;

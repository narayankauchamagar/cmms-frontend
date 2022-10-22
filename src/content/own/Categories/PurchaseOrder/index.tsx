import CategoriesLayout from '../CategoriesLayout';

function PurchaseOrderCategories() {
  const categories = [];
  return (
    <CategoriesLayout
      tabIndex={2}
      categories={categories}
      basePath="purchase-order-categories"
    />
  );
}

export default PurchaseOrderCategories;

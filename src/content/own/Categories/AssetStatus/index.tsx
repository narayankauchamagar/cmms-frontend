import CategoriesLayout from '../CategoriesLayout';

function AssetStatusCategories() {
  const categories = [];
  return (
    <CategoriesLayout
      tabIndex={1}
      categories={categories}
      basePath="asset-categories"
    />
  );
}

export default AssetStatusCategories;

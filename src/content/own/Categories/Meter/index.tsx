import CategoriesLayout from '../CategoriesLayout';

function MeterCategories() {
  const categories = [];
  return (
    <CategoriesLayout
      tabIndex={3}
      categories={categories}
      basePath="meter-categories"
    />
  );
}

export default MeterCategories;

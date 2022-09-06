import CategoriesLayout from '../CategoriesLayout';

function WorkOrderCategories() {
  const categories = [
    {
      id: 1,
      name: 'Damage'
    },
    {
      id: 2,
      name: 'Electrical'
    },
    {
      id: 3,
      name: 'Inspection'
    },
    {
      id: 4,
      name: 'Meter reading'
    }
  ];
  return <CategoriesLayout tabIndex={0} categories={categories} />;
}

export default WorkOrderCategories;

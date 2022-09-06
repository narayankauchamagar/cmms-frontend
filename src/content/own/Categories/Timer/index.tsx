import CategoriesLayout from '../CategoriesLayout';


function MeterCategories() {
  const categories = [{
    id: 1,
    name: 'Vendor time'
  },
    {
      id: 2,
      name: 'Wrench time'
    }, {
      id: 3,
      name: 'Other time'
    }, {
      id: 4,
      name: 'Drive time'
    },
    {
      id: 5,
      name: 'Inspection time'
    }
  ];
  return (
    <CategoriesLayout tabIndex={4} categories={categories}/>

  );
}

export default MeterCategories;

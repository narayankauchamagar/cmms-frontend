import { FilterField, SearchOperator } from '../../../models/owns/page';
import * as Yup from 'yup';
import Form from '../components/form';
import { IField } from '../type';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { useSelector } from '../../../store';
import { UserMiniDTO } from '../../../models/user';

interface OwnProps {
  onFilterChange: (filterFields: FilterField[]) => void;
  filterFields: FilterField[];
  onSave: () => void;
}

function Filters({ filterFields, onFilterChange, onSave }: OwnProps) {
  const { t }: { t: any } = useTranslation();
  const { customersMini } = useSelector((state) => state.customers);
  const { locationsMini } = useSelector((state) => state.locations);
  const { categories } = useSelector((state) => state.categories);
  const { usersMini } = useSelector((state) => state.users);
  const { teamsMini } = useSelector((state) => state.teams);

  type FieldType = 'simple' | 'array' | 'date';
  const filtersConfig: {
    accessor: string;
    fieldName: string;
    operator?: SearchOperator;
    type: FieldType;
  }[] = [
    { accessor: 'categories', fieldName: 'category', type: 'array' },
    { accessor: 'locations', fieldName: 'location', type: 'array' },
    {
      accessor: 'area',
      fieldName: 'area',
      type: 'simple'
    },
    {
      accessor: 'model',
      fieldName: 'model',
      type: 'simple'
    },
    { accessor: 'createdBy', fieldName: 'createdBy', type: 'array' },

    { accessor: 'teams', fieldName: 'team', type: 'array' },
    { accessor: 'primaryUsers', fieldName: 'primaryUser', type: 'array' },
    {
      accessor: 'assignedTo',
      fieldName: 'assignedTo',
      operator: 'inm',
      type: 'array'
    },
    {
      accessor: 'customers',
      fieldName: 'customer',
      operator: 'inm',
      type: 'array'
    },
    {
      accessor: 'vendors',
      fieldName: 'vendor',
      operator: 'inm',
      type: 'array'
    },

    {
      accessor: 'archived',
      fieldName: 'archived',
      type: 'simple'
    },
    { accessor: 'createdAt', fieldName: 'createdAt', type: 'date' },
    { accessor: 'updatedAt', fieldName: 'updatedAt', type: 'date' }
  ];
  const fields: Array<IField> = [
    {
      name: 'categories',
      type: 'select',
      label: t('category'),
      type2: 'category',
      category: 'asset-categories'
    },
    {
      name: 'locations',
      type: 'select',
      label: t('location'),
      type2: 'location',
      multiple: true
    },
    {
      name: 'area',
      type: 'text',
      label: t('area')
    },
    {
      name: 'model',
      type: 'text',
      label: t('model')
    },

    { name: 'peopleGroup', type: 'titleGroupField', label: t('people') },
    {
      name: 'createdBy',
      type: 'select',
      label: t('created_by'),
      type2: 'user',
      multiple: true
    },
    {
      name: 'teams',
      type: 'select',
      label: t('team'),
      type2: 'team',
      multiple: true
    },
    //TODO
    // {
    //   name: 'requestedBy',
    //   type: 'select',
    //   label: t('requested_by'),
    //   type2: 'user',
    //   multiple: true
    // },
    {
      name: 'primaryUsers',
      type: 'select',
      label: t('primary_worker'),
      type2: 'user',
      multiple: true
    },
    {
      name: 'assignedTo',
      type: 'select',
      label: t('additional_workers'),
      type2: 'user',
      multiple: true
    },
    {
      name: 'customers',
      type: 'select',
      label: t('customers'),
      type2: 'customer',
      multiple: true
    },
    {
      name: 'vendors',
      type: 'select',
      label: t('vendors'),
      type2: 'vendor',
      multiple: true
    },
    {
      name: 'archived',
      type: 'checkbox',
      label: t('archived')
    },
    { name: 'datesGroup', type: 'titleGroupField', label: t('dates') },
    {
      name: 'createdAt',
      type: 'dateRange',
      label: t('created_at')
    },
    {
      name: 'updatedAt',
      type: 'dateRange',
      label: t('updated_at')
    }
  ];
  const getLabelAndValue = <T extends { id: number }>(
    minis: T[],
    fieldName: string,
    labelAccessor?: keyof T,
    formatter?: (value: T) => string
  ): { label: string; value: number }[] => {
    return (
      filterFields
        .find((filterField) => filterField.field === fieldName)
        ?.values.map((id) => ({
          label: formatter
            ? formatter(minis.find((mini) => mini.id === id))
            : minis.find((mini) => mini.id === id)[labelAccessor].toString(),
          value: id
        })) ?? null
    );
  };
  const getDateValue = (fieldName: string): [string, string] => {
    return [
      filterFields.find(
        (filterField) =>
          filterField.field === fieldName && filterField.operation === 'ge'
      )?.value ?? null,
      filterFields.find(
        (filterField) =>
          filterField.field === fieldName && filterField.operation === 'le'
      )?.value ?? null
    ];
  };

  const getValuesFromFilterFields = (): {
    [key: string]:
      | { label: string; value: string }
      | { label: string; value: number }[]
      | boolean
      | [string, string];
  } => {
    return {
      categories: getLabelAndValue(categories['assets'], 'category', 'name'),
      locations: getLabelAndValue(locationsMini, 'location', 'name'),
      area:
        filterFields.find((filterField) => filterField.field === 'area')
          ?.value ?? null,
      model:
        filterFields.find((filterField) => filterField.field === 'model')
          ?.value ?? null,
      createdBy: getLabelAndValue(
        usersMini,
        'createdBy',
        null,
        (user: UserMiniDTO) => `${user.firstName} ${user.lastName}`
      ),
      teams: getLabelAndValue(teamsMini, 'team', 'name'),
      primaryUsers: getLabelAndValue(
        usersMini,
        'primaryUser',
        null,
        (user: UserMiniDTO) => `${user.firstName} ${user.lastName}`
      ),
      assignedTo: getLabelAndValue(
        usersMini,
        'assignedTo',
        null,
        (user: UserMiniDTO) => `${user.firstName} ${user.lastName}`
      ),
      customers: getLabelAndValue(customersMini, 'customer', 'name'),
      vendors: getLabelAndValue(customersMini, 'vendor', 'name'),
      archived: filterFields.find(
        (filterField) => filterField.field === 'archived'
      ).value,
      createdAt: getDateValue('createdAt'),
      updatedAt: getDateValue('updatedAt')
    };
  };
  const shape = {};
  const filterSingleField = (
    filters: FilterField[],
    values: { [key: string]: { label: string; value: number }[] },
    accessor: string,
    fieldName: string,
    type: FieldType,
    operator: SearchOperator = 'in'
  ): FilterField[] => {
    filters = filters.filter((filterField) => filterField.field !== fieldName);
    if (type === 'simple') {
      if (values[accessor] !== null)
        filters.push({
          field: fieldName,
          operation: 'eq',
          value: values[accessor]
        });
    } else if (type === 'array' && values[accessor]?.length) {
      const ids = values[accessor].map((element) => element.value);
      filters.push({
        field: fieldName,
        operation: operator,
        joinType: operator === 'inm' ? 'LEFT' : null,
        value: '',
        values: ids
      });
    } else if (type === 'date' && values[accessor]?.every((date) => !!date)) {
      const [start, end] = values[accessor];
      filters = [
        ...filters,
        {
          field: fieldName,
          operation: 'ge',
          value: start,
          enumName: 'JS_DATE'
        },
        { field: fieldName, operation: 'le', value: end, enumName: 'JS_DATE' }
      ];
    }
    return filters;
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
      spacing={1}
      padding={2}
    >
      <Grid item xs={12}>
        <Typography variant="h2">{t('filters')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Form
          fields={fields}
          validation={Yup.object().shape(shape)}
          submitText={t('save')}
          values={getValuesFromFilterFields()}
          onChange={({ field, e }) => {}}
          onSubmit={async (values) => {
            let newFilters = [...filterFields];
            filtersConfig.forEach((filterConfig) => {
              newFilters = filterSingleField(
                newFilters,
                values,
                filterConfig.accessor,
                filterConfig.fieldName,
                filterConfig.type,
                filterConfig.operator
              );
            });
            onFilterChange(newFilters);
            onSave();
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Filters;

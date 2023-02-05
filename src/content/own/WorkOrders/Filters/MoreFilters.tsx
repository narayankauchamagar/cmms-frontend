import { SearchCriteria, SearchOperator } from '../../../../models/owns/page';
import * as Yup from 'yup';
import Form from '../../components/form';
import { IField } from '../../type';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { useDispatch, useSelector } from '../../../../store';
import { UserMiniDTO } from '../../../../models/user';
import { CompanySettingsContext } from '../../../../contexts/CompanySettingsContext';

interface OwnProps {
  onCriteriaChange: (criteria: SearchCriteria) => void;
  criteria: SearchCriteria;
  onClose: () => void;
}

function MoreFilters({ criteria, onCriteriaChange, onClose }: OwnProps) {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const { customersMini } = useSelector((state) => state.customers);
  const { getUserNameById } = useContext(CompanySettingsContext);
  const { locationsMini } = useSelector((state) => state.locations);
  const { categories } = useSelector((state) => state.categories);
  const { usersMini } = useSelector((state) => state.users);
  const { assetsMini } = useSelector((state) => state.assets);
  const { teamsMini } = useSelector((state) => state.teams);

  type FieldType = 'simple' | 'array' | 'date';
  const filtersConfig: {
    accessor: string;
    fieldName: string;
    operator?: SearchOperator;
    type: FieldType;
  }[] = [
    { accessor: 'assets', fieldName: 'asset', type: 'array' },
    { accessor: 'categories', fieldName: 'category', type: 'array' },
    { accessor: 'teams', fieldName: 'team', type: 'array' },
    { accessor: 'primaryUsers', fieldName: 'primaryUser', type: 'array' },
    { accessor: 'locations', fieldName: 'location', type: 'array' },
    { accessor: 'createdBy', fieldName: 'createdBy', type: 'array' },
    { accessor: 'completedBy', fieldName: 'completedBy', type: 'array' },
    {
      accessor: 'customers',
      fieldName: 'customer',
      operator: 'inm',
      type: 'array'
    },
    {
      accessor: 'assignedTo',
      fieldName: 'assignedTo',
      operator: 'inm',
      type: 'array'
    },
    {
      accessor: 'archived',
      fieldName: 'archived',
      type: 'simple'
    },
    { accessor: 'createdAt', fieldName: 'createdAt', type: 'date' },
    { accessor: 'updatedAt', fieldName: 'updatedAt', type: 'date' },
    { accessor: 'completedOn', fieldName: 'completedOn', type: 'date' }
  ];
  const fields: Array<IField> = [
    {
      name: 'assets',
      type: 'select',
      label: t('asset'),
      type2: 'asset',
      multiple: true
    },
    {
      name: 'categories',
      type: 'select',
      label: t('category'),
      type2: 'category',
      category: 'work-order-categories',
      multiple: true
    },
    {
      name: 'teams',
      type: 'select',
      label: t('team'),
      type2: 'team',
      multiple: true
    },
    {
      name: 'locations',
      type: 'select',
      label: t('location'),
      type2: 'location',
      multiple: true
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
      name: 'completedBy',
      type: 'select',
      label: t('completed_by'),
      type2: 'user',
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
      label: t('customer'),
      type2: 'customer',
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
      name: 'completedOn',
      type: 'dateRange',
      label: t('completed_on')
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
    const filterFields = criteria.filterFields;
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
      criteria.filterFields.find(
        (filterField) =>
          filterField.field === fieldName && filterField.operation === 'ge'
      )?.value ?? null,
      criteria.filterFields.find(
        (filterField) =>
          filterField.field === fieldName && filterField.operation === 'le'
      )?.value ?? null
    ];
  };
  const getValuesFromCriteria = (): {
    [key: string]:
      | { label: string; value: number }[]
      | boolean
      | [string, string];
  } => {
    return {
      archived: criteria.filterFields.find(
        (filterField) => filterField.field === 'archived'
      ).value,
      assets: getLabelAndValue(assetsMini, 'asset', 'name'),
      teams: getLabelAndValue(teamsMini, 'team', 'name'),
      categories: getLabelAndValue(
        categories['work-orders'],
        'category',
        'name'
      ),
      primaryUsers: getLabelAndValue(
        usersMini,
        'primaryUser',
        null,
        (user: UserMiniDTO) => `${user.firstName} ${user.lastName}`
      ),
      locations: getLabelAndValue(locationsMini, 'location', 'name'),
      completedBy: getLabelAndValue(
        usersMini,
        'completedBy',
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
      createdBy: getLabelAndValue(
        usersMini,
        'createdBy',
        null,
        (user: UserMiniDTO) => `${user.firstName} ${user.lastName}`
      ),
      createdAt: getDateValue('createdAt'),
      updatedAt: getDateValue('updatedAt'),
      completedOn: getDateValue('completedOn')
    };
  };
  const shape = {};
  const filterSingleField = (
    criteria: SearchCriteria,
    values: { [key: string]: { label: string; value: number }[] },
    accessor: string,
    fieldName: string,
    type: FieldType,
    operator: SearchOperator = 'in'
  ) => {
    let filterFields = criteria.filterFields;
    if (
      (type === 'simple' && values[accessor] === undefined) ||
      (type === 'array' && !values[accessor]?.length) ||
      (type === 'date' && values[accessor] == [null, null])
    ) {
      filterFields = filterFields.filter(
        (filterField) => filterField.field !== fieldName
      );
    } else {
      let elementFilterFieldIndex = filterFields.findIndex(
        (filterField) => filterField.field === fieldName
      );

      if (type === 'simple') {
        if (elementFilterFieldIndex !== -1) {
          filterFields[elementFilterFieldIndex] = {
            ...filterFields[elementFilterFieldIndex],
            value: values[accessor]
          };
        } else {
          filterFields.push({
            field: fieldName,
            operation: 'eq',
            value: values[accessor]
          });
        }
      } else if (type === 'array' && values[accessor]?.length) {
        const ids = values[accessor].map((element) => element.value);
        if (elementFilterFieldIndex !== -1) {
          filterFields[elementFilterFieldIndex] = {
            ...filterFields[elementFilterFieldIndex],
            value: '',
            values: ids
          };
        } else {
          filterFields.push({
            field: fieldName,
            operation: operator,
            joinType: operator === 'inm' ? 'LEFT' : null,
            value: '',
            values: ids
          });
        }
      } else if (type === 'date' && values[accessor]?.every((date) => !!date)) {
        const [start, end] = values[accessor];
        filterFields = filterFields.filter(
          (filterField) => filterField.field !== fieldName
        );
        filterFields = [
          ...filterFields,
          {
            field: fieldName,
            operation: 'ge',
            value: start,
            enumName: 'JS_DATE'
          },
          { field: fieldName, operation: 'le', value: end, enumName: 'JS_DATE' }
        ];
      }
    }
    criteria.filterFields = filterFields;
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
        <Typography variant="h2">{t('more_filters')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Form
          fields={fields}
          validation={Yup.object().shape(shape)}
          submitText={t('save')}
          values={getValuesFromCriteria()}
          onChange={({ field, e }) => {}}
          onSubmit={async (values) => {
            const newCriteria = { ...criteria };
            filtersConfig.forEach((filterConfig) => {
              filterSingleField(
                newCriteria,
                values,
                filterConfig.accessor,
                filterConfig.fieldName,
                filterConfig.type,
                filterConfig.operator
              );
            });
            onCriteriaChange(newCriteria);
            onClose();
          }}
        />
      </Grid>
    </Grid>
  );
}

export default MoreFilters;

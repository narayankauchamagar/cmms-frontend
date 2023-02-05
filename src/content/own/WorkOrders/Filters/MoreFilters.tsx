import { SearchCriteria } from '../../../../models/owns/page';
import * as Yup from 'yup';
import Form from '../../components/form';
import { IField } from '../../type';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';

interface OwnProps {
  onCriteriaChange: (criteria: SearchCriteria) => void;
  criteria: SearchCriteria;
  onClose: () => void;
}

function MoreFilters({ criteria, onCriteriaChange, onClose }: OwnProps) {
  const { t }: { t: any } = useTranslation();
  const filtersConfig: { accessor: string; fieldName: string }[] = [
    { accessor: 'assets', fieldName: 'asset' },
    { accessor: 'categories', fieldName: 'category' },
    { accessor: 'teams', fieldName: 'team' },
    { accessor: 'primaryUsers', fieldName: 'primaryUser' },
    { accessor: 'locations', fieldName: 'location' },
    { accessor: 'createdBy', fieldName: 'createdBy' },
    { accessor: 'completedBy', fieldName: 'completedBy' }
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
      name: 'archived',
      type: 'checkbox',
      label: t('archived')
    }
    //TODO dates
  ];
  const getValuesFromCriteria = () => {
    return criteria;
  };
  const shape = {};
  const filterMultiple = (
    criteria: SearchCriteria,
    values: { [key: string]: { label: string; value: number }[] },
    accessor: string,
    fieldName: string
  ) => {
    if (values[accessor]?.length) {
      const filterFields = criteria.filterFields;
      const ids = values[accessor].map((element) => element.value);
      let elementFilterFieldIndex = filterFields.findIndex(
        (filterField) => filterField.field === fieldName
      );
      const simpleOperation = (id: number) => ({
        field: fieldName,
        operation: 'eq',
        value: id
      });
      if (elementFilterFieldIndex !== -1) {
        filterFields[elementFilterFieldIndex] = {
          ...filterFields[elementFilterFieldIndex],
          value: ids[0],
          alternatives: ids.slice(1).map(simpleOperation)
        };
      } else {
        filterFields.push({
          field: fieldName,
          operation: 'eq',
          value: ids[0],
          alternatives: ids.slice(1).map(simpleOperation)
        });
      }
      criteria.filterFields = filterFields;
    }
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
              filterMultiple(
                newCriteria,
                values,
                filterConfig.accessor,
                filterConfig.fieldName
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

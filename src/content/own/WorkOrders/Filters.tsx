import { SearchCriteria } from '../../../models/owns/page';
import * as Yup from 'yup';
import Form from '../components/form';
import { IField } from '../type';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';

interface OwnProps {
  onCriteriaChange: (criteria: SearchCriteria) => void;
  criteria: SearchCriteria;
  onClose: () => void;
}

function Filters({ criteria, onCriteriaChange, onClose }: OwnProps) {
  const { t }: { t: any } = useTranslation();
  const fields: Array<IField> = [
    {
      name: 'assignedTo',
      type: 'select',
      label: t('assigned_to'),
      type2: 'user'
    }
  ];
  const getValuesFromCriteria = () => {
    return criteria;
  };
  const shape = {};
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
          values={getValuesFromCriteria()}
          onChange={({ field, e }) => {}}
          onSubmit={async (values) => {
            onClose();
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Filters;

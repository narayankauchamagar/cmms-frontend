import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Typography,
  useTheme
} from '@mui/material';
import { Field, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

interface FieldsConfigurationFormProps {
  initialValues: any;
  onSubmit: any;
  fields: { label: string; name: string }[];
}

const FieldsConfigurationForm: FC<FieldsConfigurationFormProps> = ({
  initialValues,
  onSubmit,
  fields
}) => {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const renderFields = (
    fields: { label: string; name: string }[],
    values: any
  ) => {
    return fields.map((field, index) => (
      <Grid
        style={
          index % 2 === 0
            ? { backgroundColor: theme.colors.alpha.black[10] }
            : undefined
        }
        key={field.name}
        item
        xs={12}
        md={12}
        lg={12}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          padding={0.5}
        >
          <Typography variant="h6">{field.label}</Typography>
          <Field
            style={{ backgroundColor: 'white' }}
            as={Select}
            value={values[field.name]}
            name={field.name}
          >
            <MenuItem value="optional">Optional</MenuItem>
            <MenuItem value="required">Required</MenuItem>
            <MenuItem value="hidden">Hidden</MenuItem>
          </Field>
        </Box>
      </Grid>
    ));
  };
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {t('You can mark fields as Optional, Hidden or Required')}
      </Typography>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              {renderFields(fields, values)}
              <Button sx={{ mt: 3 }} type="submit" variant="contained">
                {t('Save')}
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default FieldsConfigurationForm;

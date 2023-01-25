import {
  Box,
  Grid,
  MenuItem,
  Select,
  Typography,
  useTheme
} from '@mui/material';
import { Field, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { FieldConfigurationsType } from '../../../contexts/JWTAuthContext';
import useAuth from '../../../hooks/useAuth';

interface FieldsConfigurationFormProps {
  initialValues: any;
  fields: { label: string; name: string; type: FieldConfigurationsType }[];
}

const FieldsConfigurationForm: FC<FieldsConfigurationFormProps> = ({
  initialValues,
  fields
}) => {
  const { t }: { t: any } = useTranslation();
  const { patchFieldConfiguration, companySettings } = useAuth();
  const workOrderFieldConfigurations =
    companySettings?.workOrderConfiguration?.workOrderFieldConfigurations;
  const requestFieldConfigurations =
    companySettings?.workOrderRequestConfiguration?.fieldConfigurations;
  const theme = useTheme();
  const renderFields = (
    fields: { label: string; name: string; type: FieldConfigurationsType }[]
  ) => {
    return (
      !!companySettings &&
      fields.map((field, index) => (
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
              onChange={(event) =>
                patchFieldConfiguration(
                  field.name,
                  event.target.value,
                  field.type
                )
              }
              value={
                field.type === 'workOrder'
                  ? workOrderFieldConfigurations.find(
                      (fieldConfiguration) =>
                        fieldConfiguration.fieldName === field.name
                    ).fieldType
                  : requestFieldConfigurations.find(
                      (fieldConfiguration) =>
                        fieldConfiguration.fieldName === field.name
                    ).fieldType
              }
              name={field.name}
            >
              <MenuItem value="OPTIONAL">{t('optional')}</MenuItem>
              <MenuItem value="REQUIRED">{t('required')}</MenuItem>
              <MenuItem value="HIDDEN">{t('hidden')}</MenuItem>
            </Field>
          </Box>
        </Grid>
      ))
    );
  };
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {t('field_configuration_description')}
      </Typography>
      <Formik initialValues={initialValues} onSubmit={() => null}>
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
              {renderFields(fields)}
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default FieldsConfigurationForm;

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography
} from '@mui/material';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { IField, IHash } from '../../type';
import Field from './Field';

interface PropsType {
  fields: Array<IField>;
  values?: IHash<any>;
  onSubmit?: (values: IHash<any>) => Promise<any>;
  onCanceled?: () => void;
  onChange?: any;
  submitText?: string;
  validation?: ObjectSchema<any>;
  isLoading?: boolean;
  isButtonEnabled?: (values: IHash<any>, ...props: any[]) => boolean;
}

export default (props: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const shape: IHash<any> = {};

  props.fields.forEach((f) => {
    shape[f.name] = Yup.string();
    if (f.required) {
      shape[f.name] = shape[f.name].required();
    }
  });

  const validationSchema = Yup.object().shape(shape);

  const handleChange = (formik, field, e) => {
    props.onChange({ field, e });
    console.log('field======>', field);

    // if (props.fields.length == 1) {
    //   formik.setFieldTouched(field, true);
    // }
    formik.setFieldValue(field, e);
    return formik.handleChange(field);
  };

  return (
    <Formik<IHash<any>>
      validationSchema={props.validation || validationSchema}
      initialValues={props.values || {}}
      onSubmit={(values, { resetForm, setErrors, setStatus, setSubmitting }) =>
        props.onSubmit(values).finally(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
        })
      }
    >
      {(formik) => (
        <>
          {props.fields.map((field, index) => {
            return (
              <>
                {field.type === 'checkbox' ? (
                  <Box>
                    <FormControlLabel
                      control={<Checkbox /*checked={field.checked}*/ />}
                      label={t(`${field.label}`)}
                    />
                  </Box>
                ) : field.type === 'groupCheckbox' ? (
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    my={2}
                  >
                    <Typography variant="h4" sx={{ pb: 1 }}>
                      {t(`${field.label}`)}
                    </Typography>
                    {field.listCheckbox.map((item) => (
                      <FormControlLabel
                        key={item.label}
                        control={<Checkbox /*checked={item.checked}*/ />}
                        label={t(`${item.label}`)}
                        sx={{ marginLeft: 0.5 }}
                      />
                    ))}
                  </Box>
                ) : (
                  <Field
                    key={index}
                    {...field}
                    isDisabled={formik.isSubmitting}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={formik.values[field.name]}
                    onBlur={formik.handleBlur(field.name)}
                    onChange={(e) => {
                      handleChange(formik, field.name, e);
                    }}
                    error={
                      (formik.touched[field.name] &&
                        !!formik.errors[field.name]) ||
                      field.error
                    }
                    errorMessage={formik.errors[field.name]}
                    fullWidth={field.fullWidth}
                  />
                )}
              </>
            );
          })}

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Button
              sx={{
                mt: { xs: 2, sm: 0 }
              }}
              onClick={() => formik.handleSubmit}
              variant="contained"
              onLoad={() => formik.isSubmitting || props.isLoading}
              disabled={false}
            >
              {t(props.submitText)}
            </Button>

            {props.onCanceled && (
              <Button
                sx={{
                  mt: { xs: 2, sm: 0 }
                }}
                onClick={() => props.onCanceled}
                variant="outlined"
                disabled
              >
                {t(props.submitText)}
              </Button>
            )}
          </Box>
        </>
      )}
    </Formik>
  );
};

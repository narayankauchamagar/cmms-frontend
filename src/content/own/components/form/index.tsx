import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { Formik, FormikProps, FormikValues } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { IField, IHash } from '../../type';
import CheckBoxForm from './CheckBoxForm';
import Field from './Field';
import SelectForm from './SelectForm';
import FileUpload from '../FileUpload';
import DatePicker from '@mui/lab/DatePicker';
import { useState } from 'react';
import { Customer } from '../../../../models/owns/customer';
import wait from '../../../../utils/wait';
import { Vendor } from '../../../../models/owns/vendor';

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
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [fetchingCustomers, setFetchingCustomers] = useState(false);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [fetchingVendors, setFetchingVendors] = useState(false);
  const fetchCustomers = async () => {
    setFetchingCustomers(true);
    const _customers: Customer[] = [
      {
        id: '1',
        name: 'Customer 1',
        address: 'casa, maroc',
        phone: '+00212611223344',
        website: 'https://web-site.com',
        email: 'john.doe@gmail.com',
        customerType: 'Plumbing',
        description: 'Describe...',
        rate: 10,
        address1: 'Add 1',
        address2: '-',
        address3: 'Add 3',
        currency: 'MAD, dirham'
      },
      {
        id: '2',
        name: 'Customer 2',
        address: 'casa, maroc',
        phone: '+00212611223344',
        website: 'https://web-site.com',
        email: 'john.doe@gmail.com',
        customerType: 'Electrical',
        description: 'Describe 2...',
        rate: 15,
        address1: 'Add 1',
        address2: '-',
        address3: '-',
        currency: 'Euro'
      }
    ];
    await wait(2000);
    setFetchingCustomers(false);
    setCustomers(_customers);
  };

  const fetchVendors = async () => {
    setFetchingVendors(true);
    const _vendors: Vendor[] = [
      {
        id: '1',
        companyName: 'Company Name',
        address: 'casa, maroc',
        phone: '+00212611223344',
        website: 'https://web-site.com',
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        vendorType: 'Plumbing',
        description: 'Describe...',
        rate: 15
      },
      {
        id: '2',
        companyName: 'Company Name 2',
        address: 'casa, maroc',
        phone: '+00212611223344',
        website: 'https://web-site.com',
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        vendorType: 'Plumbing',
        description: 'Describe...',
        rate: 20
      }
    ];
    await wait(2000);
    setFetchingVendors(false);
    setVendors(_vendors);
  };

  props.fields.forEach((f) => {
    shape[f.name] = Yup.string();
    if (f.required) {
      shape[f.name] = shape[f.name].required();
    }
  });

  const validationSchema = Yup.object().shape(shape);

  const handleChange = (formik, field, e) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    props.onChange && props.onChange({ field, e });
    if (props.fields.length == 1) {
      formik.setFieldTouched(field, true);
    }
    formik.setFieldValue(field, e);
    return formik.handleChange(field);
  };

  const renderSelect = (formik: FormikProps<IHash<any>>, field: IField) => {
    let options = field.items;
    let loading = field.loading;
    let onOpen = field.onPress;
    switch (field.type2) {
      case 'customer':
        options = customers.map((customer) => {
          return {
            label: customer.name,
            value: customer.id.toString()
          };
        });
        onOpen = fetchCustomers;
        loading = fetchingCustomers;
        break;
      case 'vendor':
        options = vendors.map((vendor) => {
          return {
            label: vendor.name,
            value: vendor.id.toString()
          };
        });
        onOpen = fetchVendors;
        loading = fetchingVendors;
        break;
      default:
        break;
    }
    return (
      <SelectForm
        options={options}
        value={formik.values[field.name]}
        label={field.label}
        loading={loading}
        onOpen={onOpen}
        placeholder={field.placeholder}
        multiple={field.multiple}
        fullWidth={field.fullWidth}
        key={field.name}
      />
    );
  };

  return (
    <Formik<IHash<any>>
      validationSchema={props.validation || validationSchema}
      initialValues={props.values || {}}
      onSubmit={(values, { resetForm, setErrors, setStatus, setSubmitting }) =>
        props.onSubmit(values).finally(() => {
          setSubmitting(false);
          // resetForm();
          setStatus({ success: true });
          setSubmitting(false);
        })
      }
    >
      {(formik) => (
        <Grid container spacing={2}>
          {props.fields.map((field, index) => {
            return (
              <Grid item xs={12} lg={field.midWidth ? 6 : 12} key={index}>
                {field.type === 'select' ? (
                  renderSelect(formik, field)
                ) : field.type === 'checkbox' ? (
                  <CheckBoxForm
                    label={field.label}
                    onChange={(e) => {
                      handleChange(formik, field.name, e.target.checked);
                    }}
                  />
                ) : field.type === 'groupCheckbox' ? (
                  <CheckBoxForm
                    label={field.label}
                    type="groupCheckbox"
                    listCheckbox={field.items}
                    key={field.name}
                  />
                ) : field.type === 'titleGroupField' ? (
                  <Typography variant="h3" sx={{ pb: 1 }}>
                    {t(`${field.label}`)}
                  </Typography>
                ) : field.type === 'file' ? (
                  <Box>
                    <FileUpload
                      title={field.label}
                      description={field.placeholder}
                      setFieldValue={(files) =>
                        formik.setFieldValue(field.name, files)
                      }
                    />
                  </Box>
                ) : field.type === 'date' ? (
                  <Box>
                    <Box pb={1}>
                      <b>{field.label}:</b>
                    </Box>
                    <DatePicker
                      value={formik.values[field.name]}
                      onChange={(newValue) => {
                        handleChange(formik, field.name, newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          placeholder={t('Select date...')}
                          {...params}
                        />
                      )}
                    />
                  </Box>
                ) : (
                  <Field
                    key={index}
                    {...field}
                    isDisabled={formik.isSubmitting}
                    type={field.type}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={formik.values[field.name]}
                    onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    onChange={(e) => {
                      handleChange(formik, field.name, e.target.value);
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
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Button
              type="submit"
              sx={{
                mt: { xs: 2, sm: 0 }
              }}
              onClick={() => formik.handleSubmit()}
              variant="contained"
              startIcon={
                formik.isSubmitting ? <CircularProgress size="1rem" /> : null
              }
              disabled={Boolean(formik.errors.submit) || formik.isSubmitting}
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
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

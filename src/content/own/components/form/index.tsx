import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { Formik, FormikProps } from 'formik';
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
import wait from '../../../../utils/wait';
import User from 'src/models/owns/user';
import Team, { teams as teamsList } from '../../../../models/owns/team';
import SelectParts from './SelectParts';
import { users as usersList } from '../../../../models/owns/user';
import Location from '../../../../models/owns/location';
import Asset, { assets as assetsList } from '../../../../models/owns/asset';
import { useDispatch, useSelector } from '../../../../store';
import CustomSwitch from './CustomSwitch';
import SelectTasks from './SelectTasks';
import SelectMapCoordinates from './SelectMapCoordinates';
import { getCustomers } from '../../../../slices/customer';
import { getVendors } from '../../../../slices/vendor';
import { getLocations } from 'src/slices/location';
import { getUsers } from '../../../../slices/user';

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
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.customers);
  const { vendors } = useSelector((state) => state.vendors);
  const { locations } = useSelector((state) => state.locations);
  const { users } = useSelector((state) => state.users);
  const [fetchingCustomers, setFetchingCustomers] = useState(false);
  const [fetchingVendors, setFetchingVendors] = useState(false);
  const [fetchingUsers, setFetchingUsers] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [fetchingTeams, setFetchingTeams] = useState(false);
  const [fetchingLocations, setFetchingLocations] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [fetchingAssets, setFetchingAssets] = useState(false);

  const fetchCustomers = async () => {
    if (!customers.length) dispatch(getCustomers());
  };

  const fetchVendors = async () => {
    if (!vendors.length) dispatch(getVendors());
  };
  const fetchUsers = async () => {
    if (!users.length) dispatch(getUsers());
  };
  const fetchLocations = async () => {
    if (!locations.length) dispatch(getLocations());
  };
  const fetchAssets = async () => {
    setFetchingAssets(true);
    await wait(2000);
    setFetchingAssets(false);
    setAssets(assetsList);
  };
  const fetchTeams = async () => {
    setFetchingTeams(true);
    await wait(2000);
    setFetchingTeams(false);
    setTeams(teamsList);
  };
  props.fields.forEach((f) => {
    shape[f.name] = Yup.string();
    if (f.required) {
      shape[f.name] = shape[f.name].required();
    }
  });

  const validationSchema = Yup.object().shape(shape);

  const handleChange = (formik: FormikProps<IHash<any>>, field, e) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    props.onChange && props.onChange({ field, e });
    if (props.fields.length == 1) {
      formik.setFieldTouched(field, true);
    }
    formik.setFieldValue(field, e);
    return formik.handleChange(field);
  };
  const getPriorityLabel = (str: string) => {
    switch (str) {
      case 'NONE':
        return t('None');
      case 'LOW':
        return t('Low');
      case 'MEDIUM':
        return t('Medium');
      case 'HIGH':
        return t('High');
      default:
        break;
    }
  };
  const renderSelect = (formik: FormikProps<IHash<any>>, field: IField) => {
    let options = field.items;
    let loading = field.loading;
    let onOpen = field.onPress;
    let values = formik.values[field.name];
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
            label: vendor.companyName,
            value: vendor.id.toString()
          };
        });
        onOpen = fetchVendors;
        loading = fetchingVendors;
        break;
      case 'user':
        options = users.map((user) => {
          return {
            label: `${user.firstName} ${user.lastName}`,
            value: user.id.toString()
          };
        });
        onOpen = fetchUsers;
        loading = fetchingUsers;
        break;
      case 'team':
        options = teams.map((team) => {
          return {
            label: team.name,
            value: team.id.toString()
          };
        });
        onOpen = fetchTeams;
        loading = fetchingTeams;
        break;
      case 'location':
        options = locations.map((location) => {
          return {
            label: location.name,
            value: location.id.toString()
          };
        });
        onOpen = fetchLocations;
        loading = fetchingLocations;
        break;
      case 'asset':
        options = assets.map((asset) => {
          return {
            label: asset.name,
            value: asset.id.toString()
          };
        });
        onOpen = fetchAssets;
        loading = fetchingAssets;
        break;
      case 'priority':
        options = ['NONE', 'LOW', 'MEDIUM', 'HIGH'].map((value) => {
          return {
            label: getPriorityLabel(value),
            value
          };
        });
        values = values
          ? { label: getPriorityLabel(values), value: values }
          : null;
        onOpen = fetchAssets;
        loading = fetchingAssets;
        break;
      case 'part':
        return (
          <SelectParts
            selected={values?.map((value) => Number(value.value)) ?? []}
            onChange={(newParts) => {
              handleChange(formik, field.name, newParts);
            }}
          />
        );
      case 'task':
        return (
          <SelectTasks
            selected={values}
            onChange={(tasks) => handleChange(formik, field.name, tasks)}
          />
        );
      default:
        break;
    }
    return (
      <SelectForm
        options={options}
        value={values}
        label={field.label}
        onChange={(e, values) => {
          handleChange(formik, field.name, values);
        }}
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
    <>
      <Formik<IHash<any>>
        validationSchema={props.validation || validationSchema}
        initialValues={props.values || {}}
        onSubmit={(
          values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) =>
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
                  ) : field.type === 'switch' ? (
                    <CustomSwitch
                      title={field.label}
                      description={field.helperText}
                      name={field.name}
                      handleChange={formik.handleChange}
                      checked={formik.values[field.name]}
                    />
                  ) : field.type === 'titleGroupField' ? (
                    <Typography variant="h3" sx={{ pb: 1 }}>
                      {t(`${field.label}`)}
                    </Typography>
                  ) : field.type === 'file' ? (
                    <Box>
                      <FileUpload
                        title={field.label}
                        type={field.fileType || 'file'}
                        description={
                          field.placeholder || field.fileType === 'image'
                            ? t('Drag an image here')
                            : t('Drag files here')
                        }
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
                  ) : field.type === 'coordinates' ? (
                    <SelectMapCoordinates
                      selected={formik.values[field.name]}
                      onChange={(coordinates) => {
                        handleChange(formik, field.name, coordinates);
                      }}
                    />
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
    </>
  );
};

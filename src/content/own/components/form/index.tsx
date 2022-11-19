import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@mui/material';
import { Formik, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import FormikErrorFocus from 'formik-error-focus';
import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { IField, IHash } from '../../type';
import CheckBoxForm from './CheckBoxForm';
import Field from './Field';
import SelectForm from './SelectForm';
import FileUpload from '../FileUpload';
import DatePicker from '@mui/lab/DatePicker';
import SelectParts from './SelectParts';
import { useDispatch, useSelector } from '../../../../store';
import CustomSwitch from './CustomSwitch';
import SelectTasksModal from './SelectTasks';
import SelectMapCoordinates from './SelectMapCoordinates';
import { getCustomers } from '../../../../slices/customer';
import { getVendors } from '../../../../slices/vendor';
import { getLocations } from 'src/slices/location';
import { getUsers } from '../../../../slices/user';
import { getAssets } from '../../../../slices/asset';
import { getTeams } from '../../../../slices/team';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { useState } from 'react';
import { Task } from '../../../../models/owns/tasks';

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
  const [openTask, setOpenTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.customers);
  const { vendors } = useSelector((state) => state.vendors);
  const { locations } = useSelector((state) => state.locations);
  const { users } = useSelector((state) => state.users);
  const { assets } = useSelector((state) => state.assets);
  const { teams } = useSelector((state) => state.teams);

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
    if (!assets.length) dispatch(getAssets());
  };
  const fetchTeams = async () => {
    if (!teams.length) dispatch(getTeams());
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
  const renderSelect = (formik, field) => {
    let options = field.items;
    let loading = field.loading;
    let onOpen = field.onPress;
    let values = formik.values[field.name];
    const excluded = field.excluded;

    switch (field.type2) {
      case 'customer':
        options = customers.map((customer) => {
          return {
            label: customer.name,
            value: customer.id.toString()
          };
        });
        onOpen = fetchCustomers;
        break;
      case 'vendor':
        options = vendors.map((vendor) => {
          return {
            label: vendor.companyName,
            value: vendor.id.toString()
          };
        });
        onOpen = fetchVendors;
        break;
      case 'user':
        options = users.map((user) => {
          return {
            label: `${user.firstName} ${user.lastName}`,
            value: user.id.toString()
          };
        });
        onOpen = fetchUsers;
        break;
      case 'team':
        options = teams.map((team) => {
          return {
            label: team.name,
            value: team.id.toString()
          };
        });
        onOpen = fetchTeams;
        break;
      case 'location':
        options = locations.map((location) => {
          return {
            label: location.name,
            value: location.id.toString()
          };
        });
        onOpen = fetchLocations;
        break;
      case 'asset':
        options = assets
          .filter((asset) => asset.id !== excluded)
          .map((asset) => {
            return {
              label: asset.name,
              value: asset.id.toString()
            };
          });
        onOpen = fetchAssets;
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
          <>
            <SelectTasksModal
              open={openTask}
              onClose={() => setOpenTask(false)}
              selected={values}
              onSelect={(tasks) => {
                setTasks(tasks);
                handleChange(formik, field.name, tasks);
              }}
            />
            <Card onClick={() => setOpenTask(true)} sx={{ cursor: 'pointer' }}>
              <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <AssignmentTwoToneIcon />
                <Box>
                  <Typography variant="h4" color="primary">
                    {tasks.length ? tasks.length : null} Tasks
                  </Typography>
                  <Typography variant="subtitle1">
                    {t('Assign Custom Tasks for technicians to fill out')}
                  </Typography>
                </Box>
                <IconButton>
                  {tasks.length ? (
                    <EditTwoToneIcon color="primary" />
                  ) : (
                    <AddCircleTwoToneIcon color="primary" />
                  )}
                </IconButton>
              </Box>
            </Card>
          </>
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
        error={!!formik.errors[field.name] || field.error}
        errorMessage={formik.errors[field.name]}
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
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={props.values || {}}
        onSubmit={(
          values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          setSubmitting(true);
          props.onSubmit(values).finally(() => {
            // resetForm();
            setStatus({ success: true });
            setSubmitting(false);
          });
        }}
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
                      checked={formik.values[field.name]}
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
                      error={!!formik.errors[field.name] || field.error}
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
            <FormikErrorFocus
              // See scroll-to-element for configuration options: https://www.npmjs.com/package/scroll-to-element
              offset={0}
              align={'bottom'}
              focusDelay={200}
              ease={'linear'}
              duration={500}
              formik={formik}
            />
          </Grid>
        )}
      </Formik>
    </>
  );
};

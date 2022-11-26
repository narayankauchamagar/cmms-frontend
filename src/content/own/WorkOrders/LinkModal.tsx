import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Formik } from 'formik';

import * as Yup from 'yup';
import { useDispatch } from '../../../store';
import wait from '../../../utils/wait';

interface LinkModalProps {
  open: boolean;
  onClose: () => void;
  workOrderId: number;
}
export default function LinkModal({
  open,
  onClose,
  workOrderId
}: LinkModalProps) {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const relationTypes = [
    'DUPLICATE_OF',
    'DUPLICATED_BY',
    'RELATED_TO',
    'SPLIT_TO',
    'SPLIT_FROM',
    'BLOCKED_BY',
    'BLOCKS'
  ];
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Link Work Orders')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Create relationships between Work Orders')}
        </Typography>
      </DialogTitle>
      <Formik
        initialValues={{
          relationType: 'BLOCKED_BY',
          workOrder: null
        }}
        validationSchema={Yup.object().shape({
          relationType: Yup.string().required(
            t('Please select the relationship type.')
          ),
          workOrder: Yup.number().required(
            t('The Work Order field is required.')
          )
        })}
        onSubmit={async (
          _values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          console.log(_values);
          try {
            await wait(1000);
            resetForm();
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setSubmitting(false);
          }
        }}
      >
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
            <DialogContent
              dividers
              sx={{
                p: 3
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} lg={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h6" fontWeight="bold">
                        {t('This Work Order')}
                      </Typography>
                      <Select
                        fullWidth
                        name="relationType"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.relationType}
                        variant="outlined"
                      >
                        {relationTypes.map((relationType, index) => (
                          <MenuItem key={index} value={relationType}>
                            {t(relationType)}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Button variant="contained" type="submit">
                    {t('Link')}
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}

import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import { useTranslation } from 'react-i18next';

import { Formik } from 'formik';

import * as Yup from 'yup';
import { useDispatch, useSelector } from '../../../../store';
import { createRelation } from '../../../../slices/relation';
import { relationTypes } from 'src/models/owns/relation';

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
  const { workOrders } = useSelector((state) => state.workOrders);

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('link_wo')}
        </Typography>
        <Typography variant="subtitle2">{t('link_wo_description')}</Typography>
      </DialogTitle>
      <Formik
        initialValues={{
          relationType: 'BLOCKED_BY',
          child: null
        }}
        validationSchema={Yup.object().shape({
          relationType: Yup.string().required(t('required_relationType')),
          child: Yup.number().required(t('required_wo'))
        })}
        onSubmit={(
          _values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          setSubmitting(true);
          _values.child = { id: _values.child };
          dispatch(createRelation(workOrderId, _values)).finally(() => {
            setSubmitting(false);
            onClose();
          });
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
                        {t('this_wo')}
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
                    <Grid item xs={12}>
                      <Typography variant="h6" fontWeight="bold">
                        {t('the_wo')}
                      </Typography>
                      <Select
                        fullWidth
                        name="child"
                        onBlur={handleBlur}
                        error={Boolean(errors.child)}
                        onChange={handleChange}
                        value={values.child}
                        variant="outlined"
                      >
                        {workOrders.content
                          .filter((workOrder) => workOrder.id !== workOrderId)
                          .map((child, index) => (
                            <MenuItem key={index} value={child.id}>
                              {child.title}
                            </MenuItem>
                          ))}
                      </Select>
                      {!!errors.child && (
                        <FormHelperText color="error">
                          {t('required_wo')}
                        </FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    startIcon={
                      isSubmitting ? <CircularProgress size="1rem" /> : null
                    }
                    disabled={isSubmitting}
                  >
                    {t('link')}
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

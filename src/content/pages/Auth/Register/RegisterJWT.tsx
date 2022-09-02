import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  FormControlLabel,
  Link,
  CircularProgress
} from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';

function RegisterJWT() {
  const { register } = useAuth() as any;
  const isMountedRef = useRefMounted();
  const { t }: { t: any } = useTranslation();

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
        terms: false,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email(t('The email provided should be a valid email address'))
          .max(255)
          .required(t('The email field is required')),
        name: Yup.string().max(255).required(t('The name field is required')),
        password: Yup.string()
          .min(8)
          .max(255)
          .required(t('The password field is required')),
        terms: Yup.boolean().oneOf(
          [true],
          t('You must agree to our terms and conditions')
        )
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await register(values.email, values.name, values.password);

          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
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
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            error={Boolean(touched.name && errors.name)}
            fullWidth
            margin="normal"
            helperText={touched.name && errors.name}
            label={t('Name')}
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            margin="normal"
            helperText={touched.email && errors.email}
            label={t('Email address')}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            margin="normal"
            helperText={touched.password && errors.password}
            label={t('Password')}
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={values.terms}
                name="terms"
                color="primary"
                onChange={handleChange}
              />
            }
            label={
              <>
                <Typography variant="body2">
                  {t('I accept the')}{' '}
                  <Link component="a" href="#">
                    {t('terms and conditions')}
                  </Link>
                  .
                </Typography>
              </>
            }
          />
          {Boolean(touched.terms && errors.terms) && (
            <FormHelperText error>{errors.terms}</FormHelperText>
          )}
          <Button
            sx={{
              mt: 3
            }}
            color="primary"
            startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
            disabled={isSubmitting}
            type="submit"
            fullWidth
            size="large"
            variant="contained"
          >
            {t('Create your account')}
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default RegisterJWT;

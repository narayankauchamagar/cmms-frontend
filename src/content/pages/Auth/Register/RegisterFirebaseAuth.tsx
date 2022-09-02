import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  TextField,
  Typography,
  CircularProgress,
  styled
} from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';

const ImgWrapper = styled('img')(
  ({ theme }) => `
    margin-right: ${theme.spacing(1)};
`
);

function RegisterFirebaseAuth() {
  const { createUserWithEmailAndPassword, signInWithGoogle } = useAuth() as any;
  const isMountedRef = useRefMounted();
  const { t }: { t: any } = useTranslation();

  const handleGoogleClick = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button
        fullWidth
        onClick={handleGoogleClick}
        size="large"
        variant="outlined"
      >
        <ImgWrapper alt="Google" src="/static/images/logo/google.svg" />
        Register with Google
      </Button>
      <Divider
        sx={{
          mt: 4,
          mb: 2
        }}
      >
        {t('or')}
      </Divider>
      <Formik
        initialValues={{
          email: '',
          password: '',
          terms: true,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(t('The email provided should be a valid email address'))
            .max(255)
            .required(t('The email field is required')),
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
            await createUserWithEmailAndPassword(values.email, values.password);

            if (isMountedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
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
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label={t('Email address')}
              placeholder={t('Your email address here...')}
              margin="normal"
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
              helperText={touched.password && errors.password}
              label={t('Password')}
              placeholder={t('Your password here...')}
              margin="normal"
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
                <Typography variant="body2">
                  {t('I accept the')}{' '}
                  <Link component="a" href="#">
                    {t('terms and conditions')}
                  </Link>
                  .
                </Typography>
              }
            />
            <Button
              sx={{
                mt: 3
              }}
              color="primary"
              startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
              disabled={isSubmitting}
              size="large"
              fullWidth
              type="submit"
              variant="contained"
            >
              {t('Create account')}
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default RegisterFirebaseAuth;

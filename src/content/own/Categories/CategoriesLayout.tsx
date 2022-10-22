import { Fragment, ReactNode, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TitleContext } from '../../../contexts/TitleContext';
import { useDispatch } from '../../../store';
import { addCategory } from '../../../slices/category';
import useAuth from '../../../hooks/useAuth';

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
    transition: ${theme.transitions.create(['transform', 'background'])};
    transform: scale(1);
    transform-origin: center;

    &:hover {
        transform: scale(1.1);
    }
  `
);

const ListWrapper = styled(List)(
  () => `
      .MuiListItem-root:last-of-type + .MuiDivider-root {
          display: none;
      }
  `
);

interface CategoriesLayoutProps {
  children?: ReactNode;
  tabIndex: number;
  basePath: string;
  categories: { id: number; name: string }[];
}

function CategoriesLayout(props: CategoriesLayoutProps) {
  const { children, tabIndex, categories, basePath } = props;
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const [openAddCategoryModal, setOpenAddCategoryModal] =
    useState<boolean>(false);
  const handleOpenAddCategoryModal = () => setOpenAddCategoryModal(true);
  const handleCloseAddCategoryModal = () => setOpenAddCategoryModal(false);
  const { setTitle } = useContext(TitleContext);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { companySettingsId } = user;

  useEffect(() => {
    setTitle(t('Categories'));
  }, []);
  const tabs = [
    { value: '', label: t('Work Orders') },
    { value: 'asset-status', label: t('Asset Status') },
    { value: 'purchase-order', label: t('Purchase Orders') },
    { value: 'meter', label: t('Meters') },
    { value: 'time', label: t('Timers') }
  ];
  const renderModal = () => (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={openAddCategoryModal}
      onClose={handleCloseAddCategoryModal}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add new category')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the name to create and add a new category')}
        </Typography>
      </DialogTitle>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(30).required(t('The name field is required'))
        })}
        onSubmit={async (
          values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          const formattedValues = {
            ...values,
            companySettings: { id: companySettingsId }
          };
          try {
            dispatch(addCategory(formattedValues, basePath));
            handleCloseAddCategoryModal();
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ name: err.message });
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
                      <TextField
                        error={Boolean(touched.name && errors.name)}
                        fullWidth
                        helperText={touched.name && errors.name}
                        label={t('Name')}
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions
              sx={{
                p: 3
              }}
            >
              <Button color="secondary" onClick={handleCloseAddCategoryModal}>
                {t('Cancel')}
              </Button>
              <Button
                type="submit"
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
              >
                {t('Add new category')}
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
  return (
    <MultipleTabsLayout
      basePath="/app/categories"
      tabs={tabs}
      tabIndex={tabIndex}
      title={`${tabs[tabIndex].label} Categories`}
      action={handleOpenAddCategoryModal}
      actionTitle={t('Categories')}
    >
      {renderModal()}
      <Grid item xs={12}>
        <Box p={4}>
          {categories.length ? (
            <ListWrapper disablePadding>
              {categories.map((item) => (
                <Fragment key={item.id}>
                  <ListItem
                    sx={{
                      display: { xs: 'block', md: 'flex' },
                      py: 1.5,
                      px: 2
                    }}
                  >
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          sx={{
                            display: 'block',
                            mb: 1
                          }}
                          variant="h6"
                        >
                          {item.name}
                        </Typography>
                      }
                    />
                    <Box
                      component="span"
                      sx={{
                        display: { xs: 'none', md: 'inline-block' }
                      }}
                    >
                      <Box ml={3} textAlign="right">
                        <IconButtonWrapper
                          sx={{
                            backgroundColor: `${theme.colors.primary.main}`,
                            color: `${theme.palette.getContrastText(
                              theme.colors.primary.main
                            )}`,
                            transition: `${theme.transitions.create(['all'])}`,

                            '&:hover': {
                              backgroundColor: `${theme.colors.primary.main}`,
                              color: `${theme.palette.getContrastText(
                                theme.colors.primary.main
                              )}`
                            }
                          }}
                          size="small"
                        >
                          <EditTwoToneIcon fontSize="small" />
                        </IconButtonWrapper>
                        <IconButtonWrapper
                          sx={{
                            ml: 1,
                            backgroundColor: `${theme.colors.error.lighter}`,
                            color: `${theme.colors.error.main}`,
                            transition: `${theme.transitions.create(['all'])}`,

                            '&:hover': {
                              backgroundColor: `${theme.colors.error.main}`,
                              color: `${theme.palette.getContrastText(
                                theme.colors.error.main
                              )}`
                            }
                          }}
                          size="small"
                        >
                          <ClearTwoToneIcon fontSize="small" />
                        </IconButtonWrapper>
                      </Box>
                    </Box>
                  </ListItem>
                  <Divider sx={{ mt: 1 }} />
                </Fragment>
              ))}
            </ListWrapper>
          ) : (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4">
                {t(
                  `Looks like you don\'t have any ${tabs[tabIndex].label} Categories yet.`
                )}
              </Typography>
              <Typography sx={{ mt: 1 }} variant="h6">
                {t('Press the "+" button to add your first category.')}
              </Typography>
            </Box>
          )}
        </Box>
      </Grid>
    </MultipleTabsLayout>
  );
}

export default CategoriesLayout;

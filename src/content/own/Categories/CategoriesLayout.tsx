import { Fragment, ReactNode, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';
import ConfirmDialog from '../components/ConfirmDialog';
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
import { useDispatch, useSelector } from '../../../store';
import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategories
} from '../../../slices/category';
import useAuth from '../../../hooks/useAuth';
import Category from '../../../models/owns/category';
import { deleteVendor } from '../../../slices/vendor';

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
}

function CategoriesLayout(props: CategoriesLayoutProps) {
  const { children, tabIndex, basePath } = props;
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const [openAddCategoryModal, setOpenAddCategoryModal] =
    useState<boolean>(false);
  const [openUpdateCategoryModal, setOpenUpdateCategoryModal] =
    useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const handleOpenAddCategoryModal = () => setOpenAddCategoryModal(true);
  const handleCloseAddCategoryModal = () => setOpenAddCategoryModal(false);
  const { categories } = useSelector((state) => state.categories);
  const { setTitle } = useContext(TitleContext);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { companySettingsId } = user;
  const [currentCategory, setCurrentCategory] = useState<Category>();

  const handleDelete = (id: number) => {
    dispatch(deleteCategory(id, basePath));
    setOpenDelete(false);
  };
  useEffect(() => {
    setTitle(t('Categories'));
    dispatch(getCategories(basePath));
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
  const renderUpdateModal = () => (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={openUpdateCategoryModal}
      onClose={() => setOpenUpdateCategoryModal(false)}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Edit category')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the name to edit category')}
        </Typography>
      </DialogTitle>
      <Formik
        initialValues={{ name: currentCategory?.name }}
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
            dispatch(
              editCategory(currentCategory.id, formattedValues, basePath)
            );
            setOpenUpdateCategoryModal(false);
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
              <Button
                color="secondary"
                onClick={() => setOpenUpdateCategoryModal(false)}
              >
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
                {t('Save')}
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
      {renderUpdateModal()}
      <Grid item xs={12}>
        <Box p={4}>
          {categories[basePath]?.length ? (
            <ListWrapper disablePadding>
              {categories[basePath].map((item) => (
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
                          onClick={() => {
                            setCurrentCategory(
                              categories[basePath].find(
                                (category) => category.id === item.id
                              )
                            );
                            setOpenUpdateCategoryModal(true);
                          }}
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
                          onClick={() => {
                            setCurrentCategory(
                              categories[basePath].find(
                                (category) => category.id === item.id
                              )
                            );
                            setOpenDelete(true);
                          }}
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
      <ConfirmDialog
        open={openDelete}
        onCancel={() => {
          setOpenDelete(false);
        }}
        onConfirm={() => handleDelete(currentCategory?.id)}
        confirmText={t('Delete')}
        question={t('Are you sure you want to delete this Category?')}
      />
    </MultipleTabsLayout>
  );
}

export default CategoriesLayout;

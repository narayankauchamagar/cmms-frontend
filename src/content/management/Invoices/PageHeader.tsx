import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import wait from 'src/utils/wait';
import numeral from 'numeral';

import {
  styled,
  Grid,
  Dialog,
  DialogTitle,
  Chip,
  DialogContent,
  Box,
  Zoom,
  Typography,
  TextField,
  CircularProgress,
  Avatar,
  Autocomplete,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Tooltip,
  IconButton,
  lighten,
  useTheme,
  useMediaQuery,
  TableFooter
} from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { useSnackbar } from 'notistack';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const IconButtonError = styled(IconButton)(
  ({ theme }) => `
     background: ${theme.colors.error.lighter};
     color: ${theme.colors.error.main};
     padding: ${theme.spacing(0.5)};

     &:hover {
      background: ${lighten(theme.colors.error.lighter, 0.4)};
     }
`
);

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
  currency: string;
}

function PageHeader() {
  const { t }: { t: any } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const itemsList: Item[] = [
    {
      id: 1,
      name: 'Design services for March',
      quantity: 1,
      price: 8945,
      currency: '$'
    },
    {
      id: 2,
      name: 'Website migration services',
      quantity: 3,
      price: 2367,
      currency: '$'
    }
  ];

  const members = [
    {
      avatar: '/static/images/avatars/1.jpg',
      name: 'Maren Lipshutz'
    },
    {
      avatar: '/static/images/avatars/2.jpg',
      name: 'Zain Vetrovs'
    },
    {
      avatar: '/static/images/avatars/3.jpg',
      name: 'Hanna Siphron'
    },
    {
      avatar: '/static/images/avatars/4.jpg',
      name: 'Cristofer Aminoff'
    },
    {
      avatar: '/static/images/avatars/5.jpg',
      name: 'Maria Calzoni'
    }
  ];

  const [value, setValue] = useState<Date | null>(null);
  const [value1, setValue1] = useState<Date | null>(null);

  const [items] = useState<Item[]>(itemsList);

  const handleCreateInvoiceOpen = () => {
    setOpen(true);
  };

  const handleCreateInvoiceClose = () => {
    setOpen(false);
  };

  const handleCreateInvoiceSuccess = () => {
    enqueueSnackbar(t('A new invoice has been created successfully'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });

    setOpen(false);
  };

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('Invoices')}
          </Typography>
          <Typography variant="subtitle2">
            {t('All recent invoices can be found below')}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            onClick={handleCreateInvoiceOpen}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {t('Add new invoice')}
          </Button>
        </Grid>
      </Grid>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleCreateInvoiceClose}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('Create invoice')}
          </Typography>
          <Typography variant="subtitle2">
            {t('Use this modal dialog to create a new invoice')}
          </Typography>
        </DialogTitle>
        <Formik
          initialValues={{
            number: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            number: Yup.string()
              .max(255)
              .required(t('The invoice number field is required'))
          })}
          onSubmit={async (
            _values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            try {
              await wait(1000);
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              handleCreateInvoiceSuccess();
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
            <form onSubmit={handleSubmit}>
              <DialogContent
                dividers
                sx={{
                  p: 3
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box pb={1}>
                      <b>{t('Invoice Number')}:</b>
                    </Box>
                    <TextField
                      error={Boolean(touched.number && errors.number)}
                      fullWidth
                      helperText={touched.number && errors.number}
                      name="number"
                      placeholder={t('Invoice number here...')}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.number}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box pb={1}>
                      <b>{t('Recipient')}:</b>
                    </Box>
                    <Autocomplete
                      multiple
                      sx={{
                        m: 0
                      }}
                      limitTags={2}
                      // @ts-ignore
                      getOptionLabel={(option) => option.title}
                      options={members}
                      renderOption={(props, option) => (
                        <li {...props}>
                          <Avatar
                            sx={{
                              mr: 1
                            }}
                            src={option.avatar}
                          />
                          {option.name}
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{
                            shrink: true
                          }}
                          placeholder={t('Select invoice recipient...')}
                        />
                      )}
                      renderTags={(members, getTagProps) =>
                        members.map((ev, index: number) => (
                          <Chip
                            key={ev.name}
                            label={ev.name}
                            {...getTagProps({ index })}
                            avatar={<Avatar src={ev.avatar} />}
                          />
                        ))
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box pb={1}>
                      <b>{t('Invoice Date')}:</b>
                    </Box>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          placeholder={t('Select date...')}
                          {...params}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box pb={1}>
                      <b>{t('Due Date')}:</b>
                    </Box>
                    <DatePicker
                      value={value1}
                      onChange={(newValue1) => {
                        setValue1(newValue1);
                      }}
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          placeholder={t('Select date...')}
                          {...params}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>{t('Item')}</TableCell>
                      <TableCell>{t('Qty')}</TableCell>
                      <TableCell>{t('Price')}</TableCell>
                      <TableCell>{t('Total')}</TableCell>
                      <TableCell align="right">{t('Actions')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((item: Item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Typography noWrap>{item.name}</Typography>
                        </TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>
                          {numeral(item.price).format(`${item.currency}0,0.00`)}
                        </TableCell>
                        <TableCell>
                          {numeral(item.price).format(`${item.currency}0,0.00`)}
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip arrow title={t('Delete')}>
                            <IconButtonError>
                              <DeleteTwoToneIcon fontSize="small" />
                            </IconButtonError>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={0}>
                        <Button
                          startIcon={<AddTwoToneIcon />}
                          variant="outlined"
                        >
                          {t('Add item')}
                        </Button>
                      </TableCell>
                      <TableCell colSpan={4} align="right">
                        <Typography
                          gutterBottom
                          variant="caption"
                          color="text.secondary"
                          fontWeight="bold"
                        >
                          {t('Total')}:
                        </Typography>
                        <Typography variant="h3" fontWeight="bold">
                          {numeral(9458).format(`$0,0.00`)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
              <Box px={3} pt={3}>
                <TextField
                  label={t('Additional informations')}
                  multiline
                  placeholder={t(
                    'Write here any additional informations you might have...'
                  )}
                  fullWidth
                  minRows={3}
                  maxRows={8}
                />
              </Box>
              <Box
                sx={{
                  display: { xs: 'block', sm: 'flex' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 3
                }}
              >
                <Box>
                  <Button fullWidth={mobile} variant="outlined">
                    {t('Preview invoice')}
                  </Button>
                </Box>
                <Box>
                  <Button
                    fullWidth={mobile}
                    sx={{
                      mr: { xs: 0, sm: 2 },
                      my: { xs: 2, sm: 0 }
                    }}
                    color="secondary"
                    variant="outlined"
                    onClick={handleCreateInvoiceClose}
                  >
                    {t('Save as draft')}
                  </Button>
                  <Button
                    fullWidth={mobile}
                    type="submit"
                    startIcon={
                      isSubmitting ? <CircularProgress size="1rem" /> : null
                    }
                    disabled={Boolean(errors.submit) || isSubmitting}
                    variant="contained"
                    size="large"
                  >
                    {t('Create invoice')}
                  </Button>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
}

export default PageHeader;

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import { useContext, useEffect, useState } from 'react';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridEnrichedColDef,
  GridRenderCellParams,
  GridToolbar,
  GridValueGetterParams
} from '@mui/x-data-grid';
import {
  emailRegExp,
  isNumeric,
  phoneRegExp,
  websiteRegExp
} from '../../../utils/validators';
import { Close } from '@mui/icons-material';
import { Customer } from '../../../models/owns/customer';
import { useParams } from 'react-router-dom';
import {
  addCustomer,
  deleteCustomer,
  editCustomer,
  getCustomers
} from '../../../slices/customer';
import { useDispatch, useSelector } from '../../../store';
import ConfirmDialog from '../components/ConfirmDialog';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import useAuth from '../../../hooks/useAuth';
import { PermissionEntity } from '../../../models/owns/role';
import NoRowsMessageWrapper from '../components/NoRowsMessageWrapper';
import { formatSelect } from '../../../utils/formatters';
import Currency from '../../../models/owns/currency';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Customers = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const [isCustomerDetailsOpen, setIsCustomerDetailsOpen] =
    useState<boolean>(false);
  const { customerId } = useParams();
  const dispatch = useDispatch();
  const { customers, loadingGet } = useSelector((state) => state.customers);
  const { hasEditPermission, hasDeletePermission } = useAuth();
  const [currentCustomer, setCurrentCustomer] = useState<Customer>();
  const [viewOrUpdate, setViewOrUpdate] = useState<'view' | 'update'>('view');
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { showSnackBar } = useContext(CustomSnackBarContext);

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  const handleOpenDetails = (id: number) => {
    const foundCustomer = customers.find((customer) => customer.id === id);
    if (foundCustomer) {
      setCurrentCustomer(foundCustomer);
      window.history.replaceState(
        null,
        'Customer details',
        `/app/vendors-customers/customers/${id}`
      );
      setIsCustomerDetailsOpen(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(
      null,
      'Customer',
      `/app/vendors-customers/customers`
    );
    setIsCustomerDetailsOpen(false);
  };

  const handleDelete = (id: number) => {
    handleCloseDetails();
    dispatch(deleteCustomer(id)).then(onDeleteSuccess).catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const onCreationSuccess = () => {
    handleCloseModal();
    showSnackBar(t('The Customer has been created successfully'), 'success');
  };
  const onCreationFailure = (err) =>
    showSnackBar(t("The Customer couldn't be created"), 'error');
  const onEditSuccess = () => {
    setViewOrUpdate('view');
    showSnackBar(t('The changes have been saved'), 'success');
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The Customer couldn't be edited"), 'error');
  const onDeleteSuccess = () => {
    showSnackBar(t('The Customer has been deleted successfully'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t("The Customer couldn't be deleted"), 'error');

  useEffect(() => {
    if (customers?.length && customerId && isNumeric(customerId)) {
      handleOpenDetails(Number(customerId));
    }
  }, [customers]);

  const formatValues = (values) => {
    values.billingCurrency = formatSelect(values.billingCurrency);
    values.rate = values.rate ? Number(values.rate) : null;
    return values;
  };
  let fields: Array<IField> = [
    {
      name: 'details',
      type: 'titleGroupField',
      label: 'Details'
    },
    {
      name: 'name',
      type: 'text',
      label: 'Customer Name',
      placeholder: 'Jonh Doe',
      required: true
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      placeholder: 'casa, maroc'
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      placeholder: '+00212611223344',
      required: true
    },
    {
      name: 'website',
      type: 'text',
      label: 'Website',
      placeholder: 'https://web-site.com'
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'john.doe@gmail.com'
    },
    {
      name: 'customerType',
      type: 'text',
      label: 'Customer Type',
      placeholder: 'ex. Plumbing, Electrical'
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      multiple: true,
      placeholder: 'Describe the purpose of this customer in a few line...'
    },
    {
      name: 'rate',
      type: 'number',
      label: 'Rate',
      placeholder: 'Rate',
      icon: '$',
      helperText: 'Changes will only apply to Work Orders created in the future'
    },
    {
      name: 'details',
      type: 'titleGroupField',
      label: 'Billing Information'
    },
    {
      name: 'billingAddress',
      type: 'text',
      label: 'Address',
      placeholder: 'Casa, Maroc'
    },
    {
      name: 'billingAddress2',
      type: 'text',
      label: 'Address Line 2',
      placeholder: 'Casa, Maroc'
    },
    {
      name: 'billingName',
      type: 'text',
      label: 'Billing Name',
      placeholder: 'casa, maroc'
    },
    {
      name: 'billingCurrency',
      type: 'select',
      type2: 'currency',
      label: 'Currency',
      placeholder: 'Select Currency'
    }
  ];

  const shape = {
    name: Yup.string().required('Customer Name is required'),
    phone: Yup.string()
      .matches(phoneRegExp, t('The phone number is invalid'))
      .required(t('The phone number is required')),
    website: Yup.string()
      .matches(websiteRegExp, t('Invalid website'))
      .nullable(),
    email: Yup.string().matches(emailRegExp, t('Invalid email')).nullable()
  };

  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Customer Name'),
      description: t('Customer Name'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },
    {
      field: 'address',
      headerName: t('Address'),
      description: t('Address'),
      width: 150
    },
    {
      field: 'phone',
      headerName: t('Phone'),
      description: t('Phone'),
      width: 150
    },
    {
      field: 'website',
      headerName: t('Website'),
      description: t('Website'),
      width: 150
    },
    {
      field: 'email',
      headerName: t('Email'),
      description: t('Email'),
      width: 150
    },
    {
      field: 'customerType',
      headerName: t('Customer Type'),
      description: t('Customer Type'),
      width: 150
    },
    {
      field: 'description',
      headerName: t('description'),
      description: t('description'),
      width: 150
    },
    {
      field: 'rate',
      headerName: t('Rate'),
      description: t('Rate'),
      width: 150
    },
    {
      field: 'billingAddress',
      headerName: t('Billing Address'),
      description: t('Billing Address'),
      width: 150
    },
    {
      field: 'billingName',
      headerName: t('Billing Name'),
      description: t('Billing Name'),
      width: 150
    },
    {
      field: 'billingCurrency',
      headerName: t('Currency'),
      description: t('Currency'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<Currency>) =>
        params.value?.name
    }
  ];

  const RenderCustomersAddModal = () => (
    <Dialog fullWidth maxWidth="md" open={openModal} onClose={handleCloseModal}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add Customer')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new customer')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Box>
          <Form
            fields={fields}
            validation={Yup.object().shape(shape)}
            submitText={t('add')}
            values={{}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              const formattedValues = formatValues(values);
              return dispatch(addCustomer(formattedValues))
                .then(onCreationSuccess)
                .catch(onCreationFailure);
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );

  const RenderCustomersList = () => (
    <Box
      sx={{
        height: 400,
        width: '95%'
      }}
    >
      <CustomDataGrid
        rows={customers}
        columns={columns}
        loading={loadingGet}
        components={{
          Toolbar: GridToolbar,
          NoRowsOverlay: () => (
            <NoRowsMessageWrapper
              message={t('Customers are external workers')}
              action={t("Press the '+' button to create a Customer")}
            />
          )
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {}
          }
        }}
        onRowClick={(params) => handleOpenDetails(Number(params.id))}
      />
    </Box>
  );
  const fieldsToRender: { label: string; value: string }[] = [
    {
      label: t('Address'),
      value: currentCustomer?.address
    },
    {
      label: t('Phone'),
      value: currentCustomer?.phone
    },
    {
      label: t('Email'),
      value: currentCustomer?.email
    },
    {
      label: t('Type'),
      value: currentCustomer?.customerType
    },
    {
      label: t('Billing Currency'),
      value: currentCustomer?.billingCurrency.name
    }
  ];
  const renderKeyAndValue = (key: string, value: string) => {
    if (value)
      return (
        <>
          <Typography variant="subtitle1">{key}</Typography>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {value}
          </Typography>
        </>
      );
  };
  const ModalCustomerDetails = () => (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={isCustomerDetailsOpen}
      onClose={handleCloseDetails}
    >
      <DialogTitle
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {viewOrUpdate === 'view' ? (
            hasEditPermission(
              PermissionEntity.VENDORS_AND_CUSTOMERS,
              currentCustomer
            ) && (
              <Typography
                onClick={() => setViewOrUpdate('update')}
                style={{ cursor: 'pointer' }}
                variant="subtitle1"
                mr={2}
              >
                {t('edit')}
              </Typography>
            )
          ) : (
            <Typography
              onClick={() => setViewOrUpdate('view')}
              style={{ cursor: 'pointer' }}
              variant="subtitle1"
              mr={2}
            >
              {t('Go back')}
            </Typography>
          )}
          {hasDeletePermission(
            PermissionEntity.VENDORS_AND_CUSTOMERS,
            currentCustomer
          ) && (
            <Typography
              onClick={() => {
                setIsCustomerDetailsOpen(false);
                setOpenDelete(true);
              }}
              variant="subtitle1"
              style={{ cursor: 'pointer' }}
            >
              {t('to_delete')}
            </Typography>
          )}
        </Box>
        <IconButton
          aria-label="close"
          onClick={() => {
            setIsCustomerDetailsOpen(false);
          }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        {viewOrUpdate === 'view' ? (
          <Box>
            <Typography variant="h4" sx={{ textAlign: 'center' }} gutterBottom>
              {currentCustomer?.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 3 }}>
              {currentCustomer?.description}
            </Typography>
            {fieldsToRender.map((field) =>
              renderKeyAndValue(field.label, field.value)
            )}
            {currentCustomer?.website && (
              <>
                <Typography variant="subtitle1">{t('Website')}</Typography>

                <Typography variant="h5" sx={{ mb: 1 }}>
                  <a href={currentCustomer?.website}>
                    {currentCustomer?.website}
                  </a>
                </Typography>
              </>
            )}
          </Box>
        ) : (
          <Box>
            <Form
              fields={fields}
              validation={Yup.object().shape(shape)}
              submitText={t('save')}
              values={{
                ...currentCustomer,
                billingCurrency: currentCustomer?.billingCurrency
                  ? {
                      label: currentCustomer.billingCurrency.name,
                      value: currentCustomer.billingCurrency.id
                    }
                  : null
              }}
              onChange={({ field, e }) => {}}
              onSubmit={async (values) => {
                const formattedValues = formatValues(values);
                return dispatch(
                  editCustomer(currentCustomer.id, formattedValues)
                )
                  .then(onEditSuccess)
                  .catch(onEditFailure);
              }}
            />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );

  return (
    <Box
      sx={{
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <ModalCustomerDetails />
      <RenderCustomersAddModal />
      <RenderCustomersList />
      <ConfirmDialog
        open={openDelete}
        onCancel={() => {
          setOpenDelete(false);
          setIsCustomerDetailsOpen(true);
        }}
        onConfirm={() => handleDelete(currentCustomer?.id)}
        confirmText={t('to_delete')}
        question={t('Are you sure you want to delete this Customer?')}
      />
    </Box>
  );
};

export default Customers;

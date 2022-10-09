import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField, TableCustomizedColumnType } from '../type';
import wait from 'src/utils/wait';
import TableCustomized from '../components/TableCustomized';
import { useEffect, useState } from 'react';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridEnrichedColDef,
  GridRenderCellParams,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import {
  emailRegExp,
  isNumeric,
  phoneRegExp,
  websiteRegExp
} from '../../../utils/validators';
import { Close } from '@mui/icons-material';
import { Customer, customers } from '../../../models/owns/customer';
import { useParams } from 'react-router-dom';

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
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [currentCustomer, setCurrentCustomer] = useState<Customer>();
  const [viewOrUpdate, setViewOrUpdate] = useState<'view' | 'update'>('view');
  const values = {
    customerName: customerName,
    phone: phone
  };
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
  useEffect(() => {
    if (customerId && isNumeric(customerId)) {
      handleOpenDetails(Number(customerId));
    }
  }, [customers]);

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
      name: 'address1',
      type: 'text',
      label: 'Address',
      placeholder: 'casa, maroc'
    },
    {
      name: 'address2',
      type: 'text',
      label: 'Address Line 2',
      placeholder: 'casa, maroc'
    },
    {
      name: 'address3',
      type: 'text',
      label: 'Address Line 3',
      placeholder: 'casa, maroc'
    },
    {
      name: 'currency',
      type: 'select',
      label: 'Currency',
      placeholder: 'Select Currency',
      items: [
        { label: 'MAD, Dirham', value: 'dirham' },
        { label: 'Euro', value: 'euro' },
        { label: 'Dollar', value: 'dollar' }
      ]
    }
  ];

  const shape = {
    customerName: Yup.string().required('Customer Name is required'),
    phone: Yup.string()
      .matches(phoneRegExp, t('The phone number is invalid'))
      .required(t('The phone number is required')),
    website: Yup.string().matches(websiteRegExp, t('Invalid website')),
    email: Yup.string().matches(emailRegExp, t('Invalid email'))
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
      headerName: t('Description'),
      description: t('Description'),
      width: 150
    },
    {
      field: 'rate',
      headerName: t('Rate'),
      description: t('Rate'),
      width: 150
    },
    {
      field: 'address1',
      headerName: t('Address Line 1'),
      description: t('Address Line 1'),
      width: 150
    },
    {
      field: 'address3',
      headerName: t('Address Line 2'),
      description: t('Address Line 2'),
      width: 150
    },
    {
      field: 'address3',
      headerName: t('Address Line 3'),
      description: t('Address Line 3'),
      width: 150
    },
    {
      field: 'currency',
      headerName: t('Currency'),
      description: t('Currency'),
      width: 150
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: t('Actions'),
      description: t('Actions'),
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key="delete"
          icon={<DeleteTwoToneIcon fontSize="small" color="error" />}
          onClick={() => {}}
          label="Delete"
        />
      ]
    }
  ];
  // const searchFilterProperties = ['customerName', 'customerType', 'email'];

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
            submitText={t('Add')}
            values={values || {}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                await wait(2000);
                handleCloseModal();
              } catch (err) {
                console.error(err);
              }
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
        components={{
          Toolbar: GridToolbar
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
            <Typography
              onClick={() => setViewOrUpdate('update')}
              style={{ cursor: 'pointer' }}
              variant="subtitle1"
              mr={2}
            >
              {t('Edit')}
            </Typography>
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
          <Typography variant="subtitle1">{t('Delete')}</Typography>
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

            <Typography variant="subtitle1">{t('Address')}</Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {currentCustomer?.address}
            </Typography>

            <Typography variant="subtitle1">{t('Phone')}</Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {currentCustomer?.phone}
            </Typography>

            <Typography variant="subtitle1">{t('Website')}</Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <a href={currentCustomer?.website}>{currentCustomer?.website}</a>
            </Typography>

            <Typography variant="subtitle1">{t('Name')}</Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {currentCustomer?.name}
            </Typography>

            <Typography variant="subtitle1">{t('Email')}</Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {currentCustomer?.email}
            </Typography>

            <Typography variant="subtitle1">{t('Customer Type')}</Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {currentCustomer?.customerType}
            </Typography>

            <Typography variant="subtitle1">{t('Currency')}</Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {currentCustomer?.currency}
            </Typography>
          </Box>
        ) : (
          <Box>
            <Form
              fields={fields}
              validation={Yup.object().shape(shape)}
              submitText={t('Update')}
              values={currentCustomer || {}}
              onChange={({ field, e }) => {}}
              onSubmit={async (values) => {
                try {
                  await wait(2000);
                  setViewOrUpdate('view');
                } catch (err) {
                  console.error(err);
                }
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
    </Box>
  );
};

export default Customers;

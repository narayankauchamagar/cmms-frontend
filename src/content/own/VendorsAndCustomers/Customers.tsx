import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField, TableCustomizedColumnType } from '../type';
import wait from 'src/utils/wait';
import TableCustomized from '../components/TableCustomized';
import { useState } from 'react';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Customers = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();

  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const values = {
    customerName: customerName,
    phone: phone
  };
  console.log('values customers-> ', values);

  let fields: Array<IField> = [
    {
      name: 'customerName',
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
      type: 'text',
      label: 'Rate',
      placeholder: 'Rate',
      icon: '$'
    }
  ];

  const shape = {
    customerName: Yup.string().required('Customer Name is required'),
    phone: Yup.number()
      .required(t('Phone number is required'))
      .typeError(t('You must enter numbers'))
  };

  let customersList = [
    {
      id: '1',
      customerName: 'Customer 1',
      address: 'casa, maroc',
      phone: '+00212611223344',
      website: 'https://web-site.com',
      email: 'john.doe@gmail.com',
      customerType: 'Plumbing',
      description: 'Describe...',
      rate: 'rate'
    },
    {
      id: '2',
      customerName: 'Customer 2',
      address: 'casa, maroc',
      phone: '+00212611223344',
      website: 'https://web-site.com',
      email: 'john.doe@gmail.com',
      customerType: 'Electrical',
      description: 'Describe 2...',
      rate: 'rate'
    }
  ];

  const columns: TableCustomizedColumnType[] = [
    { label: 'Customer Name', accessor: 'customerName' },
    { label: 'Address', accessor: 'address' },
    { label: 'Phone', accessor: 'phone' },
    { label: 'Website', accessor: 'website' },
    { label: 'Email', accessor: 'email' },
    { label: 'Customer Type', accessor: 'customerType' },
    { label: 'Description', accessor: 'description' },
    { label: 'Rate', accessor: 'rate' }
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
            submitText={t('Add')}
            values={values || {}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                await wait(2000);
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
    <Box>
      <Grid
        sx={{
          p: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <TableCustomized
            data={customersList}
            columns={columns}
            searchFilterProperties={['name']}
          />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box>
      <RenderCustomersAddModal />
      <RenderCustomersList />
    </Box>
  );
};

export default Customers;

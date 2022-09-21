import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
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

const Vendors = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();

  const [companyName, setCompanyName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const values = {
    companyName: companyName,
    phone: phone
  };
  // console.log('values-> ', values);

  let fields: Array<IField> = [
    {
      name: 'companyName',
      type: 'text',
      label: 'Company Name',
      placeholder: 'Grash',
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
      name: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'John Doe'
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'john.doe@gmail.com'
    },
    {
      name: 'vendorType',
      type: 'text',
      label: 'Vendor Type',
      placeholder: 'ex. Plumbing, Electrical'
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      multiple: true,
      placeholder: 'Describe the purpose of this business in a few line...'
    },
    {
      name: 'rate',
      type: 'text',
      label: 'Rate',
      placeholder: 'Rate',
      icon: '$',
      helperText: 'Changes will only apply to Work Orders created in the future'
    }
  ];

  const shape = {
    companyName: Yup.string().required('Company Name is require'),
    phone: Yup.number()
      .required(t('Phone number is required'))
      .typeError(t('You must enter numbers'))
  };

  let vendorsList = [
    {
      id: '1',
      companyName: 'Company Name',
      address: 'casa, maroc',
      phone: '+00212611223344',
      website: 'https://web-site.com',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      vendorType: 'Plumbing',
      description: 'Describe...',
      rate: 'rate'
    },
    {
      id: '2',
      companyName: 'Company Name 2',
      address: 'casa, maroc',
      phone: '+00212611223344',
      website: 'https://web-site.com',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      vendorType: 'Plumbing',
      description: 'Describe...',
      rate: 'rate'
    }
  ];

  const columns: TableCustomizedColumnType[] = [
    { label: 'Company Name', accessor: 'companyName' },
    { label: 'Address', accessor: 'address' },
    { label: 'Phone', accessor: 'phone' },
    { label: 'Website', accessor: 'website' },
    { label: 'Name', accessor: 'name' },
    { label: 'Email', accessor: 'email' },
    { label: 'Vendor Type', accessor: 'vendorType' },
    { label: 'Description', accessor: 'description' },
    { label: 'Rate', accessor: 'rate' }
  ];

  const searchFilterProperties = ['name', 'companyName', 'vendorType', 'email'];

  const RenderVendorsAddModal = () => (
    <Dialog fullWidth maxWidth="md" open={openModal} onClose={handleCloseModal}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add vendor')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new vendor')}
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
            onChange={({ field, e }) => {
              /* eslint-disable @typescript-eslint/no-unused-expressions */
              // field === 'phone' && setPhone(e);
              // field === 'companyName' && setCompanyName(e);
              // field === 'term' && setAcceptTerm(e);
            }}
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

  const RenderVendorsList = () => (
    <Box
      sx={{
        width: '95%'
      }}
    >
      <TableCustomized
        data={vendorsList}
        columns={columns}
        searchFilterProperties={searchFilterProperties}
        actions={[
          {
            name: t('Delete'),
            color: 'error',
            callback: () => {},
            icon: <DeleteTwoToneIcon fontSize="small" />
          }
        ]}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <RenderVendorsAddModal />
      <RenderVendorsList />
    </Box>
  );
};

export default Vendors;

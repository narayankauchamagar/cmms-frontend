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
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridEnrichedColDef,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import {
  emailRegExp,
  phoneRegExp,
  websiteRegExp
} from '../../../utils/validators';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Vendors = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const [isVendorDetailsOpen, setIsVendorDetailsOpen] = useState<boolean>(false);

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
      type: 'number',
      label: 'Rate',
      placeholder: 'Rate',
      icon: '$',
      helperText: 'Changes will only apply to Work Orders created in the future'
    }
  ];

  const shape = {
    companyName: Yup.string().required(t('Company Name is required')),
    rate: Yup.number(),
    phone: Yup.string()
      .matches(phoneRegExp, t('The phone number is invalid'))
      .required(t('The phone number is required')),
    website: Yup.string().matches(websiteRegExp, t('Invalid website')),
    email: Yup.string().matches(emailRegExp, t('Invalid email'))
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

  const columns: GridEnrichedColDef[] = [
    {
      field: 'companyName',
      headerName: t('Company Name'),
      description: t('Company Name'),
      width: 150
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
      field: 'name',
      headerName: t('Name'),
      description: t('Name'),
      width: 150
    },
    {
      field: 'email',
      headerName: t('Email'),
      description: t('Email'),
      width: 150
    },
    {
      field: 'vendorType',
      headerName: t('Vendor Type'),
      description: t('Vendor Type'),
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

  // const searchFilterProperties = ['name', 'companyName', 'vendorType', 'email'];

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
        height: 400,
        width: '95%'
      }}
    >
      <CustomDataGrid
        rows={vendorsList}
        columns={columns}
        components={{
          Toolbar: GridToolbar
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {}
          }
        }}
        setOpenModal={setIsVendorDetailsOpen}
      />
    </Box>
  );

  const ModalVendorDetails = () => (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={isVendorDetailsOpen}
      onClose={() => {
        setIsVendorDetailsOpen(false);
      }}
    >
      <DialogTitle
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'row',
          // justifyContent: 'space-between',
        }}
      >
        <Typography variant="subtitle1" mr={2}>
          {t('Edit')}
        </Typography>
        <Typography variant="subtitle1">
          {t('Delete')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Box>
          <Typography variant="h4" sx={{textAlign: 'center'}} gutterBottom>
            {t('McMaster-Carr')}
          </Typography>
          <Typography variant="subtitle1" sx={{textAlign: 'center', mb: 3}}>
            {t('Wide range of stock parts from screws to filters.')}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Address')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            {t('Rabat, Maroc')}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Phone')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            {t('06 22 33 44 55')}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Website')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            <a href='http://www.website.com'>www.website.com</a>
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Name')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            {t('John Doe')}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Email')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            {t('john.doe@email.com')}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Vendor Type')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            {t('General Parts')}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
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
      <ModalVendorDetails />
      <RenderVendorsAddModal />
      <RenderVendorsList />
    </Box>
  );
};

export default Vendors;

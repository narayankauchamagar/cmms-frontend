import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import wait from 'src/utils/wait';

interface PropsType {
  values: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Vendors = ({ values, openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();

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
      icon: '$'
    },
    {
      name: 'term',
      type: 'checkbox',
      label: 'I accept the terms',
      checked: values.acceptTerm
    },
    {
      name: 'listCheckbox',
      type: 'groupCheckbox',
      label: 'List Checkbox',
      items: [
        {
          label: 'label',
          value: 'lab1',
          checked: true
        },
        {
          label: 'Propriétaire',
          value: 'Propriétaire'
        },
        {
          label: 'Logé',
          value: 'Logé'
        },
        {
          label: 'Autres',
          value: 'Autres'
        }
      ]
    },
    {
      name: 'selectList',
      type: 'select',
      label: 'Select List',
      multiple: true,
      items: [
        { label: 'Bucharest, Romania', value: 'v' },
        { label: 'San Francisco, USA', value: 'v' },
        { label: 'Madrid, Spain', value: 'v' },
        { label: 'Berlin, Germany', value: 'v' },
        { label: 'Paris, France', value: 'v' },
        { label: 'London, UK', value: 'v' }
      ]
    }
  ];

  const shape = {
    companyName: Yup.string().required('Company Name est obligatoire'),
    phone: Yup.number()
      .required('Phone number est obligatoire')
      .typeError('Vous devez saisir des nombres'),
    term: Yup.boolean().oneOf(
      [true],
      t('You must accept the terms and conditions')
    )
  };

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

  const RenderVendorsList = () => <Box>List</Box>;

  return (
    <Box>
      <Box>
        <RenderVendorsAddModal />
      </Box>
      <Box>
        <RenderVendorsList />
      </Box>
    </Box>
  );
};

export default Vendors;

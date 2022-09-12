import { Grid, styled, Typography } from '@mui/material';
import * as Yup from 'yup';

import { useTranslation } from 'react-i18next';
import { IField } from '../type';
import Form from '../components/form';
import { useState } from 'react';
import wait from 'src/utils/wait';

function VendorsAndCustomers() {
  const { t }: { t: any } = useTranslation();

  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');

  const values = {
    companyName: companyName,
    phone: phone
  };
  console.log('values-> ', values);

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
      placeholder: '+00212611223344'
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
      label: 'I accept the terms'
    },
    {
      name: 'listCheckbox',
      type: 'groupCheckbox',
      listCheckbox: [
        {
          label: 'label1',
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
      ],
      label: 'List Checkbox'
    }
  ];

  const shape = {
    companyName: Yup.string().required('Company Name est obligatoire'),
    phone: Yup.number()
      .required('Phone number est obligatoire')
      .typeError('Vous devez saisir des nombres')
  };

  return (
    <>
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
          <Typography variant="h1">Vendors & Customers</Typography>
          <Form
            fields={fields}
            values={values}
            submitText="Submit"
            validation={Yup.object().shape(shape)}
            onChange={({ field, e }) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              field === 'phone' && setPhone(e);
            }}
            onSubmit={async (_values) => {
              try {
                await wait(1000);
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default VendorsAndCustomers;

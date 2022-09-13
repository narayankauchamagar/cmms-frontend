import { Card, Grid, styled, Typography } from '@mui/material';
import * as Yup from 'yup';

import { useTranslation } from 'react-i18next';
import { IField } from '../type';
import Form from '../components/form';
import { useContext, useEffect, useState } from 'react';
import wait from 'src/utils/wait';
import { TitleContext } from '../../../contexts/TitleContext';

function VendorsAndCustomers() {
  const { t }: { t: any } = useTranslation();

  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptTerm, setAcceptTerm] = useState(false);
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle(t('Vendors&Customers'));
  }, []);

  const values = {
    companyName: companyName,
    phone: phone,
    term: acceptTerm
  };

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
      checked: acceptTerm
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

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        padding={4}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              p: 2
            }}
          >
            <Form
              fields={fields}
              values={values}
              submitText="Submit"
              validation={Yup.object().shape(shape)}
              onChange={({ field, e }) => {
                /* eslint-disable @typescript-eslint/no-unused-expressions */
                field === 'phone' && setPhone(e);
                field === 'companyName' && setCompanyName(e);
                field === 'term' && setAcceptTerm(e);
              }}
              onSubmit={async (_values) => {
                try {
                  await wait(1000);
                } catch (err) {
                  console.error(err);
                }
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default VendorsAndCustomers;

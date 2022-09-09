import SettingsLayout from '../SettingsLayout';

import { Grid, styled } from '@mui/material';

import PageHeader from './PageHeader';
import { TableCustomizedColumnType } from '../../type';
import TableCustomized from '../../components/TableCustomized';
import { useTranslation } from 'react-i18next';
import { Role } from '../../../../models/role';

function Roles() {
  const { t }: { t: any } = useTranslation();

  let roles: Role[] = [
    {
      id: '1',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '2',
      name: 'Edwina Collins',
      users: 0,
      externalId: 'Tech',
      type: 'paid'
    },
    {
      id: '3',
      name: 'Delta Wiza',
      users: 2,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '4',
      name: 'Dan Stroman',
      users: 0,
      externalId: 'lorem',
      type: 'free'
    },
    {
      id: '5',
      name: 'Oma Bogisich',
      users: 0,
      externalId: 'lorem',
      type: 'paid'
    },
    {
      id: '6',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '7',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '8',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '9',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '10',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '11',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '12',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'paid'
    }
  ];

  const columns: TableCustomizedColumnType[] = [
    { label: 'Name', accessor: 'name' },
    { label: 'Users', accessor: 'users' },
    { label: 'External ID', accessor: 'externalId' },
    { label: 'Type', accessor: 'type' }
  ];

  const searchFilterProperties = ['name', 'externalId'];

  const tabs = [
    {
      value: 'all',
      label: t('All types')
    },
    {
      value: 'paid',
      label: t('Paid')
    },
    {
      value: 'free',
      label: t('Free')
    }
  ];

  return (
    <SettingsLayout tabIndex={3}>
      <PageHeader rolesNumber={roles.length} />

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
            data={roles}
            columns={columns}
            tabsFilter={tabs}
            searchFilterProperties={searchFilterProperties}
            hasBulkActions
          />
        </Grid>
      </Grid>
    </SettingsLayout>
  );
}

export default Roles;

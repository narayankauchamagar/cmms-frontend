import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import wait from 'src/utils/wait';
import CustomDataGrid from '../components/CustomDatagrid';
import { GridEnrichedColDef, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
import UserDetailsDrawer from './UserDetailsDrawer';
import User, { users } from '../../../models/owns/user';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const People = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const [currentUser, setCurrentUser] = useState<User>();
  const [detailDrawerOpen, setDetailDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDetailDrawerOpen(!detailDrawerOpen);
  };

  let fields: Array<IField> = [];

  const shape = {};

  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Name'),
      width: 150,
      valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`
    },
    {
      field: 'email',
      headerName: t('Email'),
      width: 150
    },
    {
      field: 'phone',
      headerName: t('Phone'),
      width: 150
    },
    {
      field: 'jobTitle',
      headerName: t('Job Title'),
      width: 150
    },
    {
      field: 'companyName',
      headerName: t('Company Name'),
      width: 150
    },
    {
      field: 'accountType',
      headerName: t('Account Type'),
      width: 150
    },
    {
      field: 'lastVisit',
      headerName: t('Last Visit'),
      width: 150
    },
    {
      field: 'hourlyRate',
      headerName: t('Hourly Rate'),
      width: 150
    }
  ];

  const RenderPeopleAddModal = () => (
    <Dialog fullWidth maxWidth="md" open={openModal} onClose={handleCloseModal}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Invite Users')}
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
            submitText={t('Invite')}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                await wait(2000);
                console.log('Values ==> ', values);
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );

  const RenderPeopleList = () => (
    <Box
      sx={{
        height: 400,
        width: '95%'
      }}
    >
      <CustomDataGrid
        rows={users}
        columns={columns}
        components={{
          Toolbar: GridToolbar
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {}
          }
        }}
        onRowClick={(params) => {
          setCurrentUser(users.find((user) => user.id === params.id));
          handleDrawerToggle();
        }}
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
      <RenderPeopleAddModal />
      <RenderPeopleList />

      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open={detailDrawerOpen}
        onClose={handleDrawerToggle}
        elevation={9}
      >
        <UserDetailsDrawer user={currentUser} />
      </Drawer>
    </Box>
  );
};

export default People;

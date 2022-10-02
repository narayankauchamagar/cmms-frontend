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
import CustomDataGrid from '../components/CustomDatagrid';
import { GridEnrichedColDef, GridToolbar } from '@mui/x-data-grid';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const People = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();

  let fields: Array<IField> = [];

  const shape = {};

  let PeopleList = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      phone: '+00212611223344',
      jobTitle: 'Job',
      companyName: 'Company',
      accountType: 'Administrator',
      lastVisit: '02/09/22',
      hourlyRate: ''
    },
    {
      id: '2',
      name: 'John Jr',
      email: 'john.jr@gmail.com',
      phone: '+00212611223344',
      jobTitle: 'Job',
      companyName: 'Company',
      accountType: 'Administrator',
      lastVisit: '02/09/22',
      hourlyRate: ''
    }
  ];

  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Name'),
      width: 150
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
        rows={PeopleList}
        columns={columns}
        components={{
          Toolbar: GridToolbar
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {}
          }
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
    </Box>
  );
};

export default People;

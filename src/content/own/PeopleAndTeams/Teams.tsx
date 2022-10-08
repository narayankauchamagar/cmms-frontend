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

const Teams = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();

  let fields: Array<IField> = [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Team Name',
      required: true
    },
    {
      name: 'description',
      type: 'text',
      multiple: true,
      label: 'Description',
      placeholder: 'Description'
    },
    {
      name: 'teamUsers',
      type: 'select',
      type2: 'user',
      multiple: true,
      label: 'People in the team',
      placeholder: 'Team Users'
    }
  ];

  const shape = {
    name: Yup.string().required('Team Name is required'),
    description: Yup.string().required('Description is required')
  };

  let TeamsList = [
    {
      id: '1',
      name: 'Team one',
      description: 'first',
      teamUsers: []
    },
    {
      id: '2',
      name: 'Team two',
      description: 'second team',
      teamUsers: []
    }
  ];

  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Team Name'),
      width: 150
    },
    {
      field: 'description',
      headerName: t('Description'),
      width: 150
    },
    {
      field: 'teamUsers',
      headerName: t('People in the team'),
      width: 200
    }
  ];

  const RenderTeamsAddModal = () => (
    <Dialog fullWidth maxWidth="md" open={openModal} onClose={handleCloseModal}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Create team')}
        </Typography>
        <Typography variant="subtitle2">
          {t('You can add team members to the team from here')}
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
            submitText={t('Submit')}
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

  const RenderTeamsList = () => (
    <Box
      sx={{
        height: 400,
        width: '95%'
      }}
    >
      {TeamsList.length !== 0 ? (
        <CustomDataGrid
          rows={TeamsList}
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
      ) : (
        <Box sx={{ mt: 2, px: 3, textAlign: 'center' }}>
          <Typography variant="h5">
            {t('Teams help you manage specific groups of people.')}
          </Typography>
          <Typography component="span" variant="subtitle2">
            {t("Press the '+' button to create a team.")}
          </Typography>
        </Box>
      )}
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
      <RenderTeamsAddModal />
      <RenderTeamsList />
    </Box>
  );
};

export default Teams;

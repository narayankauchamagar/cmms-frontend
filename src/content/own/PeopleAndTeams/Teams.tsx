import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import wait from 'src/utils/wait';
import CustomDataGrid from '../components/CustomDatagrid';
import Team, { teams } from '../../../models/owns/team';
import {
  GridEnrichedColDef,
  GridRenderCellParams,
  GridToolbar
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Close } from '@mui/icons-material';
import { isNumeric } from 'src/utils/validators';
import { useParams } from 'react-router-dom';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Teams = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();

  const [isTeamDetailsOpen, setIsTeamDetailsOpen] = useState(false);
  const [currentTeam, setCurrentTeam] = useState<Team>();
  const [viewOrUpdate, setViewOrUpdate] = useState<'view' | 'update'>('view');
  const { teamId } = useParams();

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

  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Team Name'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
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

  const handleDetailsModalToggle = (id: number) => {
    if (!isTeamDetailsOpen) {
      setCurrentTeam(teams.find((team) => team.id === id));
    }
    window.history.replaceState(
      null,
      'Team details',
      `/app/people-teams/teams/${isTeamDetailsOpen ? '' : id}`
    );
    setIsTeamDetailsOpen(!isTeamDetailsOpen);
  };

  // if reload with teamId
  useEffect(() => {
    if (teamId && isNumeric(teamId)) {
      handleDetailsModalToggle(Number(teamId));
    }
  }, []);

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
      {teams.length !== 0 ? (
        <CustomDataGrid
          rows={teams}
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
            handleDetailsModalToggle(Number(params.id));
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

  const ModalTeamDetails = () => (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={isTeamDetailsOpen}
      onClose={handleDetailsModalToggle}
    >
      <DialogTitle
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {viewOrUpdate === 'view' ? (
            <Typography
              onClick={() => setViewOrUpdate('update')}
              style={{ cursor: 'pointer' }}
              variant="subtitle1"
              mr={2}
            >
              {t('Edit')}
            </Typography>
          ) : (
            <Typography
              onClick={() => setViewOrUpdate('view')}
              style={{ cursor: 'pointer' }}
              variant="subtitle1"
              mr={2}
            >
              {t('Go back')}
            </Typography>
          )}
          <Typography variant="subtitle1">{t('Delete')}</Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={() => {
            handleDetailsModalToggle(null);
          }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        {viewOrUpdate === 'view' ? (
          <Box>
            <Typography variant="subtitle1">{t('Name')}</Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {currentTeam?.name}
            </Typography>
            <Typography variant="subtitle1">{t('Description')}</Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {currentTeam?.description}
            </Typography>

            {/* people in the team */}
          </Box>
        ) : (
          <Box>
            <Form
              fields={fields}
              validation={Yup.object().shape(shape)}
              submitText={t('Update')}
              values={currentTeam || {}}
              onChange={({ field, e }) => {}}
              onSubmit={async (values) => {
                try {
                  await wait(2000);
                  setViewOrUpdate('view');
                } catch (err) {
                  console.error(err);
                }
              }}
            />
          </Box>
        )}
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
      <RenderTeamsAddModal />
      <ModalTeamDetails />
      <RenderTeamsList />
    </Box>
  );
};

export default Teams;

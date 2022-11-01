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
import CustomDataGrid from '../components/CustomDatagrid';
import Team from '../../../models/owns/team';
import {
  GridEnrichedColDef,
  GridRenderCellParams,
  GridToolbar
} from '@mui/x-data-grid';
import { Close } from '@mui/icons-material';
import { isNumeric } from 'src/utils/validators';
import { useParams } from 'react-router-dom';
import { addTeam, deleteTeam, getTeams } from '../../../slices/team';
import { useDispatch, useSelector } from '../../../store';
import ConfirmDialog from '../components/ConfirmDialog';
import { useContext, useEffect, useState } from 'react';
import { formatSelectMultiple } from '../../../utils/formatters';
import { UserMiniDTO } from '../../../models/user';
import UserAvatars from '../components/UserAvatars';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import wait from 'src/utils/wait';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Teams = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [currentTeam, setCurrentTeam] = useState<Team>();
  const { teams } = useSelector((state) => state.teams);
  const { showSnackBar } = useContext(CustomSnackBarContext);

  const [isTeamDetailsOpen, setIsTeamDetailsOpen] = useState(false);
  const [viewOrUpdate, setViewOrUpdate] = useState<'view' | 'update'>('view');
  const { teamId } = useParams();

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const handleDelete = (id: number) => {
    dispatch(deleteTeam(id)).then(onDeleteSuccess).catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const onCreationSuccess = () => {
    handleCloseModal();
    showSnackBar(t('The Team has been created successfully'), 'success');
  };
  const onCreationFailure = (err) =>
    showSnackBar(t("The Team couldn't be created"), 'error');
  const onEditSuccess = () => {
    setOpenUpdateModal(false);
    showSnackBar(t('The changes have been saved'), 'success');
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The Team couldn't be edited"), 'error');
  const onDeleteSuccess = () => {
    showSnackBar(t('The Team has been deleted successfully'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t("The Team couldn't be deleted"), 'error');
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
      name: 'users',
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
      field: 'users',
      headerName: t('People in the team'),
      width: 200,
      renderCell: (params: GridRenderCellParams<UserMiniDTO[]>) => (
        <UserAvatars users={params.value} />
      )
    }
  ];
  const handleOpenDetails = (id: number) => {
    const foundTeam = teams.find((team) => team.id === id);
    if (foundTeam) {
      setCurrentTeam(foundTeam);
      window.history.replaceState(
        null,
        'Team details',
        `/app/people-teams/teams/${id}`
      );
      setIsTeamDetailsOpen(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(null, 'Team', `/app/people-teams/teams`);
    setIsTeamDetailsOpen(false);
  };

  // if reload with teamId
  useEffect(() => {
    if (teamId && isNumeric(teamId)) {
      handleOpenDetails(Number(teamId));
    }
  }, [teams]);

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
              values.users = formatSelectMultiple(values.users);
              dispatch(addTeam(values))
                .then(onCreationSuccess)
                .catch(onCreationFailure);
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );

  const Renderteams = () => (
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
            handleOpenDetails(Number(params.id));
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
      onClose={handleCloseDetails}
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
          onClick={handleCloseDetails}
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
      <Renderteams />
      <ConfirmDialog
        open={openDelete}
        onCancel={() => {
          setOpenDelete(false);
        }}
        onConfirm={() => handleDelete(currentTeam?.id)}
        confirmText={t('Delete')}
        question={t('Are you sure you want to delete this Vendor?')}
      />
    </Box>
  );
};

export default Teams;

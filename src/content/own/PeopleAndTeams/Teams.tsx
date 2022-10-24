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
import {
  GridEnrichedColDef,
  GridRenderCellParams,
  GridToolbar
} from '@mui/x-data-grid';
import { addTeam, getTeams, editTeam, deleteTeam } from '../../../slices/team';
import { useDispatch, useSelector } from '../../../store';
import ConfirmDialog from '../components/ConfirmDialog';
import { useEffect, useState } from 'react';
import { formatSelectMultiple } from '../../../utils/formatters';
import Team from '../../../models/owns/team';
import { UserMiniDTO } from '../../../models/user';
import UserAvatars from '../components/UserAvatars';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Teams = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [currentTeam, setCurrentTeam] = useState<Team>();
  const { teams } = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const handleDelete = (id: number) => {
    dispatch(deleteTeam(id));
    setOpenDelete(false);
  };

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
              try {
                dispatch(addTeam(values));
                //handleCloseModal();
              } catch (err) {
                console.error(err);
              }
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

import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridEnrichedColDef,
  GridRenderCellParams,
  GridRowParams,
  GridToolbar,
  GridValueGetterParams
} from '@mui/x-data-grid';
import { useContext, useEffect, useState } from 'react';
import UserDetailsDrawer from './UserDetailsDrawer';
import User from '../../../models/owns/user';
import UserRoleCardList from './UserRoleCardList';
import { EmailOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
import { emailRegExp, isNumeric } from 'src/utils/validators';
import { useDispatch, useSelector } from '../../../store';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import { editUser, getUsers, inviteUsers } from '../../../slices/user';
import { OwnUser } from '../../../models/user';
import { PermissionEntity, Role } from '../../../models/owns/role';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import useAuth from '../../../hooks/useAuth';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import { formatSelect } from '../../../utils/formatters';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const People = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const [currentUser, setCurrentUser] = useState<OwnUser>();
  const [detailDrawerOpen, setDetailDrawerOpen] = useState(false);
  const { peopleId } = useParams();
  const { hasEditPermission, user } = useAuth();
  const { users, loadingGet } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { getFormattedCurrency } = useContext(CompanySettingsContext);
  const [emails, setEmails] = useState<string[]>([]);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [currentEmail, setCurrentEmail] = useState<string>('');
  const [isInviteSubmitting, setIsInviteSubmitting] = useState(false);
  const [roleId, setRoleId] = useState<number>();

  const onEditSuccess = () => {
    setOpenUpdateModal(false);
    showSnackBar(t('The changes have been saved'), 'success');
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The User couldn't be edited"), 'error');

  const handleOpenDetails = (id: number) => {
    const foundUser = users.find((user) => user.id === id);
    if (foundUser) {
      setCurrentUser(foundUser);
      window.history.replaceState(
        null,
        'User details',
        `/app/people-teams/people/${id}`
      );
      setDetailDrawerOpen(true);
    }
  };
  const handleOpenUpdate = (id: number) => {
    const foundUser = users.find((user) => user.id === id);
    if (foundUser) {
      setCurrentUser(foundUser);
      setOpenUpdateModal(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(null, 'User', `/app/people-teams/people`);
    setDetailDrawerOpen(false);
  };
  const defautfields: Array<IField> = [
    {
      name: 'rate',
      type: 'number',
      label: t('Rate')
    },
    {
      name: 'role',
      type: 'select',
      type2: 'role',
      label: t('Role')
    }
  ];
  const getFields = () => {
    let fields = [...defautfields];
    if (currentUser?.ownsCompany || currentUser?.id === user?.id) {
      const roleIndex = fields.findIndex((field) => field.name === 'role');
      fields.splice(roleIndex, 1);
    }
    return fields;
  };
  const renderEditUserModal = () => (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openUpdateModal}
      onClose={() => setOpenUpdateModal(false)}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Edit User')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to edit the user')}
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
            fields={getFields()}
            validation={Yup.object().shape({})}
            submitText={t('save')}
            values={{
              rate: currentUser?.rate,
              role: currentUser
                ? { label: currentUser.role.name, value: currentUser.role.id }
                : null
            }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              return dispatch(
                editUser(currentUser.id, {
                  ...currentUser,
                  rate: values.rate,
                  role: formatSelect(values.role)
                })
              )
                .then(onEditSuccess)
                .catch(onEditFailure);
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  const onRoleChange = (id: number) => setRoleId(id);
  // if reload with peopleId
  useEffect(() => {
    if (peopleId && isNumeric(peopleId)) {
      handleOpenDetails(Number(peopleId));
    }
  }, [users]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const verifyCurrentEmail = (): boolean => {
    if (currentEmail) {
      let error;
      if (emails.length < 20) {
        const emailsClone = [...emails];
        if (emailsClone.includes(currentEmail)) {
          error = 'This email is already selected';
        } else {
          if (users.map((user) => user.email).includes(currentEmail)) {
            error = 'A user with this email is already in this company';
          } else {
            if (!currentEmail.match(emailRegExp)) {
              error = 'This email is invalid';
            }
          }
        }
      } else error = 'You can invite a maximum of 20 users at once';
      if (error) {
        showSnackBar(t(error), 'error');
        return false;
      }
    }
    return true;
  };
  // let fields: Array<IField> = [];

  // const shape = {};

  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Name'),
      width: 150,
      valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
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
      field: 'role',
      headerName: t('Role'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<Role>) => params.value.name
    },
    {
      field: 'rate',
      headerName: t('Hourly Rate'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<number>) =>
        getFormattedCurrency(params.value)
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: t('Actions'),
      description: t('Actions'),
      getActions: (params: GridRowParams<OwnUser>) => {
        let actions = [
          <GridActionsCellItem
            key="edit"
            icon={<EditTwoToneIcon fontSize="small" color={'primary'} />}
            onClick={() => handleOpenUpdate(Number(params.id))}
            label="Edit"
          />
        ];
        if (!hasEditPermission(PermissionEntity.PEOPLE_AND_TEAMS, params.row))
          actions = [];
        return actions;
      }
    }
  ];
  const RenderPeopleList = () => (
    <Box
      sx={{
        height: 400,
        width: '95%'
      }}
    >
      <CustomDataGrid
        rows={users}
        loading={loadingGet}
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
          // setCurrentUser(users.find((user) => user.id === params.id));
          handleOpenDetails(Number(params.id));
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
      {/* <RenderPeopleAddModal /> */}
      <RenderPeopleList />

      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open={detailDrawerOpen}
        onClose={handleCloseDetails}
        elevation={9}
      >
        <UserDetailsDrawer user={currentUser} />
      </Drawer>

      {/* Render People Add Modal */}
      <Dialog
        fullWidth
        maxWidth="sm"
        open={openModal}
        onClose={handleCloseModal}
      >
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
            p: 3,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '95%' }}>
            <Paper
              elevation={0}
              sx={{
                mb: 2,
                p: 2,
                textAlign: 'center',
                background: grey[100]
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 50,
                  width: 50
                }}
                alt={
                  "<a href='https://www.flaticon.com/free-icons/team' title='team icons'>Team icons created by Freepik - Flaticon</a>"
                }
                src="/static/images/team.png"
              />
              <Typography variant="h5">
                {t('Bring new people to the team')}
              </Typography>
            </Paper>

            <UserRoleCardList onChange={onRoleChange} />
            <Grid container sx={{ mt: 2 }} spacing={1}>
              {emails.map((email, index) => (
                <Grid item key={index}>
                  <Chip
                    label={email}
                    onDelete={() => {
                      const emailsClone = [...emails];
                      emailsClone.splice(index, 1);
                      setEmails(emailsClone);
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <TextField
              sx={{ my: 2 }}
              fullWidth
              helperText={t(
                "You may add 20 users at a time by pressing 'tab' or 'enter' after each email entry. Any duplicate and registered emails will be removed while registering the requested users."
              )}
              label={t('Enter email address')}
              placeholder={t('example@email.com')}
              name="email"
              value={currentEmail}
              onChange={(event) => {
                setCurrentEmail(event.target.value);
              }}
              onKeyDown={(event) => {
                if (['Enter', 'Tab'].includes(event.key)) {
                  if (verifyCurrentEmail()) {
                    const emailsClone = [...emails];
                    emailsClone.push(currentEmail);
                    setEmails(emailsClone);
                    setCurrentEmail('');
                  }
                }
              }}
              variant={'outlined'}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                )
              }}
            />
            <Button
              fullWidth
              sx={{ mb: 3 }}
              onClick={async () => {
                setIsInviteSubmitting(true);
                const invite = (emails: string[]) =>
                  dispatch(inviteUsers(roleId, emails))
                    .then(() => {
                      handleCloseModal();
                      setEmails([]);
                      setCurrentEmail('');
                      showSnackBar(t('Users have been invited'), 'success');
                    })
                    .catch((err) =>
                      showSnackBar(
                        t(
                          "Users can't be invited. Check your current subscription members count"
                        ),
                        'error'
                      )
                    )
                    .finally(() => setIsInviteSubmitting(false));
                if (roleId) {
                  if (emails.length || currentEmail) {
                    if (currentEmail) {
                      if (verifyCurrentEmail())
                        invite([...emails, currentEmail]);
                    } else {
                      invite(emails);
                    }
                  } else
                    showSnackBar(t('Please type in emails to invite'), 'error');
                } else showSnackBar(t('Please select a role'), 'error');
              }}
              variant="contained"
              startIcon={
                isInviteSubmitting ? <CircularProgress size="1rem" /> : null
              }
              disabled={isInviteSubmitting}
            >
              {t('Invite')}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      {renderEditUserModal()}
    </Box>
  );
};

export default People;

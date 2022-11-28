import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridEnrichedColDef,
  GridRenderCellParams,
  GridToolbar
} from '@mui/x-data-grid';
import { useContext, useEffect, useState } from 'react';
import UserDetailsDrawer from './UserDetailsDrawer';
import User, { users } from '../../../models/owns/user';
import UserRoleCardList from './UserRoleCardList';
import { EmailOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
import { emailRegExp, isNumeric } from 'src/utils/validators';
import { useDispatch } from '../../../store';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import { inviteUsers } from '../../../slices/user';

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
  const { peopleId } = useParams();
  const dispatch = useDispatch();
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const [emails, setEmails] = useState<string[]>([]);
  const [currentEmail, setCurrentEmail] = useState<string>('');
  const [isInviteSubmitting, setIsInviteSubmitting] = useState(false);
  const [roleId, setRoleId] = useState<number>();

  const handleOpenDetails = (id: number) => {
    const foundUser = users.find((user) => user.id === id);
    if (foundUser) {
      setCurrentUser(foundUser);
      window.history.replaceState(
        null,
        'User details',
        `/app/people-teams/${id}`
      );
      setDetailDrawerOpen(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(null, 'User', `/app/people-teams`);
    setDetailDrawerOpen(false);
  };

  const onRoleChange = (id: number) => setRoleId(id);
  // if reload with peopleId
  useEffect(() => {
    if (peopleId && isNumeric(peopleId)) {
      handleOpenDetails(Number(peopleId));
    }
  }, [users]);

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
            <Stack sx={{ mt: 2 }} direction="row" spacing={1}>
              {emails.map((email, index) => (
                <Chip
                  key={index}
                  label={email}
                  onDelete={() => {
                    const emailsClone = [...emails];
                    emailsClone.splice(index, 1);
                    setEmails(emailsClone);
                  }}
                />
              ))}
            </Stack>
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
                  let error;
                  if (emails.length < 20) {
                    const emailsClone = [...emails];
                    if (emailsClone.includes(currentEmail)) {
                      error = 'This email is already selected';
                    } else {
                      if (currentEmail.match(emailRegExp)) {
                        emailsClone.push(currentEmail);
                        setEmails(emailsClone);
                        setCurrentEmail('');
                      } else error = 'This email is invalid';
                    }
                  } else
                    error = t('You can invite a maximum of 20 users at once');
                  if (error) showSnackBar(t(error), 'error');
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
                if (roleId) {
                  if (emails.length) {
                    setIsInviteSubmitting(true);
                    dispatch(inviteUsers(roleId, emails))
                      .then(() => {
                        handleCloseModal();
                        setEmails([]);
                        setCurrentEmail('');
                      })
                      .finally(() => setIsInviteSubmitting(false));
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
    </Box>
  );
};

export default People;

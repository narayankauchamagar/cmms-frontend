import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import wait from 'src/utils/wait';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridEnrichedColDef,
  GridRenderCellParams,
  GridToolbar
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import UserDetailsDrawer from './UserDetailsDrawer';
import User, { users } from '../../../models/owns/user';
import UserRoleCardList from './UserRoleCardList';
import { EmailOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
import { isNumeric } from 'src/utils/validators';

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

  const [inviteUserRoleSelected, setInviteUserRoleSelected] =
    useState<string>('');
  const [inviteUserEmail, setInviteUserEmail] = useState<string>('');
  const [isInviteSubmitting, setIsInviteSubmitting] = useState(false);

  const handleDrawerToggle = (id: number) => {
    if (!detailDrawerOpen) {
      setCurrentUser(users.find((user) => user.id === id));
    }
    window.history.replaceState(
      null,
      'User details',
      `/app/people-teams/${detailDrawerOpen ? '' : id}`
    );
    setDetailDrawerOpen(!detailDrawerOpen);
  };

  // if reload with peopleId
  useEffect(() => {
    if (peopleId && isNumeric(peopleId)) {
      handleDrawerToggle(Number(peopleId));
    }
  }, []);

  const userRoleList = [
    {
      title: 'Administrator',
      desc: 'Administrator has full access; including editing, adding, deleting work orders and requests'
    },
    {
      title: 'Limited Administrator',
      desc: 'Limited administrators have the same access as administrator except they are unable to view/edit settings or add/edit people and teams. They cannot delete Work Orders, Assets Locations, Meters and Purchase Orders unless they created Customers, Categories and PM triggers.'
    },
    {
      title: 'Technician',
      desc: 'Technicians can create and close work orders, assets and locations. Able to edit and delete only what they have created'
    },
    {
      title: 'Limited Technician',
      desc: 'Limited technicians can only see work orders assigned to them'
    },
    {
      title: 'View Only',
      desc: 'View only users have full view access, but cannot edit anything'
    },
    {
      title: 'Requester',
      desc: 'Requesters can only submit work requests and view their status'
    }
  ];

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

  // const RenderPeopleAddModal = () => (
  //   <Dialog fullWidth maxWidth="sm" open={openModal} onClose={handleCloseModal}>
  //     <DialogTitle
  //       sx={{
  //         p: 3
  //       }}
  //     >
  //       <Typography variant="h4" gutterBottom>
  //         {t('Invite Users')}
  //       </Typography>
  //     </DialogTitle>

  //     <DialogContent
  //       dividers
  //       sx={{
  //         p: 3,
  //         display: 'flex',
  //         justifyContent: 'center'
  //       }}
  //     >
  //       <Box sx={{ width: '95%' }}>
  //         <UserRoleCardList
  //           listData={userRoleList}
  //           selectedItem={inviteUserRoleSelected}
  //           setSelectedItem={setInviteUserRoleSelected}
  //         />
  //         <TextField
  //           sx={{ my: 4 }}
  //           fullWidth
  //           helperText={t('You may add 20 users at a time')}
  //           label={t('Enter email address')}
  //           placeholder={t('example@email.com')}
  //           name="email"
  //           onChange={(e) => {
  //             setInviteUserEmail(e.target.value);
  //           }}
  //           variant={'outlined'}
  //           required
  //           InputProps={{
  //             startAdornment: (
  //               <InputAdornment position="start">
  //                 <EmailOutlined />
  //               </InputAdornment>
  //             )
  //           }}
  //         />

  //         <Button
  //           fullWidth
  //           sx={{
  //             mb: 3
  //           }}
  //           onClick={async () => {
  //             try {
  //               await wait(2000);
  //               console.log(
  //                 'inviteUserRoleSelected -> ',
  //                 inviteUserRoleSelected
  //               );
  //               console.log('inviteUserEmail -> ', inviteUserEmail);
  //             } catch (err) {
  //               console.error(err);
  //             }
  //           }}
  //           variant="contained"
  //         >
  //           {t('Invite')}
  //         </Button>
  //       </Box>
  //     </DialogContent>
  //   </Dialog>
  // );

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
          handleDrawerToggle(Number(params.id));
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
        onClose={handleDrawerToggle}
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

            <UserRoleCardList
              listData={userRoleList}
              selectedItem={inviteUserRoleSelected}
              setSelectedItem={setInviteUserRoleSelected}
            />

            <TextField
              sx={{ my: 4 }}
              fullWidth
              helperText={t(
                "You may add 20 users at a time by pressing 'tab' or 'enter' after each email entry. Any duplicate and registered emails will be removed while registering the requested users."
              )}
              label={t('Enter email address')}
              placeholder={t('example@email.com')}
              name="email"
              onChange={(e) => {
                setInviteUserEmail(e.target.value);
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
                try {
                  setIsInviteSubmitting(true);
                  await wait(2000);
                  setIsInviteSubmitting(false);
                  console.log(
                    'inviteUserRoleSelected -> ',
                    inviteUserRoleSelected
                  );
                  console.log('inviteUserEmail -> ', inviteUserEmail);
                } catch (err) {
                  console.error(err);
                }
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

import { useRef, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import {
  Avatar,
  Box,
  IconButton,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';

const IconButtonPrimary = styled(IconButton)(
  ({ theme }) => `
    display: inline-flex;
    border-radius: ${theme.general.borderRadiusLg};
    height: 58px;
    justify-content: center;
    font-size: ${theme.typography.pxToRem(13)};
    position: relative;
    margin-left: ${theme.spacing(1)};

    .MuiSvgIcon-root {
      transition: ${theme.transitions.create(['color'])};
      font-size: ${theme.typography.pxToRem(16)};
      color: ${theme.colors.alpha.trueWhite[50]};
    }

    &.active,
    &:hover {
      background-color: ${theme.colors.alpha.black[10]};

      .MuiSvgIcon-root {
        color: ${theme.colors.alpha.trueWhite[100]};
      }
    }
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${theme.palette.secondary.light}
`
);

function Userbox() {
  const { t }: { t: any } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleLogout = async (): Promise<void> => {
    try {
      handleClose();
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <IconButtonPrimary color="primary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} />
        <Box
          component="span"
          sx={{
            display: { xs: 'none', sm: 'inline-block' }
          }}
        >
          <ExpandMoreTwoToneIcon
            sx={{
              ml: 1
            }}
          />
        </Box>
      </IconButtonPrimary>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <MenuUserBox
          sx={{
            minWidth: 210
          }}
          display="flex"
        >
          <Avatar variant="rounded" alt={user.name} src={user.avatar} />
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.jobtitle}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider
          sx={{
            mb: 0
          }}
        />
        <List
          sx={{
            p: 1
          }}
          component="nav"
        >
          <ListItem
            button
            onClick={() => {
              handleClose();
            }}
            to={`/${location.pathname.split('/')[1]}/management/users/single/1`}
            component={NavLink}
          >
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary={t('Profile')} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleClose();
            }}
            to={`/${
              location.pathname.split('/')[1]
            }/applications/mailbox/inbox`}
            component={NavLink}
          >
            <InboxTwoToneIcon fontSize="small" />
            <ListItemText primary={t('Inbox')} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              handleClose();
            }}
            to={`/${
              location.pathname.split('/')[1]
            }/applications/projects-board`}
            component={NavLink}
          >
            <AccountTreeTwoToneIcon fontSize="small" />
            <ListItemText primary={t('Projects')} />
          </ListItem>
        </List>
        <Divider />
        <Box m={1}>
          <Button color="primary" fullWidth onClick={handleLogout}>
            <LockOpenTwoToneIcon
              sx={{
                mr: 1
              }}
            />
            {t('Sign out')}
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default Userbox;

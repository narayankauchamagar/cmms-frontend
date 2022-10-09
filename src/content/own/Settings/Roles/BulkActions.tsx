import { ReactNode, useRef, useState } from 'react';

import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  styled,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

const ButtonError = styled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);
export interface BulkAction {
  name: string;
  color: 'primary' | 'error';
  callback: (ids: number[]) => void;
  icon: ReactNode;
}
interface BulkActionsProps {
  actions: BulkAction[];
}

function BulkActions(props: BulkActionsProps) {
  const { actions } = props;
  const [onMenuOpen, menuOpen] = useState<boolean>(false);
  const moreRef = useRef<HTMLButtonElement | null>(null);
  const { t }: { t: any } = useTranslation();

  const openMenu = (): void => {
    menuOpen(true);
  };

  const closeMenu = (): void => {
    menuOpen(false);
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Typography variant="h5" color="text.secondary">
            {t('Bulk actions')}:
          </Typography>
          {/* <Tooltip arrow placement="top" title={t('Resend verification email')}>
            <IconButton
              color="primary"
              sx={{
                ml: 1,
                p: 1
              }}
            >
              <VerifiedUserTwoToneIcon />
            </IconButton>
          </Tooltip> */}
          {actions.map((action) =>
            action.color == 'primary' ? (
              <Button
                onClick={() => action.callback([1, 2])}
                sx={{
                  ml: 1
                }}
                startIcon={action.icon}
                variant="contained"
              >
                {action.name}
              </Button>
            ) : (
              <ButtonError
                sx={{
                  ml: 1
                }}
                onClick={() => action.callback([1, 2])}
                startIcon={action.icon}
                variant="contained"
              >
                {action.name}
              </ButtonError>
            )
          )}
        </Box>
        <IconButton
          color="primary"
          onClick={openMenu}
          ref={moreRef}
          sx={{
            ml: 2,
            p: 1
          }}
        >
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>

      <Menu
        disableScrollLock
        keepMounted
        anchorEl={moreRef.current}
        open={onMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
      >
        <List
          sx={{
            p: 1
          }}
          component="nav"
        >
          <ListItem button>
            <ListItemText primary={t('Bulk edit accounts')} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={t('Close selected accounts')} />
          </ListItem>
        </List>
      </Menu>
    </>
  );
}

export default BulkActions;

import SettingsLayout from '../SettingsLayout';

import {
  Avatar,
  Box,
  Button,
  Dialog,
  Grid,
  Slide,
  styled,
  Typography,
  Zoom
} from '@mui/material';

import PageHeader from './PageHeader';
import { TableCustomizedColumnType } from '../../type';
import TableCustomized from '../../components/TableCustomized';
import { useTranslation } from 'react-i18next';
import { Role } from '../../../../models/role';
import CloseIcon from '@mui/icons-material/Close';
import { forwardRef, ReactElement, Ref, useState } from 'react';
import { useSnackbar } from 'notistack';
import { TransitionProps } from '@mui/material/transitions';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const DialogWrapper = styled(Dialog)(
  () => `
        .MuiDialog-paper {
          overflow: visible;
        }
  `
);
const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const AvatarError = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.error.lighter};
        color: ${theme.colors.error.main};
        width: ${theme.spacing(12)};
        height: ${theme.spacing(12)};
  
        .MuiSvgIcon-root {
          font-size: ${theme.typography.pxToRem(45)};
        }
  `
);

const ButtonError = styled(Button)(
  ({ theme }) => `
       background: ${theme.colors.error.main};
       color: ${theme.palette.error.contrastText};
  
       &:hover {
          background: ${theme.colors.error.dark};
       }
      `
);
function Roles() {
  const { t }: { t: any } = useTranslation();
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleConfirmDelete = (id: number) => {
    setOpenConfirmDelete(true);
  };

  const handleConfirmDeleteMultiple = (ids: number[]) => {
    setOpenConfirmDelete(true);
  };
  const closeConfirmDelete = () => setOpenConfirmDelete(false);

  const handleDeleteCompleted = () => {
    setOpenConfirmDelete(false);

    enqueueSnackbar(t('The role has been removed'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
  };

  let roles: Role[] = [
    {
      id: '1',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '2',
      name: 'Edwina Collins',
      users: 0,
      externalId: 'Tech',
      type: 'paid'
    },
    {
      id: '3',
      name: 'Delta Wiza',
      users: 2,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '4',
      name: 'Dan Stroman',
      users: 0,
      externalId: 'lorem',
      type: 'free'
    },
    {
      id: '5',
      name: 'Oma Bogisich',
      users: 0,
      externalId: 'lorem',
      type: 'paid'
    },
    {
      id: '6',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '7',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '8',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '9',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '10',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '11',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'free'
    },
    {
      id: '12',
      name: 'Rafael Kunde',
      users: 1,
      externalId: 'Admin',
      type: 'paid'
    }
  ];

  const columns: TableCustomizedColumnType[] = [
    { label: 'Name', accessor: 'name' },
    { label: 'Users', accessor: 'users' },
    { label: 'External ID', accessor: 'externalId' },
    { label: 'Type', accessor: 'type' }
  ];

  const searchFilterProperties = ['name', 'externalId'];

  const tabs = [
    {
      value: 'all',
      label: t('All types')
    },
    {
      value: 'paid',
      label: t('Paid')
    },
    {
      value: 'free',
      label: t('Free')
    }
  ];

  const renderDeleteModal = () => (
    <DialogWrapper
      open={openConfirmDelete}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Transition}
      keepMounted
      onClose={closeConfirmDelete}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={5}
      >
        <AvatarError>
          <CloseIcon />
        </AvatarError>

        <Typography
          align="center"
          sx={{
            py: 4,
            px: 6
          }}
          variant="h3"
        >
          {t('Are you sure you want to permanently delete this role')}?
        </Typography>

        <Box>
          <Button
            variant="text"
            size="large"
            sx={{
              mx: 1
            }}
            onClick={closeConfirmDelete}
          >
            {t('Cancel')}
          </Button>
          <ButtonError
            onClick={handleDeleteCompleted}
            size="large"
            sx={{
              mx: 1,
              px: 3
            }}
            variant="contained"
          >
            {t('Delete')}
          </ButtonError>
        </Box>
      </Box>
    </DialogWrapper>
  );
  return (
    <SettingsLayout tabIndex={3}>
      <PageHeader rolesNumber={roles.length} />
      {renderDeleteModal()}
      <Grid
        sx={{
          p: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <TableCustomized
            data={roles}
            columns={columns}
            tabsFilter={{ accessor: 'type', tabs }}
            searchFilterProperties={searchFilterProperties}
            actions={[
              {
                name: t('Delete'),
                color: 'error',
                callback: handleConfirmDelete,
                icon: <DeleteTwoToneIcon fontSize="small" />
              }
            ]}
            bulkActions={[
              {
                name: t('Delete'),
                color: 'error',
                callback: handleConfirmDeleteMultiple,
                icon: <DeleteTwoToneIcon />
              }
            ]}
          />
        </Grid>
      </Grid>
    </SettingsLayout>
  );
}

export default Roles;

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
  useTheme,
  Zoom
} from '@mui/material';

import PageHeader from './PageHeader';
import { useTranslation } from 'react-i18next';
import { Role } from '../../../../models/role';
import CloseIcon from '@mui/icons-material/Close';
import { forwardRef, ReactElement, Ref, useState } from 'react';
import { useSnackbar } from 'notistack';
import { TransitionProps } from '@mui/material/transitions';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {
  GridActionsCellItem,
  GridRenderCellParams,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import CustomDatagrid from '../../components/CustomDatagrid';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

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
const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(0.9, 1.5, 0.7)};
    line-height: 1;
  `
);
function Roles() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
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

  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Name'),
      description: t('Name'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },
    {
      field: 'users',
      headerName: t('Users'),
      description: t('Users'),
      width: 150
    },
    {
      field: 'externalId',
      headerName: t('External ID'),
      description: t('External Id'),
      width: 150
    },
    {
      field: 'type',
      headerName: t('Type'),
      description: t('Type'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <LabelWrapper
          sx={{
            background:
              params.value === 'free'
                ? `${theme.colors.info.main}`
                : `${theme.colors.success.main}`,
            color: `${theme.palette.getContrastText(
              params.value === 'free'
                ? theme.colors.info.dark
                : theme.colors.success.dark
            )}`
          }}
        >
          {t(params.value)}
        </LabelWrapper>
      )
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: t('Actions'),
      description: t('Actions'),
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key="delete"
          icon={<DeleteTwoToneIcon fontSize="small" color="error" />}
          onClick={() => handleConfirmDelete(Number(params.id))}
          label="Delete"
        />
      ]
    }
  ];

  return (
    <SettingsLayout tabIndex={3}>
      <Grid item xs={12}>
        <Box p={4}>
          <PageHeader rolesNumber={roles.length} />
          {renderDeleteModal()}
          <Box sx={{ mt: 4, height: 500, width: '95%' }}>
            <CustomDatagrid
              rows={roles}
              columns={columns}
              components={{
                Toolbar: GridToolbar
                // Toolbar: GridToolbarColumnsButton,
                // Toolbar: GridToolbarDensitySelector
              }}
              initialState={{
                columns: {
                  columnVisibilityModel: {}
                }
              }}
            />
          </Box>
        </Box>
      </Grid>
    </SettingsLayout>
  );
}

export default Roles;

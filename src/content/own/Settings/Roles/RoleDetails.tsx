import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { BasicPermission, Role } from '../../../../models/owns/role';

interface RoleDetailsProps {
  role: Role;
  handleOpenUpdate: () => void;
  handleOpenDelete: () => void;
}
export default function RoleDetails(props: RoleDetailsProps) {
  const { role, handleOpenUpdate, handleOpenDelete } = props;
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const allPermissions: {
    [key: string]: { permission: BasicPermission; label: string }[];
  } = {
    create: [
      {
        permission: BasicPermission.CREATE_EDIT_CATEGORIES,
        label: t('Categories')
      },
      {
        permission: BasicPermission.CREATE_EDIT_PEOPLE_AND_TEAMS,
        label: t('People And Teams')
      }
    ],
    delete: [
      {
        permission: BasicPermission.DELETE_PEOPLE_AND_TEAMS,
        label: t('People And Teams')
      },
      {
        permission: BasicPermission.DELETE_FILES,
        label: t('Files')
      },
      {
        permission: BasicPermission.DELETE_CATEGORIES,
        label: t('Categories')
      },
      {
        permission: BasicPermission.DELETE_METERS,
        label: t('Meters')
      },
      {
        permission: BasicPermission.DELETE_LOCATIONS,
        label: t('Locations')
      },
      {
        permission: BasicPermission.DELETE_ASSETS,
        label: t('Assets')
      },
      {
        permission: BasicPermission.DELETE_PURCHASE_ORDERS,
        label: t('Purchase Orders')
      },
      {
        permission: BasicPermission.DELETE_VENDORS_AND_CUSTOMERS,
        label: t('Vendors & Customers')
      },
      {
        permission: BasicPermission.DELETE_PARTS_AND_MULTI_PARTS,
        label: t('Parts & Sets of Parts')
      },
      {
        permission: BasicPermission.DELETE_WORK_ORDERS,
        label: t('Work Orders')
      }
    ],
    access: [
      {
        permission: BasicPermission.ACCESS_SETTINGS,
        label: t('Settings')
      }
    ]
  };

  const PermissionsGroup = ({
    name,
    title
  }: {
    name: string;
    title: string;
  }) => (
    <Grid item xs={12} lg={6}>
      <Grid item>
        <Typography sx={{ mt: 2, mb: 1 }} variant="h5">
          {title}
        </Typography>
      </Grid>
      {allPermissions[name].map((permission, index) => (
        <Grid item key={index} xs={12} lg={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={role.permissions.includes(permission.permission)}
              />
            }
            label={permission.label}
          />
        </Grid>
      ))}
    </Grid>
  );
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      padding={4}
    >
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h2">{role?.name}</Typography>
          <Typography variant="subtitle1">{role?.description}</Typography>
        </Box>
        <Box>
          <IconButton style={{ marginRight: 10 }} onClick={handleOpenUpdate}>
            <EditTwoToneIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleOpenDelete}>
            <DeleteTwoToneIcon color="error" />
          </IconButton>
        </Box>
      </Grid>
      <Divider />

      <Grid item xs={12}>
        <Box>
          <Typography sx={{ mt: 2, mb: 1 }} variant="h4">
            Permissions
          </Typography>
          <Grid container spacing={2}>
            <PermissionsGroup name={'create'} title={t('Create')} />
            <PermissionsGroup name={'delete'} title={t('Delete')} />
            <PermissionsGroup name={'access'} title={t('Access')} />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

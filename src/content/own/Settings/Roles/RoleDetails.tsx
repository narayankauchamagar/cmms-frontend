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
import { PermissionEntity, Role } from '../../../../models/owns/role';

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
    [key: string]: {
      label: string;
      condition: (role: Role) => boolean;
    }[];
  } = {
    create: [
      {
        label: t('Categories'),
        condition: (role: Role) =>
          role.createPermissions.includes(PermissionEntity.CATEGORIES)
      },
      {
        label: t('People And Teams'),
        condition: (role: Role) =>
          role.createPermissions.includes(PermissionEntity.PEOPLE_AND_TEAMS)
      }
    ],
    delete: [
      {
        label: t('People And Teams'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(
            PermissionEntity.PEOPLE_AND_TEAMS
          )
      },
      {
        label: t('Files'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(PermissionEntity.FILES)
      },
      {
        label: t('Categories'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(PermissionEntity.CATEGORIES)
      },
      {
        label: t('Meters'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(PermissionEntity.METERS)
      },
      {
        label: t('Locations'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(PermissionEntity.LOCATIONS)
      },
      {
        label: t('Assets'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(PermissionEntity.ASSETS)
      },
      {
        label: t('Purchase Orders'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(PermissionEntity.PURCHASE_ORDERS)
      },
      {
        label: t('Vendors & Customers'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(
            PermissionEntity.VENDORS_AND_CUSTOMERS
          )
      },
      {
        label: t('Parts & Sets of Parts'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(
            PermissionEntity.PARTS_AND_MULTIPARTS
          )
      },
      {
        label: t('Work Orders'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(PermissionEntity.WORK_ORDERS)
      },
      {
        label: t('Preventive Maintenance'),
        condition: (role: Role) =>
          role.deleteOtherPermissions.includes(
            PermissionEntity.PREVENTIVE_MAINTENANCES
          )
      }
    ],
    access: [
      {
        label: t('Settings'),
        condition: (role: Role) =>
          role.viewPermissions.includes(PermissionEntity.SETTINGS)
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
      {allPermissions[name].map(({ label, condition }, index) => (
        <Grid item key={index} xs={12} lg={12}>
          <FormControlLabel
            control={<Checkbox checked={condition(role)} />}
            label={label}
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

import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Radio,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import { Engineering } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../../store';
import { getRoles } from '../../../slices/role';
import { RoleCode } from '../../../models/owns/role';

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

interface Props {
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

function UserRoleCardList({ selectedItem, setSelectedItem }: Props) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state.roles);

  const defaultRoles: Partial<
    Record<RoleCode, { name: string; description: string }>
  > = {
    ADMIN: {
      name: t('Administrator'),
      description: t(
        'Administrator has full access; including editing, adding, deleting work orders and requests'
      )
    },
    LIMITED_ADMIN: {
      name: 'Limited Administrator',
      description:
        'Limited administrators have the same access as administrator except they are unable to view/edit settings or add/edit people and teams. They cannot delete Work Orders, Assets Locations, Meters and Purchase Orders unless they created Customers, Categories and PM triggers.'
    },
    TECHNICIAN: {
      name: 'Technician',
      description:
        'Technicians can create and close work orders, assets and locations. Able to edit and delete only what they have created'
    },
    LIMITED_TECHNICIAN: {
      name: 'Limited Technician',
      description:
        'Limited technicians can only see work orders assigned to them'
    },
    VIEW_ONLY: {
      name: 'View Only',
      description:
        'View only users have full view access, but cannot edit anything'
    },
    REQUESTER: {
      name: 'Requester',
      description:
        'Requesters can only submit work requests and view their status'
    }
  };
  useEffect(() => {
    dispatch(getRoles());
  }, []);
  const isSelected = (value) => selectedItem === value;

  const handleChange = (value) => {
    if (!isSelected(value)) {
      setSelectedItem(value);
    }
  };

  return (
    <Card>
      <CardHeader title={t('Select user role')} />
      <Divider />

      <List disablePadding>
        {roles.map((role, index) => (
          <Box
            key={role.id}
            style={{ cursor: 'pointer' }}
            onClick={() => handleChange(role.id)}
          >
            <ListItem
              sx={[
                { py: 2 },
                isSelected(role.id) && {
                  border: `2px solid ${theme.colors.primary.main}`,
                  borderRadius: 0.5
                }
              ]}
            >
              <ListItemAvatar>
                <AvatarWrapperSuccess>
                  <Engineering />
                </AvatarWrapperSuccess>
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Text color="black">
                    {role.code === 'USER_CREATED'
                      ? role.name
                      : t(defaultRoles[role.code].name)}
                  </Text>
                }
                primaryTypographyProps={{
                  variant: 'body1',
                  fontWeight: 'bold',
                  color: 'textPrimary',
                  gutterBottom: true,
                  noWrap: true
                }}
                secondary={
                  <Text color="black">
                    {role.code === 'USER_CREATED'
                      ? role.description
                      : t(defaultRoles[role.code].description)}
                  </Text>
                }
                secondaryTypographyProps={{ variant: 'body2' }}
              />

              <Radio
                checked={isSelected(role.id)}
                onChange={() => handleChange(role.id)}
                name="radio-buttons"
                color="primary"
              />
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Card>
  );
}

export default UserRoleCardList;

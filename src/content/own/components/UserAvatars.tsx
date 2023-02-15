import { UserMiniDTO as User } from '../../../models/user';
import {
  Avatar,
  AvatarGroup,
  Box,
  styled,
  Tooltip,
  Typography
} from '@mui/material';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.primary.lighter};
    color: ${theme.colors.primary.main};
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
`
);
const renderSingleUser = (user: User) => (
  <Tooltip key={user.id} title={`${user.firstName} ${user.lastName}`} arrow>
    <AvatarPrimary
      sx={{
        my: 2,
        mr: 1
      }}
      variant="circular"
      src={user.image?.url}
    >
      <Typography variant="h1">
        {Array.from(user.firstName)[0].toUpperCase()}
      </Typography>
    </AvatarPrimary>
  </Tooltip>
);
export default function UserAvatarsRow({ users }: { users: User[] }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
      <AvatarGroup max={3}>
        {users.map((user) => renderSingleUser(user))}
      </AvatarGroup>
    </Box>
  );
}

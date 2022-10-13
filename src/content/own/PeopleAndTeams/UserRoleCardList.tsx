import {
  Card,
  CardHeader,
  ListItemText,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  styled,
  Radio
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import { Engineering } from '@mui/icons-material';

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

// const userRoleList = [
//     {
//         title: "Administrator",
//         desc: "administrator... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi architecto voluptate temporibus dolorum iste odio nihil quo, esse maiores quia."
//     },
//     {
//         title: "Technician",
//         desc: "Technician... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi architecto voluptate temporibus dolorum iste odio nihil quo, esse maiores quia."
//     },
// ]

interface Props {
  listData: {
    title: string;
    desc: string;
    icon?: JSX.Element;
  }[];
}

function UserRoleCardList({ listData }: Props) {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <CardHeader title={t('Select user role')} />
      <Divider />

      <List disablePadding>
        {listData.map((item) => (
          <>
            <ListItem
              sx={{
                py: 2
              }}
            >
              <ListItemAvatar>
                <AvatarWrapperSuccess>
                  <Engineering />
                </AvatarWrapperSuccess>
              </ListItemAvatar>

              <ListItemText
                primary={<Text color="black">{t(item.title)}</Text>}
                primaryTypographyProps={{
                  variant: 'body1',
                  fontWeight: 'bold',
                  color: 'textPrimary',
                  gutterBottom: true,
                  noWrap: true
                }}
                secondary={<Text color="black">{t(item.desc)}</Text>}
                secondaryTypographyProps={{ variant: 'body2' }}
              />

              <Radio
                checked={true}
                onChange={() => {}}
                value="a"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
                color="primary"
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Card>
  );
}

export default UserRoleCardList;

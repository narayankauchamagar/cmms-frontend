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
  Radio,
  Box,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import { Engineering } from '@mui/icons-material';
import React from 'react';

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

interface Props {
  listData: {
    title: string;
    desc?: string;
    icon?: JSX.Element;
  }[];
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

function UserRoleCardList({ listData, selectedItem, setSelectedItem }: Props) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

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
        {listData.map((item, index) => (
          <Box
            key={`${item.title}-${index}`}
            style={{ cursor: 'pointer' }}
            onClick={() => handleChange(item.title)}
          >
            <ListItem
              sx={[
                { py: 2 },
                isSelected(item.title) && {
                  border: `2px solid ${theme.colors.primary.main}`,
                  borderRadius: 0.5
                }
              ]}
            >
              <ListItemAvatar>
                <AvatarWrapperSuccess>
                  {item?.icon ? item.icon : <Engineering />}
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
                secondary={
                  item?.desc && <Text color="black">{t(item.desc)}</Text>
                }
                secondaryTypographyProps={{ variant: 'body2' }}
              />

              <Radio
                checked={isSelected(item.title)}
                onChange={() => handleChange(item.title)}
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

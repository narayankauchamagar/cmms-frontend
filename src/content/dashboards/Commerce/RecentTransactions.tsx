import {
  Button,
  Card,
  List,
  CardContent,
  CardHeader,
  ListItemAvatar,
  Avatar,
  Link,
  Divider,
  ListItem,
  ListItemText,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import TrendingDown from '@mui/icons-material/TrendingDown';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Text from 'src/components/Text';

function RecentTransactions() {
  const { t }: { t: any } = useTranslation();

  const AvatarWrapperError = styled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
  );

  const AvatarWrapperSuccess = styled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
  );

  const AvatarWrapperWarning = styled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`
  );

  return (
    <Card>
      <CardHeader
        action={
          <Button size="small" href="#">
            {t('View all')}
          </Button>
        }
        title={t('Recent Transactions')}
      />
      <Divider />
      <CardContent>
        <List disablePadding>
          <ListItem disableGutters>
            <ListItemAvatar>
              <AvatarWrapperSuccess>
                <CheckIcon />
              </AvatarWrapperSuccess>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Text color="black">
                  <b>$2499</b> paid by <b>Randy Smith</b> for Macbook PRO 16
                </Text>
              }
              primaryTypographyProps={{
                variant: 'body1',
                color: 'textPrimary',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={
                <Text color="success">{t('Completed Successfully')}</Text>
              }
              secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
            />
          </ListItem>
          <Divider
            sx={{
              my: 1.5
            }}
          />
          <ListItem disableGutters>
            <ListItemAvatar>
              <AvatarWrapperWarning>
                <TrendingDown />
              </AvatarWrapperWarning>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Text color="black">
                  <b>Horia S.</b> is paying <b>$399</b> for a Google Nest
                  Thermostat
                </Text>
              }
              primaryTypographyProps={{
                variant: 'body1',
                color: 'textPrimary',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={<Text color="warning">{t('Pending Payment')}</Text>}
              secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
            />
          </ListItem>
          <Divider
            sx={{
              my: 1.5
            }}
          />
          <ListItem disableGutters>
            <ListItemAvatar>
              <AvatarWrapperError>
                <CloseIcon />
              </AvatarWrapperError>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Text color="black">
                  <b>Poppy Freddy</b> tried paying <b>$199</b> for a Ring Smart
                  Door Bell
                </Text>
              }
              primaryTypographyProps={{
                variant: 'body1',
                color: 'textPrimary',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={<Text color="error">{t('Payment Failed')}</Text>}
              secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
            />
          </ListItem>
          <Divider
            sx={{
              my: 1.5
            }}
          />
          <ListItem disableGutters>
            <ListItemAvatar>
              <AvatarWrapperSuccess>
                <CheckIcon />
              </AvatarWrapperSuccess>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Text color="black">
                  <b>Guest purchase</b> of <b>$999</b> made today in{' '}
                  <Link href="#">Electronics</Link>
                </Text>
              }
              primaryTypographyProps={{
                variant: 'body1',
                color: 'textPrimary',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={
                <Text color="success">{t('Completed Successfully')}</Text>
              }
              secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default RecentTransactions;

import { useState, ChangeEvent } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  Switch
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function NotificationsTab() {
  const { t }: { t: any } = useTranslation();

  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
    checkedD: false
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">{t('Account')}</Typography>
          <Typography variant="subtitle2">
            {t('Choose what notifications you want to receive')}
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem
              sx={{
                p: 3
              }}
            >
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary={t('Widthdraw Activity')}
                secondary={t('Receive an email when a widthdrawal is made')}
              />
              <Switch
                color="primary"
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem
              sx={{
                p: 3
              }}
            >
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary={t('Weekly Report')}
                secondary={t(
                  'Receive account status weekly report in your inbox'
                )}
              />
              <Switch
                color="primary"
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">{t('Orders')}</Typography>
          <Typography variant="subtitle2">
            {t('Receive email notifications related to your orders activity')}
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem
              sx={{
                p: 3
              }}
            >
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary={t('Failed Payment')}
                secondary={t('Get a message when a payment fails')}
              />
              <Switch
                color="primary"
                checked={state.checkedC}
                onChange={handleChange}
                name="checkedC"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem
              sx={{
                p: 3
              }}
            >
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary={t('Order Status Update')}
                secondary={t(
                  'Whenever an order is updated, get a notification on your phone'
                )}
              />
              <Switch
                color="primary"
                checked={state.checkedD}
                onChange={handleChange}
                name="checkedD"
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

export default NotificationsTab;

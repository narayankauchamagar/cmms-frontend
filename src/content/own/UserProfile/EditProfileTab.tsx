import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Switch,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Text from 'src/components/Text';

function EditProfileTab() {
  const { t }: { t: any } = useTranslation();
  const user = {
    firstName: { value: 'firstName', title: t('First Name') },
    lastName: { value: 'lastName', title: t('Last Name') },
    phone: { value: '55386865', title: t('Phone') },
    jobTitle: { value: 'Carrier', title: t('Job Title') },
    settings: {
      isNotified: { value: true, title: t('Email notifications') },
      emailForWorkOrders: {
        value: false,
        title: t('Email Updates for Work Orders and Messages')
      },
      emailForRequest: {
        value: true,
        title: t('Email Updates for Requested Work Orders')
      },
      dailyEmailSummary: { value: false, title: t('Daily Summary Emails') },
      purchaseOrderEmail: { value: true, title: t('Purchase Order Emails') }
    }
  };

  const renderKeyAndValue = (key: string, value: string) => {
    return (
      <>
        <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
          <Box pr={3} pb={2}>
            {t(key)}:
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Text color="black">
            <b>{value}</b>
          </Text>
        </Grid>
      </>
    );
  };
  const renderKeyAndSwitch = (key: string, value: boolean) => {
    return (
      <>
        <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
          <Box pr={3} pb={2}>
            {t(key)}:
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Switch defaultChecked={value} />
        </Grid>
      </>
    );
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                {t('Personal Details')}
              </Typography>
              <Typography variant="subtitle2">
                {t('Manage informations related to your personal details')}
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              {t('Edit')}
            </Button>
          </Box>
          <Divider />
          <CardContent
            sx={{
              p: 4
            }}
          >
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                {Object.keys(user).map((key) => {
                  if (key !== 'settings')
                    return renderKeyAndValue(user[key].title, user[key].value);
                })}
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                {t('Notifications Settings')}
              </Typography>
              <Typography variant="subtitle2">
                {t('Manage details related to your notifications')}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <CardContent
            sx={{
              p: 4
            }}
          >
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                {Object.keys(user.settings).map((key) =>
                  renderKeyAndSwitch(
                    user.settings[key].title,
                    user.settings[key].value
                  )
                )}
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditProfileTab;

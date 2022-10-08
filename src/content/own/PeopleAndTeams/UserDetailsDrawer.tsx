import { useState, ChangeEvent } from 'react';
import {
  Avatar,
  Box,
  Typography,
  Divider,
  CardContent,
  Tabs,
  Tab,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'src/components/Scrollbar';
import User from '../../../models/owns/user';
import Part from '../../../models/owns/part';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.primary.lighter};
    color: ${theme.colors.primary.main};
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
`
);

const TabsContainerWrapper = styled(CardContent)(
  ({ theme }) => `
        background-color: ${theme.colors.alpha.black[5]};

        .MuiTabs-flexContainer {
            justify-content: center;
        }
  `
);

interface PropsType {
  user: User;
}

function UserDetailsDrawer({ user }: PropsType) {
  const { t }: { t: any } = useTranslation();

  const [currentTab, setCurrentTab] = useState<string>('overview');

  const tabs = [
    { value: 'overview', label: t('Overview') },
    { value: 'activity', label: t('Activity') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const fieldsToRender = (
    user: User
  ): { label: string; value: string | number }[] => [
    {
      label: t('ID'),
      value: user.id
    },
    {
      label: t('First Name'),
      value: user.firstName
    },
    {
      label: t('Last Name'),
      value: user.lastName
    },
    {
      label: t('Email'),
      value: user.email
    },
    {
      label: t('Phone'),
      value: user.phone
    },
    {
      label: t('Job Title'),
      value: user.jobTitle
    },
    {
      label: t('Company Name'),
      value: user.companyName
    },
    {
      label: t('Account Type'),
      value: user.lastName
    },
    {
      label: t('Last Visit'),
      value: user.lastVisit
    },
    {
      label: t('Hourly Rate'),
      value: user.hourlyRate
    }
  ];
  return (
    <Box
      sx={{
        height: '100%',
        width: { xs: 340, lg: 400 }
      }}
    >
      <Scrollbar>
        <Box
          sx={{
            textAlign: 'center',
            mt: 1
          }}
        >
          <Typography component="span" variant="subtitle2">
            User Details
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />

        <Box
          sx={{
            textAlign: 'center'
          }}
        >
          <AvatarPrimary
            sx={{
              mx: 'auto',
              my: 2
            }}
            variant="rounded"
          >
            <Typography variant="h1">
              {Array.from(user.firstName)[0].toUpperCase()}
            </Typography>
          </AvatarPrimary>
          <Typography variant="h3" noWrap gutterBottom>
            {`${user.firstName} ${user.lastName}`}
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />

        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper>

        <Divider sx={{ my: 1 }} />

        {currentTab === 'overview' && (
          <>
            {fieldsToRender(user).map(({ label, value }) => (
              <>
                <Box mt={1} px={3}>
                  <Typography component="span" variant="subtitle2">
                    {label}
                  </Typography>
                  <Typography variant="h5">{value}</Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
              </>
            ))}
          </>
        )}

        {currentTab === 'activity' && (
          <Box mt={3} px={3}>
            <Typography variant="h3">{t('graph...')}</Typography>
          </Box>
        )}
      </Scrollbar>
    </Box>
  );
}

export default UserDetailsDrawer;

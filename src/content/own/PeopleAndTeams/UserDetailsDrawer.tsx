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
  peopleList?: any[];
}

function UserDetailsDrawer({ peopleList }: PropsType) {
  const { t }: { t: any } = useTranslation();

  const [currentTab, setCurrentTab] = useState<string>('overview');

  const tabs = [
    { value: 'overview', label: t('Overview') },
    { value: 'activity', label: t('Activity') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

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
            <Typography variant="h1">I</Typography>
          </AvatarPrimary>
          <Typography variant="h3" noWrap gutterBottom>
            Ibrahima
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
            {Object.keys(peopleList[0]).map((itemKey) => (
              <>
                <Box mt={1} px={3}>
                  <Typography component="span" variant="subtitle2">
                    {t(itemKey)}
                  </Typography>
                  <Typography variant="h5">
                    {t(peopleList[0][itemKey])}
                  </Typography>
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

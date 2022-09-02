import { Fragment } from 'react';

import {
  Box,
  Card,
  Typography,
  Link,
  CircularProgress,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
  ListItem,
  circularProgressClasses,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Scrollbar from 'src/components/Scrollbar';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';

const ListWrapper = styled(List)(
  () => `
    .MuiDivider-root:first-of-type {
        display: none;
    }
  `
);

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      username: 'Lilly-Mae White',
      jobtitle: 'UI Engineer, Apple Inc.',
      progress: 46,
      arrow: '',
      sales: '685'
    },
    {
      id: 2,
      username: 'Latisha Allison',
      jobtitle: 'Frontend Engineer',
      progress: 59,
      arrow: 'up',
      sales: '3,685'
    },
    {
      id: 3,
      username: 'Shanelle Wynn',
      jobtitle: 'UX Designer',
      progress: 87,
      arrow: '',
      sales: '765'
    },
    {
      id: 4,
      username: 'Julie Prosser',
      jobtitle: 'Frontend Engineer',
      progress: 34,
      arrow: '',
      sales: '43,548'
    },
    {
      id: 5,
      username: 'Amin Hamer',
      jobtitle: 'Senior Project Manager',
      progress: 20,
      arrow: 'up',
      sales: '1,584'
    },
    {
      id: 6,
      username: 'Julie Prosser',
      jobtitle: 274,
      progress: 64,
      arrow: 'up',
      sales: '1,584'
    }
  ];

  return (
    <Card>
      <Box py={2} px={3}>
        <Typography variant="h4" gutterBottom>
          {t('Recent Customers')}
        </Typography>
        <Typography variant="subtitle2">
          {t('These are the latest customer jobtitle')}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 300
        }}
      >
        <Scrollbar>
          <ListWrapper disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <Divider />
                <ListItem
                  sx={{
                    py: 2,
                    px: 2.5
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mr: 1.5
                    }}
                  >
                    <Box display="inline-flex" position="relative">
                      <Box
                        sx={{
                          animationDuration: '550ms',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 'bold',
                            fontSize: `${theme.typography.pxToRem(12)}`,
                            color: (theme) => theme.colors.primary.main
                          }}
                        >
                          {item.progress}%
                        </Typography>
                      </Box>
                      <CircularProgress
                        variant="determinate"
                        sx={{
                          color: (theme) => theme.colors.alpha.black[10]
                        }}
                        size={56}
                        thickness={2}
                        value={100}
                      />
                      <CircularProgress
                        size={56}
                        sx={{
                          animationDuration: '550ms',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round'
                          }
                        }}
                        thickness={2}
                        variant="determinate"
                        value={item.progress}
                      />
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Link
                        href="#"
                        color="text.primary"
                        underline="none"
                        sx={{
                          transition: `${theme.transitions.create(['color'])}`,

                          '&:hover': {
                            color: `${theme.colors.primary.main}`
                          }
                        }}
                        variant="h4"
                      >
                        {item.username}
                      </Link>
                    }
                    secondary={
                      <>
                        <Typography variant="subtitle1">
                          {item.jobtitle}
                        </Typography>
                      </>
                    }
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      noWrap: true
                    }}
                  />
                  <Box display="flex" alignItems="center">
                    <Typography variant="h5">${item.sales}</Typography>
                    {item.arrow ? (
                      <Typography
                        sx={{
                          display: 'flex',
                          ml: 0.2,
                          color: `${theme.colors.error.main}`
                        }}
                      >
                        <KeyboardArrowDownTwoToneIcon />
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          display: 'flex',
                          ml: 0.2,
                          color: `${theme.colors.success.main}`
                        }}
                      >
                        <KeyboardArrowUpTwoToneIcon />
                      </Typography>
                    )}
                  </Box>
                </ListItem>
              </Fragment>
            ))}
          </ListWrapper>
        </Scrollbar>
      </Box>
    </Card>
  );
}

export default Block6;

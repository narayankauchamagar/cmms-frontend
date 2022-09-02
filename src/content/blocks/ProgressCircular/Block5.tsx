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
  Avatar,
  circularProgressClasses,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Scrollbar from 'src/components/Scrollbar';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import Label from 'src/components/Label';

const ListWrapper = styled(List)(
  () => `
    .MuiDivider-root:first-of-type {
        display: none;
    }
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      username: 'Shanelle Wynn',
      orders: 65,
      progress: 76,
      arrow: '',
      sales: '685'
    },
    {
      id: 2,
      username: 'Akeem Griffith',
      orders: 436,
      progress: 48,
      arrow: 'up',
      sales: '3,685'
    },
    {
      id: 3,
      username: 'Abigayle Hicks',
      orders: 734,
      progress: 38,
      arrow: '',
      sales: '765'
    },
    {
      id: 4,
      username: 'Reece Corbett',
      orders: 654,
      progress: 85,
      arrow: '',
      sales: '43,548'
    },
    {
      id: 5,
      username: 'Zain Baptista',
      orders: 764,
      progress: 29,
      arrow: 'up',
      sales: '1,584'
    },
    {
      id: 6,
      username: 'Julie Prosser',
      orders: 274,
      progress: 43,
      arrow: 'up',
      sales: '1,584'
    }
  ];

  return (
    <Card>
      <Box py={2} px={3}>
        <Typography variant="h4" gutterBottom>
          {t('Premium Sellers')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Earnings split based on customers')}
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
                            fontSize: `${theme.typography.pxToRem(12)}`,
                            fontWeight: 'bold',
                            color: (theme) =>
                              item.arrow
                                ? theme.colors.error.main
                                : theme.colors.success.main
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
                        size={58}
                        sx={{
                          animationDuration: '550ms',
                          position: 'absolute',
                          left: -1,
                          color: (theme) =>
                            item.arrow
                              ? theme.colors.error.main
                              : theme.colors.success.main,
                          top: -1,
                          [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round'
                          }
                        }}
                        thickness={4}
                        variant="determinate"
                        value={item.progress}
                      />
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Link color="primary" href="#" variant="h4">
                        {item.username}
                      </Link>
                    }
                    secondary={
                      <>
                        <Box mt={0.6}>
                          <Label color="black">
                            <Typography
                              sx={{
                                fontSize: `${theme.typography.pxToRem(11)}`,
                                fontWeight: 'bold'
                              }}
                            >
                              {item.orders}
                            </Typography>
                          </Label>{' '}
                          {t('total orders')}
                        </Box>
                      </>
                    }
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      noWrap: true
                    }}
                  />
                  <Typography variant="h5">${item.sales}</Typography>
                  {item.arrow ? (
                    <Avatar
                      variant="rounded"
                      sx={{
                        ml: 1,
                        width: 28,
                        height: 28,
                        p: 0,
                        background: `${theme.colors.error.lighter}`,
                        color: `${theme.colors.error.main}`
                      }}
                    >
                      <KeyboardArrowDownTwoToneIcon />
                    </Avatar>
                  ) : (
                    <Avatar
                      variant="rounded"
                      sx={{
                        ml: 1,
                        width: 28,
                        height: 28,
                        p: 0,
                        background: `${theme.colors.success.lighter}`,
                        color: `${theme.colors.success.main}`
                      }}
                    >
                      <KeyboardArrowUpTwoToneIcon />
                    </Avatar>
                  )}
                </ListItem>
              </Fragment>
            ))}
          </ListWrapper>
        </Scrollbar>
      </Box>
    </Card>
  );
}

export default Block5;

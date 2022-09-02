import { Fragment } from 'react';

import {
  Box,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
  ListItem,
  Card,
  Typography,
  Link,
  Button,
  Avatar,
  styled,
  alpha,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Scrollbar from 'src/components/Scrollbar';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { format, subHours, subDays } from 'date-fns';

const LinkHover = styled('a')(
  ({ theme }) => `
    transition: ${theme.transitions.create([
      'transform',
      'opacity',
      'box-shadow'
    ])};
    transform: translateY(0px);
    display: block;
    opacity: 1;
    border-radius: ${theme.general.borderRadius};

    &:hover {
        opacity: .9;
        box-shadow: 
            0 0.56875rem 3.3rem ${alpha(theme.colors.alpha.black[100], 0.05)},
            0 0.9975rem 2.4rem ${alpha(theme.colors.alpha.black[100], 0.07)},
            0 0.35rem 1rem ${alpha(theme.colors.alpha.black[100], 0.1)},
            0 0.225rem 0.8rem ${alpha(theme.colors.alpha.black[100], 0.15)};
        transform: translateY(-4px);
    }
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      title: 'Apple MacBook PRO 14"',
      excerpt:
        'Acccess this page in order to manage and customize all aspects of your profile data and accounts.',
      image: '/static/images/placeholders/fitness/1.jpg',
      info_value: '12.589',
      info_title: 'visits',
      date: format(subHours(new Date(), 5), 'MMMM dd yyyy')
    },
    {
      id: 2,
      title: 'iPhone 13 Pro',
      excerpt:
        'Control everything related to your profile and trading accounts as shown in this page.',
      image: '/static/images/placeholders/fitness/2.jpg',
      info_value: '345',
      info_title: 'reports',
      date: format(subDays(new Date(), 8), 'MMMM dd yyyy')
    },
    {
      id: 3,
      title: 'Apple Watch Series 7',
      excerpt:
        'Complete your profile verifications to take full advantage of your account right away.',
      image: '/static/images/placeholders/fitness/3.jpg',
      info_value: '$68,593',
      info_title: 'sales',
      date: format(subDays(new Date(), 12), 'MMMM dd yyyy')
    },
    {
      id: 4,
      title: 'Xiaomi Headphones 3',
      excerpt:
        'You can view, manage and customize your wallets and balances from this wallets page.',
      image: '/static/images/placeholders/fitness/4.jpg',
      info_value: '65',
      info_title: 'orders',
      date: format(subDays(new Date(), 13), 'MMMM dd yyyy')
    }
  ];

  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={2}
        px={3}
      >
        <Box>
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
          >
            {t('Targets')}
          </Typography>
          <Typography variant="h4">{t('Monthly Stats')}</Typography>
        </Box>
        <Button
          size="small"
          variant="text"
          color="primary"
          sx={{
            alignSelf: 'center',
            fontWeight: 'normal',
            backgroundColor: `${theme.colors.primary.lighter}`,
            '&:hover': {
              backgroundColor: `${theme.colors.primary.main}`,
              color: `${theme.palette.getContrastText(
                theme.colors.primary.main
              )}`
            }
          }}
        >
          {t('View all')}
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 380
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <ListItem
                  sx={{
                    display: { xs: 'block', md: 'flex' },
                    py: 2,
                    px: 2.5
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      mr: 2,
                      mb: { xs: 2, md: 0 }
                    }}
                  >
                    <LinkHover href="#">
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 'auto',
                          height: 120
                        }}
                        alt={item.title}
                        src={item.image}
                      />
                    </LinkHover>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography
                    primary={
                      <Link color="text.primary" variant="h3" href="#">
                        {item.title}
                      </Link>
                    }
                    secondary={
                      <>
                        <Typography
                          sx={{
                            pt: 1
                          }}
                          variant="subtitle2"
                        >
                          {item.excerpt}
                        </Typography>
                      </>
                    }
                  />
                  <Box
                    component="span"
                    sx={{
                      display: { xs: 'none', md: 'inline-block' }
                    }}
                  >
                    <Box ml={3} textAlign="right">
                      <Typography variant="h4">{item.info_value}</Typography>
                      <Typography variant="subtitle2">
                        {item.info_title}
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </List>
        </Scrollbar>
      </Box>
      <Box
        p={3}
        sx={{
          textAlign: 'center'
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardTwoToneIcon />}
          size="small"
        >
          {t('View all employees')}
        </Button>
      </Box>
    </Card>
  );
}

export default Block5;

import { Fragment } from 'react';

import {
  Box,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
  Card,
  Typography,
  Avatar,
  styled,
  ListItemButton,
  alpha,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';

const ListItemButtonWrapper = styled(ListItemButton)(
  ({ theme }) => `
    transition: ${theme.transitions.create(['transform', 'box-shadow'])};
    transform: scale(1);
    background: ${theme.colors.alpha.white[100]};
    position: relative;
    z-index: 5;

    &:hover {
        border-radius: ${theme.general.borderRadius};
        background: ${theme.colors.alpha.white[100]};
        z-index: 6;
        box-shadow: 
            0 0.56875rem 3.3rem ${alpha(theme.colors.alpha.black[100], 0.05)},
            0 0.9975rem 2.4rem ${alpha(theme.colors.alpha.black[100], 0.07)},
            0 0.35rem 1rem ${alpha(theme.colors.alpha.black[100], 0.1)},
            0 0.225rem 0.8rem ${alpha(theme.colors.alpha.black[100], 0.15)};
        transform: scale(1.08);
    }
  `
);

function Block7() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      title: 'Build React Interface',
      category: 'Development',
      logo: '/static/images/placeholders/logo/discord-icon.svg',
      value: '4,685'
    },
    {
      id: 2,
      title: 'Create Ads Campaigns',
      category: 'Marketing',
      logo: '/static/images/placeholders/logo/google-icon.svg',
      value: '8,434',
      budget: 'over'
    },
    {
      id: 3,
      title: 'Resolve Github issues',
      category: 'Bugfixes',
      logo: '/static/images/placeholders/logo/spotify-icon.svg',
      value: '5,167',
      budget: ''
    },
    {
      id: 4,
      title: 'Build UI for Angular',
      category: 'Development',
      logo: '/static/images/placeholders/logo/slack-icon.svg',
      value: '43,584',
      budget: ''
    },
    {
      id: 5,
      title: 'Create User Workflows',
      category: 'Marketing',
      logo: '/static/images/placeholders/logo/pinterest-icon.svg',
      value: '5,978',
      budget: 'over'
    }
  ];

  return (
    <Card
      sx={{
        overflow: 'visible'
      }}
    >
      <Box
        sx={{
          textAlign: 'center'
        }}
        p={2}
      >
        <Typography
          variant="caption"
          fontWeight="bold"
          sx={{
            fontSize: `${theme.typography.pxToRem(12)}`
          }}
        >
          {t('Estimates')}
        </Typography>
        <Typography variant="h4">{t('Products Roadmap')}</Typography>
      </Box>
      <List disablePadding>
        {items.map((item) => (
          <Fragment key={item.id}>
            <Divider />
            <ListItemButtonWrapper
              sx={{
                display: { xs: 'block', sm: 'flex' },
                py: 2,
                px: 2.5
              }}
            >
              <ListItemAvatar
                sx={{
                  minWidth: 'auto',
                  mr: 2,
                  mb: { xs: 2, sm: 0 }
                }}
              >
                <Avatar
                  variant="square"
                  sx={{
                    width: 42,
                    height: 42
                  }}
                  alt={item.title}
                  src={item.logo}
                />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography color="text.primary" variant="h5">
                    {item.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography noWrap variant="subtitle2">
                      {item.category}
                    </Typography>
                  </>
                }
              />
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block' }
                }}
              >
                <Box textAlign="right">
                  {item.budget ? (
                    <Label color="error">${item.value}</Label>
                  ) : (
                    <Label color="success">${item.value}</Label>
                  )}
                </Box>
              </Box>
            </ListItemButtonWrapper>
          </Fragment>
        ))}
      </List>
    </Card>
  );
}

export default Block7;

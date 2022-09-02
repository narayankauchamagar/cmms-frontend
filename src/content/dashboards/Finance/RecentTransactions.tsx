import {
  Button,
  Card,
  Typography,
  CardHeader,
  CardActions,
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  List,
  Avatar,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CallReceivedTwoToneIcon from '@mui/icons-material/CallReceivedTwoTone';
import CallMadeTwoToneIcon from '@mui/icons-material/CallMadeTwoTone';
import { format, subDays } from 'date-fns';
import Text from 'src/components/Text';

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

function RecentTransactions() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader title={t('Recent Transactions')} />
      <List disablePadding>
        <ListSubheader
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>{format(subDays(new Date(), 12), 'MMMM dd yyyy')}</Box>
          <Box>
            <Text color="error">-$22.00</Text>
          </Box>
        </ListSubheader>
        <ListItem
          sx={{
            py: 2
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperSuccess>
              <CallReceivedTwoToneIcon />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={t('Money added from') + ' Apple Pay'}
            primaryTypographyProps={{
              variant: 'body1',
              color: 'textPrimary',
              noWrap: true
            }}
          />
          <Box>
            <Typography variant="body2" fontWeight="bold">
              <Text color="success">USD 450.00</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 2
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperError>
              <CallMadeTwoToneIcon />
            </AvatarWrapperError>
          </ListItemAvatar>
          <ListItemText
            primary="HBO Europe"
            primaryTypographyProps={{
              variant: 'body1',
              color: 'textPrimary',
              noWrap: true
            }}
          />
          <Box>
            <Typography variant="body2" textAlign="right" fontWeight="bold">
              <Text color="error">-$4.85</Text>
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              <Text color="secondary">-€3.99</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 2
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperSuccess>
              <CallReceivedTwoToneIcon />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={t('Refund from') + ' Google Inc.'}
            primaryTypographyProps={{
              variant: 'body1',
              color: 'textPrimary',
              noWrap: true
            }}
          />
          <Box>
            <Typography variant="body2" fontWeight="bold">
              <Text color="success">+$51.94</Text>
            </Typography>
          </Box>
        </ListItem>
        <ListSubheader
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>{format(subDays(new Date(), 22), 'MMMM dd yyyy')}</Box>
          <Box>
            <Text color="success">+$49.99</Text>
          </Box>
        </ListSubheader>
        <ListItem
          sx={{
            py: 2
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperSuccess>
              <CallReceivedTwoToneIcon />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={t('Money added from') + ' Apple Pay'}
            primaryTypographyProps={{
              variant: 'body1',
              color: 'textPrimary',
              noWrap: true
            }}
          />
          <Box>
            <Typography variant="body2" fontWeight="bold">
              <Text color="success">USD 450.00</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 2
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperError>
              <CallMadeTwoToneIcon />
            </AvatarWrapperError>
          </ListItemAvatar>
          <ListItemText
            primary="HBO Europe"
            primaryTypographyProps={{
              variant: 'body1',
              color: 'textPrimary',
              noWrap: true
            }}
          />
          <Box>
            <Typography variant="body2" textAlign="right" fontWeight="bold">
              <Text color="error">-$4.85</Text>
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              <Text color="secondary">-€3.99</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 2
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperSuccess>
              <CallReceivedTwoToneIcon />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={t('Refund from') + ' Google Inc.'}
            primaryTypographyProps={{
              variant: 'body1',
              color: 'textPrimary',
              noWrap: true
            }}
          />
          <Box>
            <Typography variant="body2" fontWeight="bold">
              <Text color="success">+$51.94</Text>
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 2
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperSuccess>
              <img
                alt="Spotify"
                src="/static/images/placeholders/logo/spotify.svg"
              />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={t('Monthly Subscription for ') + ' Spotify'}
            primaryTypographyProps={{
              variant: 'body1',
              color: 'textPrimary',
              noWrap: true
            }}
          />
          <Box>
            <Typography variant="body2" fontWeight="bold">
              <Text color="error">-$9.99</Text>
            </Typography>
          </Box>
        </ListItem>
      </List>
      <CardActions
        sx={{
          pt: 0,
          pb: 2,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button size="small" variant="outlined">
          {t('View all')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecentTransactions;

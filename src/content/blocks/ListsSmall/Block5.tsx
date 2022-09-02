import {
  CardHeader,
  Card,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Avatar,
  Button,
  Typography,
  Divider,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AutoAwesomeMosaicTwoToneIcon from '@mui/icons-material/AutoAwesomeMosaicTwoTone';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import EvStationTwoToneIcon from '@mui/icons-material/EvStationTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card variant="outlined">
      <CardHeader
        sx={{
          p: 2,
          background: `${theme.colors.alpha.black[5]}`
        }}
        disableTypography
        title={
          <Typography
            variant="h4"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
          >
            {t('Latest actions')}
          </Typography>
        }
        action={
          <Button
            variant="contained"
            size="small"
            endIcon={<ExpandMoreTwoToneIcon />}
            color="primary"
          >
            {t('Export')}
          </Button>
        }
      />
      <Divider />
      <List disablePadding>
        <ListItem
          sx={{
            p: 2
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <Avatar
              variant="rounded"
              sx={{
                background: `${theme.colors.alpha.black[10]}`,
                color: `${theme.colors.primary.main}`,
                width: 64,
                height: 64
              }}
            >
              <ContactPhoneTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography gutterBottom variant="h4">
                {t('Customers')}
              </Typography>
            }
            secondary={
              <Typography variant="subtitle2">
                {t('On the other hand, we denounce with righteous indignation')}
                .
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            p: 2
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <Avatar
              variant="rounded"
              sx={{
                background: `${theme.colors.alpha.black[10]}`,
                color: `${theme.colors.primary.main}`,
                width: 64,
                height: 64
              }}
            >
              <EvStationTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography gutterBottom variant="h4">
                {t('New articles')}
              </Typography>
            }
            secondary={
              <Typography variant="subtitle2">
                {t(
                  'Dislike men who are so beguiled and demoralized by the charms'
                )}
                .
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            p: 2
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
          >
            <Avatar
              variant="rounded"
              sx={{
                background: `${theme.colors.alpha.black[10]}`,
                color: `${theme.colors.primary.main}`,
                width: 64,
                height: 64
              }}
            >
              <AutoAwesomeMosaicTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography gutterBottom variant="h4">
                {t('Blog posts')}
              </Typography>
            }
            secondary={
              <Typography variant="subtitle2">
                {t(
                  'Pleasure of the moment, so blinded by desire, that they foresee'
                )}
                .
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}

export default Block5;

import {
  Box,
  Button,
  CardHeader,
  Card,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Avatar,
  Link,
  Typography,
  Divider,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card variant="outlined">
      <CardHeader
        sx={{
          p: 3
        }}
        disableTypography
        title={
          <Typography
            variant="h4"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
          >
            {t('Users list')}
          </Typography>
        }
        action={
          <Button
            size="small"
            variant="text"
            endIcon={<ExpandMoreTwoToneIcon />}
            color="secondary"
            sx={{
              backgroundColor: `${theme.colors.secondary.lighter}`,
              '&:hover': {
                backgroundColor: `${theme.colors.secondary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.secondary.main
                )}`
              }
            }}
          >
            {t('Export')}
          </Button>
        }
      />
      <Divider />
      <List
        sx={{
          py: 0
        }}
      >
        <ListItem
          sx={{
            px: 2,
            py: 1.95
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              minWidth: 0
            }}
          >
            <Avatar src="/static/images/avatars/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Link href="#" color="text.primary" variant="h5">
                {t('Isaiah Ruiz')}
              </Link>
            }
            secondary={
              <Typography variant="subtitle2" noWrap>
                Senior Web Developer
              </Typography>
            }
          />
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                pr: 1
              }}
              variant="h3"
            >
              <Text color="error">29.544</Text>
            </Typography>
            <ArrowUpwardTwoToneIcon
              fontSize="small"
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            px: 2,
            py: 1.95
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              minWidth: 0
            }}
          >
            <Avatar src="/static/images/avatars/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h5">{t('Inez Conley')}</Typography>}
            secondary={
              <Typography variant="subtitle2" noWrap>
                {t('Project Manager')}
              </Typography>
            }
          />
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                pr: 1
              }}
              variant="h3"
            >
              <Text color="success">684</Text>
            </Typography>
            <ArrowUpwardTwoToneIcon
              fontSize="small"
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            px: 2,
            py: 1.95
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              minWidth: 0
            }}
          >
            <Avatar src="/static/images/avatars/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h5">{t('Adyan Sosa')}</Typography>}
            secondary={
              <Typography variant="subtitle2" noWrap>
                {t('User Experience Designer')}
              </Typography>
            }
          />
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                pr: 1
              }}
              variant="h3"
            >
              <Text color="warning">$1,24M</Text>
            </Typography>
            <ArrowDownwardTwoToneIcon
              fontSize="small"
              sx={{
                color: `${theme.colors.error.main}`
              }}
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            px: 2,
            py: 1.95
          }}
        >
          <ListItemAvatar
            sx={{
              mr: 2,
              minWidth: 0
            }}
          >
            <Avatar src="/static/images/avatars/4.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h5">{t('Beck Simpson')}</Typography>}
            secondary={
              <Typography variant="subtitle2" noWrap>
                {t('Senior Consultant')}
              </Typography>
            }
          />
          <Box display="flex" alignItems="center">
            <Typography
              sx={{
                pr: 1
              }}
              variant="h3"
            >
              <Text color="info">786</Text>
            </Typography>
            <ArrowUpwardTwoToneIcon
              fontSize="small"
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
          </Box>
        </ListItem>
      </List>
    </Card>
  );
}

export default Block4;

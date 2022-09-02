import {
  Button,
  Card,
  Box,
  CardHeader,
  CardActions,
  Typography,
  IconButton,
  Divider,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  Tooltip,
  Badge,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Text from 'src/components/Text';
import { formatDistance, subSeconds, subHours, subMinutes } from 'date-fns';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import Scrollbar from 'src/components/Scrollbar';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(2)};
    height: ${theme.spacing(2)};
    display: inline-block;
    border: ${theme.colors.alpha.white[100]} solid 2px;
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(6)};
    height: ${theme.spacing(6)};
`
);

function TopTrainers() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader
        action={
          <IconButton color="secondary">
            <SearchTwoToneIcon fontSize="small" />
          </IconButton>
        }
        title={t('Top Trainers')}
      />
      <Divider />
      <Box
        sx={{
          height: 272
        }}
      >
        <Scrollbar>
          <List disablePadding>
            <ListItem
              sx={{
                py: 2.7
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 1
                }}
              >
                <Badge
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  overlap="rectangular"
                  badgeContent={
                    <Tooltip
                      arrow
                      placement="top"
                      title={
                        t('Online since') +
                        ' ' +
                        formatDistance(subMinutes(new Date(), 12), new Date(), {
                          addSuffix: true
                        })
                      }
                    >
                      <DotLegend
                        style={{ background: `${theme.colors.success.main}` }}
                      />
                    </Tooltip>
                  }
                >
                  <AvatarWrapper
                    variant="rounded"
                    src="/static/images/avatars/1.jpg"
                  />
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary="Allison Torff"
                primaryTypographyProps={{ variant: 'h4', noWrap: true }}
                secondary={t('React Front End Developer')}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  noWrap: true
                }}
              />
              <Box
                sx={{
                  lineHeight: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  minWidth: 100
                }}
              >
                <Text color="warning">
                  <StarTwoToneIcon />
                </Text>
                <Typography variant="h5">4.8</Typography>
              </Box>
              <Box>
                <Button variant="outlined" color="primary" size="small">
                  {t('Profile')}
                </Button>
              </Box>
            </ListItem>
            <Divider component="li" />
            <ListItem
              sx={{
                py: 2.7
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 1
                }}
              >
                <Badge
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  overlap="rectangular"
                  badgeContent={
                    <Tooltip
                      arrow
                      placement="top"
                      title={
                        t('Offline since') +
                        ' ' +
                        formatDistance(subSeconds(new Date(), 12), new Date(), {
                          addSuffix: true
                        })
                      }
                    >
                      <DotLegend
                        style={{ background: `${theme.colors.error.main}` }}
                      />
                    </Tooltip>
                  }
                >
                  <AvatarWrapper
                    variant="rounded"
                    src="/static/images/avatars/3.jpg"
                  />
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary="Brandon Jonas"
                primaryTypographyProps={{ variant: 'h4', noWrap: true }}
                secondary={t('Lead UX Designer')}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  noWrap: true
                }}
              />
              <Box
                sx={{
                  lineHeight: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  minWidth: 100
                }}
              >
                <Text color="warning">
                  <StarTwoToneIcon />
                </Text>
                <Typography variant="h5">4.5</Typography>
              </Box>
              <Box>
                <Button variant="outlined" color="primary" size="small">
                  {t('Profile')}
                </Button>
              </Box>
            </ListItem>
            <Divider component="li" />
            <ListItem
              sx={{
                py: 2.7
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 1
                }}
              >
                <AvatarWrapper
                  variant="rounded"
                  src="/static/images/avatars/4.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Ellesse Pena"
                primaryTypographyProps={{ variant: 'h4', noWrap: true }}
                secondary={t('Expert Accountant')}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  noWrap: true
                }}
              />
              <Box
                sx={{
                  lineHeight: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  minWidth: 100
                }}
              >
                <Text color="warning">
                  <StarTwoToneIcon />
                </Text>
                <Typography variant="h5">4.7</Typography>
              </Box>
              <Box>
                <Button variant="outlined" color="primary" size="small">
                  {t('Profile')}
                </Button>
              </Box>
            </ListItem>
            <Divider component="li" />
            <ListItem
              sx={{
                py: 2.7
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 1
                }}
              >
                <AvatarWrapper
                  variant="rounded"
                  src="/static/images/avatars/5.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Dora Alvarez"
                primaryTypographyProps={{ variant: 'h4', noWrap: true }}
                secondary={t('UX Designer')}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  noWrap: true
                }}
              />
              <Box
                sx={{
                  lineHeight: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  minWidth: 100
                }}
              >
                <Text color="warning">
                  <StarTwoToneIcon />
                </Text>
                <Typography variant="h5">5.0</Typography>
              </Box>
              <Box>
                <Button variant="outlined" color="primary" size="small">
                  {t('Profile')}
                </Button>
              </Box>
            </ListItem>
            <Divider component="li" />
            <ListItem
              sx={{
                py: 2.7
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 1
                }}
              >
                <Badge
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  overlap="rectangular"
                  badgeContent={
                    <Tooltip
                      arrow
                      placement="top"
                      title={
                        t('Idle for') +
                        ' ' +
                        formatDistance(subHours(new Date(), 9), new Date(), {
                          addSuffix: true
                        })
                      }
                    >
                      <DotLegend
                        style={{ background: `${theme.colors.warning.main}` }}
                      />
                    </Tooltip>
                  }
                >
                  <AvatarWrapper
                    variant="rounded"
                    src="/static/images/avatars/2.jpg"
                  />
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primary="Jaydon Madsen"
                primaryTypographyProps={{ variant: 'h4', noWrap: true }}
                secondary={t('Senior Project Manager')}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  noWrap: true
                }}
              />
              <Box
                sx={{
                  lineHeight: 0.8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  minWidth: 100
                }}
              >
                <Text color="warning">
                  <StarTwoToneIcon />
                </Text>
                <Typography variant="h5">5.0</Typography>
              </Box>
              <Box>
                <Button variant="outlined" color="primary" size="small">
                  {t('Profile')}
                </Button>
              </Box>
            </ListItem>
            <Divider component="li" />
          </List>
        </Scrollbar>
      </Box>
      <Divider />
      <CardActions
        disableSpacing
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button size="small">{t('View all trainers')}</Button>
      </CardActions>
    </Card>
  );
}

export default TopTrainers;

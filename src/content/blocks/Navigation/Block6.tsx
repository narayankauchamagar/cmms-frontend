import {
  Tooltip,
  Box,
  Badge,
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  CardActionArea,
  Checkbox,
  Grid,
  Button,
  Link,
  alpha,
  Avatar,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { formatDistance, subMinutes } from 'date-fns';
import Text from 'src/components/Text';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';

const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: ${theme.spacing(2.5)};
      height: ${theme.spacing(2.5)};
      display: inline-block;
      border: ${theme.colors.alpha.white[100]} solid 2px;
      position: relative;

      &::after {
          content: ' ';
          border-radius: 22px;
          position: absolute;
          width: ${theme.spacing(1.1)};
          height: ${theme.spacing(1.1)};
          top: ${theme.spacing(0.5)};
          left: ${theme.spacing(0.5)};
          background: ${theme.colors.alpha.white[100]};
      }
  `
);

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 7;
  `
);

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
        .MuiTouchRipple-root {
          opacity: .2;
        }
  
        .MuiCardActionArea-focusHighlight {
          background: ${theme.colors.alpha.trueWhite[100]};
        }
  
        &:hover {
          .MuiCardActionArea-focusHighlight {
            opacity: .1;
          }
        }
  `
);

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative'
      }}
    >
      <CardActions>
        <Checkbox />
      </CardActions>
      <Box p={3} display="flex" alignItems="center">
        <Badge
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          overlap="rectangular"
          badgeContent={
            <Tooltip
              arrow
              placement="top"
              title={
                t('Idle since') +
                ' ' +
                formatDistance(subMinutes(new Date(), 42), new Date(), {
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
          <Avatar
            variant="rounded"
            sx={{
              width: 104,
              height: 104
            }}
            src="/static/images/avatars/4.jpg"
          />
        </Badge>
        <Box ml={2.5}>
          <Link href="#" gutterBottom variant="h4">
            Kris Alexander
          </Link>
          <Typography
            sx={{
              mb: 1
            }}
            variant="subtitle2"
          >
            Project Manager, Apple Inc.
          </Typography>
          <Button size="small" variant="contained" color="primary">
            {t('Chat')}
          </Button>
          <Button
            size="small"
            variant="contained"
            color="success"
            sx={{
              background: `${theme.colors.success.lighter}`,
              color: `${theme.colors.success.main}`,
              ml: 1,

              '&:hover': {
                background: `${theme.colors.success.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.success.dark
                )}`
              }
            }}
          >
            {t('View')}
          </Button>
        </Box>
      </Box>
      <Card
        elevation={0}
        sx={{
          mx: 3,
          background: `${alpha(theme.colors.alpha.black[100], 0.1)}`
        }}
      >
        <List dense>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'h5'
              }}
              primary={t('Email') + ':'}
            />
            <Typography variant="subtitle1">russotry@russo.com</Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'h5'
              }}
              primary={t('Job Description') + ':'}
            />
            <Typography variant="subtitle1">Project Manager</Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'h5'
              }}
              primary={t('Location') + ':'}
            />
            <Typography variant="subtitle1">San Francisco, USA</Typography>
          </ListItem>
        </List>
      </Card>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card
              variant="outlined"
              sx={{
                background: `${theme.colors.gradients.blue3}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CardActionAreaWrapper
                sx={{
                  p: 2
                }}
              >
                <Text color="warning">
                  <AccountTreeTwoToneIcon
                    sx={{
                      mb: 1
                    }}
                  />
                </Text>
                <Typography gutterBottom variant="h4">
                  {t('Projects')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: `${theme.colors.alpha.trueWhite[70]}`
                  }}
                  noWrap
                >
                  {t('Newest tasks')}
                </Typography>
              </CardActionAreaWrapper>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              variant="outlined"
              sx={{
                background: `${theme.colors.gradients.blue4}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CardActionAreaWrapper
                sx={{
                  p: 2
                }}
              >
                <Text color="success">
                  <ContactSupportTwoToneIcon
                    sx={{
                      mb: 1
                    }}
                  />
                </Text>
                <Typography gutterBottom variant="h4">
                  {t('Helpdesk')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: `${theme.colors.alpha.trueWhite[70]}`
                  }}
                  noWrap
                >
                  {t('Tickets overview')}
                </Typography>
              </CardActionAreaWrapper>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              variant="outlined"
              sx={{
                background: `${theme.colors.gradients.purple3}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CardActionAreaWrapper
                sx={{
                  p: 2
                }}
              >
                <DashboardCustomizeTwoToneIcon
                  sx={{
                    mb: 1
                  }}
                />
                <Typography gutterBottom variant="h4">
                  {t('Dashboard')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: `${theme.colors.alpha.trueWhite[70]}`
                  }}
                  noWrap
                >
                  {t('Daily operations')}
                </Typography>
              </CardActionAreaWrapper>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              variant="outlined"
              sx={{
                background: `${theme.colors.gradients.black2}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CardActionAreaWrapper
                sx={{
                  p: 2
                }}
              >
                <Text color="info">
                  <PeopleOutlineTwoToneIcon
                    sx={{
                      mb: 1
                    }}
                  />
                </Text>
                <Typography gutterBottom variant="h4">
                  {t('Customers')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: `${theme.colors.alpha.trueWhite[70]}`
                  }}
                  noWrap
                >
                  {t('Manage data')}
                </Typography>
              </CardActionAreaWrapper>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default Block6;

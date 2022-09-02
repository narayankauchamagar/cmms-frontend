import {
  Box,
  Card,
  Typography,
  Link,
  Badge,
  List,
  ListItem,
  ListItemText,
  Avatar,
  alpha,
  IconButton,
  Button,
  Divider,
  LinearProgress,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.primary.main};
        }
    `
);

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(1.5)};
    top: ${theme.spacing(1.5)};
    z-index: 7;
  `
);

function Block11() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative',
        p: 3
      }}
    >
      <CardActions>
        <IconButton size="small" color="primary">
          <MoreHorizTwoToneIcon />
        </IconButton>
      </CardActions>
      <Box mb={2} display="flex" alignItems="center">
        <Badge
          color="success"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          badgeContent="24"
          overlap="rectangular"
        >
          <Avatar
            variant="rounded"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`,
              background: `${theme.colors.alpha.black[100]}`,
              color: `${theme.palette.getContrastText(
                theme.colors.alpha.black[100]
              )}`,
              borderRadius: `${theme.general.borderRadiusSm}`,
              width: 95,
              height: 95
            }}
          >
            SS
          </Avatar>
        </Badge>
        <Box
          sx={{
            width: '100%'
          }}
          ml={1.5}
        >
          <Link
            href="#"
            color="text.primary"
            underline="none"
            sx={{
              transition: `${theme.transitions.create(['color'])}`,
              fontSize: `${theme.typography.pxToRem(17)}`,

              '&:hover': {
                color: `${theme.colors.primary.main}`
              }
            }}
            variant="h4"
          >
            Stevie Sharp
          </Link>
          <Typography gutterBottom variant="subtitle2">
            UX Developer
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            sx={{
              width: '100%'
            }}
          >
            <LinearProgressPrimary
              sx={{
                minWidth: 65,
                width: '100%'
              }}
              variant="determinate"
              value={39}
            />
            <Typography
              sx={{
                pl: 1
              }}
              fontWeight="bold"
              variant="body1"
              textAlign="right"
            >
              +39%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography variant="subtitle2">
        {t(
          'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
        )}
        .
      </Typography>
      <Divider
        sx={{
          mt: 3
        }}
      />
      <List
        disablePadding
        sx={{
          my: 1.5
        }}
      >
        <ListItem disableGutters>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5'
            }}
            primary={t('Email') + ':'}
          />
          <Typography variant="subtitle1">russotry@russo.com</Typography>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5'
            }}
            primary={t('Job Description') + ':'}
          />
          <Typography variant="subtitle1">Project Manager</Typography>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5'
            }}
            primary={t('Location') + ':'}
          />
          <Typography variant="subtitle1">San Francisco, USA</Typography>
        </ListItem>
      </List>
      <Divider
        sx={{
          mb: 3
        }}
      />
      <Button
        fullWidth
        variant="text"
        color="primary"
        sx={{
          backgroundColor: `${theme.colors.primary.lighter}`,
          textTransform: 'uppercase',
          py: 1,
          '&:hover': {
            backgroundColor: `${theme.colors.primary.main}`,
            color: `${theme.palette.getContrastText(theme.colors.primary.dark)}`
          }
        }}
      >
        {t('View complete profile')}
      </Button>
    </Card>
  );
}

export default Block11;

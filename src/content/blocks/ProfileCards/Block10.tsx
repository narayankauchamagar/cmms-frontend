import {
  Box,
  Card,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
  Avatar,
  alpha,
  IconButton,
  Button,
  LinearProgress,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.success.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.success.main};
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

function Block10() {
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
        <IconButton color="primary">
          <MoreHorizTwoToneIcon />
        </IconButton>
      </CardActions>
      <Box mb={2} display="flex" alignItems="center">
        <Avatar
          variant="rounded"
          sx={{
            width: 95,
            height: 95
          }}
          src="/static/images/avatars/3.jpg"
        />
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
            Kate Winchester
          </Link>
          <Typography gutterBottom variant="subtitle2">
            Freelance Designer, Mutual Inc.
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            sx={{
              width: '100%'
            }}
          >
            <LinearProgressSuccess
              sx={{
                minWidth: 65,
                width: '100%'
              }}
              variant="determinate"
              value={63}
            />
            <Typography
              sx={{
                pl: 1
              }}
              fontWeight="bold"
              variant="body1"
              textAlign="right"
            >
              +63%
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
      <Card
        elevation={0}
        sx={{
          mt: 2,
          mb: 3,
          background: `${alpha(theme.colors.alpha.black[100], 0.05)}`
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
      <Button
        fullWidth
        variant="text"
        color="success"
        sx={{
          backgroundColor: `${theme.colors.success.lighter}`,
          textTransform: 'uppercase',
          py: 1.5,
          '&:hover': {
            backgroundColor: `${theme.colors.success.main}`,
            color: `${theme.palette.getContrastText(theme.colors.success.dark)}`
          }
        }}
      >
        {t('View complete profile')}
      </Button>
    </Card>
  );
}

export default Block10;

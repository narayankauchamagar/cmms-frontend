import {
  Divider,
  Box,
  Card,
  AvatarGroup,
  Tooltip,
  Avatar,
  LinearProgress,
  Grid,
  alpha,
  Typography,
  IconButton,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Link as RouterLink } from 'react-router-dom';
import Text from 'src/components/Text';

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.05)};
      box-shadow: none;
      border-radius: 0;
  `
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.primary.contrastText};
        border-radius: 100px;
        
        &:hover {
            background-color: ${alpha(theme.colors.primary.main, 0.9)};
        }
  `
);

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 14px;
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

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
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

function Block7() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card variant="outlined">
      <CardWrapper
        sx={{
          p: 2
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant="h3"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
            fontWeight="normal"
          >
            <Typography
              fontWeight="normal"
              sx={{
                pr: 1,
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
              variant="h3"
              component="span"
              color="text.secondary"
            >
              #35
            </Typography>
            Hackathon
          </Typography>
          <Box display="flex" alignItems="center">
            <AvatarGroup
              sx={{
                mr: 1
              }}
              max={4}
            >
              <Tooltip arrow title="Remy Sharp">
                <Avatar
                  component={RouterLink}
                  to="#"
                  alt="Remy Sharp"
                  src="/static/images/avatars/1.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Travis Howard">
                <Avatar
                  component={RouterLink}
                  to="#"
                  alt="Travis Howard"
                  src="/static/images/avatars/2.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Cindy Baker">
                <Avatar
                  component={RouterLink}
                  to="#"
                  alt="Cindy Baker"
                  src="/static/images/avatars/3.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Agnes Walker">
                <Avatar
                  component={RouterLink}
                  to="#"
                  alt="Agnes Walker"
                  src="/static/images/avatars/4.jpg"
                />
              </Tooltip>
            </AvatarGroup>
            <Tooltip title={t('Add more participants')} arrow placement="right">
              <IconButtonWrapper>
                <AddTwoToneIcon />
              </IconButtonWrapper>
            </Tooltip>
          </Box>
        </Box>
      </CardWrapper>
      <Divider />
      <Box
        p={3}
        sx={{
          textAlign: 'center'
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h6" color="text.secondary">
              {t('Users')}
            </Typography>
            <Typography variant="h3">1,685</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h6" color="text.secondary">
              {t('Revenue')}
            </Typography>
            <Typography variant="h3">
              <Text color="error">$65,345</Text>
            </Typography>
          </Grid>
        </Grid>
        <Box
          display="flex"
          mt={2}
          mb={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5" fontWeight="normal" color="text.secondary">
            {t('Progress')}:
          </Typography>
          <Typography variant="h5">
            <Text color="primary">100%</Text>
          </Typography>
        </Box>
        <LinearProgressPrimary variant="determinate" value={49} />
      </Box>
      <Divider />
      <CardWrapper
        sx={{
          p: 2
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant="h3"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
            fontWeight="normal"
          >
            <Typography
              fontWeight="normal"
              sx={{
                pr: 1,
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
              variant="h3"
              component="span"
              color="text.secondary"
            >
              #36
            </Typography>
            Gaming center
          </Typography>
          <Box display="flex" alignItems="center">
            <Tooltip arrow title="Agnes Walker">
              <Avatar
                sx={{
                  mr: 1
                }}
                component={RouterLink}
                to="#"
                alt="Agnes Walker"
                src="/static/images/avatars/4.jpg"
              />
            </Tooltip>
            <Tooltip title={t('Add more participants')} arrow placement="right">
              <IconButtonWrapper>
                <AddTwoToneIcon />
              </IconButtonWrapper>
            </Tooltip>
          </Box>
        </Box>
      </CardWrapper>
      <Divider />
      <Box
        p={3}
        sx={{
          textAlign: 'center'
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h6" color="text.secondary">
              {t('Users')}
            </Typography>
            <Typography variant="h3">765</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h6" color="text.secondary">
              {t('Revenue')}
            </Typography>
            <Typography variant="h3">$34,654</Typography>
          </Grid>
        </Grid>
        <Box
          display="flex"
          mt={2}
          mb={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5" fontWeight="normal" color="text.secondary">
            {t('Progress')}:
          </Typography>
          <Typography variant="h5">
            <Text color="primary">100%</Text>
          </Typography>
        </Box>
        <LinearProgressPrimary variant="determinate" value={87} />
      </Box>
      <Divider />
      <CardWrapper
        sx={{
          p: 2
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant="h3"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
            fontWeight="normal"
          >
            <Typography
              fontWeight="normal"
              sx={{
                pr: 1,
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
              variant="h3"
              component="span"
              color="text.secondary"
            >
              #37
            </Typography>
            2022 MUI Events
          </Typography>
          <Box display="flex" alignItems="center">
            <AvatarGroup
              sx={{
                mr: 1
              }}
              max={2}
            >
              <Tooltip arrow title="Cindy Baker">
                <Avatar
                  component={RouterLink}
                  to="#"
                  alt="Cindy Baker"
                  src="/static/images/avatars/3.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Remy Sharp">
                <Avatar
                  component={RouterLink}
                  to="#"
                  alt="Remy Sharp"
                  src="/static/images/avatars/1.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Travis Howard">
                <Avatar
                  component={RouterLink}
                  to="#"
                  alt="Travis Howard"
                  src="/static/images/avatars/2.jpg"
                />
              </Tooltip>
              <Tooltip arrow title="Agnes Walker">
                <Avatar
                  component={RouterLink}
                  to="#"
                  alt="Agnes Walker"
                  src="/static/images/avatars/4.jpg"
                />
              </Tooltip>
            </AvatarGroup>
            <Tooltip title={t('Add more participants')} arrow placement="right">
              <IconButtonWrapper>
                <AddTwoToneIcon />
              </IconButtonWrapper>
            </Tooltip>
          </Box>
        </Box>
      </CardWrapper>
      <Divider />
      <Box p={3}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">45%</Typography>
            <LinearProgressError
              sx={{
                my: 1
              }}
              variant="determinate"
              value={45}
            />
            <Typography variant="body2" color="text.secondary">
              {t('Seats')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">87%</Typography>
            <LinearProgressSuccess
              sx={{
                my: 1
              }}
              variant="determinate"
              value={87}
            />
            <Typography variant="body2" color="text.secondary">
              {t('Participants')}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default Block7;

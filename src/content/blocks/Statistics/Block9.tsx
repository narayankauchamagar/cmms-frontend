import {
  Link,
  Avatar,
  Box,
  Typography,
  ListItemAvatar,
  Card,
  Grid,
  ListItemText,
  ListItem,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ReviewsTwoToneIcon from '@mui/icons-material/ReviewsTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.success.main};
        color: ${theme.palette.getContrastText(theme.colors.success.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.success};
  `
);

const AvatarWarning = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.warning.main};
        color: ${theme.palette.getContrastText(theme.colors.warning.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.warning};
  `
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.error.main};
        color: ${theme.palette.getContrastText(theme.colors.error.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.error};
  `
);

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.getContrastText(theme.colors.primary.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.primary};
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} xl={3}>
        <Card>
          <Box p={3}>
            <Typography variant="h4">{t('Positive Reviews')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarPrimary variant="rounded">
                  <ReviewsTwoToneIcon fontSize="large" />
                </AvatarPrimary>
              </ListItemAvatar>
              <ListItemText
                primary="98.54%"
                primaryTypographyProps={{
                  variant: 'h1',
                  sx: {
                    fontSize: `${theme.typography.pxToRem(35)}`,
                    ml: 2
                  }
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                mt: 0.5,
                pb: 0
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link fontWeight="bold" href="#">
                      {t('See reviews')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5
                      }}
                    >
                      {t('that were left by past customers from USA')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <Card>
          <Box p={3}>
            <Typography variant="h4">{t('Bounce Rate')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarWarning variant="rounded">
                  <PublicTwoToneIcon fontSize="large" />
                </AvatarWarning>
              </ListItemAvatar>
              <ListItemText
                primary="32.87%"
                primaryTypographyProps={{
                  variant: 'h1',
                  sx: {
                    fontSize: `${theme.typography.pxToRem(30)}`,
                    ml: 2
                  }
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                mt: 0.5,
                pb: 0
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link fontWeight="bold" href="#">
                      {t('See visits')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5
                      }}
                    >
                      {t('that had a higher than expected bounce rate')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <Card>
          <Box p={3}>
            <Typography variant="h4">{t('Active Referrals')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarError variant="rounded">
                  <EngineeringTwoToneIcon fontSize="large" />
                </AvatarError>
              </ListItemAvatar>
              <ListItemText
                primary="194"
                primaryTypographyProps={{
                  variant: 'h1',
                  sx: {
                    fontSize: `${theme.typography.pxToRem(30)}`,
                    ml: 2
                  }
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                mt: 0.5,
                pb: 0
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link fontWeight="bold" href="#">
                      {t('See referring')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5
                      }}
                    >
                      {t('domains that sent most visits last month')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <Card>
          <Box p={3}>
            <Typography variant="h4">{t('Opened Invites')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarSuccess variant="rounded">
                  <DraftsTwoToneIcon fontSize="large" />
                </AvatarSuccess>
              </ListItemAvatar>
              <ListItemText
                primary="29.93%"
                primaryTypographyProps={{
                  variant: 'h1',
                  sx: {
                    fontSize: `${theme.typography.pxToRem(30)}`,
                    ml: 2
                  }
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                mt: 0.5,
                pb: 0
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link fontWeight="bold" href="#">
                      {t('See clients')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5
                      }}
                    >
                      {t('that accepted your invitation to connect')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block5;

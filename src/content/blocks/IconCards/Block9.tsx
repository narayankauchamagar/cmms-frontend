import {
  Box,
  Grid,
  Card,
  Typography,
  IconButton,
  Tooltip,
  Avatar,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import NotificationImportantTwoToneIcon from '@mui/icons-material/NotificationImportantTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import InsertCommentTwoToneIcon from '@mui/icons-material/InsertCommentTwoTone';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(1.5)};
    top: ${theme.spacing(1.5)};
    z-index: 7;
  `
);

function Block9() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative',
            pl: 3,
            pr: 2.5,
            pt: 5,
            pb: 3
          }}
        >
          <CardActions>
            <Tooltip arrow placement="top" title={t('Add to favourites')}>
              <IconButton
                sx={{
                  mr: 0.5
                }}
                size="small"
                color="secondary"
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Users search')}>
              <IconButton size="small" color="secondary">
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </IconButton>
            </Tooltip>
          </CardActions>
          <Box
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Avatar
              sx={{
                width: 50,
                height: 50,
                background: `${theme.colors.alpha.black[100]}`,
                color: `${theme.colors.alpha.white[100]}`
              }}
            >
              <NotificationImportantTwoToneIcon fontSize="small" />
            </Avatar>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  mr: 0.5,
                  width: 24,
                  height: 24,
                  background: `${theme.colors.success.main}`,
                  color: `${theme.palette.success.contrastText}`
                }}
              >
                <CheckTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </Avatar>
              <Typography variant="body1" color="text.secondary">
                {t('Target achieved')}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h3" gutterBottom>
            {t('Recent Visitors')}
          </Typography>
          <Typography variant="subtitle2">{t("Today's analytics")}</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative',
            pl: 3,
            pr: 2.5,
            pt: 5,
            pb: 3
          }}
        >
          <CardActions>
            <Tooltip arrow placement="top" title={t('Add to favourites')}>
              <IconButton
                sx={{
                  mr: 0.5
                }}
                size="small"
                color="secondary"
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Users search')}>
              <IconButton size="small" color="secondary">
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </IconButton>
            </Tooltip>
          </CardActions>
          <Box
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Avatar
              sx={{
                width: 50,
                height: 50,
                background: `${theme.colors.info.main}`,
                color: `${theme.palette.info.contrastText}`
              }}
            >
              <CameraAltTwoToneIcon fontSize="small" />
            </Avatar>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  mr: 0.5,
                  width: 24,
                  height: 24,
                  background: `${theme.colors.success.main}`,
                  color: `${theme.palette.success.contrastText}`
                }}
              >
                <CheckTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </Avatar>
              <Typography variant="body1" color="text.secondary">
                {t('Target achieved')}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h3" gutterBottom>
            {t("Today's Revenue")}
          </Typography>
          <Typography variant="subtitle2">{t('Successful orders')}</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative',
            pl: 3,
            pr: 2.5,
            pt: 5,
            pb: 3
          }}
        >
          <CardActions>
            <Tooltip arrow placement="top" title={t('Add to favourites')}>
              <IconButton
                sx={{
                  mr: 0.5
                }}
                size="small"
                color="secondary"
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="top" title={t('Users search')}>
              <IconButton size="small" color="secondary">
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </IconButton>
            </Tooltip>
          </CardActions>
          <Box
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Avatar
              sx={{
                width: 50,
                height: 50,
                background: `${theme.colors.warning.main}`,
                color: `${theme.palette.warning.contrastText}`
              }}
            >
              <InsertCommentTwoToneIcon fontSize="small" />
            </Avatar>
            <Box display="flex" alignItems="center">
              <Avatar
                sx={{
                  mr: 0.5,
                  width: 24,
                  height: 24,
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.error.contrastText}`
                }}
              >
                <CloseTwoToneIcon
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                />
              </Avatar>
              <Typography
                variant="body1"
                sx={{
                  color: `${theme.colors.error.main}`
                }}
              >
                {t('Target failed')}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h3" gutterBottom>
            {t('New Customers')}
          </Typography>
          <Typography variant="subtitle2">{t('Latest statistics')}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block9;

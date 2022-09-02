import {
  Box,
  Card,
  Grid,
  Typography,
  Avatar,
  Divider,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';

const AvatarError = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.error.main};
        color: ${theme.palette.getContrastText(theme.colors.error.dark)};
        width: ${theme.spacing(9)};
        height: ${theme.spacing(9)};
        box-shadow: ${theme.colors.shadows.error};
  `
);

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.getContrastText(theme.colors.primary.dark)};
        width: ${theme.spacing(9)};
        height: ${theme.spacing(9)};
        box-shadow: ${theme.colors.shadows.primary};
  `
);

const AvatarInfo = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.info.main};
        color: ${theme.palette.getContrastText(theme.colors.info.dark)};
        width: ${theme.spacing(9)};
        height: ${theme.spacing(9)};
        box-shadow: ${theme.colors.shadows.info};
  `
);

function Block3() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            px: 3,
            pb: 3,
            pt: 4
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarError>
              <NotificationsActiveTwoToneIcon fontSize="large" />
            </AvatarError>
            <Typography
              variant="h1"
              sx={{
                pt: 3,
                fontSize: `${theme.typography.pxToRem(35)}`
              }}
            >
              86.453
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              sx={{
                fontSize: `${theme.typography.pxToRem(15)}`
              }}
            >
              {t('Laptops sales')}
            </Typography>
            <Divider
              flexItem
              sx={{
                my: 3
              }}
            />
            <Button color="error" variant="outlined">
              {t('View details')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            px: 3,
            pb: 3,
            pt: 4
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarPrimary>
              <MonetizationOnTwoToneIcon fontSize="large" />
            </AvatarPrimary>
            <Typography
              variant="h1"
              sx={{
                pt: 3,
                fontSize: `${theme.typography.pxToRem(35)}`
              }}
            >
              285.483
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              sx={{
                fontSize: `${theme.typography.pxToRem(15)}`
              }}
            >
              {t('Total sales')}
            </Typography>
            <Divider
              flexItem
              sx={{
                my: 3
              }}
            />
            <Button color="primary" variant="outlined">
              {t('View details')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            px: 3,
            pb: 3,
            pt: 4
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarInfo>
              <AssignmentIndTwoToneIcon fontSize="large" />
            </AvatarInfo>
            <Typography
              variant="h1"
              sx={{
                pt: 3,
                fontSize: `${theme.typography.pxToRem(35)}`
              }}
            >
              5843
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              sx={{
                fontSize: `${theme.typography.pxToRem(15)}`
              }}
            >
              {t('New accounts')}
            </Typography>
            <Divider
              flexItem
              sx={{
                my: 3
              }}
            />
            <Button color="info" variant="outlined">
              {t('View details')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block3;

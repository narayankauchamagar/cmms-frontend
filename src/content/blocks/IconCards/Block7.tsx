import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
  Avatar,
  styled,
  Divider,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';

const AvatarError = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.error.main};
        color: ${theme.palette.getContrastText(theme.colors.error.main)};
        width: ${theme.spacing(9)};
        height: ${theme.spacing(9)};
        box-shadow: ${theme.colors.shadows.error};
        top: -${theme.spacing(4.5)};
        position: absolute;
        left: 50%;
        margin-left: -${theme.spacing(4.5)};
  `
);

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.getContrastText(theme.colors.primary.main)};
        width: ${theme.spacing(9)};
        height: ${theme.spacing(9)};
        box-shadow: ${theme.colors.shadows.primary};
        top: -${theme.spacing(4.5)};
        position: absolute;
        left: 50%;
        margin-left: -${theme.spacing(4.5)};
  `
);

const AvatarWarning = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.warning.main};
        color:  ${theme.palette.primary.contrastText};
        width: ${theme.spacing(9)};
        height: ${theme.spacing(9)};
        box-shadow: ${theme.colors.shadows.warning};
        top: -${theme.spacing(4.5)};
        position: absolute;
        left: 50%;
        margin-left: -${theme.spacing(4.5)};
  `
);

function Block7() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 4.5,
            pb: 2,
            mt: 4.5
          }}
        >
          <AvatarError variant="rounded">
            <AssessmentTwoToneIcon fontSize="large" />
          </AvatarError>
          <Box px={3.5} pt={3.5}>
            <Typography
              textAlign="center"
              variant="h1"
              sx={{
                mb: 1,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
            >
              $4,745
            </Typography>
            <Typography
              textAlign="center"
              variant="subtitle2"
              sx={{
                mb: 3,
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              {t("Today's Sales")}
            </Typography>
            <Divider
              sx={{
                mb: 2
              }}
            />
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
              <Button
                sx={{
                  textTransform: 'uppercase',
                  fontSize: `${theme.typography.pxToRem(12)}`
                }}
                variant="text"
                color="error"
              >
                {t('View details')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 4.5,
            pb: 2,
            mt: 4.5
          }}
        >
          <AvatarPrimary variant="rounded">
            <MonetizationOnTwoToneIcon fontSize="large" />
          </AvatarPrimary>
          <Box px={3.5} pt={3.5}>
            <Typography
              textAlign="center"
              variant="h1"
              sx={{
                mb: 1,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
            >
              $8,348
            </Typography>
            <Typography
              textAlign="center"
              variant="subtitle2"
              sx={{
                mb: 3,
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              {t('Monthly Income')}
            </Typography>
            <Divider
              sx={{
                mb: 2
              }}
            />
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
              <Button
                sx={{
                  textTransform: 'uppercase',
                  fontSize: `${theme.typography.pxToRem(12)}`
                }}
                variant="text"
                color="primary"
              >
                {t('View details')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 4.5,
            pb: 2,
            mt: 4.5
          }}
        >
          <AvatarWarning variant="rounded">
            <SubscriptionsTwoToneIcon fontSize="large" />
          </AvatarWarning>
          <Box px={3.5} pt={3.5}>
            <Typography
              textAlign="center"
              variant="h1"
              sx={{
                mb: 1,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
            >
              889
            </Typography>
            <Typography
              textAlign="center"
              variant="subtitle2"
              sx={{
                mb: 3,
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              {t('Total Sales')}
            </Typography>
            <Divider
              sx={{
                mb: 2
              }}
            />
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
              <Button
                sx={{
                  textTransform: 'uppercase',
                  fontSize: `${theme.typography.pxToRem(12)}`
                }}
                variant="text"
                color="warning"
              >
                {t('View details')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block7;

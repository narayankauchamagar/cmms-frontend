import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  Divider,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

const ButtonWrapper = styled(Button)(
  ({ theme }) => `
    padding: ${theme.spacing(2, 3)};
    display: flex;
    justify-content: space-between;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &:hover {
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.alpha.black[100]};
    }
  `
);

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <Box display="flex" alignItems="center" p={2}>
            <img
              style={{ height: 130 }}
              src="/static/images/placeholders/illustrations/analysis.svg"
              alt="..."
            />
            <Box pl={1}>
              <Typography
                sx={{
                  pb: 1,
                  fontSize: `${theme.typography.pxToRem(16)}`
                }}
                variant="h4"
              >
                {t('Informations')}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  'Acccess this page in order to manage and customize all aspects of your profile data and accounts'
                )}
                .
              </Typography>
            </Box>
          </Box>
          <Divider />
          <ButtonWrapper fullWidth endIcon={<ChevronRightTwoToneIcon />}>
            {t('Manage account')}
          </ButtonWrapper>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Box display="flex" alignItems="center" p={2}>
            <img
              style={{ height: 130 }}
              src="/static/images/placeholders/illustrations/businessman.svg"
              alt="..."
            />
            <Box pl={1}>
              <Typography
                sx={{
                  pb: 1,
                  fontSize: `${theme.typography.pxToRem(16)}`
                }}
                variant="h4"
              >
                {t('Account Settings')}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  'Control everything related to your profile and trading accounts as shown in this page'
                )}
                .
              </Typography>
            </Box>
          </Box>
          <Divider />
          <ButtonWrapper fullWidth endIcon={<ChevronRightTwoToneIcon />}>
            {t('Manage settings')}
          </ButtonWrapper>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Box display="flex" alignItems="center" p={2}>
            <img
              style={{ height: 130 }}
              src="/static/images/placeholders/illustrations/handshake.svg"
              alt="..."
            />
            <Box pl={1}>
              <Typography
                sx={{
                  pb: 1,
                  fontSize: `${theme.typography.pxToRem(16)}`
                }}
                variant="h4"
              >
                {t('Crypto Balance')}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  'You can view, manage and customize your wallets and balances from this wallets page'
                )}
                .
              </Typography>
            </Box>
          </Box>
          <Divider />
          <ButtonWrapper fullWidth endIcon={<ChevronRightTwoToneIcon />}>
            {t('Manage wallets')}
          </ButtonWrapper>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Box display="flex" alignItems="center" p={2}>
            <img
              style={{ height: 130 }}
              src="/static/images/placeholders/illustrations/moving.svg"
              alt="..."
            />
            <Box pl={1}>
              <Typography
                sx={{
                  pb: 1,
                  fontSize: `${theme.typography.pxToRem(16)}`
                }}
                variant="h4"
              >
                {t('Profile Verification')}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  'Complete your profile verifications to take full advantage of your account right away'
                )}
                .
              </Typography>
            </Box>
          </Box>
          <Divider />
          <ButtonWrapper fullWidth endIcon={<ChevronRightTwoToneIcon />}>
            {t('Complete verifications')}
          </ButtonWrapper>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block1;

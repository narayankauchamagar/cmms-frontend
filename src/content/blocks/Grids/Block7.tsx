import {
  Grid,
  Box,
  CardActionArea,
  Card,
  Typography,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import Text from 'src/components/Text';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

const CardBorderBottom = styled(Card)(
  () => `
    border-bottom: transparent 5px solid;
  `
);

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
    padding: ${theme.spacing(3, 2, 3, 3)};
    display: flex;
    align-items: center;
    justify-content: space-between;

    .MuiTouchRipple-root {
        opacity: .3;
    }

    &:hover {
        .MuiCardActionArea-focusHighlight {
            opacity: .05;
        }
    }
  `
);

function Block7() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 5,
        background: `${theme.colors.gradients.blue4}`
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <CardBorderBottom
            sx={{
              boxShadow: `${theme.colors.shadows.success}`,
              borderBottomColor: `${theme.colors.success.main}`
            }}
          >
            <CardActionAreaWrapper>
              <Box>
                <Text color="success">
                  <PersonTwoToneIcon fontSize="large" />
                </Text>
                <Box mt={0.5}>
                  <Typography component="span" variant="h4">
                    1,585
                  </Typography>{' '}
                  <Typography component="span" variant="subtitle2">
                    {t('users')}
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="span"
                color="text.secondary"
                sx={{
                  opacity: 0.5,
                  display: 'flex'
                }}
              >
                <ChevronRightTwoToneIcon />
              </Typography>
            </CardActionAreaWrapper>
          </CardBorderBottom>
        </Grid>
        <Grid item xs={12} md={3}>
          <CardBorderBottom
            sx={{
              boxShadow: `${theme.colors.shadows.warning}`,
              borderBottomColor: `${theme.colors.warning.main}`
            }}
          >
            <CardActionAreaWrapper>
              <Box>
                <Text color="warning">
                  <MonetizationOnTwoToneIcon fontSize="large" />
                </Text>
                <Box mt={0.5}>
                  <Typography component="span" variant="h4">
                    32,595
                  </Typography>{' '}
                  <Typography component="span" variant="subtitle2">
                    {t('clicks')}
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="span"
                color="text.secondary"
                sx={{
                  opacity: 0.5,
                  display: 'flex'
                }}
              >
                <ChevronRightTwoToneIcon />
              </Typography>
            </CardActionAreaWrapper>
          </CardBorderBottom>
        </Grid>
        <Grid item xs={12} md={3}>
          <CardBorderBottom
            sx={{
              boxShadow: `${theme.colors.shadows.primary}`,
              borderBottomColor: `${theme.colors.primary.main}`
            }}
          >
            <CardActionAreaWrapper>
              <Box>
                <Text color="primary">
                  <AccountBalanceWalletTwoToneIcon fontSize="large" />
                </Text>
                <Box mt={0.5}>
                  <Typography component="span" variant="h4">
                    $12,634
                  </Typography>{' '}
                  <Typography component="span" variant="subtitle2">
                    {t('revenue')}
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="span"
                color="text.secondary"
                sx={{
                  opacity: 0.5,
                  display: 'flex'
                }}
              >
                <ChevronRightTwoToneIcon />
              </Typography>
            </CardActionAreaWrapper>
          </CardBorderBottom>
        </Grid>
        <Grid item xs={12} md={3}>
          <CardBorderBottom
            sx={{
              boxShadow: `${theme.colors.shadows.error}`,
              borderBottomColor: `${theme.colors.error.main}`
            }}
          >
            <CardActionAreaWrapper>
              <Box>
                <Text color="error">
                  <SubscriptionsTwoToneIcon fontSize="large" />
                </Text>
                <Box mt={0.5}>
                  <Typography component="span" variant="h4">
                    643
                  </Typography>{' '}
                  <Typography component="span" variant="subtitle2">
                    {t('sales')}
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="span"
                color="text.secondary"
                sx={{
                  opacity: 0.5,
                  display: 'flex'
                }}
              >
                <ChevronRightTwoToneIcon />
              </Typography>
            </CardActionAreaWrapper>
          </CardBorderBottom>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Block7;

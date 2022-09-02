import {
  Avatar,
  Card,
  CardHeader,
  Grid,
  Typography,
  LinearProgress,
  Box,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const AvatarWrapperError = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(9)};
      height: ${theme.spacing(9)};
      margin-right: ${theme.spacing(1.5)};
      border-radius: ${theme.general.borderRadius};
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
);

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(9)};
      height: ${theme.spacing(9)};
      margin-right: ${theme.spacing(1.5)};
      border-radius: ${theme.general.borderRadius};
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

function Budget() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card
      sx={{
        p: { xs: 1, sm: 3 }
      }}
    >
      <CardHeader
        title={t('Budget')}
        subheader={
          <>
            {t('You had')} <b>258</b> {t('expense transactions this month')},{' '}
            <b>43</b> {t('more than previous month')}.
          </>
        }
        subheaderTypographyProps={{
          variant: 'subtitle1',
          sx: {
            pt: 1
          }
        }}
      />
      <Box px={2} pt={1}>
        <Grid container textAlign="center">
          <Grid xs item>
            <Typography variant="h4" gutterBottom>
              Expenses
            </Typography>
            <Text color="error">
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography variant="body1" fontWeight="bold">
                  +12.76%
                </Typography>
                <ArrowDownwardIcon fontSize="small" />
              </Box>
            </Text>
          </Grid>
          <Grid xs item>
            <Typography variant="h4" gutterBottom>
              Savings
            </Typography>
            <Text color="success">
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography variant="body1" fontWeight="bold">
                  -18.65%
                </Typography>
                <ArrowUpwardIcon fontSize="small" />
              </Box>
            </Text>
          </Grid>
        </Grid>

        <Box
          display="flex"
          alignItems="center"
          sx={{
            pt: 4,
            pb: 1
          }}
        >
          <AvatarWrapperSuccess>
            <ShoppingCartTwoToneIcon fontSize="large" />
          </AvatarWrapperSuccess>
          <Box
            sx={{
              flex: '1'
            }}
          >
            <Typography variant="subtitle1" gutterBottom color="text.secondary">
              {t('Expenses')}
            </Typography>
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="space-between"
              sx={{
                mb: 1
              }}
            >
              <Typography variant="h4" color="text.primary">
                $574.21
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $2,159.00
              </Typography>
            </Box>
            <LinearProgress value={78} color="primary" variant="determinate" />
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {t('Minimum credit payment due in 15 days')}:{' '}
          <Typography
            variant="body2"
            component="span"
            fontWeight="bold"
            color="text.primary"
          >
            $84.00
          </Typography>
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          sx={{
            pt: 5,
            pb: 1
          }}
        >
          <AvatarWrapperError>
            <MonetizationOnTwoToneIcon fontSize="large" />
          </AvatarWrapperError>
          <Box
            sx={{
              flex: '1'
            }}
          >
            <Typography variant="subtitle1" gutterBottom color="text.secondary">
              {t('Savings')}
            </Typography>
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="space-between"
              sx={{
                mb: 1
              }}
            >
              <Typography variant="h4" color="text.primary">
                $23,536.44
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $25,500.00
              </Typography>
            </Box>
            <LinearProgress value={49} color="primary" variant="determinate" />
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          <Text color="success">
            {t('You have almost reached your target goal!!!')}
          </Text>
        </Typography>
      </Box>
    </Card>
  );
}

export default Budget;

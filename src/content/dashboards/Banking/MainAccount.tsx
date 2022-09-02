import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Box,
  Avatar,
  Grid,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
`
);

const TypographySucccess = styled(Typography)(
  ({ theme }) => `
      color: ${theme.palette.success.main};
`
);

const CardContentWrapper = styled(CardContent)(
  () => `
      position: relative;
`
);

const BankLogoImg = styled('img')(
  ({ theme }) => `
      position: absolute;
      opacity: .15;
      width: 200px;
      height: 200px;
      top: 50%;
      right: ${theme.spacing(3)};
      margin-top: -100px;
`
);

function MainAccount() {
  const { t }: { t: any } = useTranslation();

  const data = {
    funds: '$98,346.53',
    name: 'Bank of America - Savings Account',
    account: '00 2222 5555 2222 72',
    acc: '3544 57214',
    bsb: '721 352',
    logo: '/static/images/placeholders/logo/bankofamerica.svg'
  };

  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardHeader
        sx={{
          px: 3,
          pt: 3,
          alignItems: 'flex-start'
        }}
        action={
          <>
            <Typography variant="subtitle2" align="right">
              {t('Available')}
            </Typography>
            <TypographySucccess variant="h2" align="right">
              {data.funds}
            </TypographySucccess>
          </>
        }
        title={t('Main Account')}
      />
      <CardContentWrapper
        sx={{
          px: 3,
          pt: 4,
          pb: 5
        }}
      >
        <Box
          component="span"
          sx={{
            display: { xs: 'none', lg: 'inline-block' }
          }}
        >
          <BankLogoImg alt={data.name} src={data.logo} />
        </Box>
        <Grid container alignItems="flex-start">
          <Grid item>
            <Avatar
              sx={{
                mr: 2,
                width: theme.spacing(12),
                height: theme.spacing(8)
              }}
              variant="square"
              alt={data.name}
              src={data.logo}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4" component="div">
              {data.name}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 'normal'
              }}
              color="text.secondary"
            >
              {data.account}
            </Typography>
            <Box
              sx={{
                mt: 2
              }}
            >
              <Typography variant="body1" color="text.secondary" gutterBottom>
                ACC: <b>{data.acc}</b>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                BSB: <b>{data.bsb}</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContentWrapper>
      <CardActionsWrapper
        sx={{
          p: 3,
          height: '100%',
          flex: 1
        }}
      >
        <Button variant="outlined">{t('Transfer money')}</Button>
        <Button variant="contained">{t('Link accounts')}</Button>
      </CardActionsWrapper>
    </Card>
  );
}

export default MainAccount;

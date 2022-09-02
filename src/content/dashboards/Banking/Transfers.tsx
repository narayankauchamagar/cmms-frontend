import {
  Typography,
  Box,
  Avatar,
  Card,
  CardContent,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccountBalanceWalletTwoTone from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ArrowUpwardTwoTone from '@mui/icons-material/ArrowUpwardTwoTone';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.gradients.blue1};
      color:  ${theme.palette.primary.contrastText};
`
);

const ArrowUpwardWrapper = styled(ArrowUpwardTwoTone)(
  ({ theme }) => `
      color:  ${theme.palette.success.main};
`
);

function Transfers() {
  const { t }: { t: any } = useTranslation();

  const data = {
    value: '$2,395'
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <AvatarWrapper>
            <AccountBalanceWalletTwoTone />
          </AvatarWrapper>
          <Typography
            sx={{
              ml: 1
            }}
            variant="body1"
            color="text.secondary"
            component="div"
          >
            {t('Transfers')}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            ml: -1.5,
            py: 3,
            justifyContent: 'center'
          }}
        >
          <ArrowUpwardWrapper />
          <Typography variant="h2" color="text.primary">
            {data.value}
          </Typography>
        </Box>
        <Typography
          align="center"
          variant="body2"
          color="text.secondary"
          component="div"
        >
          <b>+51%</b> more than last week
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Transfers;

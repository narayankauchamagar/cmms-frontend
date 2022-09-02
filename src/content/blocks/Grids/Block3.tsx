import { Box, Card, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import MoneyTwoToneIcon from '@mui/icons-material/MoneyTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import CountUp from 'react-countup';

function Block3() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Box py={3} px={5} display="flex" alignItems="center">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            opacity: 0.4
          }}
          color="text.secondary"
        >
          <AccountBalanceWalletTwoToneIcon
            sx={{
              fontSize: 54
            }}
          />
        </Typography>
        <Box ml={1}>
          <Typography noWrap gutterBottom variant="subtitle2">
            {t('Expenses')}
          </Typography>
          <Typography color="error" variant="h4">
            $14,264
          </Typography>
        </Box>
      </Box>
      <Box py={3} px={5} display="flex" alignItems="center">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            opacity: 0.4
          }}
          color="text.secondary"
        >
          <MonetizationOnTwoToneIcon
            sx={{
              fontSize: 54
            }}
          />
        </Typography>
        <Box ml={1}>
          <Typography noWrap gutterBottom variant="subtitle2">
            {t('Revenue')}
          </Typography>
          <Typography color="primary" variant="h4">
            $54,233
          </Typography>
        </Box>
      </Box>
      <Box py={3} px={5} display="flex" alignItems="center">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            opacity: 0.4
          }}
          color="text.secondary"
        >
          <PersonTwoToneIcon
            sx={{
              fontSize: 54
            }}
          />
        </Typography>
        <Box ml={1}>
          <Typography noWrap gutterBottom variant="subtitle2">
            {t('Users')}
          </Typography>
          <Typography variant="h4">
            <Text color="success">765</Text>
          </Typography>
        </Box>
      </Box>
      <Box py={3} px={5} display="flex" alignItems="center">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            opacity: 0.4
          }}
          color="text.secondary"
        >
          <StorefrontTwoToneIcon
            sx={{
              fontSize: 54
            }}
          />
        </Typography>
        <Box ml={1}>
          <Typography noWrap gutterBottom variant="subtitle2">
            {t('Sales')}
          </Typography>
          <Typography variant="h4">$1.2M</Typography>
        </Box>
      </Box>
      <Box py={3} px={5} display="flex" alignItems="center">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            opacity: 0.4
          }}
          color="text.secondary"
        >
          <MoneyTwoToneIcon
            sx={{
              fontSize: 54
            }}
          />
        </Typography>
        <Box ml={1}>
          <Typography noWrap gutterBottom variant="subtitle2">
            {t('Income')}
          </Typography>
          <Typography
            sx={{
              width: 90
            }}
            variant="h4"
          >
            <CountUp
              start={0}
              end={458.695}
              duration={4}
              separator=""
              delay={1}
              decimals={3}
              decimal=","
              prefix="$"
              suffix=""
            />
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default Block3;

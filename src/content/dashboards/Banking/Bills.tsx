import {
  Typography,
  Box,
  Avatar,
  Card,
  CardContent,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ArrowDownwardTwoTone from '@mui/icons-material/ArrowDownwardTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.gradients.green1};
      color:  ${theme.palette.primary.contrastText};
`
);

const ArrowDownwardWrapper = styled(ArrowDownwardTwoTone)(
  ({ theme }) => `
      color:  ${theme.palette.error.main};
`
);

function Bills() {
  const { t }: { t: any } = useTranslation();

  const data = {
    value: '$785'
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <AvatarWrapper>
            <ReceiptTwoToneIcon />
          </AvatarWrapper>
          <Typography
            sx={{
              ml: 1
            }}
            variant="body1"
            color="text.secondary"
            component="div"
          >
            {t('Bills')}
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
          <ArrowDownwardWrapper />
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
          <b>-8%</b> less than last week
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Bills;

import {
  Card,
  Box,
  Typography,
  Avatar,
  LinearProgress,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LocalDrinkTwoToneIcon from '@mui/icons-material/LocalDrinkTwoTone';

const AvatarWrapperWarning = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
      border-radius: ${theme.general.borderRadius};
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
      margin-bottom: ${theme.spacing(3)};
`
);

function Water() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card
      sx={{
        p: 3
      }}
    >
      <AvatarWrapperWarning>
        <LocalDrinkTwoToneIcon />
      </AvatarWrapperWarning>
      <Typography
        variant="h3"
        sx={{
          pb: 1
        }}
      >
        {t('Water')}
      </Typography>
      <Typography
        color="text.primary"
        variant="h1"
        sx={{
          pr: 0.5,
          display: 'inline-flex'
        }}
      >
        54%
      </Typography>
      <Box pt={3}>
        <LinearProgress value={54} color="primary" variant="determinate" />
      </Box>
    </Card>
  );
}

export default Water;

import {
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Typography,
  Avatar,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import KitchenTwoToneIcon from '@mui/icons-material/KitchenTwoTone';

function CaloriesAlt() {
  const { t }: { t: any } = useTranslation();

  const AvatarPrimary = styled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
      margin-top: -${theme.spacing(1)};
`
  );

  return (
    <Card
      sx={{
        p: 1
      }}
    >
      <CardHeader
        avatar={
          <AvatarPrimary>
            <KitchenTwoToneIcon />
          </AvatarPrimary>
        }
        action={
          <>
            <Typography align="right" variant="h2">
              2400
            </Typography>
            <Typography
              align="right"
              variant="subtitle2"
              color="text.secondary"
            >
              {t('kCal')}
            </Typography>
          </>
        }
      />
      <CardContent
        sx={{
          pt: 0
        }}
      >
        <Typography
          variant="h3"
          sx={{
            pb: 3
          }}
        >
          {t('Calories')}
        </Typography>
        <LinearProgress value={34} color="primary" variant="determinate" />
      </CardContent>
    </Card>
  );
}

export default CaloriesAlt;

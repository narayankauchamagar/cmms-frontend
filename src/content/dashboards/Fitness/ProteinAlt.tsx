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
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';

function ProteinAlt() {
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
            <FastfoodTwoToneIcon />
          </AvatarPrimary>
        }
        action={
          <>
            <Typography align="right" variant="h2">
              3566
            </Typography>
            <Typography
              align="right"
              variant="subtitle2"
              color="text.secondary"
            >
              {t('grams')}
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
          {t('Protein')}
        </Typography>
        <LinearProgress value={49} color="primary" variant="determinate" />
      </CardContent>
    </Card>
  );
}

export default ProteinAlt;

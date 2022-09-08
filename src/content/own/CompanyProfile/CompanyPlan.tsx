import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SubscriptionPlan } from '../../../models/owns/subscriptionPlan';
import CardMembershipTwoToneIcon from '@mui/icons-material/CardMembershipTwoTone';
import { useNavigate } from 'react-router-dom';

interface CompanyPlanProps {
  plan: SubscriptionPlan;
}
function CompanyPlan(props: CompanyPlanProps) {
  const { plan } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const { t }: { t: any } = useTranslation();
  if (plan.name == 'Business') return null;
  return (
    <Card
      sx={{
        background: `${theme.colors.gradients.blue4}`,
        color: `${theme.palette.getContrastText(theme.colors.primary.main)}`,
        display: 'flex',
        alignItems: 'flex-start',
        px: 3,
        py: 5,
        mb: 2
      }}
    >
      <Avatar
        sx={{
          mr: 3,
          mt: -1.8,
          width: 62,
          height: 62,
          color: `${theme.colors.warning.main}`,
          background: `${theme.palette.getContrastText(
            theme.colors.warning.main
          )}`
        }}
      >
        <CardMembershipTwoToneIcon
          sx={{
            fontSize: `${theme.typography.pxToRem(30)}`
          }}
        />
      </Avatar>
      <Box>
        <Typography
          sx={{
            pb: 1.5,
            color: `${theme.palette.getContrastText(theme.colors.primary.main)}`
          }}
          variant="h3"
        >
          Upgrade plan
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            lineHeight: 1.8,
            color: `${alpha(
              theme.palette.getContrastText(theme.colors.primary.main),
              0.8
            )}`
          }}
        >
          {t(`You are currently using ${plan.name} plan. Upgrade now to get access to
          more features.`)}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            sx={{ mr: 2 }}
            variant="contained"
            onClick={() => navigate('/app/subscription/plans')}
          >
            {t('Upgrade now')}
          </Button>
          <Button variant="contained" color="secondary">
            {t('Learn more')}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default CompanyPlan;

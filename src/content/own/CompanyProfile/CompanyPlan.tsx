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
import useAuth from '../../../hooks/useAuth';
import i18n from 'i18next';

interface CompanyPlanProps {
  plan: SubscriptionPlan;
}
function CompanyPlan(props: CompanyPlanProps) {
  const { plan } = props;
  const { company } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const { t }: { t: any } = useTranslation();
  const getLanguage = i18n.language;
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
          {t('upgrade_plan')}
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
          {t('you_are_using_plan', {
            planName: plan.name,
            expiration: new Date(company.subscription.endsOn).toLocaleString(
              getLanguage === 'fr' ? 'fr-FR' : undefined
            )
          })}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            sx={{ mr: 2 }}
            variant="contained"
            onClick={() => navigate('/app/subscription/plans')}
          >
            {t('upgrade_now')}
          </Button>
          <Button
            onClick={() => navigate('/billing')}
            variant="contained"
            color="secondary"
          >
            {t('learn_more')}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default CompanyPlan;

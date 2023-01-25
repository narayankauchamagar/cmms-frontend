import { PlanFeature } from '../../../models/owns/subscriptionPlan';
import { PermissionEntity } from '../../../models/owns/role';
import useAuth from '../../../hooks/useAuth';
import PermissionErrorMessage from '../components/PermissionErrorMessage';
import FeatureErrorMessage from '../components/FeatureErrorMessage';

export default function AnalyticsLayout(props) {
  const { children } = props;
  const { hasViewPermission, hasFeature } = useAuth();

  if (hasFeature(PlanFeature.ANALYTICS)) {
    if (hasViewPermission(PermissionEntity.ANALYTICS)) {
      return children;
    } else return <PermissionErrorMessage message={'no_access_analytics'} />;
  } else return <FeatureErrorMessage message={'upgrade_analytics'} />;
}

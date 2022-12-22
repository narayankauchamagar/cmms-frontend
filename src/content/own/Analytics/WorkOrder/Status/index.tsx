import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import { TitleContext } from '../../../../../contexts/TitleContext';
import { useDispatch, useSelector } from '../../../../../store';
import { getFiles } from '../../../../../slices/file';
import useAuth from '../../../../../hooks/useAuth';
import { PermissionEntity } from '../../../../../models/owns/role';
import PermissionErrorMessage from '../../../components/PermissionErrorMessage';
import { PlanFeature } from '../../../../../models/owns/subscriptionPlan';
import FeatureErrorMessage from '../../../components/FeatureErrorMessage';
import { CustomSnackBarContext } from '../../../../../contexts/CustomSnackBarContext';
import WOStatusNumbers from './WOStatusNumbers';
import WOStatusPie from './WOStatusPie';
import WOStatusIncomplete from './WOStatusIncomplete';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { files, loadingGet } = useSelector((state) => state.files);

  const {
    hasViewPermission,
    hasEditPermission,
    hasCreatePermission,
    hasDeletePermission,
    hasFeature
  } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    setTitle(t('Status Report'));
    if (hasViewPermission(PermissionEntity.ANALYTICS)) dispatch(getFiles());
  }, []);

  if (hasFeature(PlanFeature.ANALYTICS)) {
    if (hasViewPermission(PermissionEntity.ANALYTICS))
      return (
        <>
          <Helmet>
            <title>{t('Status Report')}</title>
          </Helmet>
          <Grid
            container
            justifyContent="center"
            alignItems="stretch"
            spacing={1}
            my={2}
            paddingX={1}
          >
            <Grid item xs={12} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                  <WOStatusNumbers />
                </Grid>
                <Grid item xs={12} md={12}>
                  <WOStatusPie />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <WOStatusIncomplete />
            </Grid>
          </Grid>
        </>
      );
    else
      return (
        <PermissionErrorMessage
          message={
            "You don't have access to Analytics. Please contact your administrator if you should have access"
          }
        />
      );
  } else return <FeatureErrorMessage message={'Upgrade to see Analytics...'} />;
}

export default Files;

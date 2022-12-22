import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../../../contexts/TitleContext';
import { useDispatch } from '../../../../../store';
import useAuth from '../../../../../hooks/useAuth';
import { PermissionEntity } from '../../../../../models/owns/role';
import PermissionErrorMessage from '../../../components/PermissionErrorMessage';
import { PlanFeature } from '../../../../../models/owns/subscriptionPlan';
import FeatureErrorMessage from '../../../components/FeatureErrorMessage';
import { CustomSnackBarContext } from '../../../../../contexts/CustomSnackBarContext';
import Overview from './Overview';
import WOStatusPie from './WOStatusPie';
import IncompleteWO from './IncompleteWO';
import HoursWorked from './HoursWorked';
import WOModal, { Filter } from '../WOModal';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const [woModalTitle, setWoModalTitle] = useState<string>(t('Work Orders'));
  const [openWOModal, setOpenWOModal] = useState<boolean>(false);
  const [columns, setColumns] = useState<string[]>([]);
  const [filters, setFilters] = useState<Filter[]>([]);

  const {
    hasViewPermission,
    hasEditPermission,
    hasCreatePermission,
    hasDeletePermission,
    hasFeature
  } = useAuth();
  const dispatch = useDispatch();
  const handleOpenWOModal = (
    columns: string[],
    filters: Filter[],
    title: string
  ) => {
    setColumns(columns);
    setFilters(filters);
    setWoModalTitle(title);
    setOpenWOModal(true);
  };
  useEffect(() => {
    setTitle(t('Status Report'));
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
                  <Overview handleOpenModal={handleOpenWOModal} />
                </Grid>
                <Grid item xs={12} md={12}>
                  <WOStatusPie handleOpenModal={handleOpenWOModal} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <IncompleteWO handleOpenModal={handleOpenWOModal} />
            </Grid>
            <Grid item xs={12} md={12}>
              <HoursWorked handleOpenModal={handleOpenWOModal} />
            </Grid>
          </Grid>
          <WOModal
            title={woModalTitle}
            open={openWOModal}
            onClose={() => setOpenWOModal(false)}
            columns={columns}
            filters={filters}
          />
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

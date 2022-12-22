import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react';
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
import HoursWorked from './HoursWorked';
import WOModal, { Filter } from './WOModal';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { files, loadingGet } = useSelector((state) => state.files);
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
                  <WOStatusNumbers handleOpenModal={handleOpenWOModal} />
                </Grid>
                <Grid item xs={12} md={12}>
                  <WOStatusPie handleOpenModal={handleOpenWOModal} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <WOStatusIncomplete handleOpenModal={handleOpenWOModal} />
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

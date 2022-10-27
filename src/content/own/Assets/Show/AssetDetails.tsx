import { Box, Card, Divider, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../../store';
import { getAssetDetails } from '../../../../slices/asset';
import { useEffect } from 'react';

interface PropsType {
  assetId: number;
}

const AssetDetails = ({ assetId }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const { assetInfos } = useSelector((state) => state.assets);
  const asset = assetInfos[assetId]?.asset;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssetDetails(assetId));
  }, [assetId]);

  const informationFields = [
    { label: t('Name'), value: asset?.name },
    { label: t('Description'), value: asset?.description },
    { label: t('Model'), value: asset?.model },
    { label: t('Area'), value: asset?.area },
    { label: t('Barcode'), value: asset?.barCode }
  ];
  const moreInfosFields = [
    { label: t('Placed in Service'), value: asset?.inServiceDate },
    { label: t('Warranty expiration'), value: asset?.warrantyExpirationDate }
  ];
  const BasicField = ({
    label,
    value
  }: {
    label: string | number;
    value: string | number;
  }) => {
    return value ? (
      <Grid item xs={12}>
        <Stack spacing={5} direction="row">
          <Typography variant="h6">{label}</Typography>
          <Typography variant="h6">{value}</Typography>
        </Stack>
        <Divider sx={{ mt: 1 }} />
      </Grid>
    ) : null;
  };
  return (
    <Box sx={{ px: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Grid container spacing={2} padding={2}>
              <Grid item xs={12}>
                <Typography variant="h4">Asset Information</Typography>
              </Grid>
              {informationFields.map((field) => (
                <BasicField
                  key={field.label}
                  label={field.label}
                  value={field.value}
                />
              ))}
              <Grid item xs={12}>
                <Typography variant="h4">More Informations</Typography>
              </Grid>
              {moreInfosFields.map((field) => (
                <BasicField
                  key={field.label}
                  label={field.label}
                  value={field.value}
                />
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssetDetails;

import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../../components/MultipleTabsLayout';
import { TitleContext } from '../../../../contexts/TitleContext';
import { useLocation, useParams } from 'react-router-dom';
import Asset from '../../../../models/owns/asset';
import AssetWorkOrders from './AssetWorkOrders';
import AssetDetails from './AssetDetails';
import AssetParts from './AssetParts';
import { isNumeric } from 'src/utils/validators';
import { IField } from '../../type';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import Form from '../../components/form';
import * as Yup from 'yup';
import { editAsset, getAssetDetails } from '../../../../slices/asset';
import { useDispatch, useSelector } from '../../../../store';
import { CustomSnackBarContext } from '../../../../contexts/CustomSnackBarContext';
import { formatAssetValues } from '../../../../utils/formatters';

interface PropsType {}

const ShowAsset = ({}: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const { assetId } = useParams();
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const { setTitle } = useContext(TitleContext);
  const location = useLocation();
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { assetInfos } = useSelector((state) => state.assets);
  const asset = assetInfos[assetId]?.asset;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isNumeric(assetId)) dispatch(getAssetDetails(Number(assetId)));
  }, [assetId]);

  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);

  useEffect(() => {
    setTitle(asset?.name);
  }, [asset]);

  const arr = location.pathname.split('/');

  const tabs = [
    { value: 'work-orders', label: t('Work Orders') },
    { value: 'details', label: t('Details') },
    { value: 'parts', label: t('Parts') }
  ];
  const tabIndex = tabs.findIndex((tab) => tab.value === arr[arr.length - 1]);

  const fields: Array<IField> = [
    {
      name: 'assetInfo',
      type: 'titleGroupField',
      label: t('Asset Information')
    },
    {
      name: 'name',
      type: 'text',
      label: t('Name'),
      placeholder: t('Enter asset name'),
      required: true
    },
    {
      name: 'location',
      type: 'select',
      type2: 'location',
      label: t('Location'),
      placeholder: t('Select asset location'),
      required: true
    },
    {
      name: 'description',
      type: 'text',
      label: t('Description'),
      placeholder: t('Description'),
      multiple: true
    },
    {
      name: 'model',
      type: 'text',
      label: t('Model'),
      placeholder: t('Model')
    },
    {
      name: 'category',
      midWidth: true,
      label: t('Category'),
      placeholder: t('Category'),
      type: 'select',
      type2: 'category',
      category: 'asset-categories'
    },
    {
      name: 'area',
      type: 'text',
      midWidth: true,
      label: t('Area'),
      placeholder: t('Area')
    },
    {
      name: 'image',
      type: 'file',
      label: t('Image')
    },
    {
      name: 'assignedTo',
      type: 'titleGroupField',
      label: t('Assigned To')
    },
    {
      name: 'primaryUser',
      type: 'select',
      type2: 'user',
      label: 'Worker',
      placeholder: 'Select primary user'
    },
    {
      name: 'assignedTo',
      type: 'select',
      type2: 'user',
      multiple: true,
      label: t('Additional Workers'),
      placeholder: 'Select additional workers'
    },
    {
      name: 'teams',
      type: 'select',
      type2: 'team',
      multiple: true,
      label: t('Teams'),
      placeholder: 'Select teams'
    },
    {
      name: 'moreInfos',
      type: 'titleGroupField',
      label: t('More Informations')
    },
    {
      name: 'customers',
      type: 'select',
      type2: 'customer',
      multiple: true,
      label: t('Customers'),
      placeholder: 'Select customers'
    },
    {
      name: 'vendors',
      type: 'select',
      type2: 'vendor',
      multiple: true,
      label: t('Vendors'),
      placeholder: t('Select vendors')
    },
    {
      name: 'inServiceDate',
      type: 'date',
      midWidth: true,
      label: t('Placed in Service date')
    },
    {
      name: 'warrantyExpirationDate',
      type: 'date',
      midWidth: true,
      label: t('Warranty Expiration date')
    },
    {
      name: 'additionalInfos',
      type: 'text',
      label: t('Additional Information'),
      placeholder: t('Additional Information'),
      multiple: true
    },
    {
      name: 'structure',
      type: 'titleGroupField',
      label: t('Structure')
    },
    { name: 'parts', type: 'select', type2: 'part', label: t('Parts') },
    {
      name: 'parentAsset',
      type: 'select',
      type2: 'asset',
      label: t('Parent Asset'),
      excluded: Number(assetId)
    }
  ];
  const shape = {
    name: Yup.string().required(t('Asset name is required')),
    location: Yup.object().required(t('Asset location is required')).nullable()
  };
  const onEditSuccess = () => {
    setOpenUpdateModal(false);
    showSnackBar(t('The changes have been saved'), 'success');
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The Asset couldn't be edited"), 'error');

  const renderAssetUpdateModal = () => (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openUpdateModal}
      onClose={handleCloseUpdateModal}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Edit Asset')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to edit this asset')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Box>
          <Form
            fields={fields}
            validation={Yup.object().shape(shape)}
            submitText={t('Save')}
            values={{
              ...asset,
              location: {
                label: asset?.location.name,
                value: asset?.location.id
              },
              parts:
                asset?.parts?.map((part) => {
                  return {
                    label: part.name,
                    value: part.id.toString()
                  };
                }) ?? []
            }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              const formattedValues = formatAssetValues(values);
              dispatch(editAsset(Number(assetId), formattedValues))
                .then(onEditSuccess)
                .catch(onEditFailure);
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  return (
    <MultipleTabsLayout
      basePath={`/app/assets/${assetId}`}
      tabs={tabs}
      tabIndex={tabIndex}
      title={`Asset`}
      action={handleOpenUpdateModal}
      actionTitle={t('Edit')}
      withoutCard
      editAction
    >
      {isNumeric(assetId) ? (
        tabIndex === 0 ? (
          <AssetWorkOrders asset={asset} />
        ) : tabIndex === 1 ? (
          <AssetDetails asset={asset} />
        ) : (
          tabIndex === 2 && <AssetParts asset={asset} />
        )
      ) : null}
      {renderAssetUpdateModal()}
    </MultipleTabsLayout>
  );
};

export default ShowAsset;

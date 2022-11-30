import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IField } from '../type';
import { addAsset, getAssetChildren } from '../../../slices/asset';
import { useDispatch, useSelector } from '../../../store';
import { useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridEventListener,
  GridRenderCellParams,
  GridToolbar,
  GridValueGetterParams
} from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { AssetRow } from '../../../models/owns/asset';
import Form from '../components/form';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { DataGridProProps, useGridApiRef } from '@mui/x-data-grid-pro';
import { formatAssetValues } from '../../../utils/formatters';
import { GroupingCellWithLazyLoading } from './GroupingCellWithLazyLoading';
import { UserMiniDTO } from '../../../models/user';
import UserAvatars from '../components/UserAvatars';
import { enumerate } from '../../../utils/displayers';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import { getAssetUrl } from '../../../utils/urlPaths';

function Assets() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const { uploadFiles } = useContext(CompanySettingsContext);
  const navigate = useNavigate();
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { assetsHierarchy } = useSelector((state) => state.assets);
  const apiRef = useGridApiRef();
  const { getFormattedDate } = useContext(CompanySettingsContext);
  const { showSnackBar } = useContext(CustomSnackBarContext);

  useEffect(() => {
    setTitle(t('Assets'));
    dispatch(getAssetChildren(0, []));
  }, []);

  const onCreationSuccess = () => {
    setOpenAddModal(false);
    showSnackBar(t('The Asset has been created successfully'), 'success');
  };
  const onCreationFailure = (err) =>
    showSnackBar(t("The Asset couldn't be created"), 'error');

  const columns: GridEnrichedColDef[] = [
    {
      field: 'id',
      headerName: t('ID'),
      description: t('ID'),
      width: 150
    },
    {
      field: 'name',
      headerName: t('Name'),
      description: t('Name'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },
    {
      field: 'location',
      headerName: t('Location'),
      description: t('Location'),
      width: 150,
      valueGetter: (params) => params.row.location?.name
    },
    {
      field: 'image',
      headerName: t('Image'),
      description: t('Image'),
      width: 150
    },
    {
      field: 'area',
      headerName: t('Area'),
      description: t('Area'),
      width: 150
    },
    {
      field: 'model',
      headerName: t('Model'),
      description: t('Model'),
      width: 150
    },
    {
      field: 'barCode',
      headerName: t('BarCode'),
      description: t('BarCode'),
      width: 150
    },
    {
      field: 'category',
      headerName: t('Category'),
      description: t('Category'),
      width: 150
    },
    {
      field: 'description',
      headerName: t('Description'),
      description: t('Description'),
      width: 150
    },
    {
      field: 'primaryUser',
      headerName: t('Primary User'),
      description: t('Primary User'),
      width: 150,
      valueGetter: (params: GridValueGetterParams<UserMiniDTO>) =>
        params.row.primaryUser
          ? `${params.row.primaryUser?.firstName} ${params.row.primaryUser?.lastName}`
          : null
    },
    {
      field: 'assignedTo',
      headerName: t('Users'),
      description: t('Users'),
      width: 150,
      renderCell: (params: GridRenderCellParams<UserMiniDTO[]>) => (
        <UserAvatars users={params.value ?? []} />
      )
    },
    {
      field: 'teams',
      headerName: t('Teams'),
      description: t('Teams'),
      width: 150,
      valueGetter: (params) =>
        enumerate(params.row.teams.map((team) => team.name))
    },
    {
      field: 'vendors',
      headerName: t('Vendors'),
      description: t('Vendors'),
      width: 150,
      valueGetter: (params) =>
        enumerate(params.row.vendors.map((vendor) => vendor.companyName))
    },
    {
      field: 'parentAsset',
      headerName: t('Parent Asset'),
      description: t('Parent Asset'),
      width: 150,
      valueGetter: (params) => params.row.parentAsset?.name
    },
    {
      field: 'openWorkOrders',
      headerName: t('Open Work Orders'),
      description: t('Open Work Orders'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Created At'),
      description: t('Created At'),
      width: 150,
      valueGetter: (params) => getFormattedDate(params.row.createdAt)
    }
  ];
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
      placeholder: t('Model'),
      midWidth: true
    },
    {
      name: 'serialNumber',
      type: 'text',
      label: t('Serial Number'),
      placeholder: t('Serial Number'),
      midWidth: true
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
      fileType: 'image',
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
      label: t('Parent Asset')
    }
  ];
  const shape = {
    name: Yup.string().required(t('Asset name is required')),
    location: Yup.object().required(t('Asset location is required')).nullable()
  };

  useEffect(() => {
    const handleRowExpansionChange: GridEventListener<
      'rowExpansionChange'
    > = async (node) => {
      const row = apiRef.current.getRow(node.id) as AssetRow | null;
      if (!node.childrenExpanded || !row || row.childrenFetched) {
        return;
      }
      apiRef.current.updateRows([
        {
          id: `Loading assets-${node.id}`,
          hierarchy: [...row.hierarchy, '']
        }
      ]);
      dispatch(getAssetChildren(row.id, row.hierarchy));
      // const childrenRows = assetsHierarchy1;
      // apiRef.current.updateRows([
      //   ...childrenRows.map((childRow) => {
      //     return { ...childRow, hierarchy: [...row.hierarchy, childRow.id] };
      //   }),
      //   { id: node.id, childrenFetched: true },
      //   { id: `placeholder-children-${node.id}`, _action: 'delete' }
      // ]);
      //
      // if (childrenRows.length) {
      //   apiRef.current.setRowChildrenExpansion(node.id, true);
      // }
    };
    /**
     * By default, the grid does not toggle the expansion of rows with 0 children
     * We need to override the `cellKeyDown` event listener to force the expansion if there are children on the server
     */
    const handleCellKeyDown: GridEventListener<'cellKeyDown'> = (
      params,
      event
    ) => {
      const cellParams = apiRef.current.getCellParams(params.id, params.field);
      if (cellParams.colDef.type === 'treeDataGroup' && event.key === ' ') {
        event.stopPropagation();
        event.preventDefault();
        event.defaultMuiPrevented = true;

        apiRef.current.setRowChildrenExpansion(
          params.id,
          !params.rowNode.childrenExpanded
        );
      }
    };

    apiRef.current.subscribeEvent(
      'rowExpansionChange',
      handleRowExpansionChange
    );
    apiRef.current.subscribeEvent('cellKeyDown', handleCellKeyDown, {
      isFirst: true
    });
  }, [apiRef]);

  const renderAssetAddModal = () => (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openAddModal}
      onClose={() => setOpenAddModal(false)}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add Asset')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new asset')}
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
            submitText={t('Create Asset')}
            values={{ inServiceDate: null, warrantyExpirationDate: null }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              let formattedValues = formatAssetValues(values);
              return new Promise<void>((resolve, rej) => {
                uploadFiles([], formattedValues.image)
                  .then((files) => {
                    formattedValues = {
                      ...formattedValues,
                      image: files.length ? { id: files[0].id } : null
                    };
                    dispatch(addAsset(formattedValues))
                      .then(onCreationSuccess)
                      .catch(onCreationFailure)
                      .finally(resolve);
                  })
                  .catch((err) => {
                    onCreationFailure(err);
                    rej(err);
                  });
              });
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );

  const groupingColDef: DataGridProProps['groupingColDef'] = {
    headerName: 'Hierarchy',
    renderCell: (params) => <GroupingCellWithLazyLoading {...params} />
  };

  return (
    <>
      {renderAssetAddModal()}
      <Helmet>
        <title>{t('Assets')}</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={1}
        paddingX={4}
      >
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="row"
          justifyContent="right"
          alignItems="center"
        >
          <Button
            onClick={() => setOpenAddModal(true)}
            startIcon={<AddTwoToneIcon />}
            sx={{ mx: 6, my: 1 }}
            variant="contained"
          >
            Asset
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Card
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ height: 500, width: '95%' }}>
              <CustomDataGrid
                treeData
                columns={columns}
                rows={assetsHierarchy}
                apiRef={apiRef}
                getTreeDataPath={(row) =>
                  row.hierarchy.map((id) => id.toString())
                }
                groupingColDef={groupingColDef}
                components={{
                  Toolbar: GridToolbar
                }}
                onRowClick={(params) => {
                  navigate(getAssetUrl(params.id));
                }}
                initialState={{
                  columns: {
                    columnVisibilityModel: {}
                  }
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Assets;

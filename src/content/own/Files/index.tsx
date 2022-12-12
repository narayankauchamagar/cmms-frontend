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
import { useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridRenderCellParams,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import { useDispatch, useSelector } from '../../../store';
import { addFiles, deleteFile, editFile, getFiles } from '../../../slices/file';
import { IField } from '../type';
import Form from '../components/form';
import * as Yup from 'yup';
import File from '../../../models/owns/file';
import useAuth from '../../../hooks/useAuth';
import { PermissionEntity } from '../../../models/owns/role';
import PermissionErrorMessage from '../components/PermissionErrorMessage';
import { PlanFeature } from '../../../models/owns/subscriptionPlan';
import FeatureErrorMessage from '../components/FeatureErrorMessage';
import ConfirmDialog from '../components/ConfirmDialog';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const { getFormattedDate } = useContext(CompanySettingsContext);
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { files, loadingGet } = useSelector((state) => state.files);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [currentFile, setCurrentFile] = useState<File>();
  const handleOpenDelete = (id: number) => {
    setCurrentFile(files.find((file) => file.id === id));
    setOpenDelete(true);
  };
  const handleDelete = (id: number) => {
    dispatch(deleteFile(id)).then(onDeleteSuccess).catch(onDeleteFailure);
    setOpenDelete(false);
  };

  const handleRename = (id: number) => {
    setCurrentFile(files.find((file) => file.id === id));
    setOpenUpdateModal(true);
  };
  const onDeleteSuccess = () => {
    showSnackBar(t('The file has been deleted successfully'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t("The file couldn't be deleted"), 'error');

  const {
    hasViewPermission,
    hasEditPermission,
    hasCreatePermission,
    hasDeletePermission,
    hasFeature
  } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    setTitle(t('Files'));
    if (hasViewPermission(PermissionEntity.FILES)) dispatch(getFiles());
  }, []);

  const fields: Array<IField> = [
    {
      name: 'files',
      type: 'file',
      label: t('Files'),
      fileType: 'file',
      multiple: true
    }
  ];
  const updateFields: Array<IField> = [
    {
      name: 'name',
      type: 'text',
      label: t('Name'),
      required: true
    }
  ];
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
      field: 'createdBy',
      headerName: t('Uploaded By'),
      description: t('Uploaded By'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Uploaded On'),
      description: t('Uploaded On'),
      width: 150,
      valueGetter: (params) => getFormattedDate(params.row.createdAt)
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: t('Actions'),
      description: t('Actions'),
      getActions: (params: GridRowParams<File>) => {
        let actions = [
          <GridActionsCellItem
            key="rename"
            icon={<EditTwoToneIcon fontSize="small" color="primary" />}
            onClick={() => handleRename(Number(params.id))}
            label="Rename"
          />,
          <GridActionsCellItem
            key="delete"
            icon={<DeleteTwoToneIcon fontSize="small" color="error" />}
            onClick={() => handleOpenDelete(Number(params.id))}
            label="Delete"
          />
        ];
        if (!hasEditPermission(PermissionEntity.FILES, params.row)) {
          actions.shift();
        }
        if (!hasDeletePermission(PermissionEntity.FILES, params.row)) {
          actions.pop();
        }
        return actions;
      }
    }
  ];
  const shape = {
    files: Yup.array().required(t('Please upload at least a file'))
  };
  const updateShape = {
    name: Yup.string().required(t('Please enter a file name'))
  };
  const renderAddModal = () => {
    return (
      <Dialog
        fullWidth
        maxWidth="sm"
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('Add Files')}
          </Typography>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            p: 3
          }}
        >
          <Form
            fields={fields}
            validation={Yup.object().shape(shape)}
            submitText={t('Add')}
            values={{}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              return dispatch(addFiles(values.files)).then(() =>
                setOpenAddModal(false)
              );
            }}
          />
        </DialogContent>
      </Dialog>
    );
  };
  const renderUpdateModal = () => {
    return (
      <Dialog
        fullWidth
        maxWidth="sm"
        open={openUpdateModal}
        onClose={() => setOpenUpdateModal(false)}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('Edit File')}
          </Typography>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            p: 3
          }}
        >
          <Form
            fields={updateFields}
            validation={Yup.object().shape(updateShape)}
            submitText={t('Save')}
            values={{ ...currentFile }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              return dispatch(
                editFile(currentFile.id, { ...currentFile, name: values.name })
              ).then(() => setOpenUpdateModal(false));
            }}
          />
        </DialogContent>
      </Dialog>
    );
  };
  if (hasFeature(PlanFeature.FILE)) {
    if (hasViewPermission(PermissionEntity.FILES))
      return (
        <>
          <Helmet>
            <title>{t('Files')}</title>
          </Helmet>
          <Grid
            container
            justifyContent="center"
            alignItems="stretch"
            spacing={1}
            paddingX={4}
          >
            {hasCreatePermission(PermissionEntity.FILES) && (
              <Grid
                item
                xs={12}
                display="flex"
                flexDirection="row"
                justifyContent="right"
                alignItems="center"
              >
                <Button
                  startIcon={<AddTwoToneIcon />}
                  onClick={() => setOpenAddModal(true)}
                  sx={{ mx: 6, my: 1 }}
                  variant="contained"
                >
                  File
                </Button>
              </Grid>
            )}
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
                    columns={columns}
                    rows={files}
                    loading={loadingGet}
                    components={{
                      Toolbar: GridToolbar
                    }}
                    onRowClick={(params: GridRowParams<File>) =>
                      window.open(params.row.url, '_blank')
                    }
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
          <ConfirmDialog
            open={openDelete}
            onCancel={() => {
              setOpenDelete(false);
            }}
            onConfirm={() => handleDelete(currentFile?.id)}
            confirmText={t('Delete')}
            question={t('Are you sure you want to delete this File?')}
          />
          {renderAddModal()}
          {renderUpdateModal()}
        </>
      );
    else
      return (
        <PermissionErrorMessage
          message={
            "You don't have access to Files. Please contact your administrator if you should have access"
          }
        />
      );
  } else
    return (
      <FeatureErrorMessage
        message={
          'Upgrade to use files in your Assets, Work Orders, Locations etc...'
        }
      />
    );
}

export default Files;

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
import { addFiles, getFiles } from '../../../slices/file';
import { IField } from '../type';
import Form from '../components/form';
import * as Yup from 'yup';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const { getFormattedDate } = useContext(CompanySettingsContext);
  const { files } = useSelector((state) => state.files);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const handleDelete = (id: number) => {};
  const handleRename = (id: number) => {};
  const dispatch = useDispatch();
  useEffect(() => {
    setTitle(t('Files'));
    dispatch(getFiles());
  }, []);

  const fields: Array<IField> = [
    {
      name: 'files',
      type: 'file',
      label: t('Files'),
      fileType: 'file'
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
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key="rename"
          icon={<EditTwoToneIcon fontSize="small" color="primary" />}
          onClick={() => handleRename(Number(params.id))}
          label="Rename"
        />,
        <GridActionsCellItem
          key="delete"
          icon={<DeleteTwoToneIcon fontSize="small" color="error" />}
          onClick={() => handleDelete(Number(params.id))}
          label="Delete"
        />
      ]
    }
  ];
  const shape = {
    files: Yup.array().required(t('Please upload at least a file'))
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
                components={{
                  Toolbar: GridToolbar
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
      {renderAddModal()}
    </>
  );
}

export default Files;

import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Grid,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import {
  addRequest,
  getRequests,
  editRequest,
  deleteRequest
} from '../../../slices/request';
import { useDispatch, useSelector } from '../../../store';
import ConfirmDialog from '../components/ConfirmDialog';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import { GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Request from '../../../models/owns/request';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import RequestDetails from './RequestDetails';
import { useParams } from 'react-router-dom';
import { isNumeric } from '../../../utils/validators';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [currentRequest, setCurrentRequest] = useState<Request>();
  const { requestId } = useParams();
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { requests } = useSelector((state) => state.requests);

  useEffect(() => {
    setTitle(t('Requests'));
    dispatch(getRequests());
  }, []);
  useEffect(() => {
    if (requests?.length && requestId && isNumeric(requestId)) {
      handleOpenDetails(Number(requestId));
    }
  }, [requests]);

  const handleDelete = (id: number) => {
    handleCloseDetails();
    dispatch(deleteRequest(id));
    setOpenDelete(false);
  };
  const handleOpenUpdate = () => {
    setOpenUpdateModal(true);
  };
  const handleOpenDetails = (id: number) => {
    const foundRequest = requests.find((request) => request.id === id);
    if (foundRequest) {
      setCurrentRequest(foundRequest);
      window.history.replaceState(
        null,
        'Request details',
        `/app/requests/${id}`
      );
      setOpenDrawer(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(null, 'Request', `/app/requests`);
    setOpenDrawer(false);
  };
  const columns: GridEnrichedColDef[] = [
    {
      field: 'title',
      headerName: t('Title'),
      description: t('Title'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },
    {
      field: 'description',
      headerName: t('Description'),
      description: t('Description'),
      width: 150
    },
    {
      field: 'priority',
      headerName: t('Priority'),
      description: t('Priority'),
      width: 150
    },
    {
      field: 'status',
      headerName: t('Status'),
      description: t('Status'),
      width: 150
    }
  ];
  const fields: Array<IField> = [
    {
      name: 'title',
      type: 'text',
      label: t('Title'),
      placeholder: t('Enter Request Title'),
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
      name: 'priority',
      type: 'select',
      type2: 'priority',
      label: t('Priority'),
      placeholder: t('Priority')
    },
    {
      name: 'image',
      type: 'file',
      label: t('Image'),
      fileType: 'image'
    },
    {
      name: 'files',
      type: 'file',
      label: t('Files'),
      fileType: 'file'
    }
  ];
  const shape = {
    title: Yup.string().required(t('Request name is required')),
    priority: Yup.object().required(t('Priority is required')).nullable()
  };
  const renderAddModal = () => (
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
          {t('Add Request')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new Request')}
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
            submitText={t('Add')}
            values={{}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                values.priority = values.priority?.value;
                dispatch(addRequest(values));
                setOpenAddModal(false);
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  const renderUpdateModal = () => (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openUpdateModal}
      onClose={() => setOpenUpdateModal(false)}
    >
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Edit Request')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to edit the Request')}
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
            values={currentRequest}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                values.priority = values.priority?.value;
                dispatch(editRequest(currentRequest?.id, values));
                setOpenUpdateModal(false);
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
  return (
    <>
      <Helmet>
        <title>{t('Requests')}</title>
      </Helmet>
      {renderAddModal()}
      {renderUpdateModal()}
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
            sx={{ mx: 6, my: 1 }}
            variant="contained"
            onClick={() => setOpenAddModal(true)}
          >
            Request
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
                rows={requests}
                onRowClick={({ id }) => handleOpenDetails(Number(id))}
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
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleCloseDetails}
        PaperProps={{
          sx: { width: '50%' }
        }}
      >
        <RequestDetails
          request={currentRequest}
          handleOpenUpdate={handleOpenUpdate}
          handleOpenDelete={() => setOpenDelete(true)}
        />
      </Drawer>
      <ConfirmDialog
        open={openDelete}
        onCancel={() => {
          setOpenDelete(false);
          setOpenDrawer(true);
        }}
        onConfirm={() => handleDelete(currentRequest?.id)}
        confirmText={t('Delete')}
        question={t('Are you sure you want to delete this Request?')}
      />
    </>
  );
}

export default Files;

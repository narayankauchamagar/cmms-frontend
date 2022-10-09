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
import { files } from '../../../models/owns/file';
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
import { meters } from '../../../models/owns/meter';
import Form from '../components/form';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import { IField } from '../type';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  useEffect(() => {
    setTitle(t('Meters'));
  }, []);

  const columns: GridEnrichedColDef[] = [
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
      field: 'nextReading',
      headerName: t('Next Reading Due'),
      description: t('Next Reading'),
      width: 150
    },
    {
      field: 'unit',
      headerName: t('Unit of Measurement'),
      description: t('Unit of Measurement'),
      width: 150
    },
    {
      field: 'lastReading',
      headerName: t('Last Reading'),
      description: t('Last Reading'),
      width: 150,
      valueGetter: (params) =>
        params.row.readings[params.row.readings.length - 1].value
    },
    {
      field: 'location',
      headerName: t('Location'),
      description: t('Location'),
      width: 150,
      valueGetter: (params) => params.row.location.name
    },
    {
      field: 'asset',
      headerName: t('Asset'),
      description: t('Asset'),
      width: 150,
      valueGetter: (params) => params.row.asset.name
    },
    {
      field: 'createdBy',
      headerName: t('Created By'),
      description: t('Created By'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Date Created'),
      description: t('Date Created'),
      width: 150
    }
  ];
  const fields: Array<IField> = [
    {
      name: 'name',
      type: 'text',
      label: t('Name'),
      placeholder: t('Enter Meter name'),
      required: true
    },
    {
      name: 'unit',
      type: 'text',
      label: t('Unit'),
      placeholder: t('Unit'),
      required: true
    },
    {
      name: 'updateFrequency',
      type: 'number',
      label: t('Update Frequency'),
      placeholder: t('Update Frequency'),
      required: true
    },
    {
      name: 'category',
      type: 'text',
      label: t('Category'),
      placeholder: t('Category')
    },
    {
      name: 'image',
      type: 'file',
      label: t('Image'),
      fileType: 'image'
    },
    {
      name: 'vendors',
      type: 'select',
      type2: 'user',
      label: t('Workers'),
      multiple: true
    },
    {
      name: 'location',
      type: 'select',
      type2: 'location',
      label: t('Location')
    },
    {
      name: 'assets',
      type: 'select',
      type2: 'asset',
      label: t('Asset')
    }
  ];
  const shape = {
    name: Yup.string().required(t('Meter name is required')),
    unit: Yup.string().required(t('Meter unit is required')),
    updateFrequency: Yup.string().required(
      t('Meter update frequency is required')
    )
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
          {t('Add Meter')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new Meter')}
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
                await wait(2000);
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
  return (
    <>
      <Helmet>
        <title>{t('Meters')}</title>
      </Helmet>
      {renderAddModal()}
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
            Meter
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
                rows={meters}
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
    </>
  );
}

export default Files;

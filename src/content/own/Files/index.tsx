import { Helmet } from 'react-helmet-async';
import { Box, Card, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TableCustomizedColumnType } from '../type';
import TableCustomized from '../components/TableCustomized';
import File from '../../../models/owns/file';
import { useContext, useEffect } from 'react';
import { TitleContext } from '../../../contexts/TitleContext';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';

function Files() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const handleDelete = (id: number) => {};
  const handleRename = (id: number) => {};
  useEffect(() => {
    setTitle(t('Files'));
  }, []);

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
      width: 150
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
      width: 150
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
  const files: File[] = [
    {
      id: 74,
      name: 'ghgvhb',
      createdAt: 'dfggj',
      createdBy: 'ghu',
      updatedAt: 'ghfgj',
      updatedBy: 'ghfgj'
    }
  ];
  return (
    <>
      <Helmet>
        <title>{t('Files')}</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        padding={4}
      >
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
    </>
  );
}

export default Files;

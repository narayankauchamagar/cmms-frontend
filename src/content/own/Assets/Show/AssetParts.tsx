import { Box, Card, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from '../../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useNavigate } from 'react-router-dom';
import { AssetDTO } from '../../../../models/owns/asset';

interface PropsType {
  asset: AssetDTO;
}

const AssetParts = ({ asset }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const handleDelete = (id: number) => {};
  const navigate = useNavigate();
  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('Name'),
      description: t('Name'),
      width: 150
    },
    {
      field: 'cost',
      headerName: t('Cost'),
      description: t('Cost'),
      width: 150
    },
    {
      field: 'description',
      headerName: t('Description'),
      description: t('Description'),
      width: 150
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: t('Actions'),
      description: t('Actions'),
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key="delete"
          icon={<DeleteTwoToneIcon fontSize="small" color="error" />}
          onClick={() => handleDelete(Number(params.id))}
          label="Remove part"
        />
      ]
    }
  ];
  return (
    <Box sx={{ px: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ height: 500, width: '95%' }}>
              <CustomDataGrid
                columns={columns}
                rows={asset?.parts ?? []}
                components={{
                  Toolbar: GridToolbar
                }}
                onRowClick={(params) => {
                  navigate(`/app/inventory/parts/${params.id}/`);
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
    </Box>
  );
};

export default AssetParts;

import { Box, Button, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import CustomDataGrid from '../../components/CustomDatagrid';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import {
  GridRenderCellParams,
  GridToolbar,
  GridValueGetterParams
} from '@mui/x-data-grid';
import { Checklist, checklists } from '../../../../models/owns/checklists';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import SelectTasksModal from '../../components/form/SelectTasks';
import { useState } from 'react';

function Checklists() {
  const { t }: { t: any } = useTranslation();
  const [openTask, setOpenTask] = useState(false);
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
      field: 'description',
      headerName: t('Description'),
      description: t('Description'),
      width: 150
    },
    {
      field: 'category',
      headerName: t('Category'),
      description: t('Category'),
      width: 150
    },
    {
      field: 'tasks',
      headerName: t('Tasks'),
      description: t('Tasks'),
      valueGetter: (params: GridValueGetterParams<Checklist>) =>
        params.row.tasks.length,
      width: 150
    }
  ];
  return (
    <SettingsLayout tabIndex={4}>
      <Grid item xs={12}>
        <Box
          sx={{
            height: 400,
            width: '95%',
            p: 4
          }}
        >
          <Button
            sx={{
              mb: 2
            }}
            variant="contained"
            onClick={() => setOpenTask(true)}
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {t('Create Checklist')}
          </Button>
          <CustomDataGrid
            columns={columns}
            rows={checklists}
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
      </Grid>
      <SelectTasksModal
        open={openTask}
        onClose={() => setOpenTask(false)}
        selected={[]}
        onSelect={(tasks, { name, description, category }) => {}}
        createChecklist={true}
      />
    </SettingsLayout>
  );
}

export default Checklists;

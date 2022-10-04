import {
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { parts } from '../../../models/owns/part';
import { ChangeEvent, useState } from 'react';

interface PropsType {}

const Parts = ({}: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('list');
  const tabs = [
    { value: 'list', label: t('List View') },
    { value: 'card', label: t('Card View') }
  ];
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
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
      field: 'number',
      headerName: t('Number'),
      description: t('Number'),
      width: 150
    }
  ];
  return (
    <Box sx={{ p: 2 }}>
      <Tabs
        sx={{ mb: 2 }}
        onChange={handleTabsChange}
        value={currentTab}
        variant="scrollable"
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      <Box sx={{ height: 500, width: '95%' }}>
        <CustomDataGrid
          columns={columns}
          rows={parts}
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
    </Box>
  );
};

export default Parts;

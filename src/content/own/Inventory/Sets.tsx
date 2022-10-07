import {
  Box,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
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
  GridRenderCellParams,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { parts } from '../../../models/owns/part';
import { ChangeEvent, useEffect, useState } from 'react';
import * as Yup from 'yup';
import Form from '../components/form';
import wait from '../../../utils/wait';
import { IField } from '../type';
import { sets } from '../../../models/owns/set';

interface PropsType {
  setAction: (p: () => () => void) => void;
}

const Sets = ({ setAction }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('list');
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const tabs = [
    { value: 'list', label: t('List View') },
    { value: 'card', label: t('Card View') }
  ];

  useEffect(() => {
    const handleOpenModal = () => setOpenAddModal(true);
    setAction(() => handleOpenModal);
  }, []);

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
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
      field: 'parts',
      headerName: t('Parts'),
      description: t('Parts'),
      width: 150
    },
    {
      field: 'cost',
      headerName: t('Total Cost'),
      description: t('Total Cost'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Date created'),
      description: t('Date created'),
      width: 150
    }
  ];
  const fields: Array<IField> = [
    {
      name: 'name',
      type: 'text',
      label: t('Name'),
      placeholder: t('Enter Part name'),
      required: true
    }
  ];
  const shape = {
    name: Yup.string().required(t('Set name is required'))
  };
  const renderSetAddModal = () => (
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
          {t('Add Set')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new Set')}
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
            submitText={t('Create Set')}
            values={{}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                await wait(2000);
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
    <Box sx={{ p: 2 }}>
      {renderSetAddModal()}
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
      {currentTab === 'list' && (
        <Box sx={{ height: 500, width: '95%' }}>
          <CustomDataGrid
            columns={columns}
            rows={sets}
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
      )}
    </Box>
  );
};

export default Sets;

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

interface PropsType {
  setAction: (p: () => () => void) => void;
}

const Parts = ({ setAction }: PropsType) => {
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
      width: 150
    },
    {
      field: 'cost',
      headerName: t('Cost'),
      description: t('Cost'),
      width: 150
    },
    {
      field: 'quantity',
      headerName: t('Quantity'),
      description: t('Quantity'),
      width: 150
    },
    {
      field: 'barCode',
      headerName: t('Barcode'),
      description: t('Barcode'),
      width: 150
    },
    {
      field: 'area',
      headerName: t('Area'),
      description: t('Area'),
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
      field: 'location',
      headerName: t('Location'),
      description: t('Location'),
      width: 150
    },
    {
      field: 'users',
      headerName: t('Assigned Users'),
      description: t('Assigned Users'),
      width: 150
    },
    {
      field: 'vendors',
      headerName: t('Assigned Vendors'),
      description: t('Assigned Vendors'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Date Created'),
      description: t('Date Created'),
      width: 150
    },
    {
      field: 'openWorkOrders',
      headerName: t('Open Work Orders'),
      description: t('Open Work Orders'),
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
    },
    {
      name: 'description',
      type: 'text',
      label: t('Description'),
      placeholder: t('Description'),
      multiple: true
    },
    {
      name: 'category',
      type: 'text',
      label: t('Category'),
      placeholder: t('Enter Part category')
    },
    {
      name: 'cost',
      type: 'number',
      label: t('Cost'),
      placeholder: t('Enter Part cost')
    },
    {
      name: 'quantity',
      type: 'number',
      label: t('Quantity'),
      placeholder: t('Enter Part quantity')
    },
    {
      name: 'minQuantity',
      type: 'number',
      label: t('Minimum Quantity'),
      placeholder: t('Enter Part minimum quantity')
    },
    {
      name: 'nonStock',
      type: 'checkbox',
      label: t('Non Stock')
    },
    {
      name: 'barcode',
      type: 'text',
      label: t('Barcode'),
      placeholder: t('Enter Part Barcode')
    },
    {
      name: 'area',
      type: 'text',
      label: t('Area'),
      placeholder: t('Enter Part Area')
    },
    {
      name: 'additionalInfos',
      type: 'text',
      label: t('Additional Part Details'),
      placeholder: t('Additional Part Details'),
      multiple: true
    }
  ];
  const shape = {
    name: Yup.string().required(t('Part name is required'))
  };
  const renderPartAddModal = () => (
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
          {t('Add Part')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new Part')}
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
            submitText={t('Create Part')}
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
      {renderPartAddModal()}
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
      )}
    </Box>
  );
};

export default Parts;

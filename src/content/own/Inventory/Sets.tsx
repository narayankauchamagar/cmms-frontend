import {
  Box,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from '../components/CustomDatagrid';
import { GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { parts } from '../../../models/owns/part';
import { ChangeEvent, useEffect, useState } from 'react';
import * as Yup from 'yup';
import Form from '../components/form';
import wait from '../../../utils/wait';
import { IField } from '../type';
import SetType, { sets } from '../../../models/owns/setType';
import SetDetails from './SetDetails';
import { useParams } from 'react-router-dom';
import { isNumeric } from '../../../utils/validators';

interface PropsType {
  setAction: (p: () => () => void) => void;
}

const Sets = ({ setAction }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState<string>('list');
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [currentSet, setCurrentSet] = useState<SetType>();
  const tabs = [
    { value: 'list', label: t('List View') },
    { value: 'card', label: t('Card View') }
  ];
  const { setId } = useParams();

  const handleUpdate = (id: number) => {
    setCurrentSet(sets.find((set) => set.id === id));
    setOpenUpdateModal(true);
  };

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
      width: 150,
      valueGetter: (params) => params.row.parts.length
    },
    {
      field: 'cost',
      headerName: t('Total Cost'),
      description: t('Total Cost'),
      width: 150,
      valueGetter: (params) =>
        params.row.parts.reduce((acc, part) => acc + part.cost, 0)
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
    },
    {
      name: 'partsTitle',
      type: 'titleGroupField',
      label: t('Parts')
    },
    {
      name: 'parts',
      type: 'select',
      type2: 'part',
      label: t('Part'),
      placeholder: t('Enter Part name')
    }
  ];
  const shape = {
    name: Yup.string().required(t('Set name is required'))
  };

  useEffect(() => {
    if (setId && isNumeric(setId)) {
      handleOpenDetails(Number(setId));
    }
  }, [sets]);

  const handleOpenDetails = (id: number) => {
    const foundSet = sets.find((set) => set.id === id);
    if (foundSet) {
      setCurrentSet(foundSet);
      window.history.replaceState(
        null,
        'Set details',
        `/app/inventory/sets/${id}`
      );
      setOpenDrawer(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(null, 'Sets', `/app/inventory/sets`);
    setOpenDrawer(false);
    setCurrentSet(null);
  };
  const fieldsToRender = (set: SetType) => [
    {
      label: t('Parts'),
      value: set.parts.length
    },
    {
      label: t('Total Cost'),
      value: set.parts.reduce((acc, part) => acc + part.cost, 0)
    }
  ];
  const renderField = (label, value) => {
    return (
      <Grid item xs={12} key={label}>
        <Stack spacing={1} direction="row">
          <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
            {label}
          </Typography>
          <Typography variant="h6">{value}</Typography>
        </Stack>
      </Grid>
    );
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
                console.log(values);
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
  const renderSetUpdateModal = () => (
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
          {t('Edit Set')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to edit the Set')}
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
            submitText={t('Edit Set')}
            values={{
              ...currentSet,
              parts: currentSet?.parts?.map((part) => {
                return {
                  label: part.name,
                  value: part.id.toString()
                };
              })
            }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                await wait(2000);
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
    <Box sx={{ p: 2 }}>
      {renderSetAddModal()}
      {renderSetUpdateModal()}
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
            onRowClick={(params) => {
              handleOpenDetails(Number(params.id));
            }}
            initialState={{
              columns: {
                columnVisibilityModel: {}
              }
            }}
          />
        </Box>
      )}
      {currentTab === 'card' && (
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {sets.map((set) => (
              <Grid item xs={12} lg={3} key={set.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="280"
                    image="/static/images/placeholders/covers/2.jpg"
                    alt="..."
                  />
                </Card>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h4">{set.name}</Typography>
                  <Box sx={{ mt: 1 }}>
                    {fieldsToRender(set).map((field) =>
                      renderField(field.label, field.value)
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleCloseDetails}
        PaperProps={{
          sx: { width: '50%' }
        }}
      >
        <SetDetails set={currentSet} handleUpdate={handleUpdate} />
      </Drawer>
    </Box>
  );
};

export default Sets;

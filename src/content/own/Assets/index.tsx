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
import { IField, TableCustomizedColumnType } from '../type';
import TableCustomized from '../components/TableCustomized';
import File from '../../../models/owns/file';
import { useContext, useEffect, useState } from 'react';
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
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { AssetDTO } from '../../../models/owns/asset';
import Form from '../components/form';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import User from '../../../models/owns/user';
import Team from '../../../models/owns/team';
import { Customer } from '../../../models/owns/customer';

function Assets() {
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [customers, setCustomers] = useState([]);
  const [fetchingCustomers, setFetchingCustomers] = useState(false);
  useEffect(() => {
    setTitle(t('Assets'));
  }, []);

  const fetchCustomers = async () => {
    setFetchingCustomers(true);
    const _customers: Customer[] = [
      {
        id: '1',
        name: 'Customer 1',
        address: 'casa, maroc',
        phone: '+00212611223344',
        website: 'https://web-site.com',
        email: 'john.doe@gmail.com',
        customerType: 'Plumbing',
        description: 'Describe...',
        rate: 10,
        address1: 'Add 1',
        address2: '-',
        address3: 'Add 3',
        currency: 'MAD, dirham'
      },
      {
        id: '2',
        name: 'Customer 2',
        address: 'casa, maroc',
        phone: '+00212611223344',
        website: 'https://web-site.com',
        email: 'john.doe@gmail.com',
        customerType: 'Electrical',
        description: 'Describe 2...',
        rate: 15,
        address1: 'Add 1',
        address2: '-',
        address3: '-',
        currency: 'Euro'
      }
    ];
    await wait(2000);
    setFetchingCustomers(false);
    setCustomers(_customers);
  };
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
      field: 'location',
      headerName: t('Location'),
      description: t('Location'),
      width: 150
    },
    {
      field: 'image',
      headerName: t('Image'),
      description: t('Image'),
      width: 150
    },
    {
      field: 'area',
      headerName: t('Area'),
      description: t('Area'),
      width: 150
    },
    {
      field: 'model',
      headerName: t('Model'),
      description: t('Model'),
      width: 150
    },
    {
      field: 'barCode',
      headerName: t('BarCode'),
      description: t('BarCode'),
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
      field: 'primaryUser',
      headerName: t('Primary User'),
      description: t('Primary User'),
      width: 150
    },
    {
      field: 'users',
      headerName: t('Users'),
      description: t('Users'),
      width: 150
    },
    {
      field: 'teams',
      headerName: t('Teams'),
      description: t('Teams'),
      width: 150
    },
    {
      field: 'vendors',
      headerName: t('Vendors'),
      description: t('Vendors'),
      width: 150
    },
    {
      field: 'parentAsset',
      headerName: t('Parent Asset'),
      description: t('Parent Asset'),
      width: 150
    },
    {
      field: 'openWorkOrders',
      headerName: t('Open Work Orders'),
      description: t('Open Work Orders'),
      width: 150
    },
    {
      field: 'createdAt',
      headerName: t('Created At'),
      description: t('Created At'),
      width: 150
    }
  ];
  const assets: AssetDTO[] = [
    {
      id: 1,
      name: 'Name',
      image: 'Image',
      location: 'Location',
      area: 'Area',
      model: 'Model',
      barCode: 'Barcode',
      category: 'Category',
      description: 'desc',
      primaryUser: 'user',
      users: 1,
      teams: 4,
      vendors: 3,
      parentAsset: 'string',
      openWorkOrders: 2,
      createdAt: 'dfggj',
      createdBy: 'ghu',
      updatedAt: 'ghfgj',
      updatedBy: 'ghfgj'
    }
  ];
  const workers: User[] = [
    {
      id: 21,
      firstName: 'gfgb',
      lastName: 'fglink'
    },
    {
      id: 22,
      firstName: 'Hgcgbv',
      lastName: 'gvghv'
    }
  ];
  const teams: Team[] = [
    {
      id: 21,
      name: 'team1'
    },
    {
      id: 23,
      name: 'team2'
    }
  ];
  const fields: Array<IField> = [
    {
      name: 'assetInfo',
      type: 'titleGroupField',
      label: t('Asset Information')
    },
    {
      name: 'name',
      type: 'text',
      label: t('Name'),
      placeholder: t('Enter asset name'),
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
      name: 'model',
      type: 'text',
      label: t('Model'),
      placeholder: t('Model')
    },
    {
      name: 'category',
      type: 'text',
      midWidth: true,
      label: t('Category'),
      placeholder: t('Category')
    },
    {
      name: 'area',
      type: 'text',
      midWidth: true,
      label: t('Area'),
      placeholder: t('Area')
    },
    {
      name: 'image',
      type: 'file',
      label: t('Image')
    },
    {
      name: 'assignedTo',
      type: 'titleGroupField',
      label: t('Assigned To')
    },
    {
      name: 'primaryUser',
      type: 'select',
      label: 'Worker',
      placeholder: 'Select primary user',
      items: workers.map((worker) => {
        return {
          label: `${worker.firstName} ${worker.lastName}`,
          value: worker.id.toString()
        };
      })
    },
    {
      name: 'assignedTo',
      type: 'select',
      multiple: true,
      label: t('Additional Workers'),
      placeholder: 'Select additional workers',
      items: workers.map((worker) => {
        return {
          label: `${worker.firstName} ${worker.lastName}`,
          value: worker.id.toString()
        };
      })
    },
    {
      name: 'teams',
      type: 'select',
      multiple: true,
      label: t('Teams'),
      placeholder: 'Select teams',
      items: teams.map((team) => {
        return {
          label: team.name,
          value: team.id.toString()
        };
      })
    },
    {
      name: 'moreInfos',
      type: 'titleGroupField',
      label: t('More Informations')
    },
    {
      name: 'customers',
      type: 'select',
      multiple: true,
      label: t('Customers'),
      placeholder: 'Select customers',
      onPress: fetchCustomers,
      loading: fetchingCustomers,
      items: customers.map((customer) => {
        return {
          label: customer.name,
          value: customer.id.toString()
        };
      })
    },
    {
      name: 'structure',
      type: 'titleGroupField',
      label: t('Structure')
    }
  ];
  const shape = {
    name: Yup.string().required(t('Asset name is required'))
  };
  const renderAssetAddModal = () => (
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
          {t('Add Asset')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new asset')}
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
            submitText={t('Create Asset')}
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
    <>
      {renderAssetAddModal()}
      <Helmet>
        <title>{t('Assets')}</title>
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
            onClick={() => setOpenAddModal(true)}
            startIcon={<AddTwoToneIcon />}
            sx={{ mx: 6, my: 1 }}
            variant="contained"
          >
            Asset
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
                rows={assets}
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

export default Assets;

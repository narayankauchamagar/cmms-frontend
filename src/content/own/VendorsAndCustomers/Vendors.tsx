import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material';
import {
  addVendor,
  deleteVendor,
  editVendor,
  getVendors
} from '../../../slices/vendor';
import { useDispatch, useSelector } from '../../../store';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import ConfirmDialog from '../components/ConfirmDialog';
import { useContext, useEffect, useState } from 'react';
import CustomDataGrid from '../components/CustomDatagrid';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import {
  GridEnrichedColDef,
  GridRenderCellParams,
  GridToolbar
} from '@mui/x-data-grid';
import {
  emailRegExp,
  isNumeric,
  phoneRegExp,
  websiteRegExp
} from '../../../utils/validators';
import { Close } from '@mui/icons-material';
import { Vendor } from '../../../models/owns/vendor';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { PermissionEntity } from '../../../models/owns/role';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Vendors = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const [isVendorDetailsOpen, setIsVendorDetailsOpen] =
    useState<boolean>(false);
  const { vendorId } = useParams();
  const dispatch = useDispatch();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { vendors, loadingGet } = useSelector((state) => state.vendors);
  const [currentVendor, setCurrentVendor] = useState<Vendor>();
  const [viewOrUpdate, setViewOrUpdate] = useState<'view' | 'update'>('view');
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { hasEditPermission, hasDeletePermission } = useAuth();

  useEffect(() => {
    dispatch(getVendors());
  }, []);

  const handleDelete = (id: number) => {
    handleCloseDetails();
    dispatch(deleteVendor(id)).then(onDeleteSuccess).catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const onCreationSuccess = () => {
    handleCloseModal();
    showSnackBar(t('The Vendor has been created successfully'), 'success');
  };
  const onCreationFailure = (err) =>
    showSnackBar(t("The Vendor couldn't be created"), 'error');
  const onEditSuccess = () => {
    setViewOrUpdate('view');
    showSnackBar(t('The changes have been saved'), 'success');
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The Vendor couldn't be edited"), 'error');
  const onDeleteSuccess = () => {
    showSnackBar(t('The Vendor has been deleted successfully'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t("The Customer couldn't be deleted"), 'error');
  const handleOpenDetails = (id: number) => {
    const foundVendor = vendors.find((vendor) => vendor.id === id);
    if (foundVendor) {
      setCurrentVendor(foundVendor);
      window.history.replaceState(
        null,
        'Vendor details',
        `/app/vendors-customers/vendors/${id}`
      );
      setIsVendorDetailsOpen(true);
    }
  };
  const handleCloseDetails = () => {
    window.history.replaceState(
      null,
      'Vendors',
      `/app/vendors-customers/vendors`
    );
    setIsVendorDetailsOpen(false);
  };
  useEffect(() => {
    if (vendors?.length && vendorId && isNumeric(vendorId)) {
      handleOpenDetails(Number(vendorId));
    }
  }, [vendors]);

  let fields: Array<IField> = [
    {
      name: 'companyName',
      type: 'text',
      label: 'Company Name',
      placeholder: 'Grash',
      required: true
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      placeholder: 'Casa, Maroc'
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      placeholder: '+00212611223344',
      required: true
    },
    {
      name: 'website',
      type: 'text',
      label: 'Website',
      placeholder: 'https://web-site.com'
    },
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'John Doe'
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'john.doe@gmail.com'
    },
    {
      name: 'vendorType',
      type: 'text',
      label: 'Vendor Type',
      placeholder: 'ex. Plumbing, Electrical'
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      multiple: true,
      placeholder: 'Describe the purpose of this business in a few line...'
    },
    {
      name: 'rate',
      type: 'number',
      label: 'Rate',
      placeholder: 'Rate',
      icon: '$',
      helperText: 'Changes will only apply to Work Orders created in the future'
    }
  ];

  const shape = {
    companyName: Yup.string().required(t('Company Name is required')),
    rate: Yup.number(),
    phone: Yup.string()
      .matches(phoneRegExp, t('The phone number is invalid'))
      .required(t('The phone number is required')),
    website: Yup.string()
      .matches(websiteRegExp, t('Invalid website'))
      .nullable(),
    email: Yup.string().matches(emailRegExp, t('Invalid email')).nullable()
  };

  const columns: GridEnrichedColDef[] = [
    {
      field: 'companyName',
      headerName: t('Company Name'),
      description: t('Company Name'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },
    {
      field: 'address',
      headerName: t('Address'),
      description: t('Address'),
      width: 150
    },
    {
      field: 'phone',
      headerName: t('Phone'),
      description: t('Phone'),
      width: 150
    },
    {
      field: 'website',
      headerName: t('Website'),
      description: t('Website'),
      width: 150
    },
    {
      field: 'name',
      headerName: t('Name'),
      description: t('Name'),
      width: 150
    },
    {
      field: 'email',
      headerName: t('Email'),
      description: t('Email'),
      width: 150
    },
    {
      field: 'vendorType',
      headerName: t('Vendor Type'),
      description: t('Vendor Type'),
      width: 150
    },
    {
      field: 'description',
      headerName: t('Description'),
      description: t('Description'),
      width: 150
    },
    {
      field: 'rate',
      headerName: t('Rate'),
      description: t('Rate'),
      width: 150
    }
  ];

  // const searchFilterProperties = ['name', 'companyName', 'vendorType', 'email'];
  const fieldsToRender = [
    {
      label: t('Address'),
      value: currentVendor?.address
    },
    {
      label: t('Phone'),
      value: currentVendor?.phone
    },
    {
      label: t('Email'),
      value: currentVendor?.email
    },
    {
      label: t('Type'),
      value: currentVendor?.vendorType
    },
    {
      label: t('Contact name'),
      value: currentVendor?.name
    }
  ];
  const renderKeyAndValue = (key: string, value: string) => {
    if (value)
      return (
        <>
          <Typography variant="subtitle1">{key}</Typography>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {value}
          </Typography>
        </>
      );
  };
  const RenderVendorsAddModal = () => (
    <Dialog fullWidth maxWidth="md" open={openModal} onClose={handleCloseModal}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add vendor')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new vendor')}
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
              const formattedValues = {
                ...values,
                rate: Number(values.rate)
              };
              return dispatch(addVendor(formattedValues))
                .then(onCreationSuccess)
                .catch(onCreationFailure);
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );

  const RenderVendorsList = () => (
    <Box
      sx={{
        height: 400,
        width: '95%'
      }}
    >
      <CustomDataGrid
        rows={vendors}
        columns={columns}
        loading={loadingGet}
        components={{
          Toolbar: GridToolbar
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {}
          }
        }}
        onRowClick={(params) => handleOpenDetails(Number(params.id))}
      />
    </Box>
  );

  const ModalVendorDetails = () => (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={isVendorDetailsOpen}
      onClose={handleCloseDetails}
    >
      <DialogTitle
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {viewOrUpdate === 'view' ? (
            hasEditPermission(
              PermissionEntity.VENDORS_AND_CUSTOMERS,
              currentVendor
            ) && (
              <Typography
                onClick={() => setViewOrUpdate('update')}
                style={{ cursor: 'pointer' }}
                variant="subtitle1"
                mr={2}
              >
                {t('Edit')}
              </Typography>
            )
          ) : (
            <Typography
              onClick={() => setViewOrUpdate('view')}
              style={{ cursor: 'pointer' }}
              variant="subtitle1"
              mr={2}
            >
              {t('Go back')}
            </Typography>
          )}
          {hasDeletePermission(
            PermissionEntity.VENDORS_AND_CUSTOMERS,
            currentVendor
          ) && (
            <Typography
              onClick={() => {
                setIsVendorDetailsOpen(false);
                setOpenDelete(true);
              }}
              variant="subtitle1"
              style={{ cursor: 'pointer' }}
            >
              {t('Delete')}
            </Typography>
          )}
        </Box>
        <IconButton
          aria-label="close"
          onClick={() => {
            setIsVendorDetailsOpen(false);
          }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        {viewOrUpdate === 'view' ? (
          <Box>
            <Typography variant="h4" sx={{ textAlign: 'center' }} gutterBottom>
              {currentVendor?.companyName}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 3 }}>
              {currentVendor?.description}
            </Typography>
            {fieldsToRender.map((field) =>
              renderKeyAndValue(field.label, field.value)
            )}
            {currentVendor?.website && (
              <>
                <Typography variant="subtitle1">{t('Website')}</Typography>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  <a href={currentVendor?.website}>{currentVendor?.website}</a>
                </Typography>
              </>
            )}
          </Box>
        ) : (
          <Box>
            <Form
              fields={fields}
              validation={Yup.object().shape(shape)}
              submitText={t('Save')}
              values={currentVendor || {}}
              onChange={({ field, e }) => {}}
              onSubmit={async (values) => {
                const formattedValues = values.rate
                  ? {
                      ...values,
                      rate: Number(values.rate)
                    }
                  : values;
                return dispatch(editVendor(currentVendor.id, formattedValues))
                  .then(onEditSuccess)
                  .catch(onEditFailure);
              }}
            />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );

  return (
    <Box
      sx={{
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <ModalVendorDetails />
      <RenderVendorsAddModal />
      <RenderVendorsList />
      <ConfirmDialog
        open={openDelete}
        onCancel={() => {
          setOpenDelete(false);
          setIsVendorDetailsOpen(true);
        }}
        onConfirm={() => handleDelete(currentVendor?.id)}
        confirmText={t('Delete')}
        question={t('Are you sure you want to delete this Vendor?')}
      />
    </Box>
  );
};

export default Vendors;

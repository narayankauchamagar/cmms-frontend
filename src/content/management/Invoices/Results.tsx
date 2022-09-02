import { useState, ReactElement, Ref, forwardRef } from 'react';
import type { FC, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import numeral from 'numeral';

import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Grid,
  Slide,
  Divider,
  Tooltip,
  IconButton,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  TextField,
  Button,
  Typography,
  Dialog,
  FormControl,
  Select,
  InputLabel,
  Zoom,
  InputAdornment,
  styled
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import type { Invoice, InvoiceStatus } from 'src/models/invoice';
import { useTranslation } from 'react-i18next';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import Label from 'src/components/Label';
import BulkActions from './BulkActions';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useSnackbar } from 'notistack';
import { format, formatDistance } from 'date-fns';

const DialogWrapper = styled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
      }
`
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(12)};
      height: ${theme.spacing(12)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(45)};
      }
`
);

const ButtonError = styled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);

interface ResultsProps {
  invoices: Invoice[];
}

interface Filters {
  status?: InvoiceStatus;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const getInvoiceStatusLabel = (invoiceStatus: InvoiceStatus): JSX.Element => {
  const map = {
    pending: {
      text: 'Pending Payment',
      color: 'warning'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    draft: {
      text: 'Draft',
      color: 'info'
    },
    progress: {
      text: 'In progress',
      color: 'primary'
    }
  };

  const { text, color }: any = map[invoiceStatus];

  return (
    <Label color={color}>
      <b>{text}</b>
    </Label>
  );
};

const applyFilters = (
  invoices: Invoice[],
  query: string,
  filters: Filters
): Invoice[] => {
  return invoices.filter((invoice) => {
    let matches = true;

    if (query) {
      const properties = ['clientName'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (invoice[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.status && invoice.status !== filters.status) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && invoice[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (
  invoices: Invoice[],
  page: number,
  limit: number
): Invoice[] => {
  return invoices.slice(page * limit, page * limit + limit);
};

const Results: FC<ResultsProps> = ({ invoices }) => {
  const [selectedItems, setSelectedInvoices] = useState<string[]>([]);
  const { t }: { t: any } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [query, setQuery] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  const statusOptions = [
    {
      id: 'all',
      name: 'Show all'
    },
    {
      id: 'pending',
      name: t('Pending Payment')
    },
    {
      id: 'completed',
      name: t('Completed')
    },
    {
      id: 'draft',
      name: t('Draft')
    },
    {
      id: 'progress',
      name: t('In Progress')
    }
  ];

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectAllInvoices = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedInvoices(
      event.target.checked ? invoices.map((invoice) => invoice.id) : []
    );
  };

  const handleSelectOneInvoice = (
    event: ChangeEvent<HTMLInputElement>,
    invoiceId: string
  ): void => {
    if (!selectedItems.includes(invoiceId)) {
      setSelectedInvoices((prevSelected) => [...prevSelected, invoiceId]);
    } else {
      setSelectedInvoices((prevSelected) =>
        prevSelected.filter((id) => id !== invoiceId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredInvoices = applyFilters(invoices, query, filters);
  const paginatedInvoices = applyPagination(filteredInvoices, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeInvoices =
    selectedItems.length > 0 && selectedItems.length < invoices.length;
  const selectedAllInvoices = selectedItems.length === invoices.length;

  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const handleConfirmDelete = () => {
    setOpenConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleDeleteCompleted = () => {
    setOpenConfirmDelete(false);

    enqueueSnackbar(t('Delete action completed successfully'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });
  };

  return (
    <>
      <Card
        sx={{
          p: 2,
          mb: 3,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Grid alignItems="center" container spacing={3}>
          <Grid item xs={12} lg={7} md={6}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                )
              }}
              sx={{
                m: 0
              }}
              onChange={handleQueryChange}
              placeholder={t('Search invoices by client name ...')}
              value={query}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} lg={5} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>{t('Status')}</InputLabel>
              <Select
                value={filters.status || 'all'}
                onChange={handleStatusChange}
                label={t('Status')}
              >
                {statusOptions.map((statusOption) => (
                  <MenuItem key={statusOption.id} value={statusOption.id}>
                    {statusOption.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Card>
      <Card>
        <Box pl={2} display="flex" alignItems="center">
          <Checkbox
            checked={selectedAllInvoices}
            indeterminate={selectedSomeInvoices}
            onChange={handleSelectAllInvoices}
          />
          {selectedBulkActions && (
            <Box flex={1} p={2}>
              <BulkActions />
            </Box>
          )}
          {!selectedBulkActions && (
            <Box
              flex={1}
              p={2}
              display={{ xs: 'block', sm: 'flex' }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography component="span" variant="subtitle1">
                  {t('Showing')}:
                </Typography>{' '}
                <b>{paginatedInvoices.length}</b> <b>{t('invoices')}</b>
              </Box>
              <TablePagination
                component="div"
                count={filteredInvoices.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 15]}
              />
            </Box>
          )}
        </Box>
        <Divider />

        {paginatedInvoices.length === 0 ? (
          <Typography
            sx={{
              py: 10
            }}
            variant="h3"
            fontWeight="normal"
            color="text.secondary"
            align="center"
          >
            {t("We couldn't find any invoices matching your search criteria")}
          </Typography>
        ) : (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{t('#')}</TableCell>
                    <TableCell>{t('Date')}</TableCell>
                    <TableCell>{t('Client')}</TableCell>
                    <TableCell>{t('Amount')}</TableCell>
                    <TableCell>{t('Status')}</TableCell>
                    <TableCell align="center">{t('Actions')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedInvoices.map((invoice) => {
                    const isInvoiceSelected = selectedItems.includes(
                      invoice.id
                    );
                    return (
                      <TableRow
                        hover
                        key={invoice.id}
                        selected={isInvoiceSelected}
                      >
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Checkbox
                              checked={isInvoiceSelected}
                              onChange={(event) =>
                                handleSelectOneInvoice(event, invoice.id)
                              }
                              value={isInvoiceSelected}
                            />
                            <Box pl={1}>
                              <Typography noWrap variant="subtitle2">
                                {invoice.number}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography noWrap>
                            {format(invoice.issuedDate, 'MMMM dd yyyy')}
                          </Typography>
                          <Typography noWrap variant="subtitle1">
                            {t('Due')}{' '}
                            <b>
                              {formatDistance(
                                invoice.dueDate,
                                invoice.issuedDate,
                                {
                                  addSuffix: true
                                }
                              )}
                            </b>
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Avatar
                              sx={{
                                mr: 1
                              }}
                              src={invoice.clientAvatar}
                            />
                            <Typography variant="h5">
                              {invoice.clientName}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          {numeral(invoice.amount).format(
                            `${invoice.currency}0,0.00`
                          )}
                        </TableCell>
                        <TableCell>
                          <Typography noWrap>
                            {getInvoiceStatusLabel(invoice.status)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography noWrap>
                            <Tooltip title={t('View')} arrow>
                              <IconButton
                                component={RouterLink}
                                to={
                                  `/${
                                    location.pathname.split('/')[1]
                                  }/management/invoices/single/` + invoice.id
                                }
                                color="primary"
                              >
                                <LaunchTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title={t('Delete')} arrow>
                              <IconButton
                                onClick={handleConfirmDelete}
                                color="primary"
                              >
                                <DeleteTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <Box p={2}>
              <TablePagination
                component="div"
                count={filteredInvoices.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 15]}
              />
            </Box>
          </>
        )}
      </Card>

      <DialogWrapper
        open={openConfirmDelete}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={closeConfirmDelete}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={5}
        >
          <AvatarError>
            <CloseIcon />
          </AvatarError>

          <Typography
            align="center"
            sx={{
              pt: 4,
              px: 6
            }}
            variant="h3"
          >
            {t('Do you really want to delete this invoice')}?
          </Typography>

          <Typography
            align="center"
            sx={{
              pt: 2,
              pb: 4,
              px: 6
            }}
            fontWeight="normal"
            color="text.secondary"
            variant="h4"
          >
            {t("You won't be able to revert after deletion")}
          </Typography>

          <Box>
            <Button
              variant="text"
              size="large"
              sx={{
                mx: 1
              }}
              onClick={closeConfirmDelete}
            >
              {t('Cancel')}
            </Button>
            <ButtonError
              onClick={handleDeleteCompleted}
              size="large"
              sx={{
                mx: 1,
                px: 3
              }}
              variant="contained"
            >
              {t('Delete')}
            </ButtonError>
          </Box>
        </Box>
      </DialogWrapper>
    </>
  );
};

Results.propTypes = {
  invoices: PropTypes.array.isRequired
};

Results.defaultProps = {
  invoices: []
};

export default Results;

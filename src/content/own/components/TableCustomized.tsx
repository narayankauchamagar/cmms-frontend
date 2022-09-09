import {
  FC,
  ChangeEvent,
  MouseEvent,
  SyntheticEvent,
  useState,
  ReactElement,
  Ref,
  forwardRef,
  useRef
} from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Slide,
  Divider,
  Tooltip,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  Tab,
  Tabs,
  TextField,
  Button,
  Typography,
  Dialog,
  Zoom,
  styled
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import BulkActions from '../Settings/Roles/BulkActions';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useSnackbar } from 'notistack';
import { TableCustomizedColumnType, TableCustomizedDataType } from '../type';

interface TableCustomizedProps {
  data: TableCustomizedDataType[];
  columns: TableCustomizedColumnType[];
  itemLabelBg?: {
    column: string;
    map: { [propName: string]: { [propName: string]: string } };
  }[];
  limitRows?: number;
  enablePagination?: boolean;
  searchFilterProperties?: string[];
  hasBulkActions?: boolean;
  enableTabsFilter?: boolean;
  tabsFilter?: {
    value: string;
    label: any;
  }[];
}

interface Filters {
  type?: any;
  // [propName: string]: any
}

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

// const CardWrapper = styled(Card)(
//   ({ theme }) => `

//     position: relative;
//     overflow: visible;

//     &::after {
//       content: '';
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       top: 0;
//       left: 0;
//       border-radius: inherit;
//       z-index: 1;
//       transition: ${theme.transitions.create(['box-shadow'])};
//     }

//       &.Mui-selected::after {
//         box-shadow: 0 0 0 3px ${theme.colors.primary.main};
//       }
//     `
// );

const ButtonError = styled(Button)(
  ({ theme }) => `
       background: ${theme.colors.error.main};
       color: ${theme.palette.error.contrastText};
  
       &:hover {
          background: ${theme.colors.error.dark};
       }
      `
);

const TabsWrapper = styled(Tabs)(
  ({ theme }) => `
      @media (max-width: ${theme.breakpoints.values.md}px) {
        .MuiTabs-scrollableX {
          overflow-x: auto !important;
        }
  
        .MuiTabs-indicator {
            box-shadow: none;
        }
      }
      `
);

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

// const getRoleTypeLabel = (roleType: RoleType): JSX.Element => {
//   const map = {
//     free: {
//       text: 'Free',
//       color: 'info'
//     },
//     paid: {
//       text: 'Paid',
//       color: 'warning'
//     }
//   };

//   const { text, color }: any = map[roleType];

//   return <Label color={color}>{text}</Label>;
// };

const applyFilters = (
  data: TableCustomizedDataType[],
  query: string,
  filters: Filters,
  properties: string[]
): TableCustomizedDataType[] => {
  return data.filter((row) => {
    let matches = true;

    if (query) {
      let containsQuery = false;

      properties.forEach((property) => {
        if (row[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.type && row.type !== filters.type) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && row[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (
  data: TableCustomizedDataType[],
  page: number,
  limit: number
): TableCustomizedDataType[] => {
  return data.slice(page * limit, page * limit + limit);
};

const TableCustomized: FC<TableCustomizedProps> = ({
  data,
  columns,
  tabsFilter,
  searchFilterProperties,
  limitRows = 5,
  hasBulkActions = false
}) => {
  const [selectedItems, setSelectedItems] = useState<(string | number)[]>([]);
  const { t }: { t: any } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  // const location = useLocation();

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(limitRows);
  const rowsPerPage = useRef(
    [...Array(Math.floor(data.length / limit) + 1)].map(
      (_, i) => (i + 1) * limit
    )
  );
  const [query, setQuery] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    type: null
  });

  const handleTabsChange = (_event: SyntheticEvent, tabsValue: unknown) => {
    let value = null;

    if (tabsValue !== 'all') {
      value = tabsValue;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      type: value
    }));

    setSelectedItems([]);
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllRows = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedItems(event.target.checked ? data.map((row) => row.id) : []);
  };

  const handleSelectOneRow = (
    _event: ChangeEvent<HTMLInputElement>,
    rowId: string | number
  ): void => {
    if (!selectedItems.includes(rowId)) {
      setSelectedItems((prevSelected) => [...prevSelected, rowId]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((id) => id !== rowId)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredRows = applyFilters(
    data,
    query,
    filters,
    searchFilterProperties
  );
  const paginatedRows = applyPagination(filteredRows, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeRows =
    selectedItems.length > 0 && selectedItems.length < data.length;
  const selectedAllRows = selectedItems.length === data.length;

  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const handleConfirmDelete = () => {
    setOpenConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleDeleteCompleted = () => {
    setOpenConfirmDelete(false);

    enqueueSnackbar(t('The role has been removed'), {
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
      {tabsFilter && (
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          pb={3}
        >
          <TabsWrapper
            onChange={handleTabsChange}
            scrollButtons="auto"
            textColor="secondary"
            value={filters.type || 'all'}
            variant="scrollable"
          >
            {tabsFilter.map((tab) => (
              <Tab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </TabsWrapper>
        </Box>
      )}
      <Card>
        <Box p={2}>
          {!selectedBulkActions && searchFilterProperties && (
            <TextField
              sx={{
                m: 0
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                )
              }}
              onChange={handleQueryChange}
              placeholder={t(`Search by ${searchFilterProperties}...`)}
              value={query}
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          )}
          {selectedBulkActions && hasBulkActions && <BulkActions />}
        </Box>

        <Divider />

        {paginatedRows.length === 0 ? (
          <>
            <Typography
              sx={{
                py: 10
              }}
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
              align="center"
            >
              {t("We couldn't find any data matching your search criteria")}
            </Typography>
          </>
        ) : (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {hasBulkActions && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedAllRows}
                          indeterminate={selectedSomeRows}
                          onChange={handleSelectAllRows}
                        />
                      </TableCell>
                    )}

                    {columns.map((col) => (
                      <TableCell key={col.accessor}>{t(col.label)}</TableCell>
                    ))}

                    <TableCell align="center">{t('Actions')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedRows.map((row) => {
                    const isRowSelected = selectedItems.includes(row.id);
                    const rowValues = columns.map((col) => row[col.accessor]);

                    return (
                      <TableRow hover key={row.id} selected={isRowSelected}>
                        {hasBulkActions && (
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isRowSelected}
                              onChange={(event) =>
                                handleSelectOneRow(event, row.id)
                              }
                              value={isRowSelected}
                            />
                          </TableCell>
                        )}

                        {rowValues.map((value, i) => (
                          <TableCell key={`${value}_${i}`}>
                            <Typography variant="h6">{value}</Typography>
                          </TableCell>
                        ))}

                        <TableCell align="center">
                          <Typography noWrap>
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
                count={filteredRows.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={rowsPerPage.current}
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
              py: 4,
              px: 6
            }}
            variant="h3"
          >
            {t('Are you sure you want to permanently delete this role')}?
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

TableCustomized.propTypes = {
  data: PropTypes.array.isRequired
};

TableCustomized.defaultProps = {
  data: []
};

export default TableCustomized;

import {
  FC,
  ChangeEvent,
  MouseEvent,
  SyntheticEvent,
  useState,
  ReactElement,
  Ref,
  forwardRef
} from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  InputAdornment,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
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
import Label from 'src/components/Label';
import BulkActions from './BulkActions';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useSnackbar } from 'notistack';
import { Role, RoleType } from './type';

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

const CardWrapper = styled(Card)(
  ({ theme }) => `
  
    position: relative;
    overflow: visible;
  
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: inherit;
      z-index: 1;
      transition: ${theme.transitions.create(['box-shadow'])};
    }
        
      &.Mui-selected::after {
        box-shadow: 0 0 0 3px ${theme.colors.primary.main};
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

interface ResultsProps {
  roles: Role[];
}

interface Filters {
  type?: RoleType;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const getRoleTypeLabel = (roleType: RoleType): JSX.Element => {
  const map = {
    free: {
      text: 'Free',
      color: 'info'
    },
    paid: {
      text: 'Paid',
      color: 'warning'
    }
  };

  const { text, color }: any = map[roleType];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  roles: Role[],
  query: string,
  filters: Filters
): Role[] => {
  return roles.filter((role) => {
    let matches = true;

    if (query) {
      const properties = ['name', 'externalId'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (role[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.type && role.type !== filters.type) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && role[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (
  roles: Role[],
  page: number,
  limit: number
): Role[] => {
  return roles.slice(page * limit, page * limit + limit);
};

const Results: FC<ResultsProps> = ({ roles }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { t }: { t: any } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();

  const tabs = [
    {
      value: 'all',
      label: t('All types')
    },
    {
      value: 'paid',
      label: t('Paid')
    },
    {
      value: 'free',
      label: t('Free')
    }
  ];

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  // const [rowsPerPage, setRowsPerPage] = useState<number[]>([5, 10, 15]);
  const rowsPerPage: number[] = [...Array(Math.floor(roles.length / 5))].map(
    (_, i) => (i + 1) * 5
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

  const handleSelectAllRoles = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedItems(event.target.checked ? roles.map((role) => role.id) : []);
  };

  const handleSelectOneRole = (
    _event: ChangeEvent<HTMLInputElement>,
    roleId: string
  ): void => {
    if (!selectedItems.includes(roleId)) {
      setSelectedItems((prevSelected) => [...prevSelected, roleId]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((id) => id !== roleId)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredRoles = applyFilters(roles, query, filters);
  const paginatedRoles = applyPagination(filteredRoles, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeRoles =
    selectedItems.length > 0 && selectedItems.length < roles.length;
  const selectedAllRoles = selectedItems.length === roles.length;

  // const [toggleView, setToggleView] = useState<string | null>('table_view');

  // const handleViewOrientation = (
  //   _event: MouseEvent<HTMLElement>,
  //   newValue: string | null
  // ) => {
  //   setToggleView(newValue);
  // };

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
          {tabs.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </TabsWrapper>
        {/* <ToggleButtonGroup
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            value={toggleView}
            exclusive
            onChange={handleViewOrientation}
          >
            <ToggleButton disableRipple value="table_view">
              <TableRowsTwoToneIcon />
            </ToggleButton>
            <ToggleButton disableRipple value="grid_view">
              <GridViewTwoToneIcon />
            </ToggleButton>
          </ToggleButtonGroup> */}
      </Box>
      {/* {toggleView === 'table_view' && ( */}
      <Card>
        <Box p={2}>
          {!selectedBulkActions && (
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
              placeholder={t('Search by name, external ID...')}
              value={query}
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          )}
          {selectedBulkActions && <BulkActions />}
        </Box>

        <Divider />

        {paginatedRoles.length === 0 ? (
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
              {t("We couldn't find any roles matching your search criteria")}
            </Typography>
          </>
        ) : (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedAllRoles}
                        indeterminate={selectedSomeRoles}
                        onChange={handleSelectAllRoles}
                      />
                    </TableCell>
                    <TableCell>{t('Name')}</TableCell>
                    <TableCell>{t('Users')}</TableCell>
                    <TableCell>{t('External ID')}</TableCell>
                    <TableCell>{t('Type')}</TableCell>
                    <TableCell align="center">{t('Actions')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedRoles.map((role) => {
                    const isRoleSelected = selectedItems.includes(role.id);
                    return (
                      <TableRow hover key={role.id} selected={isRoleSelected}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isRoleSelected}
                            onChange={(event) =>
                              handleSelectOneRole(event, role.id)
                            }
                            value={isRoleSelected}
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="h6">{role.name}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography fontWeight="bold">
                            {role.users}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h6">
                            {role.externalId}
                          </Typography>
                        </TableCell>
                        <TableCell>{getRoleTypeLabel(role.type)}</TableCell>
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
                count={filteredRoles.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={rowsPerPage}
              />
            </Box>
          </>
        )}
      </Card>
      {/* )} */}

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

Results.propTypes = {
  roles: PropTypes.array.isRequired
};

Results.defaultProps = {
  roles: []
};

export default Results;

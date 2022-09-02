import {
  FC,
  useState,
  ReactElement,
  ChangeEvent,
  Ref,
  forwardRef
} from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import numeral from 'numeral';

import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Slide,
  Divider,
  Tooltip,
  IconButton,
  Link,
  InputAdornment,
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
  useMediaQuery,
  useTheme,
  Zoom,
  styled
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import type { Product } from 'src/models/product';
import { useTranslation } from 'react-i18next';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import Label from 'src/components/Label';
import BulkActions from './BulkActions';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useSnackbar } from 'notistack';
import Text from 'src/components/Text';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const DialogWrapper = styled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
      }
`
);

const ImgWrapper = styled('img')(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: auto;
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
  products: Product[];
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const applyFilters = (products: Product[], query: string): Product[] => {
  return products.filter((product) => {
    let matches = true;

    if (query) {
      const properties = ['name'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (product[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    return matches;
  });
};

const applyPagination = (
  products: Product[],
  page: number,
  limit: number
): Product[] => {
  return products.slice(page * limit, page * limit + limit);
};

const Results: FC<ResultsProps> = ({ products }) => {
  const [selectedItems, setSelectedProducts] = useState<string[]>([]);
  const { t }: { t: any } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const location = useLocation();

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllProducts = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedProducts(
      event.target.checked ? products.map((product) => product.id) : []
    );
  };

  const handleSelectOneProduct = (
    event: ChangeEvent<HTMLInputElement>,
    productId: string
  ): void => {
    if (!selectedItems.includes(productId)) {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    } else {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((id) => id !== productId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredProducts = applyFilters(products, query);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeProducts =
    selectedItems.length > 0 && selectedItems.length < products.length;
  const selectedAllProducts = selectedItems.length === products.length;
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const handleConfirmDelete = () => {
    setOpenConfirmDelete(true);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(false);
  };

  const handleDeleteCompleted = () => {
    setOpenConfirmDelete(false);

    enqueueSnackbar(t('You successfully deleted the product'), {
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
      <Card>
        <Box display="flex" alignItems="center">
          {selectedBulkActions && (
            <Box flex={1} p={2}>
              <BulkActions />
            </Box>
          )}
          {!selectedBulkActions && (
            <Box
              flex={1}
              p={2}
              display={{ xs: 'block', md: 'flex' }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                sx={{
                  mb: { xs: 2, md: 0 }
                }}
              >
                <TextField
                  size="small"
                  fullWidth={mobile}
                  onChange={handleQueryChange}
                  value={query}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchTwoToneIcon />
                      </InputAdornment>
                    )
                  }}
                  placeholder={t('Search by product name...')}
                />
              </Box>
              <TablePagination
                component="div"
                count={filteredProducts.length}
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

        {paginatedProducts.length === 0 ? (
          <Typography
            sx={{
              py: 10
            }}
            variant="h3"
            fontWeight="normal"
            color="text.secondary"
            align="center"
          >
            {t("We couldn't find any products matching your search criteria")}
          </Typography>
        ) : (
          <>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedAllProducts}
                        indeterminate={selectedSomeProducts}
                        onChange={handleSelectAllProducts}
                      />
                    </TableCell>
                    <TableCell>{t('Product name')}</TableCell>
                    <TableCell>{t('Price')}</TableCell>
                    <TableCell align="center">{t('Stock')}</TableCell>
                    <TableCell align="center">{t('Rating')}</TableCell>
                    <TableCell align="center">{t('Orders')}</TableCell>
                    <TableCell>{t('Categories')}</TableCell>
                    <TableCell align="center">{t('Actions')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedProducts.map((product) => {
                    const isProductSelected = selectedItems.includes(
                      product.id
                    );
                    return (
                      <TableRow
                        hover
                        key={product.id}
                        selected={isProductSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isProductSelected}
                            onChange={(event) =>
                              handleSelectOneProduct(event, product.id)
                            }
                            value={isProductSelected}
                          />
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <ImgWrapper src={product.images[0]} />
                            <Box
                              pl={1}
                              sx={{
                                width: 250
                              }}
                            >
                              <Link
                                component={RouterLink}
                                to={
                                  `/${
                                    location.pathname.split('/')[1]
                                  }/management/commerce/products/single/` +
                                  product.id
                                }
                                variant="h5"
                              >
                                {product.name}
                              </Link>
                              <Typography variant="subtitle2" noWrap>
                                {product.summary}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography
                            sx={{
                              textDecorationLine:
                                product.sale_price !== 0 ? 'line-through' : ''
                            }}
                          >
                            ${numeral(product.price).format(`0,0.00`)}
                          </Typography>
                          {product.sale_price !== 0 && (
                            <Typography>
                              <Text color="error">
                                ${numeral(product.sale_price).format(`0,0.00`)}
                              </Text>
                            </Typography>
                          )}
                        </TableCell>
                        <TableCell align="center">
                          <Label color="success">
                            <b>{product.stock}</b>
                          </Label>
                        </TableCell>
                        <TableCell align="center">
                          <Box display="flex" alignItems="center">
                            <Text color="warning">
                              <LocalFireDepartmentTwoToneIcon fontSize="small" />
                            </Text>
                            <Typography
                              variant="h5"
                              sx={{
                                pl: 0.5
                              }}
                            >
                              {product.rating}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="center">{product.orders}</TableCell>
                        <TableCell>
                          {product.categories.map((value) => {
                            return (
                              <span key={value}>
                                <Link href="#">{value}</Link>,{' '}
                              </span>
                            );
                          })}
                        </TableCell>
                        <TableCell align="center">
                          <Typography noWrap>
                            <Tooltip title={t('View')} arrow>
                              <IconButton
                                component={RouterLink}
                                to={
                                  `/${
                                    location.pathname.split('/')[1]
                                  }/management/commerce/products/single/` +
                                  product.id
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
                count={filteredProducts.length}
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
            {t('Do you really want to delete this product')}?
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
  products: PropTypes.array.isRequired
};

Results.defaultProps = {
  products: []
};

export default Results;

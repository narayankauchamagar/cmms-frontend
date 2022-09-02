import { FC, useState, ChangeEvent, MouseEvent } from 'react';
import type { Product } from 'src/models/product';
import PropTypes from 'prop-types';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import {
  Grid,
  Typography,
  Card,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Avatar,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Rating,
  Slide,
  Divider,
  styled,
  TablePagination
} from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { useTranslation } from 'react-i18next';
import numeral from 'numeral';
import Text from 'src/components/Text';
import { useSnackbar } from 'notistack';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';

interface ResultsProps {
  products: Product[];
}

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
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(4);
  const { t }: { t: any } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [query, setQuery] = useState<string>('');
  const [toggleView, setToggleView] = useState<string | null>('grid_view');
  const location = useLocation();

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setToggleView(newValue);
  };

  const handleCart = () => {
    enqueueSnackbar(t('You added a product to cart'), {
      variant: 'success',
      preventDuplicate: false,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      TransitionComponent: Slide
    });
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const filteredProducts = applyFilters(products, query);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);

  const AvatarWrapper = styled(Box)(
    ({ theme }) => `
      .MuiAvatar-root {
        height: auto;
        width: ${theme.spacing(26)};
        transition: ${theme.transitions.create(['opacity'])};

        &:hover {
          opacity: .8;
        }
      }
`
  );

  const IconButtonError = styled(IconButton)(
    ({ theme }) => `
       color: ${theme.colors.error.main};
  
       &:hover {
        background: ${theme.colors.error.lighter};
      }
  `
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <TextField
            fullWidth
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
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography component="span" variant="subtitle1">
              {t('Showing')}:
            </Typography>{' '}
            <b>
              {filteredProducts.length} {t('products')}
            </b>
          </Box>
          <ToggleButtonGroup
            value={toggleView}
            exclusive
            onChange={handleViewOrientation}
          >
            <ToggleButton disableRipple value="list_view">
              <TableRowsTwoToneIcon />
            </ToggleButton>
            <ToggleButton disableRipple value="grid_view">
              <GridViewTwoToneIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Grid>

      {toggleView === 'grid_view' && (
        <>
          {paginatedProducts.length === 0 ? (
            <Grid item xs={12}>
              <Typography
                sx={{
                  py: 10
                }}
                variant="h3"
                fontWeight="normal"
                color="text.secondary"
                align="center"
              >
                {t(
                  "We couldn't find any products matching your search criteria"
                )}
              </Typography>
            </Grid>
          ) : (
            <>
              {paginatedProducts.map((product) => {
                return (
                  <Grid key={product.id} item xs={12} md={6}>
                    <Card>
                      <AvatarWrapper
                        p={3}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Avatar
                          component={RouterLink}
                          to={
                            `/${
                              location.pathname.split('/')[1]
                            }/management/commerce/products/single/` + product.id
                          }
                          src={product.images[0]}
                          variant="rounded"
                        />
                      </AvatarWrapper>
                      <Box textAlign="center" px={3}>
                        <Typography
                          variant="h3"
                          sx={{
                            mb: 1
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          {product.summary}
                        </Typography>
                        <Box py={2}>
                          <Rating
                            readOnly
                            defaultValue={product.rating}
                            precision={0.5}
                          />
                        </Box>
                      </Box>
                      <Box display="flex" justifyContent="center">
                        <Box>
                          <Typography
                            component="span"
                            variant={product.sale_price !== 0 ? 'h4' : 'h3'}
                            sx={{
                              pr: 2,
                              textDecorationLine:
                                product.sale_price !== 0 ? 'line-through' : ''
                            }}
                          >
                            ${numeral(product.price).format(`0,0.00`)}
                          </Typography>
                          {product.sale_price !== 0 && (
                            <Typography component="span" variant="h3">
                              <Text color="error">
                                ${numeral(product.sale_price).format(`0,0.00`)}
                              </Text>
                            </Typography>
                          )}
                        </Box>
                      </Box>
                      <Box pb={3} pt={1} display="flex" justifyContent="center">
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={handleCart}
                        >
                          {t('Add to cart')}
                        </Button>
                      </Box>
                      <Divider />
                      <Box
                        p={2}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <IconButtonError size="small">
                          <FavoriteTwoToneIcon fontSize="small" />
                        </IconButtonError>
                        <Typography variant="subtitle2">
                          {t('In Stock')}:{' '}
                          <Typography
                            component="span"
                            color="text.primary"
                            variant="h4"
                          >
                            {product.stock}
                          </Typography>
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
              <Grid item xs={12}>
                <Card
                  sx={{
                    p: 2
                  }}
                >
                  <TablePagination
                    component="div"
                    count={filteredProducts.length}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[4, 8, 12]}
                  />
                </Card>
              </Grid>
            </>
          )}
        </>
      )}
      {toggleView === 'list_view' && (
        <>
          {paginatedProducts.length === 0 ? (
            <Grid item xs={12}>
              <Typography
                sx={{
                  py: 10
                }}
                variant="h3"
                fontWeight="normal"
                color="text.secondary"
                align="center"
              >
                {t(
                  "We couldn't find any products matching your search criteria"
                )}
              </Typography>
            </Grid>
          ) : (
            <>
              {paginatedProducts.map((product) => {
                return (
                  <Grid key={product.id} item xs={12}>
                    <Card
                      sx={{
                        p: 2,
                        display: { md: 'flex' },
                        alignItems: { md: 'center' }
                      }}
                    >
                      <AvatarWrapper
                        p={2}
                        sx={{
                          justifyContent: { md: 'center' }
                        }}
                        display="flex"
                        alignItems="center"
                      >
                        <Avatar
                          component={RouterLink}
                          to={
                            `/${
                              location.pathname.split('/')[1]
                            }/management/commerce/products/single/` + product.id
                          }
                          src={product.images[0]}
                          variant="rounded"
                        />
                      </AvatarWrapper>
                      <Box
                        component="span"
                        sx={{
                          display: { xs: 'none', md: 'inline-block' }
                        }}
                      >
                        <Divider
                          sx={{
                            mr: 2
                          }}
                          orientation="vertical"
                          flexItem
                        />
                      </Box>
                      <Box flex={1} p={2}>
                        <Rating
                          readOnly
                          defaultValue={product.rating}
                          precision={0.5}
                        />
                        <Typography
                          variant="h3"
                          sx={{
                            my: 1
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Typography variant="subtitle2">
                          {product.summary}
                        </Typography>
                        <Box py={2}>
                          <Typography
                            component="span"
                            variant={product.sale_price !== 0 ? 'h4' : 'h3'}
                            sx={{
                              pr: 2,
                              textDecorationLine:
                                product.sale_price !== 0 ? 'line-through' : ''
                            }}
                          >
                            ${numeral(product.price).format(`0,0.00`)}
                          </Typography>
                          {product.sale_price !== 0 && (
                            <Typography component="span" variant="h3">
                              <Text color="error">
                                ${numeral(product.sale_price).format(`0,0.00`)}
                              </Text>
                            </Typography>
                          )}
                        </Box>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Box display="flex" alignItems="center">
                            <Button
                              sx={{
                                mr: 2
                              }}
                              size="small"
                              variant="outlined"
                              onClick={handleCart}
                            >
                              {t('Add to cart')}
                            </Button>
                            <IconButtonError size="small">
                              <FavoriteTwoToneIcon fontSize="small" />
                            </IconButtonError>
                          </Box>

                          <Typography variant="subtitle2">
                            {t('In Stock')}:{' '}
                            <Typography
                              component="span"
                              color="text.primary"
                              variant="h4"
                            >
                              {product.stock}
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
              <Grid item xs={12}>
                <Card
                  sx={{
                    p: 2
                  }}
                >
                  <TablePagination
                    component="div"
                    count={filteredProducts.length}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[4, 8, 12]}
                  />
                </Card>
              </Grid>
            </>
          )}
        </>
      )}
      {!toggleView && (
        <Grid item xs={12}>
          <Card
            sx={{
              textAlign: 'center',
              p: 3
            }}
          >
            <Typography
              align="center"
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              sx={{
                my: 5
              }}
              gutterBottom
            >
              {t(
                'Choose between table or grid views for displaying the projects list.'
              )}
            </Typography>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

Results.propTypes = {
  products: PropTypes.array.isRequired
};

Results.defaultProps = {
  products: []
};

export default Results;

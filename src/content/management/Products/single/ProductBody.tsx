import { FC, useState, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import type { Product } from 'src/models/product';
import numeral from 'numeral';

import { useSnackbar } from 'notistack';
import Text from 'src/components/Text';

import {
  Typography,
  Box,
  Grid,
  Divider,
  IconButton,
  Button,
  Card,
  Rating,
  FormControl,
  styled,
  TextField,
  Tabs,
  Tab,
  Select,
  Slide,
  MenuItem,
  useTheme
} from '@mui/material';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import { useTranslation } from 'react-i18next';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import ReviewsTab from './ReviewsTab';
import AdditionalInfoTab from './AdditionalInfoTab';

interface ProductBodyProps {
  product: Product;
}

const SwipeIndicator = styled(IconButton)(
  ({ theme }) => `
    @media (max-width: ${theme.breakpoints.values.sm}px) {
        display: none;
    }
    transition: ${theme.transitions.create(['background', 'color'])};
    color: ${theme.colors.primary.main};
    background: ${theme.colors.alpha.white[100]};
    position: absolute;
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
    top: 50%;
    margin-top: ${theme.spacing(-1.5)};
    border-radius: 100px;
    z-index: 5;

    &:hover {
      background: ${theme.colors.alpha.white[100]};
      color: ${theme.colors.alpha.black[100]};
    }

    &.MuiSwipe-left {
      left: ${theme.spacing(0.5)};
    }
    
    &.MuiSwipe-right {
      right: ${theme.spacing(0.5)};
    }
`
);

const SwiperWrapper = styled(Box)(
  ({ theme }) => `
  .swiper-wrapper {
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .swiper-container-thumbs {
    .swiper-wrapper {
      display: flex;
      align-items: center;
    }

    .swiper-slide {
      width: 140px;
      display: flex;
      padding: 3px;

      img {
        width: 100%;
        height: auto;
        border-radius: ${theme.general.borderRadius};
        opacity: .7;
        transition: ${theme.transitions.create(['box-shadow', 'opacity'])};
      }

      &:hover {
        cursor: pointer;

        img {
          opacity: 1;
        }
      }

      &.swiper-slide-thumb-active {
        img {
          opacity: 1;
          box-shadow: 0 0 0 3px ${theme.colors.primary.main};
        }
      }
    }
  }
`
);

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      padding: ${theme.spacing(2)};
  `
);

const ProductBody: FC<ProductBodyProps> = ({ product }) => {
  const { t }: { t: any } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const [option1, setOption1] = useState('10');

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>): void => {
    setOption1(event.target.value);
  };

  const [option2, setOption2] = useState('20');

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>): void => {
    setOption2(event.target.value);
  };

  const [currentTab, setCurrentTab] = useState<string>('reviews');

  const tabs = [
    { value: 'reviews', label: t('Reviews') },
    { value: 'additional_info', label: t('Additional Informations') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
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

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={12}>
        <Card>
          <Grid container spacing={0}>
            <Grid
              xs={12}
              md={6}
              item
              sx={{
                position: 'relative'
              }}
            >
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', md: 'inline-block' }
                }}
              >
                <Divider
                  absolute
                  sx={{
                    height: '100%',
                    left: 'auto',
                    right: 0
                  }}
                  orientation="vertical"
                  flexItem
                />
              </Box>
              <Box p={6}>
                <SwiperWrapper>
                  <Box
                    mb={3}
                    sx={{
                      position: 'relative'
                    }}
                  >
                    <Swiper
                      loop
                      autoHeight
                      spaceBetween={10}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      navigation={{
                        nextEl: '.MuiSwipe-right',
                        prevEl: '.MuiSwipe-left'
                      }}
                    >
                      {product.images.map((value) => {
                        return (
                          <SwiperSlide key={value}>
                            <img src={value} alt="..." />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                    <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
                      <ChevronLeftTwoToneIcon />
                    </SwipeIndicator>
                    <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
                      <ChevronRightTwoToneIcon />
                    </SwipeIndicator>
                  </Box>

                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode
                    watchSlidesProgress
                    modules={[FreeMode, Navigation, Thumbs]}
                    navigation={{
                      nextEl: '.MuiSwipe-right',
                      prevEl: '.MuiSwipe-left'
                    }}
                    breakpoints={{
                      500: {
                        slidesPerView: 2,
                        spaceBetween: 10
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                      }
                    }}
                    // @ts-ignore
                    pagination={{
                      clickable: true,
                      dynamicBullets: true
                    }}
                  >
                    {product.images.map((value) => {
                      return (
                        <SwiperSlide key={value}>
                          <img src={value} alt="..." />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </SwiperWrapper>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={4} flex={1}>
                <Rating
                  readOnly
                  defaultValue={product.rating}
                  precision={0.5}
                />
                <Typography
                  variant="h3"
                  sx={{
                    pb: 2,
                    pt: 1
                  }}
                  component="h3"
                >
                  {product.name}
                </Typography>
                <Typography variant="subtitle2">
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </Typography>
                <Divider
                  sx={{
                    mt: 3
                  }}
                />
                <Box
                  pt={3}
                  pb={1}
                  sx={{
                    px: { xs: 0, md: 3 }
                  }}
                >
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={4} justifyContent="flex-end">
                      <Box
                        pr={3}
                        sx={{
                          pt: `${theme.spacing(1)}`,
                          pb: { xs: 1, md: 0 }
                        }}
                        alignSelf="center"
                      >
                        <b>{t('Option 1')}:</b>
                      </Box>
                    </Grid>
                    <Grid
                      sx={{
                        mb: `${theme.spacing(2)}`
                      }}
                      item
                      xs={12}
                      sm={8}
                      md={6}
                    >
                      <FormControl
                        placeholder={t('Select ...')}
                        size="small"
                        fullWidth
                        variant="outlined"
                      >
                        <Select value={option1} onChange={handleChange1}>
                          <MenuItem value={10}>{t('Option')} 1</MenuItem>
                          <MenuItem value={20}>{t('Option')} 2</MenuItem>
                          <MenuItem value={30}>{t('Option')} 3</MenuItem>
                          <MenuItem value={30}>{t('Option')} 4</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} justifyContent="flex-end">
                      <Box
                        pr={3}
                        sx={{
                          pt: `${theme.spacing(1)}`,
                          pb: { xs: 1, md: 0 }
                        }}
                        alignSelf="center"
                      >
                        <b>{t('Option 2')}:</b>
                      </Box>
                    </Grid>
                    <Grid
                      sx={{
                        mb: `${theme.spacing(2)}`
                      }}
                      item
                      xs={12}
                      sm={8}
                      md={6}
                    >
                      <FormControl
                        placeholder={t('Select ...')}
                        size="small"
                        fullWidth
                        variant="outlined"
                      >
                        <Select value={option2} onChange={handleChange2}>
                          <MenuItem value={10}>{t('Option')} 1</MenuItem>
                          <MenuItem value={20}>{t('Option')} 2</MenuItem>
                          <MenuItem value={30}>{t('Option')} 3</MenuItem>
                          <MenuItem value={30}>{t('Option')} 4</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} justifyContent="flex-end">
                      <Box
                        pr={3}
                        sx={{
                          pt: `${theme.spacing(1)}`,
                          pb: { xs: 1, md: 0 }
                        }}
                        alignSelf="center"
                      >
                        <b>{t('Quantity')}:</b>
                      </Box>
                    </Grid>
                    <Grid
                      sx={{
                        mb: `${theme.spacing(2)}`
                      }}
                      item
                      xs={12}
                      sm={5}
                      md={3}
                    >
                      <FormControl fullWidth variant="outlined">
                        <TextField
                          type="number"
                          size="small"
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                <Divider
                  sx={{
                    mb: 3
                  }}
                />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography component="div" variant="caption" gutterBottom>
                      {t('Price')}
                    </Typography>

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
                  <Box>
                    <Button
                      startIcon={<AddShoppingCartTwoToneIcon />}
                      variant="contained"
                      onClick={handleCart}
                      size="large"
                    >
                      {t('Add to card')}
                    </Button>
                  </Box>
                </Box>
                <Divider
                  sx={{
                    my: 3
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    pb: 1
                  }}
                >
                  {t('Share')}
                </Typography>
                <Button
                  sx={{
                    mr: 1
                  }}
                  variant="outlined"
                  size="small"
                >
                  Facebook
                </Button>
                <Button
                  sx={{
                    mr: 1
                  }}
                  variant="outlined"
                  size="small"
                >
                  Twitter
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TabsContainerWrapper>
            <Tabs
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
          </TabsContainerWrapper>
          <Divider />
          {currentTab === 'reviews' && <ReviewsTab />}
          {currentTab === 'additional_info' && <AdditionalInfoTab />}
        </Card>
      </Grid>
    </Grid>
  );
};

ProductBody.propTypes = {
  // @ts-ignore
  product: PropTypes.object.isRequired
};

export default ProductBody;

import {
  Card,
  CardHeader,
  Typography,
  CardActionArea,
  Link,
  Button,
  CardMedia,
  Box,
  alpha,
  useTheme,
  styled,
  IconButton,
  Divider
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';

const SwipeIndicator = styled(IconButton)(
  ({ theme }) => `
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(5)};
        height: ${theme.spacing(5)};
        border-radius: 100px;
        transition: ${theme.transitions.create(['all'])};

        &:hover {
          color: ${theme.colors.alpha.black[100]};
          background: ${theme.colors.primary.lighter};
        }
`
);

const CardActions = styled(Box)(
  ({ theme }) => `
  position: absolute;
  right: ${theme.spacing(2)};
  bottom: ${theme.spacing(2)};
  z-index: 7;
  display: flex;
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
  background: ${theme.palette.info.main};
  color: ${theme.palette.info.contrastText};
  text-transform: uppercase;
  font-size: ${theme.typography.pxToRem(10)};
  font-weight: bold;
  line-height: 23px;
  height: 22px;
  padding: ${theme.spacing(0, 1.2)};
  border-radius: 50px;
`
);

const CardActionAreaWrapper = styled(CardActionArea)(
  () => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .MuiTouchRipple-root {
      opacity: .3;
  }

  &:hover {
      .MuiCardActionArea-focusHighlight {
          opacity: .05;
      }
  }
`
);

function TrainingPrograms() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        action={
          <>
            <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
              <ChevronLeftTwoToneIcon />
            </SwipeIndicator>
            <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
              <ChevronRightTwoToneIcon />
            </SwipeIndicator>
          </>
        }
        title={t('Training programs')}
      />
      <Divider />
      <Box
        px={3}
        pb={2}
        sx={{
          '.swiper-pagination-bullets': {
            bottom: '0 !important'
          }
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop
          navigation={{
            nextEl: '.MuiSwipe-right',
            prevEl: '.MuiSwipe-left'
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 12
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 12
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24
            }
          }}
          modules={[Navigation, Pagination]}
          pagination={{ dynamicBullets: true, clickable: true }}
        >
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
                textAlign: 'center',
                transition: `${theme.transitions.create([
                  'box-shadow',
                  'transform'
                ])}`,
                transform: 'translateY(0px)',

                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 2rem 8rem 0 ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 
                                0 0.6rem 1.6rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.2
                                )}, 
                                0 0.2rem 0.2rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.15
                                )}`
                }
              }}
            >
              <CardActionAreaWrapper>
                <CardMedia
                  component="img"
                  height="230"
                  image="/static/images/placeholders/fitness/1.jpg"
                  alt="..."
                />
                <CardActions>
                  <LabelWrapper>{t('Updated')}</LabelWrapper>
                </CardActions>
              </CardActionAreaWrapper>
            </Card>
            <Box
              sx={{
                px: { md: 2, lg: 1.5, xl: 3 },
                pt: 2,
                textAlign: 'center'
              }}
            >
              <Link
                lineHeight={1.5}
                href="#"
                sx={{
                  transition: `${theme.transitions.create(['color'])}`,
                  color: `${theme.colors.alpha.black[100]}`,

                  '&:hover': {
                    color: `${theme.colors.primary.main}`
                  }
                }}
                color="text.primary"
                variant="h3"
                underline="none"
              >
                {t('Stretching')}
              </Link>
              <Typography
                variant="subtitle2"
                sx={{
                  pb: 2
                }}
              >
                {t('Team activity')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px'
                  }
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
                textAlign: 'center',
                transition: `${theme.transitions.create([
                  'box-shadow',
                  'transform'
                ])}`,
                transform: 'translateY(0px)',

                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 2rem 8rem 0 ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 
                                0 0.6rem 1.6rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.2
                                )}, 
                                0 0.2rem 0.2rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.15
                                )}`
                }
              }}
            >
              <CardActionAreaWrapper>
                <CardMedia
                  component="img"
                  height="230"
                  image="/static/images/placeholders/fitness/2.jpg"
                  alt="..."
                />
              </CardActionAreaWrapper>
            </Card>
            <Box
              sx={{
                px: { md: 2, lg: 1.5, xl: 3 },
                pt: 2,
                textAlign: 'center'
              }}
            >
              <Link
                lineHeight={1.5}
                href="#"
                sx={{
                  transition: `${theme.transitions.create(['color'])}`,
                  color: `${theme.colors.alpha.black[100]}`,

                  '&:hover': {
                    color: `${theme.colors.primary.main}`
                  }
                }}
                color="text.primary"
                variant="h3"
                underline="none"
              >
                {t('Yoga')}
              </Link>
              <Typography
                variant="subtitle2"
                sx={{
                  pb: 2
                }}
              >
                {t('Individual')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px'
                  }
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
                textAlign: 'center',
                transition: `${theme.transitions.create([
                  'box-shadow',
                  'transform'
                ])}`,
                transform: 'translateY(0px)',

                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 2rem 8rem 0 ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 
                                0 0.6rem 1.6rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.2
                                )}, 
                                0 0.2rem 0.2rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.15
                                )}`
                }
              }}
            >
              <CardActionAreaWrapper>
                <CardMedia
                  component="img"
                  height="230"
                  image="/static/images/placeholders/fitness/3.jpg"
                  alt="..."
                />
              </CardActionAreaWrapper>
            </Card>
            <Box
              sx={{
                px: { md: 2, lg: 1.5, xl: 3 },
                pt: 2,
                textAlign: 'center'
              }}
            >
              <Link
                lineHeight={1.5}
                href="#"
                sx={{
                  transition: `${theme.transitions.create(['color'])}`,
                  color: `${theme.colors.alpha.black[100]}`,

                  '&:hover': {
                    color: `${theme.colors.primary.main}`
                  }
                }}
                color="text.primary"
                variant="h3"
                underline="none"
              >
                {t('Kangoo Jumps')}
              </Link>
              <Typography
                variant="subtitle2"
                sx={{
                  pb: 2
                }}
              >
                {t('Large Groups')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px'
                  }
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
                textAlign: 'center',
                transition: `${theme.transitions.create([
                  'box-shadow',
                  'transform'
                ])}`,
                transform: 'translateY(0px)',

                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 2rem 8rem 0 ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 
                                0 0.6rem 1.6rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.2
                                )}, 
                                0 0.2rem 0.2rem ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.15
                                )}`
                }
              }}
            >
              <CardActionAreaWrapper>
                <CardMedia
                  component="img"
                  height="230"
                  image="/static/images/placeholders/fitness/4.jpg"
                  alt="..."
                />
              </CardActionAreaWrapper>
            </Card>
            <Box
              sx={{
                px: { md: 2, lg: 1.5, xl: 3 },
                pt: 2,
                textAlign: 'center'
              }}
            >
              <Link
                lineHeight={1.5}
                href="#"
                sx={{
                  transition: `${theme.transitions.create(['color'])}`,
                  color: `${theme.colors.alpha.black[100]}`,

                  '&:hover': {
                    color: `${theme.colors.primary.main}`
                  }
                }}
                color="text.primary"
                variant="h3"
                underline="none"
              >
                {t('Rope Jumping')}
              </Link>
              <Typography
                variant="subtitle2"
                sx={{
                  pb: 2
                }}
              >
                {t('Small teams')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px'
                  }
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Card>
  );
}

export default TrainingPrograms;

import { useState, ChangeEvent } from 'react';
import {
  Card,
  Box,
  CardHeader,
  List,
  Avatar,
  IconButton,
  AvatarGroup,
  Tooltip,
  Typography,
  Switch,
  LinearProgress,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  alpha,
  styled,
  useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RootWrapper = styled(Card)(
  ({ theme }) => `
    background: ${theme.colors.gradients.blue3};
    color: ${theme.colors.alpha.trueWhite[100]};
    
    .MuiIconButton-root {
      background: ${theme.colors.alpha.trueWhite[10]};
      color: ${theme.colors.alpha.trueWhite[70]};
      
      &:hover {
        background: ${theme.colors.alpha.trueWhite[10]};
        color: ${theme.colors.alpha.trueWhite[100]};
      }
    }
    
    .MuiAvatarGroup-avatar {
      background: ${theme.colors.alpha.trueWhite[10]};
      color: ${theme.colors.alpha.trueWhite[70]} !important;
    }
    
    .MuiList-root {
      margin-bottom: ${theme.spacing(2)};

      .MuiButtonBase-root {
        color: ${theme.colors.alpha.trueWhite[70]};
      
        &:hover, &:active, .active {
            background: ${theme.colors.alpha.trueWhite[10]};
            color: ${theme.colors.alpha.trueWhite[100]};
        }
      }
      
      .MuiListItemAvatar-root {
            background: ${theme.colors.alpha.trueWhite[100]};
            border-radius: 100px;
            margin-right: ${theme.spacing(1.5)};
            width: ${theme.spacing(5)};
            height: ${theme.spacing(5)};
            display: flex;
            align-items: center;
            justify-content: center;
      }
    }
`
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
    background: ${theme.colors.gradients.blue1};
    color:  ${theme.colors.alpha.trueWhite[100]};;
    border-radius: ${theme.general.borderRadiusXl};
    padding: ${theme.spacing(1)};
    box-shadow: none;

    .MuiCardHeader-root {
      .MuiCardHeader-title {
          color: ${theme.colors.alpha.trueWhite[100]};;
          font-weight: normal;
          padding-bottom: ${theme.spacing(0.5)};
      }
    }
    
    .MuiCardHeader-subheader {
        color:  ${theme.colors.alpha.trueWhite[100]};;
    }
    
    .MuiSwitch-colorPrimary .MuiSwitch-thumb {
      background: ${theme.colors.alpha.trueWhite[50]};
      border-color: ${theme.colors.alpha.trueWhite[30]};
    }

    .MuiSwitch-colorPrimary.Mui-checked .MuiSwitch-thumb {
      background: ${theme.colors.alpha.trueWhite[100]};
      border-color: ${theme.colors.alpha.trueWhite[100]};
    }
    
    .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
        background: ${theme.colors.alpha.trueWhite[100]};
    }
`
);

const ListItemWrapper = styled(ListItemButton)(
  () => `
    border-radius: 0;
`
);

const SwipeIndicator = styled(IconButton)(
  ({ theme }) => `
    @media (max-width: ${theme.breakpoints.values.sm}px) {
        display: none;
    }
    transition: ${theme.transitions.create(['background', 'color'])};
    color: ${theme.colors.alpha.trueWhite[50]};
    position: absolute;
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
    top: 50%;
    margin-top: ${theme.spacing(-1.5)};
    border-radius: 100px;

    &:hover {
      color: ${theme.colors.alpha.trueWhite[100]};
      background: ${theme.colors.alpha.trueWhite[10]};
    }

    &.MuiSwipe-left {
      left: ${theme.spacing(1.5)};
    }
    
    &.MuiSwipe-right {
      right: ${theme.spacing(1.5)};
    }
`
);

const SwiperWrapper = styled(Box)(
  ({ theme }) => `
    .swiper-pagination {
      .swiper-pagination-bullet {
        background: ${theme.colors.alpha.trueWhite[30]};
        opacity: 1;

        &.swiper-pagination-bullet-active {
          background: ${theme.colors.alpha.trueWhite[100]};
          width: 16px;
          border-radius: 6px;
        }
      }
    }
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
    flex-grow: 1;
    margin-right: ${theme.spacing(1)};
    height: 10px;
    background-color: ${alpha(theme.colors.warning.lighter, 0.2)};

    .MuiLinearProgress-barColorPrimary {
      background-color: ${theme.colors.warning.main};
      border-top-right-radius: ${theme.general.borderRadius};
      border-bottom-right-radius: ${theme.general.borderRadius};
    }
`
);

const IconButtonDotted = styled(IconButton)(
  ({ theme }) => `
    border-radius: 100px;
    border: 1px dashed ${theme.colors.alpha.trueWhite[100]};
    color: ${theme.colors.alpha.trueWhite[100]};
`
);

const TypographyPrimary = styled(Typography)(
  ({ theme }) => `
    color: ${theme.colors.alpha.trueWhite[100]};
`
);

const TypographySecondary = styled(Typography)(
  ({ theme }) => `
    color: ${theme.colors.alpha.trueWhite[70]};
`
);

function MyCards() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [state, setState] = useState({
    interest: true
  });

  const interestActivate = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  const data = {
    logo1: '/static/images/placeholders/logo/deutschebank_light.svg'
  };

  return (
    <RootWrapper
      sx={{
        height: '100%'
      }}
    >
      <CardHeader
        title={t('My Cards')}
        action={
          <IconButton size="small">
            <MenuTwoToneIcon />
          </IconButton>
        }
      />
      <SwiperWrapper
        sx={{
          mx: 'auto',
          maxWidth: 500,
          position: 'relative',
          py: 2,
          px: { xs: 2, sm: 8 }
        }}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation={{
            nextEl: '.MuiSwipe-right',
            prevEl: '.MuiSwipe-left'
          }}
          // @ts-ignore
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
        >
          <SwiperSlide>
            <CardWrapper
              sx={{
                height: '100%',
                background: theme.colors.gradients.purple1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardHeader
                sx={{
                  alignItems: 'flex-start',
                  pt: 3
                }}
                action={
                  <Avatar
                    sx={{
                      width: theme.spacing(4),
                      height: theme.spacing(4)
                    }}
                    variant="square"
                    alt="Deutsche Bank"
                    src={data.logo1}
                  />
                }
                title={t('Balance')}
                subheader="$22,674.32"
                subheaderTypographyProps={{ variant: 'h2' }}
              />
              <Box
                sx={{
                  pl: 2,
                  py: 2
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">**** 4856</Typography>
                <Tooltip arrow title={t('Disable Account')}>
                  <Switch
                    checked={state.interest}
                    onChange={interestActivate}
                    color="primary"
                    name="interest"
                  />
                </Tooltip>
              </Box>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper
              sx={{
                height: '100%',
                background: theme.colors.gradients.blue1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardHeader
                sx={{
                  alignItems: 'flex-start',
                  pt: 3
                }}
                action={
                  <Avatar
                    sx={{
                      width: theme.spacing(4),
                      height: theme.spacing(4)
                    }}
                    variant="square"
                    alt="Deutsche Bank"
                    src={data.logo1}
                  />
                }
                title={t('Balance')}
                subheader="$15,689.36"
                subheaderTypographyProps={{ variant: 'h2' }}
              />
              <Box
                sx={{
                  pl: 2,
                  py: 2
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">**** 3466</Typography>
                <Tooltip arrow title={t('Disable Account')}>
                  <Switch
                    checked={state.interest}
                    onChange={interestActivate}
                    color="primary"
                    name="interest"
                  />
                </Tooltip>
              </Box>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper
              sx={{
                height: '100%',
                background: theme.colors.gradients.orange1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardHeader
                sx={{
                  alignItems: 'flex-start',
                  pt: 3
                }}
                action={
                  <Avatar
                    sx={{
                      width: theme.spacing(4),
                      height: theme.spacing(4)
                    }}
                    variant="square"
                    alt="Deutsche Bank"
                    src={data.logo1}
                  />
                }
                title={t('Balance')}
                subheader="$54,345.23"
                subheaderTypographyProps={{ variant: 'h2' }}
              />
              <Box
                sx={{
                  pl: 2,
                  py: 2
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">**** 6545</Typography>
                <Tooltip arrow title={t('Disable Account')}>
                  <Switch
                    checked={state.interest}
                    onChange={interestActivate}
                    color="primary"
                    name="interest"
                  />
                </Tooltip>
              </Box>
            </CardWrapper>
          </SwiperSlide>
        </Swiper>
        <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
          <ChevronLeftTwoToneIcon />
        </SwipeIndicator>
        <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
          <ChevronRightTwoToneIcon />
        </SwipeIndicator>
      </SwiperWrapper>
      <CardHeader title={t('Latest Expenses')} />
      <List disablePadding>
        <ListItemWrapper>
          <ListItemAvatar
            sx={{
              minWidth: '36px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img
              alt="Spotify"
              src="/static/images/placeholders/logo/spotify.svg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Spotify"
            primaryTypographyProps={{ variant: 'h5', noWrap: true }}
          />
          <Typography
            align="right"
            variant="body1"
            noWrap
            sx={{
              mr: 2
            }}
          >
            -$9.99
          </Typography>
          <ChevronRightTwoToneIcon />
        </ListItemWrapper>
        <ListItemWrapper>
          <ListItemAvatar
            sx={{
              minWidth: '36px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img alt="Slack" src="/static/images/placeholders/logo/slack.svg" />
          </ListItemAvatar>
          <ListItemText
            primary="Slack"
            primaryTypographyProps={{ variant: 'h5', noWrap: true }}
          />
          <Typography
            align="right"
            variant="body1"
            noWrap
            sx={{
              mr: 2
            }}
          >
            -$4.99
          </Typography>
          <ChevronRightTwoToneIcon />
        </ListItemWrapper>
        <ListItemWrapper>
          <ListItemAvatar
            sx={{
              minWidth: '36px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img
              alt="AirBnB"
              src="/static/images/placeholders/logo/airbnb.svg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="AirBnB"
            primaryTypographyProps={{ variant: 'h5', noWrap: true }}
          />
          <Typography
            align="right"
            variant="body1"
            noWrap
            sx={{
              mr: 2
            }}
          >
            -$229.00
          </Typography>
          <ChevronRightTwoToneIcon />
        </ListItemWrapper>
      </List>
      <CardHeader
        title={t('Spending Limit')}
        action={
          <>
            <TypographyPrimary
              variant="h6"
              fontWeight="bold"
              sx={{
                pr: 0.5,
                display: 'inline-flex'
              }}
            >
              $300
            </TypographyPrimary>
            <TypographySecondary
              variant="body2"
              fontWeight="bold"
              sx={{
                pr: 2,
                display: 'inline-flex'
              }}
            >
              /$500
            </TypographySecondary>
          </>
        }
      />
      <Box
        sx={{
          mx: 2,
          mb: 2
        }}
      >
        <LinearProgressWrapper
          value={65}
          color="primary"
          variant="determinate"
        />
      </Box>
      <CardHeader title={t('Quick Payments')} />
      <Box
        sx={{
          mx: 2,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        <AvatarGroup max={6}>
          <Tooltip arrow title={`${t('View profile for')} Remy Sharp`}>
            <Avatar
              component={RouterLink}
              to="#"
              alt="Remy Sharp"
              src="/static/images/avatars/1.jpg"
            />
          </Tooltip>
          <Tooltip arrow title={`${t('View profile for')} Travis Howard`}>
            <Avatar
              component={RouterLink}
              to="#"
              alt="Travis Howard"
              src="/static/images/avatars/2.jpg"
            />
          </Tooltip>
          <Tooltip arrow title={t('View profile for') + ' Cindy Baker'}>
            <Avatar
              component={RouterLink}
              to="#"
              alt="Cindy Baker"
              src="/static/images/avatars/3.jpg"
            />
          </Tooltip>
          <Tooltip arrow title={t('View profile for') + ' Agnes Walker'}>
            <Avatar
              component={RouterLink}
              to="#"
              alt="Agnes Walker"
              src="/static/images/avatars/4.jpg"
            />
          </Tooltip>
          <Tooltip arrow title={t('View profile for') + ' Trevor Henderson'}>
            <Avatar
              component={RouterLink}
              to="#"
              alt="Trevor Henderson"
              src="/static/images/avatars/5.jpg"
            />
          </Tooltip>
          <Tooltip arrow title={`${t('View profile for')} Remy Sharp`}>
            <Avatar
              component={RouterLink}
              to="#"
              alt="Remy Sharp"
              src="/static/images/avatars/1.jpg"
            />
          </Tooltip>
          <Tooltip arrow title={`${t('View profile for')} Remy Sharp`}>
            <Avatar
              component={RouterLink}
              to="#"
              alt="Remy Sharp"
              src="/static/images/avatars/2.jpg"
            />
          </Tooltip>
        </AvatarGroup>
        <Tooltip arrow title={t('Add Quick Payment Profile')}>
          <IconButtonDotted
            size="small"
            sx={{
              ml: 1
            }}
          >
            <AddTwoToneIcon />
          </IconButtonDotted>
        </Tooltip>
      </Box>
    </RootWrapper>
  );
}

export default MyCards;

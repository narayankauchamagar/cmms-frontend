import { Fragment, useRef, useState } from 'react';

import {
  IconButton,
  Box,
  List,
  ListItem,
  Badge,
  ListItemAvatar,
  Button,
  Divider,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Typography,
  ListItemText,
  alpha,
  Popover,
  Tooltip,
  Avatar,
  styled,
  useTheme
} from '@mui/material';
import Text from 'src/components/Text';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Scrollbar from 'src/components/Scrollbar';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import MarkChatReadTwoToneIcon from '@mui/icons-material/MarkChatReadTwoTone';

import { useTranslation } from 'react-i18next';

const AvatarGradient = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.gradients.blue1};
      color: ${theme.colors.alpha.trueWhite[100]};
  `
);

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};

    .MuiOutlinedInput-notchedOutline {
        border: 0;
    }
`
);

const ListWrapper = styled(List)(
  () => `
    .MuiListItem-root:last-of-type + .MuiDivider-root {
        display: none;
    }
`
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  border-radius: ${theme.general.borderRadiusLg};
`
);

function Chat() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const items = [
    {
      id: 1,
      name: 'Munroe Dacks',
      jobtitle: 'Senior Cost Accountant',
      company: 'Trudoo',
      avatar: '/static/images/avatars/1.jpg',
      value: 65
    },
    {
      id: 2,
      name: 'Gunilla Canario',
      jobtitle: 'Associate Professor',
      company: 'Buzzdog',
      avatar: '/static/images/avatars/2.jpg',
      value: 76
    },
    {
      id: 3,
      name: 'Rowena Geistmann',
      jobtitle: 'Pharmacist',
      company: 'Yozio',
      avatar: '/static/images/avatars/3.jpg',
      value: 54
    },
    {
      id: 4,
      name: 'Ede Stoving',
      jobtitle: 'VP Product Management',
      company: 'Cogibox',
      avatar: '/static/images/avatars/4.jpg',
      value: 23
    },
    {
      id: 5,
      name: 'Crissy Spere',
      jobtitle: 'Social Worker',
      company: 'Babbleblab',
      avatar: '/static/images/avatars/5.jpg',
      value: 16
    }
  ];

  return (
    <>
      <Tooltip arrow title={t('Messenger')}>
        <Badge
          variant="dot"
          overlap="circular"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          sx={{
            '.MuiBadge-badge': {
              background: theme.colors.error.main
            }
          }}
        >
          <IconButtonWrapper
            color="warning"
            ref={ref}
            onClick={handleOpen}
            sx={{
              background: alpha(theme.colors.warning.main, 0.1),
              transition: `${theme.transitions.create(['background'])}`,
              color: theme.colors.warning.main,

              '&:hover': {
                background: alpha(theme.colors.warning.main, 0.2)
              }
            }}
          >
            <ForumTwoToneIcon fontSize="small" />
          </IconButtonWrapper>
        </Badge>
      </Tooltip>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box minWidth={360} maxWidth={360}>
          <Box
            p={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              background: `${alpha(theme.colors.alpha.black[100], 0.07)}`
            }}
          >
            <Button
              size="small"
              color="primary"
              startIcon={<MarkChatReadTwoToneIcon />}
              sx={{
                fontSize: theme.typography.pxToRem(12)
              }}
            >
              {t('Mark all as seen')}
            </Button>
            <Badge
              color="error"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              variant="dot"
              overlap="circular"
            >
              <AvatarGradient
                sx={{
                  fontWeight: 'normal',
                  fontSize: theme.typography.pxToRem(12)
                }}
              >
                ET
              </AvatarGradient>
            </Badge>
          </Box>
          <Divider />
          <Box>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                type="text"
                placeholder={t('Search messages...')}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Divider />
          <Box
            sx={{
              height: 200
            }}
          >
            <Scrollbar>
              <ListWrapper disablePadding>
                {items.map((item) => (
                  <Fragment key={item.id}>
                    <ListItem
                      sx={{
                        py: 1.5,
                        '&:hover': {
                          background: `${theme.colors.alpha.black[5]}`
                        }
                      }}
                      secondaryAction={
                        <Button
                          size="small"
                          variant="text"
                          color="secondary"
                          sx={{
                            alignSelf: 'center',
                            padding: `${theme.spacing(0.5, 1.5)}`,
                            backgroundColor: `${theme.colors.secondary.lighter}`,
                            textTransform: 'uppercase',
                            fontSize: `${theme.typography.pxToRem(11)}`,
                            '&:hover': {
                              backgroundColor: `${theme.colors.secondary.main}`,
                              color: `${theme.palette.getContrastText(
                                theme.colors.secondary.main
                              )}`
                            }
                          }}
                        >
                          {t('Chat')}
                        </Button>
                      }
                    >
                      <ListItemAvatar
                        sx={{
                          minWidth: 38,
                          mr: 1
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 38,
                            height: 38
                          }}
                          alt={item.name}
                          src={item.avatar}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{
                          flexGrow: 0,
                          maxWidth: '50%',
                          flexBasis: '50%'
                        }}
                        disableTypography
                        primary={
                          <Typography
                            sx={{
                              pb: 0.6
                            }}
                            color="text.primary"
                            variant="h5"
                          >
                            {item.name}
                          </Typography>
                        }
                        secondary={
                          <Box display="flex" alignItems="flex-start">
                            <DotLegend
                              style={{
                                background: `${theme.colors.success.main}`
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: `${theme.typography.pxToRem(11)}`,
                                lineHeight: 1
                              }}
                              variant="body1"
                            >
                              <Text color="success">{t('Online')}</Text>
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </Fragment>
                ))}
              </ListWrapper>
            </Scrollbar>
          </Box>
          <Divider />
          <Box
            sx={{
              background: `${theme.colors.alpha.black[5]}`,
              textAlign: 'center'
            }}
            p={2}
          >
            <Button
              size="small"
              color="primary"
              variant="contained"
              endIcon={<ArrowForwardTwoToneIcon />}
            >
              {t('View all participants')}
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
}

export default Chat;

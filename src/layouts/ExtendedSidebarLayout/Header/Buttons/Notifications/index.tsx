import { useContext, useEffect, useRef, useState } from 'react';

import {
  alpha,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  styled,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Scrollbar from 'src/components/Scrollbar';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import Text from 'src/components/Text';

import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../../../store';
import {
  editNotification,
  getNotifications
} from '../../../../../slices/notification';
import Notification from '../../../../../models/owns/notification';
import {
  getAssetUrl,
  getLocationUrl,
  getMeterUrl,
  getPartUrl,
  getRequestUrl,
  getTeamUrl,
  getWorkOrderUrl
} from '../../../../../utils/urlPaths';
import { CompanySettingsContext } from '../../../../../contexts/CompanySettingsContext';

const BoxComposed = styled(Box)(
  () => `
  position: relative;
`
);

const BoxComposedContent = styled(Box)(
  ({ theme }) => `
  position: relative;
  z-index: 7;

  .MuiTypography-root {
      color: ${theme.palette.primary.contrastText};

      & + .MuiTypography-root {
          color: ${alpha(theme.palette.primary.contrastText, 0.7)};
      }
  }
  
`
);

const BoxComposedImage = styled(Box)(
  () => `
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  filter: grayscale(80%);
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: inherit;
`
);

const BoxComposedBg = styled(Box)(
  () => `
  position: absolute;
  left: 0;
  top: 0;
  z-index: 6;
  height: 100%;
  width: 100%;
  border-radius: inherit;
`
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  border-radius: ${theme.general.borderRadiusLg};
`
);

function HeaderNotifications() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notifications } = useSelector((state) => state.notifications);
  const { getFormattedDate } = useContext(CompanySettingsContext);

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  const onReadNotification = (notification: Notification) => {
    let url;
    const id = notification.id;
    switch (notification.notificationType) {
      case 'INFO':
        break;
      case 'ASSET':
        url = getAssetUrl(id);
        break;
      case 'REQUEST':
        url = getRequestUrl(id);
        break;
      case 'WORK_ORDER':
        url = getWorkOrderUrl(id);
        break;
      case 'PREVENTIVE_MAINTENANCE':
        // url = getAssetUrl(id);
        break;
      case 'PART':
        url = getPartUrl(id);
        break;
      case 'METER':
        url = getMeterUrl(id);
        break;
      case 'LOCATION':
        url = getLocationUrl(id);
        break;
      case 'TEAM':
        url = getTeamUrl(id);
        break;
      default:
        break;
    }
    if (notification.seen) {
      if (url) {
        navigate(url);
        handleClose();
      }
    } else
      dispatch(editNotification(notification.id, { seen: true }))
        .then(() => {
          if (url) {
            navigate(url);
          }
        })
        .finally(handleClose);
  };

  return (
    <>
      <Tooltip arrow title={t('Notifications')}>
        <Badge
          variant="dot"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          sx={
            notifications.filter((notification) => !notification.seen).length
              ? {
                  '.MuiBadge-badge': {
                    background: theme.colors.success.main,
                    animation: 'pulse 1s infinite',
                    transition: `${theme.transitions.create(['all'])}`
                  }
                }
              : {}
          }
        >
          <IconButtonWrapper
            sx={{
              background: alpha(theme.colors.primary.main, 0.1),
              transition: `${theme.transitions.create(['background'])}`,
              color: theme.colors.primary.main,

              '&:hover': {
                background: alpha(theme.colors.primary.main, 0.2)
              }
            }}
            color="primary"
            ref={ref}
            onClick={handleOpen}
          >
            <NotificationsActiveTwoToneIcon fontSize="small" />
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
        <Box minWidth={440} maxWidth={440} p={2}>
          <BoxComposed
            mb={2}
            sx={{
              borderRadius: `${theme.general.borderRadius}`,
              background: `${theme.colors.gradients.black1}`
            }}
          >
            <BoxComposedBg
              sx={{
                opacity: 0.3,
                background: `${theme.colors.gradients.green2}`
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.2,
                backgroundImage:
                  'url("/static/images/placeholders/covers/1.jpg")'
              }}
            />
            <BoxComposedContent py={3}>
              <Typography
                textAlign="center"
                sx={{
                  pb: 0.5
                }}
                variant="h4"
              >
                {t('Notifications')}
              </Typography>
              <Typography textAlign="center" variant="subtitle2">
                You have{' '}
                <Text color="success">
                  <b>
                    {
                      notifications.filter((notification) => !notification.seen)
                        .length
                    }
                  </b>
                </Text>{' '}
                new messages
              </Typography>
            </BoxComposedContent>
          </BoxComposed>
        </Box>
        <Divider />
        {!!notifications.length && (
          <Box
            sx={{
              height: 220
            }}
          >
            <Scrollbar>
              <List>
                {[...notifications].reverse().map((notification) => (
                  <ListItemButton
                    selected={!notification.seen}
                    key={notification.id}
                    onClick={() => onReadNotification(notification)}
                  >
                    <ListItemIcon>
                      <NotificationsNoneTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={notification.message}
                      secondary={getFormattedDate(notification.createdAt)}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Scrollbar>
          </Box>
        )}
        <Divider />
      </Popover>
    </>
  );
}

export default HeaderNotifications;

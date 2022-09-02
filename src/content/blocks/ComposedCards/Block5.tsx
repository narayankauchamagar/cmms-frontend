import {
  Box,
  Card,
  Typography,
  alpha,
  IconButton,
  Tooltip,
  TextField,
  Avatar,
  Badge,
  Divider,
  Button,
  styled
} from '@mui/material';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import useAuth from 'src/hooks/useAuth';

import { formatDistance, subHours, subMinutes } from 'date-fns';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'src/components/Scrollbar';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';

const DividerWrapper = styled(Divider)(
  ({ theme }) => `
          height: 40px !important;
          margin: 0 ${theme.spacing(2)};
          align-self: center;
  `
);

const CardWrapperPrimary = styled(Card)(
  ({ theme }) => `
        background: ${theme.colors.primary.main};
        color: ${theme.palette.primary.contrastText};
        padding: ${theme.spacing(2)};
        border-radius: ${theme.general.borderRadiusXl};
        border-top-right-radius: ${theme.general.borderRadius};
        max-width: 380px;
        display: inline-flex;
  `
);

const CardWrapperSecondary = styled(Card)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.alpha.black[100]};
        padding: ${theme.spacing(2)};
        border-radius: ${theme.general.borderRadiusXl};
        border-top-left-radius: ${theme.general.borderRadius};
        max-width: 380px;
        display: inline-flex;
  `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.05)};
      box-shadow: none;
      border-radius: 0;
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();

  return (
    <Card>
      <Box
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            sx={{
              pb: 1
            }}
            variant="caption"
            fontWeight="bold"
          >
            {t('Messenger')}
          </Typography>
          <Typography variant="h4">{t('Talking to Kate')}</Typography>
        </Box>
        <IconButton color="primary">
          <AddCircleTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 487
        }}
      >
        <Scrollbar>
          <Box px={2}>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              py={3}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: 50,
                  height: 50
                }}
                alt="Zain Baptista"
                src="/static/images/avatars/1.jpg"
              />
              <Box
                display="flex"
                alignItems="flex-start"
                flexDirection="column"
                justifyContent="flex-start"
                ml={2}
              >
                <CardWrapperSecondary>
                  Hi. Can you send me the missing invoices asap?
                </CardWrapperSecondary>
                <Typography
                  variant="subtitle1"
                  sx={{
                    pt: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ScheduleTwoToneIcon
                    sx={{
                      mr: 0.5
                    }}
                    fontSize="small"
                  />
                  {formatDistance(subHours(new Date(), 115), new Date(), {
                    addSuffix: true
                  })}
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-end"
              py={3}
            >
              <Box
                display="flex"
                alignItems="flex-end"
                flexDirection="column"
                justifyContent="flex-end"
                mr={2}
              >
                <CardWrapperPrimary>
                  Yes, I'll email them right now. I'll let you know once the
                  remaining invoices are done.
                </CardWrapperPrimary>
                <Typography
                  variant="subtitle1"
                  sx={{
                    pt: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ScheduleTwoToneIcon
                    sx={{
                      mr: 0.5
                    }}
                    fontSize="small"
                  />
                  {formatDistance(subHours(new Date(), 125), new Date(), {
                    addSuffix: true
                  })}
                </Typography>
              </Box>
              <Avatar
                variant="rounded"
                sx={{
                  width: 50,
                  height: 50
                }}
                alt={user.name}
                src={user.avatar}
              />
            </Box>

            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-end"
              py={3}
            >
              <Box
                display="flex"
                alignItems="flex-end"
                flexDirection="column"
                justifyContent="flex-end"
                mr={2}
              >
                <CardWrapperPrimary>Hey! Are you there?</CardWrapperPrimary>
                <CardWrapperPrimary
                  sx={{
                    mt: 2
                  }}
                >
                  Heeeelloooo????
                </CardWrapperPrimary>
                <Typography
                  variant="subtitle1"
                  sx={{
                    pt: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ScheduleTwoToneIcon
                    sx={{
                      mr: 0.5
                    }}
                    fontSize="small"
                  />
                  {formatDistance(subHours(new Date(), 60), new Date(), {
                    addSuffix: true
                  })}
                </Typography>
              </Box>
              <Avatar
                variant="rounded"
                sx={{
                  width: 50,
                  height: 50
                }}
                alt={user.name}
                src={user.avatar}
              />
            </Box>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              py={3}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: 50,
                  height: 50
                }}
                alt="Zain Baptista"
                src="/static/images/avatars/1.jpg"
              />
              <Box
                display="flex"
                alignItems="flex-start"
                flexDirection="column"
                justifyContent="flex-start"
                ml={2}
              >
                <CardWrapperSecondary>Hey there!</CardWrapperSecondary>
                <CardWrapperSecondary
                  sx={{
                    mt: 1
                  }}
                >
                  How are you? Is it ok if I call you?
                </CardWrapperSecondary>
                <Typography
                  variant="subtitle1"
                  sx={{
                    pt: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ScheduleTwoToneIcon
                    sx={{
                      mr: 0.5
                    }}
                    fontSize="small"
                  />
                  {formatDistance(subMinutes(new Date(), 6), new Date(), {
                    addSuffix: true
                  })}
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-end"
              py={3}
            >
              <Box
                display="flex"
                alignItems="flex-end"
                flexDirection="column"
                justifyContent="flex-end"
                mr={2}
              >
                <CardWrapperPrimary>
                  Hello, I just got my Amazon order shipped and I’m very happy
                  about that.
                </CardWrapperPrimary>
                <CardWrapperPrimary
                  sx={{
                    mt: 1
                  }}
                >
                  Can you confirm?
                </CardWrapperPrimary>
                <Typography
                  variant="subtitle1"
                  sx={{
                    pt: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ScheduleTwoToneIcon
                    sx={{
                      mr: 0.5
                    }}
                    fontSize="small"
                  />
                  {formatDistance(subMinutes(new Date(), 8), new Date(), {
                    addSuffix: true
                  })}
                </Typography>
              </Box>
              <Avatar
                variant="rounded"
                sx={{
                  width: 50,
                  height: 50
                }}
                alt={user.name}
                src={user.avatar}
              />
            </Box>
          </Box>
        </Scrollbar>
      </Box>
      <Divider />
      <CardWrapper
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              mr: 1
            }}
            size="small"
          >
            {t('Create Post')}
          </Button>
          <Button variant="outlined" color="secondary" size="small">
            {t('Event')}
          </Button>
        </Box>
        <Typography variant="subtitle2">
          {t('Posting as')}{' '}
          <Typography component="span" color="text.primary">
            <b>Emma Taylor</b>
          </Typography>
        </Typography>
      </CardWrapper>
      <Divider />
      <Box p={2} display="flex" alignItems="center">
        <Avatar alt={user.name} src={user.avatar} />
        <DividerWrapper orientation="vertical" flexItem />
        <Box
          sx={{
            flex: 1,
            mr: 2
          }}
        >
          <TextField
            hiddenLabel
            fullWidth
            placeholder={t('Write here your message...')}
          />
        </Box>
        <Tooltip arrow placement="top" title={t('Attach a file')}>
          <label htmlFor="messenger-upload-file">
            <IconButton color="primary" component="span">
              <AttachFileTwoToneIcon />
            </IconButton>
          </label>
        </Tooltip>
        <DividerWrapper orientation="vertical" flexItem />
        <Badge
          color="warning"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          variant="dot"
        >
          <Button variant="contained" startIcon={<SendTwoToneIcon />}>
            {t('Send')}
          </Button>
        </Badge>
      </Box>
    </Card>
  );
}

export default Block5;

import { Fragment } from 'react';

import {
  Box,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
  Card,
  Button,
  Typography,
  Avatar,
  styled,
  ListItem,
  Badge,
  OutlinedInput,
  InputAdornment,
  FormControl,
  useTheme
} from '@mui/material';
import Scrollbar from 'src/components/Scrollbar';

import { useTranslation } from 'react-i18next';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Text from 'src/components/Text';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

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

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

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
      name: 'Haydn Porter',
      jobtitle: 'Social Worker',
      company: 'Babbleblab',
      avatar: '/static/images/avatars/5.jpg',
      value: 16
    },
    {
      id: 6,
      name: 'Rueben Hays',
      jobtitle: 'Senior Cost Accountant',
      company: 'Trudoo',
      avatar: '/static/images/avatars/1.jpg',
      value: 65
    },
    {
      id: 7,
      name: 'Anabel Mayo',
      jobtitle: 'Associate Professor',
      company: 'Buzzdog',
      avatar: '/static/images/avatars/2.jpg',
      value: 76
    },
    {
      id: 8,
      name: 'Celine Goulding',
      jobtitle: 'Pharmacist',
      company: 'Yozio',
      avatar: '/static/images/avatars/3.jpg',
      value: 54
    }
  ];

  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Box>
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
          >
            {t('Messages')}
          </Typography>
          <Typography variant="h4">{t('Messenger Window')}</Typography>
        </Box>
        <Badge
          color="error"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          variant="dot"
          overlap="circular"
        >
          <AvatarGradient>ET</AvatarGradient>
        </Badge>
      </Box>
      <Divider />
      <Box
        py={1}
        px={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
      >
        <Button size="small" color="error">
          {t('Delete all')}
        </Button>
        <Typography variant="body2" fontWeight="bold">
          Emma Taylor
        </Typography>
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
          height: 362
        }}
      >
        <Scrollbar>
          <ListWrapper disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <ListItem
                  sx={{
                    '&:hover': {
                      background: `${theme.colors.alpha.black[5]}`
                    }
                  }}
                  secondaryAction={
                    <Button
                      size="small"
                      variant="text"
                      color="secondary"
                      startIcon={<AddTwoToneIcon />}
                      sx={{
                        alignSelf: 'center',
                        padding: `${theme.spacing(0.5, 1.6, 0.5, 1.2)}`,
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
                      {t('Add')}
                    </Button>
                  }
                >
                  <ListItemAvatar
                    sx={{
                      mr: 1
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50
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
                      <>
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
                      </>
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
    </Card>
  );
}

export default Block2;

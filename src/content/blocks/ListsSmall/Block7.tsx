import {
  Box,
  Card,
  Typography,
  IconButton,
  ListItemText,
  ListItem,
  Avatar,
  List,
  Button,
  ListItemAvatar,
  Divider,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Scrollbar from 'src/components/Scrollbar';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import AutoAwesomeMosaicTwoToneIcon from '@mui/icons-material/AutoAwesomeMosaicTwoTone';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import EvStationTwoToneIcon from '@mui/icons-material/EvStationTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
    border-radius: 100px;
    width: ${theme.spacing(6)};
    height: ${theme.spacing(6)};

    .MuiSvgIcon-root {
        transform-origin: center;
        transform: scale(1);
        transition: ${theme.transitions.create(['transform'])};
    }

    &:hover {
        .MuiSvgIcon-root {
            transform: scale(1.4);
        }
    }
  `
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(0.5, 1)};
  `
);

function Block7() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Box
        p={2.5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography gutterBottom variant="h4">
            {t('Navigation Pills')}
          </Typography>
          <Typography variant="subtitle2">
            {t('This is yet another example for navigation')}
          </Typography>
        </Box>
        <Button size="small" variant="contained" color="primary">
          {t('View all')}
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 350
        }}
      >
        <Scrollbar>
          <List disablePadding>
            <ListItem
              sx={{
                p: 2.5
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: 0
                }}
              >
                <Avatar
                  sx={{
                    background: 'transparent',
                    color: `${theme.colors.primary.main}`,
                    border: `${theme.colors.primary.main} solid 2px`,
                    width: 58,
                    height: 58
                  }}
                >
                  <OndemandVideoTwoToneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {t('Business')}
                  </Typography>
                }
                secondary={
                  <Typography noWrap variant="subtitle2">
                    {t('Grow familiar with the countless')}
                  </Typography>
                }
              />
              <IconButtonWrapper color="primary">
                <ArrowForwardTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                p: 2.5
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: 0
                }}
              >
                <Avatar
                  sx={{
                    background: 'transparent',
                    color: `${theme.colors.primary.main}`,
                    border: `${theme.colors.primary.main} solid 2px`,
                    width: 58,
                    height: 58
                  }}
                >
                  <AutoAwesomeMosaicTwoToneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {t('Finance')}
                    <LabelWrapper
                      ml={1}
                      component="span"
                      sx={{
                        background: `${alpha(theme.colors.info.light, 0.2)}`,
                        color: `${theme.colors.info.main}`
                      }}
                    >
                      {t('New')}
                    </LabelWrapper>
                  </Typography>
                }
                secondary={
                  <Typography noWrap variant="subtitle2">
                    {t('A wonderful serenity has taken')}
                  </Typography>
                }
              />
              <IconButtonWrapper color="primary">
                <ArrowForwardTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                p: 2.5
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: 0
                }}
              >
                <Avatar
                  sx={{
                    background: 'transparent',
                    color: `${theme.colors.primary.main}`,
                    border: `${theme.colors.primary.main} solid 2px`,
                    width: 58,
                    height: 58
                  }}
                >
                  <EvStationTwoToneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {t('Images')}
                    <LabelWrapper
                      ml={1}
                      component="span"
                      sx={{
                        background: `${alpha(theme.colors.error.light, 0.2)}`,
                        color: `${theme.colors.error.main}`
                      }}
                    >
                      {t('Hot')}
                    </LabelWrapper>
                  </Typography>
                }
                secondary={
                  <Typography noWrap variant="subtitle2">
                    {t('Absorbed in the exquisite sense')}
                  </Typography>
                }
              />
              <IconButtonWrapper color="primary">
                <ArrowForwardTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                p: 2.5
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: 0
                }}
              >
                <Avatar
                  sx={{
                    background: 'transparent',
                    color: `${theme.colors.primary.main}`,
                    border: `${theme.colors.primary.main} solid 2px`,
                    width: 58,
                    height: 58
                  }}
                >
                  <EvStationTwoToneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {t('Finance')}
                  </Typography>
                }
                secondary={
                  <Typography noWrap variant="subtitle2">
                    {t('A wonderful serenity has taken')}
                  </Typography>
                }
              />
              <IconButtonWrapper color="primary">
                <ArrowForwardTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                p: 2.5
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: 0
                }}
              >
                <Avatar
                  sx={{
                    background: 'transparent',
                    color: `${theme.colors.primary.main}`,
                    border: `${theme.colors.primary.main} solid 2px`,
                    width: 58,
                    height: 58
                  }}
                >
                  <ContactPhoneTwoToneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {t('Accounts')}
                    <LabelWrapper
                      ml={1}
                      component="span"
                      sx={{
                        background: `${alpha(theme.colors.warning.light, 0.2)}`,
                        color: `${theme.colors.warning.main}`
                      }}
                    >
                      {t('In progress')}
                    </LabelWrapper>
                  </Typography>
                }
                secondary={
                  <Typography noWrap variant="subtitle2">
                    {t('Absorbed in the exquisite sense')}
                  </Typography>
                }
              />
              <IconButtonWrapper color="primary">
                <ArrowForwardTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
            </ListItem>
          </List>
        </Scrollbar>
      </Box>
      <Divider />
      <Box
        p={2}
        sx={{
          textAlign: 'center'
        }}
      >
        <Button
          sx={{
            textTransform: 'uppercase',
            fontSize: `${theme.typography.pxToRem(12)}`
          }}
          variant="contained"
          endIcon={<KeyboardArrowRightTwoToneIcon />}
        >
          {t('View more items')}
        </Button>
      </Box>
    </Card>
  );
}

export default Block7;

import { useState, ChangeEvent } from 'react';
import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  IconButton,
  Tooltip,
  Switch,
  alpha,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import RouterTwoToneIcon from '@mui/icons-material/RouterTwoTone';
import DnsTwoToneIcon from '@mui/icons-material/DnsTwoTone';
import MemoryTwoToneIcon from '@mui/icons-material/MemoryTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';

const DotError = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.error.main};
    width: ${theme.spacing(1.1)};
    height: ${theme.spacing(1.1)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotSuccess = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.success.main};
    width: ${theme.spacing(1.1)};
    height: ${theme.spacing(1.1)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const SwitchSuccess = styled(Switch)(
  ({ theme }) => `
  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track,
    .MuiSwitch-colorPrimary.Mui-checked .MuiSwitch-thumb {
      background: ${theme.colors.success.main};
    }
    
    .MuiSwitch-colorPrimary.Mui-checked {
      color: ${theme.colors.success.main};
    }
    
    .MuiSwitch-colorPrimary.Mui-checked:hover {
      background-color: ${alpha(theme.colors.success.main, 0.1)};
    }
`
);

function VirtualServers() {
  const { t }: { t: any } = useTranslation();

  const [state1, setState1] = useState({
    server: true
  });

  const [state2, setState2] = useState({
    server: false
  });

  const serverActivate1 = (event: ChangeEvent<HTMLInputElement>) => {
    setState1({
      ...state1,
      [event.target.name]: event.target.checked
    });
  };

  const serverActivate2 = (event: ChangeEvent<HTMLInputElement>) => {
    setState2({
      ...state2,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          pb: 3
        }}
      >
        {t('Virtual Servers')}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
            >
              <Typography variant="h5" lineHeight={1}>
                App Staging
              </Typography>
              <Label color="success">
                <DotSuccess />
                {t('active')}
              </Label>
            </Box>
            <Box
              sx={{
                px: 2,
                pb: 2
              }}
            >
              <List disablePadding>
                <Divider component="li" />
                <ListItem>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36
                    }}
                  >
                    <RouterTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('IP Address')} />
                  <Typography variant="subtitle2">192.168.1.4</Typography>
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36
                    }}
                  >
                    <DnsTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('CPU')} />
                  <Typography variant="subtitle2">12 cores</Typography>
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36
                    }}
                  >
                    <MemoryTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('RAM')} />
                  <Typography variant="subtitle2">32.568 MB</Typography>
                </ListItem>
                <Divider component="li" />
              </List>
              <Box
                display="flex"
                alignItems="center"
                pt={2}
                justifyContent="space-between"
              >
                <Box>
                  <Button variant="text">{t('More information')}</Button>
                </Box>
                <Box display="flex" alignItems="center">
                  <Tooltip arrow title={t('Share')}>
                    <IconButton
                      sx={{
                        ml: 1
                      }}
                      size="small"
                      color="primary"
                    >
                      <ShareTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title={t('Refresh')}>
                    <IconButton
                      sx={{
                        ml: 1
                      }}
                      size="small"
                      color="primary"
                    >
                      <CachedTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Divider
                    sx={{
                      mx: 2
                    }}
                    orientation="vertical"
                    flexItem
                  />
                  <SwitchSuccess
                    checked={state1.server}
                    onChange={serverActivate1}
                    color="primary"
                    name="server"
                  />
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
            >
              <Typography variant="h5" lineHeight={1}>
                Ubuntu Server
              </Typography>
              <Label color="error">
                <DotError />
                {t('inactive')}
              </Label>
            </Box>
            <Box
              sx={{
                px: 2,
                pb: 2
              }}
            >
              <List disablePadding>
                <Divider component="li" />
                <ListItem>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36
                    }}
                  >
                    <RouterTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('IP Address')} />
                  <Typography variant="subtitle2">185.155.188.53</Typography>
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36
                    }}
                  >
                    <DnsTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('CPU')} />
                  <Typography variant="subtitle2">8 cores</Typography>
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36
                    }}
                  >
                    <MemoryTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('RAM')} />
                  <Typography variant="subtitle2">16.586 MB</Typography>
                </ListItem>
                <Divider component="li" />
              </List>
              <Box
                display="flex"
                alignItems="center"
                pt={2}
                justifyContent="space-between"
              >
                <Box>
                  <Button variant="text">{t('More information')}</Button>
                </Box>
                <Box display="flex" alignItems="center">
                  <Tooltip arrow title={t('Share')}>
                    <IconButton
                      sx={{
                        ml: 1
                      }}
                      size="small"
                      color="primary"
                    >
                      <ShareTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title={t('Refresh')}>
                    <IconButton
                      sx={{
                        ml: 1
                      }}
                      size="small"
                      color="primary"
                    >
                      <CachedTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Divider
                    sx={{
                      mx: 2
                    }}
                    orientation="vertical"
                    flexItem
                  />
                  <SwitchSuccess
                    checked={state2.server}
                    onChange={serverActivate2}
                    color="primary"
                    name="server"
                  />
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default VirtualServers;

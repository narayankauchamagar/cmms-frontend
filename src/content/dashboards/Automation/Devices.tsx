import { useRef, useState } from 'react';

import {
  Box,
  Typography,
  Tooltip,
  Avatar,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  MenuItem,
  Menu,
  IconButton,
  Button,
  Switch,
  styled
} from '@mui/material';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import useAuth from 'src/hooks/useAuth';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import RouterTwoToneIcon from '@mui/icons-material/RouterTwoTone';
import WashTwoToneIcon from '@mui/icons-material/WashTwoTone';
import { useTranslation } from 'react-i18next';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import SmartButtonTwoToneIcon from '@mui/icons-material/SmartButtonTwoTone';

const CardAddAction = styled(Card)(
  ({ theme }) => `
        color: ${theme.colors.primary.main};
        height: 100%;

        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
          border-radius: inherit;
          border: ${theme.colors.primary.main} dashed 2px;
          transition: ${theme.transitions.create(['all'])};

          &:hover {
            border-color: ${theme.colors.primary.dark};
          }
        }
        
        .MuiTouchRipple-root {
          opacity: .1;
        }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardDevice = styled(Card)(
  ({ theme }) => `
      color: ${theme.colors.primary.main};
      width: 100%;

      &.active {
        background: ${theme.palette.primary.main};
        color: ${theme.palette.primary.contrastText};
        box-shadow: ${theme.colors.shadows.primary};

        .MuiCardActionArea-root {
          .MuiSvgIcon-root,
          .MuiSwitch-root .MuiSwitch-switchBase.Mui-checked,
          .MuiTypography-root,
          .MuiTypography-caption {
            color: ${theme.colors.alpha.white[100]};
          }

          .MuiSwitch-root .MuiSwitch-switchBase {

            .MuiSwitch-thumb {
              background-color: ${theme.colors.alpha.white[100]};
            }

            & + .MuiSwitch-track {
              background-color: ${theme.colors.alpha.white[30]};
            }
          }


        }
      }

      .MuiCardActionArea-root {
        padding: ${theme.spacing(3, 6, 3, 4)};
        height: 100%;
        align-items: flex-start;
        justify-content: center;
        display: flex;
        position: relative;
        flex-direction: column;
        border: transparent solid 1px;
        border-radius: inherit;
        transition: ${theme.transitions.create(['border', 'background'])};

        .MuiTypography-root {
          color: ${theme.colors.alpha.black[50]};
        }

        .MuiTypography-caption {
          color: ${theme.colors.alpha.black[100]};
        }

        .MuiSwitch-root {
          position: absolute;
          top: ${theme.spacing(2)};
          right: ${theme.spacing(2)};
        }

        &:hover {
          border-color: ${theme.colors.primary.main};
        }
      }
      
      .MuiTouchRipple-root {
        opacity: .1;
      }
`
);

const IconWrapper = styled(Box)(
  ({ theme }) => `
      padding: ${theme.spacing(2, 0)};
      color: ${theme.colors.primary.main};
      margin-left: -7px;
`
);

function Devices() {
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();

  const locations = [
    {
      value: 'all',
      text: user.name + t("'s Home")
    },
    {
      value: 'living_room',
      text: t('Living room')
    },
    {
      value: 'garden_shed',
      text: t('Garden shed')
    },
    {
      value: 'master_bedroom',
      text: t('Master bedroom')
    }
  ];

  const [location, setLocation] = useState<string>(locations[0].text);
  const actionRef = useRef<any>(null);
  const [openLocation, setOpenMenuLocation] = useState<boolean>(false);

  return (
    <Box>
      <Box
        mb={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h3">{location}</Typography>
          <IconButton
            sx={{
              ml: 1
            }}
            color="primary"
            ref={actionRef}
            onClick={() => setOpenMenuLocation(true)}
          >
            <UnfoldMoreTwoToneIcon />
          </IconButton>
          <Menu
            disableScrollLock
            anchorEl={actionRef.current}
            onClose={() => setOpenMenuLocation(false)}
            open={openLocation}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center'
            }}
          >
            {locations.map((_location) => (
              <MenuItem
                key={_location.value}
                onClick={() => {
                  setLocation(_location.text);
                  setOpenMenuLocation(false);
                }}
              >
                {_location.text}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Button size="small" variant="contained">
          {t('Add room')}
        </Button>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} xl={3} md={4} sm={6}>
          <CardDevice>
            <CardActionArea>
              <Switch edge="end" color="primary" />
              <Typography fontWeight="bold" variant="caption" color="primary">
                {t('off')}
              </Typography>
              <IconWrapper>
                <LightbulbTwoToneIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h4" noWrap>
                {t('Main lights')}
              </Typography>
            </CardActionArea>
          </CardDevice>
        </Grid>
        <Grid item xs={12} xl={3} md={4} sm={6}>
          <CardDevice className="active">
            <CardActionArea>
              <Switch edge="end" defaultChecked color="primary" />
              <Typography fontWeight="bold" variant="caption" color="primary">
                {t('on')}
              </Typography>
              <IconWrapper>
                <KitchenIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h4" noWrap>
                {t('Refrigerator')}
              </Typography>
            </CardActionArea>
          </CardDevice>
        </Grid>
        <Grid item xs={12} xl={3} md={4} sm={6}>
          <CardDevice>
            <CardActionArea>
              <Switch edge="end" color="primary" />
              <Typography fontWeight="bold" variant="caption" color="primary">
                {t('off')}
              </Typography>
              <IconWrapper>
                <RouterTwoToneIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h4" noWrap>
                {t('Router')}
              </Typography>
            </CardActionArea>
          </CardDevice>
        </Grid>
        <Grid item xs={12} xl={3} md={4} sm={6}>
          <CardDevice>
            <CardActionArea>
              <Switch edge="end" color="primary" />
              <Typography fontWeight="bold" variant="caption" color="primary">
                {t('off')}
              </Typography>
              <IconWrapper>
                <WashTwoToneIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h4" noWrap>
                {t('LG Washing')}
              </Typography>
            </CardActionArea>
          </CardDevice>
        </Grid>
        <Grid item xs={12} xl={3} md={4} sm={6}>
          <CardDevice>
            <CardActionArea>
              <Switch edge="end" color="primary" />
              <Typography fontWeight="bold" variant="caption" color="primary">
                {t('off')}
              </Typography>
              <IconWrapper>
                <SmartButtonTwoToneIcon fontSize="large" />
              </IconWrapper>
              <Typography variant="h4" noWrap>
                {t('Samsung AC')}
              </Typography>
            </CardActionArea>
          </CardDevice>
        </Grid>
        <Grid item xs={12} xl={3} md={4} sm={6}>
          <Tooltip placement="right" arrow title={t('Pair new device')}>
            <CardAddAction>
              <CardActionArea
                sx={{
                  px: 1
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Devices;

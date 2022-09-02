import { useState } from 'react';

import {
  Box,
  Typography,
  Card,
  IconButton,
  Divider,
  Stack,
  useTheme,
  CardActionArea,
  Grid,
  Tooltip,
  Avatar,
  styled
} from '@mui/material';
import clsx from 'clsx';

import { useTranslation } from 'react-i18next';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import { useSwitch, UseSwitchProps } from '@mui/core';
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import AvTimerTwoToneIcon from '@mui/icons-material/AvTimerTwoTone';
import LoopTwoToneIcon from '@mui/icons-material/LoopTwoTone';
import Gauge from 'src/components/Gauge';
import { buildStyles } from 'react-circular-progressbar';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import RemoveTwoToneIcon from '@mui/icons-material/RemoveTwoTone';
import ErrorOutlineTwoToneIcon from '@mui/icons-material/ErrorOutlineTwoTone';
import TvTwoToneIcon from '@mui/icons-material/TvTwoTone';
import BlenderTwoToneIcon from '@mui/icons-material/BlenderTwoTone';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[10]};
    color: ${theme.colors.alpha.black[100]};
    padding: ${theme.spacing(2, 5)};
    border-radius: ${theme.general.borderRadiusXl};
`
);

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
      padding: ${theme.spacing(2.5)};

      .MuiTouchRipple-root {
        opacity: .3;
      }

      .MuiCardActionArea-focusHighlight {
        background: ${theme.colors.primary.lighter};
      }

      &:hover {
        .MuiCardActionArea-focusHighlight {
          opacity: .05;
        }
      }
`
);

const AvatarSecondary = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[10]};
    color: ${theme.colors.alpha.black[70]};
    width: ${theme.spacing(6)};
    height: ${theme.spacing(6)};
`
);

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
    width: ${theme.spacing(6)};
    height: ${theme.spacing(6)};
`
);

const GaugeWrapper = styled(Box)(
  () => `
    position: relative;
`
);

const BoxButtons = styled(Box)(
  () => `
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 20px;
    display: flex;
    justify-content: center;
`
);

const BoxDegrees = styled(Box)(
  () => `
    position: absolute;
    width: 208px;
    bottom: 10px;
    display: flex;
    justify-content: space-between;
    z-index: 4;

    sup {
      margin: 2px 0 0 -3px;
    }
`
);

const IconButtonIncrement = styled(IconButton)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      color: ${theme.colors.alpha.black[70]};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
      border-radius: 50px;
      box-shadow: 0px 1px 3px ${
        theme.colors.alpha.black[30]
      }, 0px 3px 8px 1px ${theme.colors.alpha.black[10]};
      display: flex;
      align-items: center;
      margin: 0 15px;
      justify-content: center;
      transition: ${theme.transitions.create(['all'])};
      z-index: 5;

      &:hover {
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.primary.contrastText};
        box-shadow: ${theme.colors.shadows.primary};
      }
`
);

const SwitchRoot = styled('span')(`
  display: inline-block;
  position: relative;
  width: 62px;
  height: 34px;
  padding: 7px;
`);

const SwitchInput = styled('input')(`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`);

const SwitchThumb = styled('span')(
  ({ theme }) => `
  position: absolute;
  display: block;
  background-color: ${theme.colors.primary.main};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  top: 1px;
  left: 7px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
      '#fff'
    )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>') center center no-repeat;
  }

  &.focusVisible {
    background-color: #79B;
  }

  &.checked {
    transform: translateX(16px);
    
    &:before {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>');
    }
  }
`
);

const SwitchTrack = styled('span')(
  ({ theme }) => `
  background-color: ${theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: block;
`
);

function MUISwitch(props: UseSwitchProps) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    disabled,
    focusVisible
  };

  return (
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchTrack>
        <SwitchThumb className={clsx(stateClasses)} />
      </SwitchTrack>
      <SwitchInput {...getInputProps()} aria-label="Demo switch" />
    </SwitchRoot>
  );
}

function Thermostat() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [gauge, setGauge] = useState(70);

  const handleGaugeIncrease = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setGauge((gauge) => gauge + 2);
  };

  const handleGaugeDecrease = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setGauge((gauge) => gauge - 2);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <Box
              display="flex"
              justifyContent="space-between"
              p={4}
              mb={2}
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <AvatarPrimary>
                  <AcUnitTwoToneIcon />
                </AvatarPrimary>
                <Box pl={1}>
                  <Typography gutterBottom variant="h4">
                    {t('Thermostat')}
                  </Typography>
                  <Typography
                    variant="h4"
                    color="text.secondary"
                    fontWeight="normal"
                  >
                    {t('Set to auto-cooling')}
                  </Typography>
                </Box>
              </Box>
              <MUISwitch defaultChecked />
            </Box>
            <GaugeWrapper
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Gauge
                circleRatio={0.65}
                styles={buildStyles({ rotation: 1 / 2 + 1 / 5.7 })}
                value={gauge}
                strokeWidth={10}
                text={``}
                color="primary"
                size="xxlarge"
              >
                <Box
                  sx={{
                    mt: '-30px',
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: `${theme.typography.pxToRem(13)}`,
                      fontWeight: 'bold'
                    }}
                    variant="caption"
                    color="text.secondary"
                  >
                    Cooling
                  </Typography>
                  <Typography
                    sx={{
                      mt: '-8px',
                      fontSize: `${theme.typography.pxToRem(40)}`
                    }}
                    variant="h1"
                  >
                    24.5<sup>°</sup>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: `${theme.typography.pxToRem(13)}`
                    }}
                    variant="caption"
                    color="text.secondary"
                  >
                    under 5 minutes
                  </Typography>
                </Box>
              </Gauge>
              <BoxButtons>
                <IconButtonIncrement onClick={handleGaugeDecrease}>
                  <RemoveTwoToneIcon />
                </IconButtonIncrement>
                <IconButtonIncrement onClick={handleGaugeIncrease}>
                  <AddTwoToneIcon />
                </IconButtonIncrement>
                <BoxDegrees>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    fontWeight="bold"
                  >
                    14 <sup>°</sup>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    fontWeight="bold"
                  >
                    30 <sup>°</sup>
                  </Typography>
                </BoxDegrees>
              </BoxButtons>
            </GaugeWrapper>
            <Stack
              mt={3}
              spacing={3}
              alignItems="center"
              direction="row"
              justifyContent="center"
              divider={<Divider orientation="vertical" flexItem />}
            >
              <AvatarWrapper>
                <AirTwoToneIcon />
              </AvatarWrapper>
              <AvatarWrapper>
                <AvTimerTwoToneIcon />
              </AvatarWrapper>
              <AvatarWrapper>
                <LoopTwoToneIcon />
              </AvatarWrapper>
            </Stack>
            <Stack
              mt={1}
              mb={4}
              spacing={3}
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={
                <Divider
                  sx={{
                    background: 'transparent'
                  }}
                  orientation="vertical"
                  flexItem
                />
              }
            >
              <Box
                sx={{
                  textAlign: 'center',
                  width: 80
                }}
              >
                <Typography variant="h5">Fan Speed</Typography>
                <Typography variant="subtitle2" textAlign="center" noWrap>
                  Off
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  width: 80
                }}
              >
                <Typography variant="h5">Timer</Typography>
                <Typography variant="subtitle2" textAlign="center" noWrap>
                  4 hours
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  width: 80
                }}
              >
                <Typography variant="h5">Auto mode</Typography>
                <Typography variant="subtitle2" textAlign="center" noWrap>
                  On
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionAreaWrapper>
              <AvatarPrimary>
                <TvTwoToneIcon />
              </AvatarPrimary>
              <Box mt={3}>
                <Typography gutterBottom variant="h4">
                  {t('Philips 4K TV')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                >
                  {t('On')}
                </Typography>
              </Box>
            </CardActionAreaWrapper>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionAreaWrapper>
              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <AvatarSecondary>
                  <BlenderTwoToneIcon />
                </AvatarSecondary>
                <Tooltip
                  placement="top"
                  arrow
                  title={t('This section can have a description!')}
                >
                  <IconButton component="span" size="small" color="secondary">
                    <ErrorOutlineTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box mt={3}>
                <Typography gutterBottom variant="h4">
                  {t('Smart Blender')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                >
                  {t('Off')}
                </Typography>
              </Box>
            </CardActionAreaWrapper>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Thermostat;

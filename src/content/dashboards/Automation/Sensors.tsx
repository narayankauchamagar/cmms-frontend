import { useState } from 'react';

import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  Avatar,
  ButtonGroup,
  IconButton,
  Stack,
  Slider,
  useTheme,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone';
import DeviceThermostatTwoToneIcon from '@mui/icons-material/DeviceThermostatTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import TrendingDown from '@mui/icons-material/TrendingDown';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Text from 'src/components/Text';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

const WallPaper = styled(Card)(({ theme }) => ({
  position: 'relative',
  background: theme.colors.gradients.pink1,
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s'
}));

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 'inherit',
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)'
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    height: '100%',
    width: 'auto'
  }
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.58,
  fontWeight: 500,
  letterSpacing: 0.2
});

const AvatarWrapperError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
);

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
  
  .MuiTypography-h1 {
    font-size: ${theme.typography.pxToRem(50)};
  }
`
);

function Sensors() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(false);
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WallPaper>
            <Widget>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <CoverImage>
                  <img
                    alt="can't win - Chilling Sunday"
                    src="/static/images/placeholders/fitness/4.jpg"
                  />
                </CoverImage>
                <Box
                  sx={{
                    ml: 1.5,
                    minWidth: 0
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={500}
                  >
                    Joel Corry
                  </Typography>
                  <Typography noWrap>
                    <b>Head &amp; Heart (feat. MNEK)</b>
                  </Typography>
                  <Typography noWrap letterSpacing={-0.25}>
                    Popular gym and workout songs 2021
                  </Typography>
                </Box>
              </Box>
              <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value as number)}
                sx={{
                  mt: '4px',
                  padding: '13px 0 !important',
                  color:
                    theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                  height: 4,
                  '& .MuiSlider-thumb': {
                    width: 8,
                    height: 8,
                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                    '&:before': {
                      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)'
                    },
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === 'dark'
                          ? 'rgb(255 255 255 / 16%)'
                          : 'rgb(0 0 0 / 16%)'
                      }`
                    },
                    '&.active': {
                      width: 20,
                      height: 20
                    }
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.28
                  }
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: -2
                }}
              >
                <TinyText>{formatDuration(position)}</TinyText>
                <TinyText>-{formatDuration(duration - position)}</TinyText>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: -1
                }}
              >
                <IconButton
                  sx={{
                    borderRadius: '50px'
                  }}
                  aria-label="previous song"
                >
                  <FastRewindRounded
                    fontSize="large"
                    htmlColor={mainIconColor}
                  />
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: '50px'
                  }}
                  aria-label={paused ? 'play' : 'pause'}
                  onClick={() => setPaused(!paused)}
                >
                  {paused ? (
                    <PlayArrowRounded
                      sx={{
                        fontSize: '3rem'
                      }}
                      htmlColor={mainIconColor}
                    />
                  ) : (
                    <PauseRounded
                      sx={{
                        fontSize: '3rem'
                      }}
                      htmlColor={mainIconColor}
                    />
                  )}
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: '50px'
                  }}
                  aria-label="next song"
                >
                  <FastForwardRounded
                    fontSize="large"
                    htmlColor={mainIconColor}
                  />
                </IconButton>
              </Box>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  mb: 1,
                  px: 1
                }}
                alignItems="center"
              >
                <VolumeDownRounded htmlColor={lightIconColor} />
                <Slider
                  aria-label="Volume"
                  defaultValue={30}
                  sx={{
                    padding: '13px 0 !important',
                    color:
                      theme.palette.mode === 'dark'
                        ? '#fff'
                        : 'rgba(0,0,0,0.87)',
                    '& .MuiSlider-track': {
                      border: 'none'
                    },
                    '& .MuiSlider-thumb': {
                      width: 24,
                      height: 24,
                      backgroundColor: '#fff',
                      '&:before': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)'
                      },
                      '&:hover, &.Mui-focusVisible, &.active': {
                        boxShadow: 'none'
                      }
                    }
                  }}
                />
                <VolumeUpRounded htmlColor={lightIconColor} />
              </Stack>
            </Widget>
          </WallPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <CardWrapper
            sx={{
              pb: 3
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              p={3}
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <DeviceThermostatTwoToneIcon />
                <Typography
                  sx={{
                    pl: 1
                  }}
                  variant="h4"
                  color="text.secondary"
                  noWrap
                  fontWeight="bold"
                >
                  {t('Master bedroom')}
                </Typography>
              </Box>
              <AvatarWrapperSuccess variant="rounded">
                <TrendingUp />
              </AvatarWrapperSuccess>
            </Box>
            <Box
              px={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                align="center"
                variant="h1"
                sx={{
                  mt: '-4px'
                }}
              >
                <Text color="success">
                  25.4<sup>°</sup>
                </Text>
              </Typography>
              <ButtonGroup orientation="vertical" variant="contained">
                <Button>
                  <ArrowUpwardTwoToneIcon />
                </Button>
                <Button>
                  <ArrowDownwardTwoToneIcon />
                </Button>
              </ButtonGroup>
            </Box>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <CardWrapper
            sx={{
              pb: 3
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              p={3}
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <OpacityTwoToneIcon />
                <Typography
                  sx={{
                    pl: 1
                  }}
                  variant="h4"
                  noWrap
                  color="text.secondary"
                  fontWeight="bold"
                >
                  {t('Humidity')}
                </Typography>
              </Box>
              <AvatarWrapperError variant="rounded">
                <TrendingDown />
              </AvatarWrapperError>
            </Box>
            <Box
              px={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography align="center" variant="h1">
                <Text color="black">59%</Text>
              </Typography>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="outlined"
              >
                <Button>
                  <ArrowUpwardTwoToneIcon />
                </Button>
                <Button>
                  <ArrowDownwardTwoToneIcon />
                </Button>
              </ButtonGroup>
            </Box>
          </CardWrapper>
        </Grid>
      </Grid>
    </>
  );
}

export default Sensors;

import {
  Grid,
  Box,
  Card,
  Typography,
  CardActionArea,
  Avatar,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import DirectionsCarTwoToneIcon from '@mui/icons-material/DirectionsCarTwoTone';
import AlarmTwoToneIcon from '@mui/icons-material/AlarmTwoTone';
import BalconyTwoToneIcon from '@mui/icons-material/BalconyTwoTone';

const CardHover = styled(Card)(
  ({ theme }) => `
    transform: scale(1);
    transition: ${theme.transitions.create(['transform'])};

    &:hover {
        transform: scale(1.1);
    }
  `
);

function Block2() {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            background: `${theme.colors.gradients.blue4}`,
            color: `${theme.palette.getContrastText(theme.colors.primary.main)}`
          }}
        >
          <CardActionArea
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              px: 3,
              py: 5
            }}
          >
            <Avatar
              sx={{
                mr: 3,
                mt: -1.8,
                width: 62,
                height: 62,
                color: `${theme.colors.warning.main}`,
                background: `${theme.palette.getContrastText(
                  theme.colors.warning.main
                )}`
              }}
            >
              <DirectionsCarTwoToneIcon
                sx={{
                  fontSize: `${theme.typography.pxToRem(30)}`
                }}
              />
            </Avatar>
            <Box>
              <Typography
                sx={{
                  pb: 1.5,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.main
                  )}`
                }}
                variant="h3"
              >
                MacBook Pro
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  lineHeight: 1.8,
                  color: `${alpha(
                    theme.palette.getContrastText(theme.colors.primary.main),
                    0.8
                  )}`
                }}
              >
                You can build unlimited layout styles using any of the 500+
                included components and elements. This is a powerful and unique
                template for all modern web technologies.
              </Typography>
            </Box>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardHover
          sx={{
            display: 'flex',
            px: 3,
            py: 5,
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[30]
                : theme.colors.alpha.black[100],
            color: `${theme.palette.getContrastText(
              theme.colors.alpha.black[100]
            )}`
          }}
        >
          <Avatar
            sx={{
              mr: 3,
              mt: -1.8,
              width: 62,
              height: 62,
              color: `${theme.colors.alpha.black[100]}`,
              background: `${theme.palette.getContrastText(
                theme.colors.alpha.black[100]
              )}`
            }}
          >
            <AlarmTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(30)}`
              }}
            />
          </Avatar>
          <Box>
            <Typography
              sx={{
                pb: 1.5,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.main
                )}`
              }}
              variant="h3"
            >
              iPhone 13 Pro
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                lineHeight: 1.8,
                color: `${alpha(
                  theme.palette.getContrastText(theme.colors.primary.main),
                  0.8
                )}`
              }}
            >
              You can build unlimited layout styles using any of the 500+
              included components and elements. This is a powerful and unique
              template for all modern web technologies.
            </Typography>
          </Box>
        </CardHover>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            display: 'flex',
            px: 3,
            py: 5,
            background: `${theme.colors.primary.main}`,
            color: `${theme.palette.getContrastText(theme.colors.primary.main)}`
          }}
        >
          <Avatar
            sx={{
              mr: 3,
              mt: -1.8,
              width: 62,
              height: 62,
              color: `${theme.colors.primary.main}`,
              background: `${theme.palette.getContrastText(
                theme.colors.primary.main
              )}`
            }}
          >
            <BalconyTwoToneIcon
              sx={{
                fontSize: `${theme.typography.pxToRem(30)}`
              }}
            />
          </Avatar>
          <Box>
            <Typography
              sx={{
                pb: 1.5,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.main
                )}`
              }}
              variant="h3"
            >
              Apple Watch Series 7
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                lineHeight: 1.8,
                color: `${alpha(
                  theme.palette.getContrastText(theme.colors.primary.main),
                  0.8
                )}`
              }}
            >
              You can build unlimited layout styles using any of the 500+
              included components and elements. This is a powerful and unique
              template for all modern web technologies.
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block2;

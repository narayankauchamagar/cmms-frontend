import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  Avatar,
  Divider,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import SportsBasketballTwoToneIcon from '@mui/icons-material/SportsBasketballTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import LocalConvenienceStoreTwoToneIcon from '@mui/icons-material/LocalConvenienceStoreTwoTone';

const ButtonWrapper = styled(Button)(
  ({ theme }) => `
    padding: ${theme.spacing(2, 3)};
    display: flex;
    justify-content: space-between;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &:hover {
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.alpha.black[100]};
    }
  `
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.success.main};
        color: ${theme.palette.getContrastText(theme.colors.success.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.success};
        top: -${theme.spacing(4)};
        position: absolute;
        left: ${theme.spacing(3)};
  `
);

const AvatarInfo = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.info.main};
        color: ${theme.palette.getContrastText(theme.colors.info.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.info};
        top: -${theme.spacing(4)};
        position: absolute;
        left: ${theme.spacing(3)};
  `
);

const AvatarGradient = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.gradients.blue1};
        color: ${theme.palette.getContrastText(theme.colors.primary.main)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.primary};
        top: -${theme.spacing(4)};
        position: absolute;
        left: ${theme.spacing(3)};
  `
);

function Block8() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 4,
            mt: 4
          }}
        >
          <AvatarSuccess variant="rounded">
            <AssessmentTwoToneIcon fontSize="large" />
          </AvatarSuccess>
          <Box p={3.5}>
            <Typography
              variant="h3"
              sx={{
                mb: 1
              }}
            >
              Lightweight
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              You can build unlimited layout styles using any of the 500+
              included components and elements...
            </Typography>
          </Box>
          <Divider />
          <ButtonWrapper
            color="success"
            variant="text"
            fullWidth
            endIcon={<ChevronRightTwoToneIcon />}
          >
            {t('Manage my account')}
          </ButtonWrapper>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 4,
            mt: 4
          }}
        >
          <AvatarInfo variant="rounded">
            <SportsBasketballTwoToneIcon fontSize="large" />
          </AvatarInfo>
          <Box p={3.5}>
            <Typography
              variant="h3"
              sx={{
                mb: 1
              }}
            >
              Starter templates
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              You can build unlimited layout styles using any of the 500+
              included components and elements...
            </Typography>
          </Box>
          <Divider />
          <ButtonWrapper
            color="info"
            variant="text"
            fullWidth
            endIcon={<ChevronRightTwoToneIcon />}
          >
            {t('Create sales reports')}
          </ButtonWrapper>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 4,
            mt: 4
          }}
        >
          <AvatarGradient variant="rounded">
            <LocalConvenienceStoreTwoToneIcon fontSize="large" />
          </AvatarGradient>
          <Box p={3.5}>
            <Typography
              variant="h3"
              sx={{
                mb: 1
              }}
            >
              Simple to use
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              You can build unlimited layout styles using any of the 500+
              included components and elements...
            </Typography>
          </Box>
          <Divider />
          <ButtonWrapper
            color="primary"
            variant="text"
            fullWidth
            endIcon={<ChevronRightTwoToneIcon />}
          >
            {t('View all profiles')}
          </ButtonWrapper>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block8;

import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
  Avatar,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 4
          }}
        >
          <Avatar
            sx={{
              mb: 3,
              width: 64,
              height: 64,
              background: `${theme.colors.primary.main}`,
              color: `${theme.palette.primary.contrastText}`
            }}
          >
            <SubscriptionsTwoToneIcon />
          </Avatar>
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
              fontSize: `${theme.typography.pxToRem(21)}`
            }}
          >
            {t('Starter templates')}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 3,
              fontSize: `${theme.typography.pxToRem(14)}`
            }}
          >
            You can build unlimited layout styles using any of the 500+ included
            components and elements...
          </Typography>
          <Box
            sx={{
              textAlign: 'right'
            }}
          >
            <Button variant="text" endIcon={<ArrowForwardTwoToneIcon />}>
              {t('Learn more')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 4
          }}
        >
          <Avatar
            sx={{
              mb: 3,
              width: 64,
              height: 64,
              background: `${theme.colors.gradients.pink2}`,
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            <PersonTwoToneIcon />
          </Avatar>
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
              fontSize: `${theme.typography.pxToRem(21)}`
            }}
          >
            {t('Simple to use')}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 3,
              fontSize: `${theme.typography.pxToRem(14)}`
            }}
          >
            You can build unlimited layout styles using any of the 500+ included
            components and elements...
          </Typography>
          <Box
            sx={{
              textAlign: 'right'
            }}
          >
            <Button variant="text" endIcon={<ArrowForwardTwoToneIcon />}>
              {t('Learn more')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 4
          }}
        >
          <Avatar
            sx={{
              mb: 3,
              width: 64,
              height: 64,
              background: `${theme.colors.gradients.orange1}`,
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            <MonetizationOnTwoToneIcon />
          </Avatar>
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
              fontSize: `${theme.typography.pxToRem(21)}`
            }}
          >
            {t('Lightweight')}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 3,
              fontSize: `${theme.typography.pxToRem(14)}`
            }}
          >
            You can build unlimited layout styles using any of the 500+ included
            components and elements...
          </Typography>
          <Box
            sx={{
              textAlign: 'right'
            }}
          >
            <Button variant="text" endIcon={<ArrowForwardTwoToneIcon />}>
              {t('Learn more')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block6;

import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
  Avatar,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Label from 'src/components/Label';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 7;
  `
);

const LabelWarning = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.warning.main};
    color: ${theme.palette.warning.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadius};
  `
);

const LabelError = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.error.main};
    color: ${theme.palette.error.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadius};
  `
);

const LabelSuccess = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.success.main};
    color: ${theme.palette.success.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadius};
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative',
            p: 5
          }}
        >
          <CardActions>
            <LabelError>68</LabelError>
          </CardActions>
          <Avatar
            variant="rounded"
            sx={{
              mb: 3,
              width: 54,
              height: 54,
              background: `${theme.colors.info.main}`,
              color: `${theme.palette.info.contrastText}`
            }}
          >
            <SubscriptionsTwoToneIcon />
          </Avatar>
          <Typography
            variant="h3"
            sx={{
              mb: 1,
              fontSize: `${theme.typography.pxToRem(18)}`
            }}
          >
            {t('Sales statistics')}
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
          <Button variant="outlined" endIcon={<ArrowForwardTwoToneIcon />}>
            {t('View live preview')}
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative',
            p: 5
          }}
        >
          <CardActions>
            <Box component="span" mr={0.5}>
              <LabelWarning>{t('Promo')}</LabelWarning>
            </Box>
            <LabelSuccess>{t('Special')}</LabelSuccess>
          </CardActions>
          <Avatar
            variant="rounded"
            sx={{
              mb: 3,
              width: 54,
              height: 54,
              background: `${theme.colors.gradients.purple1}`,
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            <PersonTwoToneIcon />
          </Avatar>
          <Typography
            variant="h3"
            sx={{
              mb: 1,
              fontSize: `${theme.typography.pxToRem(18)}`
            }}
          >
            {t('Generated reports')}
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
          <Button variant="outlined" endIcon={<ArrowForwardTwoToneIcon />}>
            {t('View live preview')}
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            position: 'relative',
            p: 5
          }}
        >
          <CardActions>
            <Label color="error">
              <Box
                component="span"
                sx={{
                  fontSize: `${theme.typography.pxToRem(10)}`,
                  textTransform: 'uppercase',
                  fontWeight: 'bold'
                }}
              >
                {t('Overdue')}
              </Box>
            </Label>
          </CardActions>
          <Avatar
            variant="rounded"
            sx={{
              mb: 3,
              width: 54,
              height: 54,
              background: `${theme.colors.gradients.black2}`,
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            <MonetizationOnTwoToneIcon />
          </Avatar>
          <Typography
            variant="h3"
            sx={{
              mb: 1,
              fontSize: `${theme.typography.pxToRem(18)}`
            }}
          >
            {t('Pricing plans')}
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
          <Button variant="outlined" endIcon={<ArrowForwardTwoToneIcon />}>
            {t('View live preview')}
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block5;

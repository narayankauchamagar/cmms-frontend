import { Link, Box, Card, Grid, styled } from '@mui/material';

import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

const DividerVertialPrimary = styled(Box)(
  ({ theme }) => `
    height: 60%;
    width: 6px;
    left: -3px;
    border-radius: 50px;
    position: absolute;
    top: 20%;
    background: ${theme.colors.primary.main};
  `
);

const DividerVertialSuccess = styled(Box)(
  ({ theme }) => `
    height: 60%;
    width: 6px;
    left: -3px;
    border-radius: 50px;
    position: absolute;
    top: 20%;
    background: ${theme.colors.success.main};
  `
);

const DividerVertialWarning = styled(Box)(
  ({ theme }) => `
    height: 60%;
    width: 6px;
    left: -3px;
    border-radius: 50px;
    position: absolute;
    top: 20%;
    background: ${theme.colors.warning.main};
  `
);

const LabelPrimary = styled(Box)(
  ({ theme }) => `
      font-weight: bold;
      border-radius: ${theme.general.borderRadiusSm};
      background: ${theme.colors.primary.main};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      padding: ${theme.spacing(0.5, 1.5)};
      color: ${theme.palette.primary.contrastText};
  `
);

const LabelSuccess = styled(Box)(
  ({ theme }) => `
      font-weight: bold;
      border-radius: ${theme.general.borderRadiusSm};
      background: ${theme.colors.success.main};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      padding: ${theme.spacing(0.5, 1.5)};
      color: ${theme.palette.success.contrastText};
  `
);

const LabelWarning = styled(Box)(
  ({ theme }) => `
      font-weight: bold;
      border-radius: ${theme.general.borderRadiusSm};
      background: ${theme.colors.warning.main};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      padding: ${theme.spacing(0.5, 1.5)};
      color: ${theme.palette.warning.contrastText};
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            p: 2
          }}
          variant="outlined"
        >
          <DividerVertialPrimary />
          <Link
            color="text.primary"
            component="a"
            variant="h4"
            fontWeight="normal"
            href="#"
          >
            Presentation site design
          </Link>
          <Box mt={1.5} display="flex" alignItems="center">
            <LabelPrimary>{t('On hold')}</LabelPrimary>
            <Text flex color="error">
              <AccessTimeTwoToneIcon
                sx={{
                  ml: 1,
                  mr: 0.5
                }}
                fontSize="small"
              />
              2:35 pm
            </Text>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            p: 2
          }}
          variant="outlined"
        >
          <DividerVertialSuccess />
          <Link
            color="text.primary"
            component="a"
            variant="h4"
            fontWeight="normal"
            href="#"
          >
            Create UI mockups
          </Link>
          <Box mt={1.5} display="flex" alignItems="center">
            <LabelSuccess>{t('On hold')}</LabelSuccess>
            <Text flex color="secondary">
              <AccessTimeTwoToneIcon
                sx={{
                  ml: 1,
                  mr: 0.5
                }}
                fontSize="small"
              />
              09:40 pm
            </Text>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            p: 2
          }}
          variant="outlined"
        >
          <DividerVertialWarning />
          <Link
            color="text.primary"
            component="a"
            variant="h4"
            fontWeight="normal"
            href="#"
          >
            UX research
          </Link>
          <Box mt={1.5} display="flex" alignItems="center">
            <LabelWarning>{t('Scheduled')}</LabelWarning>
            <Text flex color="secondary">
              <AccessTimeTwoToneIcon
                sx={{
                  ml: 1,
                  mr: 0.5
                }}
                fontSize="small"
              />
              12:35 pm
            </Text>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block5;

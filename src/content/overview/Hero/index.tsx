import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const ImgWrapper = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 5;
    width: 100%;
    overflow: hidden;
    border-radius: ${theme.general.borderRadiusLg};
    box-shadow: 0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%);

    img {
      display: block;
      width: 100%;
    }
  `
);

const BoxAccent = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.general.borderRadiusLg};
    background: ${theme.palette.background.default};
    width: 100%;
    height: 100%;
    position: absolute;
    left: -40px;
    bottom: -40px;
    display: block;
    z-index: 4;
  `
);

const BoxContent = styled(Box)(
  () => `
  width: 150%;
  position: relative;
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const ListItemWrapper = styled(Box)(
  () => `
    display: flex;
    align-items: center;
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {
  const { t }: { t: any } = useTranslation();

  return (
    <Container maxWidth="lg">
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={6} pr={{ xs: 0, md: 3 }}>
          <LabelWrapper color="success">{t('Version') + ' 3.1'}</LabelWrapper>
          <TypographyH1
            sx={{
              mb: 2
            }}
            variant="h1"
          >
            {t('Tokyo White React Typescript Admin Dashboard')}
          </TypographyH1>
          <TypographyH2
            sx={{
              lineHeight: 1.5,
              pb: 4
            }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            {t(
              'High performance React template built with lots of powerful MUI (Material-UI) components across multiple product niches for fast & perfect apps development processes'
            )}
          </TypographyH2>
          <Button
            component={RouterLink}
            to="/extended-sidebar/dashboards"
            size="large"
            variant="contained"
          >
            {t('Browse Live Preview')}
          </Button>
          <Button
            sx={{
              ml: 2
            }}
            component="a"
            href="#key-features"
            size="large"
            variant="text"
          >
            {t('Key Features')}
          </Button>
          <ListItemWrapper
            sx={{
              mt: 5,
              mb: 2
            }}
          >
            <MuiAvatar>
              <img
                src="/static/images/logo/material-ui.svg"
                alt="MUI (Material-UI)"
              />
            </MuiAvatar>
            <Typography variant="h6">
              <b>Powered by MUI (Material-UI)</b>
              <Typography component="span" variant="subtitle2">
                {' '}
                - A simple and customizable component library to build faster,
                beautiful, and accessible React apps.
              </Typography>
            </Typography>
          </ListItemWrapper>
          <ListItemWrapper>
            <TsAvatar>
              <img src="/static/images/logo/typescript.svg" alt="Typescript" />
            </TsAvatar>
            <Typography variant="h6">
              <b>Built with Typescript</b>
              <Typography component="span" variant="subtitle2">
                {' '}
                - Tokyo features a modern technology stack and is built with
                React + Typescript.
              </Typography>
            </Typography>
          </ListItemWrapper>
        </Grid>
        <Grid item md={6}>
          <BoxContent>
            <RouterLink to="/extended-sidebar/dashboards">
              <ImgWrapper>
                <img
                  alt="Tokyo"
                  src="/static/images/overview/hero-screenshot.png"
                />
              </ImgWrapper>
            </RouterLink>
            <BoxAccent
              sx={{
                display: { xs: 'none', md: 'block' }
              }}
            />
          </BoxContent>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;

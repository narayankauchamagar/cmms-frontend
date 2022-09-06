import { Container, Typography, Grid } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function ThemesCustomization() {
  const themeDir = `📦theme
  ┣ 📂schemes
  ┃ ┣ 📜DarkSpacesTheme.ts
  ┃ ┣ 📜GreenFieldsTheme.ts
  ┃ ┗ 📜NebulaFighterTheme.ts
  ┣ 📜base.ts
  ┗ 📜ThemeProvider.tsx`;

  const themeCustom = `const themeColors = {
    primary: '#5569ff',
    secondary: '#6E759F',
    success: '#57CA22',
    warning: '#FFA319',
    error: '#FF1943',
    info: '#33C2FF',
    black: '#223354',
    white: '#ffffff',
    primaryAlt: '#000C57'
  };
  
  const colors = {
    layout: {
      general: {
        bodyBg: '#f2f5f9'
      },
      sidebar: {
        background: themeColors.white,
        textColor: themeColors.secondary,
        dividerBg: '#f2f5f9',
        menuItemColor: '#242E6F',
        menuItemColorActive: themeColors.primary,
        menuItemBg: themeColors.white,
        menuItemBgActive: '#f2f5f9',
        menuItemIconColor: lighten(themeColors.secondary, 0.3),
        menuItemIconColorActive: themeColors.primary,
        menuItemHeadingColor: darken(themeColors.secondary, 0.3)
      }
    }
  };
  
  export const NebulaFighterTheme = createTheme({
    direction: i18n.dir(),
    colors: {
      shadows: {
        success: colors.shadows.success,
        error: colors.shadows.error,
        primary: colors.shadows.primary,
        info: colors.shadows.info,
        warning: colors.shadows.warning
      },
      primary: {
        lighter: alpha(themeColors.primary, 0.1),
        light: lighten(themeColors.primary, 0.3),
        main: themeColors.primary,
        dark: darken(themeColors.primary, 0.2)
      }
    },
    sidebar: {
      background: colors.layout.sidebar.background,
      textColor: colors.layout.sidebar.textColor,
      dividerBg: colors.layout.sidebar.dividerBg,
      menuItemColor: colors.layout.sidebar.menuItemColor,
      menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
      menuItemBg: colors.layout.sidebar.menuItemBg,
      menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
      menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
      menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
      menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
      boxShadow:
        '2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)',
      width: '290px'
    }`;

  return (
    <>
      <Helmet>
        <title>
          Themes Customization - Tokyo White React Typescript Admin Dashboard
        </title>
      </Helmet>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Themes Customization" subheading="" />
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              Tokyo White React Typescript Admin Dashboard comes with 3
              predefined color schemes: <code>Nebula Fighter</code>,{' '}
              <code>Green Fields</code> and <code>Dark Spaces</code>.
            </Typography>
            <Typography paragraph>
              If you're looking to use only a single color scheme, then you'll
              need to remove the files and references for the color schemes that
              you're not going to use from <code>/src/theme/schemes</code>,{' '}
              <code>/src/theme/base.ts</code> and{' '}
              <code>/src/theme/ThemeProvider.tsx</code>.
            </Typography>
            <br />
            <Typography paragraph>
              You can find all the theme logic inside the{' '}
              <code>/src/theme/</code> folder. Switch between themes using the
              top right 'cog' menu in the live preview demo.
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {themeDir}
            </Prism>
            <br />
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Custom Schemes
            </Typography>
            <Typography paragraph>
              Each color scheme has it's individual file making it easy to
              create new ones or modify existing.
            </Typography>
            <Typography paragraph>
              For example, if you were to modify the sidebar style for the{' '}
              <code>Pure Light</code> theme you would have to edit sidebar
              colors section inside{' '}
              <code>src\theme\schemes\NebulaFighterTheme.ts</code>:
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {themeCustom}
            </Prism>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ThemesCustomization;

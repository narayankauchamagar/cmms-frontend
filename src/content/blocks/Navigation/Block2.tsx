import {
  Box,
  Grid,
  Card,
  Tooltip,
  Avatar,
  MenuList,
  MenuItem,
  Typography,
  IconButton,
  ListItemText,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import BounceRate from 'src/content/dashboards/Analytics/BounceRate';
import ConversionsAlt from 'src/content/dashboards/Analytics/ConversionsAlt';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

const BoxComposed = styled(Box)(
  () => `
    position: relative;
  `
);

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 12;
  `
);

const BoxComposedContent = styled(Box)(
  () => `
    position: relative;
    z-index: 7;
  `
);

const BoxComposedImage = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    filter: grayscale(80%);
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

const BoxComposedBg = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
      background: transparent;
      transition: ${theme.transitions.create(['all'])};
      color: ${theme.colors.alpha.trueWhite[70]};
      border-radius: 50px;
  
      &:hover {
        background: transparent;
        color: ${theme.colors.alpha.trueWhite[100]};
      }
  `
);

const MenuListWrapper = styled(MenuList)(
  ({ theme }) => `
    & .MuiMenuItem-root {
        border-radius: ${theme.general.borderRadius};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: ${theme.spacing(1.5, 1, 1.5, 2.5)};
        margin-bottom: 2px;
        position: relative;

        &::before {
            left: 0;
            width: 0;
            background: ${theme.colors.primary.main};
            content: ' ';
            top: 50%;
            margin-top: -10px;
            height: 0;
            transition: ${theme.transitions.create(['all'])};
            opacity: 0;
            position: absolute;
            border-top-right-radius: ${theme.general.borderRadius};
            border-bottom-right-radius: ${theme.general.borderRadius};
        }

        &.Mui-selected,
        &:hover,
        &.MuiButtonBase-root:active {
            color: ${theme.colors.primary.main};

            &::before {
                height: 100%;
                opacity: 1;
                width: 4px;
                margin: 0;
                top: 0;
            }
        }

        &:last-child {
            margin-bottom: 0;
        }
      }
  `
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(0.5, 1)};
  `
);

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
          >
            <Box>
              <Box py={5} px={2}>
                <Avatar
                  variant="square"
                  sx={{
                    mx: 'auto',
                    mb: 1.5,
                    width: 'auto',
                    height: 54,
                    '& img': {
                      objectFit: 'contain'
                    }
                  }}
                  src="/static/images/placeholders/logo/stripe.svg"
                />
                <Typography variant="subtitle2" textAlign="center">
                  {t(
                    'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
                  )}
                  .
                </Typography>
              </Box>
              <MenuListWrapper
                disablePadding
                sx={{
                  mb: 3,
                  mr: 3
                }}
              >
                <MenuItem selected>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5'
                    }}
                    primary={t('Analytics')}
                  />
                  <ChevronRightTwoToneIcon
                    sx={{
                      color: `${theme.colors.alpha.black[30]}`,
                      opacity: 0.8
                    }}
                  />
                </MenuItem>
                <MenuItem>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5'
                    }}
                    primary={t('Reports Management')}
                  />
                  <ChevronRightTwoToneIcon
                    sx={{
                      color: `${theme.colors.alpha.black[30]}`,
                      opacity: 0.8
                    }}
                  />
                </MenuItem>
                <MenuItem>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5'
                    }}
                    primary={t('Real Estate')}
                  />
                  <ChevronRightTwoToneIcon
                    sx={{
                      color: `${theme.colors.alpha.black[30]}`,
                      opacity: 0.8
                    }}
                  />
                </MenuItem>
                <MenuItem>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'h5'
                    }}
                    primary={t('Server Status')}
                  />
                  <Box display="flex" alignItems="center">
                    <LabelWrapper
                      component="span"
                      sx={{
                        background: `${theme.colors.success.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.success.dark
                        )}`
                      }}
                    >
                      23
                    </LabelWrapper>
                    <ChevronRightTwoToneIcon
                      sx={{
                        ml: 1,
                        color: `${theme.colors.alpha.black[30]}`,
                        opacity: 0.8
                      }}
                    />
                  </Box>
                </MenuItem>
              </MenuListWrapper>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={8}
          sx={{
            display: 'flex'
          }}
        >
          <BoxComposed
            display="flex"
            alignItems="center"
            sx={{
              width: '100%',
              position: 'relative',
              minHeight: '100%',
              background: `${theme.colors.gradients.black1}`
            }}
          >
            <CardActions display="flex" alignItems="center">
              <Tooltip
                arrow
                title={t('This is a helper placeholder')}
                placement="right"
              >
                <IconButtonWrapper
                  sx={{
                    ml: 0.5
                  }}
                >
                  <HelpTwoToneIcon fontSize="small" />
                </IconButtonWrapper>
              </Tooltip>
            </CardActions>
            <BoxComposedBg
              sx={{
                opacity: 0.5,
                background: `${theme.colors.gradients.purple1}`
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.3,
                backgroundImage:
                  'url("/static/images/placeholders/covers/3.jpg")'
              }}
            />
            <BoxComposedContent
              display="flex"
              flexGrow={1}
              alignItems="center"
              flexDirection="column"
              p={{ xs: 4, xl: 8 }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <ConversionsAlt />
                </Grid>
                <Grid item xs={12} md={6}>
                  <BounceRate />
                </Grid>
              </Grid>
            </BoxComposedContent>
          </BoxComposed>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Block2;

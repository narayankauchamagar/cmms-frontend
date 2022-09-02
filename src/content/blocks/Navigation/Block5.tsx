import {
  Grid,
  Box,
  Avatar,
  Card,
  MenuItem,
  Rating,
  ListItemText,
  alpha,
  Typography,
  MenuList,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

const MenuListWrapperRounded = styled(MenuList)(
  ({ theme }) => `
    & .MuiMenuItem-root {
        border-radius: 50px;
        padding: ${theme.spacing(1, 1, 1, 2.5)};
        margin-bottom: 2px;
        position: relative;
        color: ${theme.colors.alpha.black[70]};

        &.Mui-selected,
        &:hover,
        &.MuiButtonBase-root:active {
            background: ${theme.colors.alpha.black[10]};
            color: ${theme.colors.alpha.black[100]};
        }

        &:last-child {
            margin-bottom: 0;
        }
      }
  `
);

const MenuListWrapperSquare = styled(MenuList)(
  ({ theme }) => `
    & .MuiMenuItem-root {
        border-radius: ${theme.general.borderRadiusSm};
        padding: ${theme.spacing(1, 1, 1, 2.5)};
        margin-bottom: 2px;
        position: relative;
        color: ${theme.colors.alpha.black[70]};

        &.Mui-selected,
        &:hover,
        &.MuiButtonBase-root:active {
            background: ${theme.colors.success.lighter};
            color: ${theme.colors.success.main};
        }

        &:last-child {
            margin-bottom: 0;
        }
      }
  `
);

const MenuListWrapperLine = styled(MenuList)(
  ({ theme }) => `
    & .MuiMenuItem-root {
        border-radius: ${theme.general.borderRadius};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: ${theme.spacing(1, 1, 1, 2.5)};
        margin-bottom: 2px;
        position: relative;

        &::before {
            left: 0;
            width: 0;
            background: ${theme.colors.error.main};
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
            color: ${theme.colors.error.main};
            background: ${alpha(theme.colors.error.main, 0.1)};

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
    padding: ${theme.spacing(0.5, 1, 0.4)};
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
          >
            <Box>
              <Box
                sx={{
                  textAlign: 'center'
                }}
                py={5}
                px={2}
              >
                <Avatar
                  variant="square"
                  sx={{
                    mx: 'auto',
                    mb: 2,
                    width: 'auto',
                    height: 36,
                    '& img': {
                      objectFit: 'contain'
                    }
                  }}
                  src="/static/images/placeholders/logo/coinbase.svg"
                />
                <Rating defaultValue={4} precision={0.5} />
                <Typography
                  sx={{
                    pt: 1
                  }}
                  variant="subtitle2"
                  textAlign="center"
                >
                  {t(
                    'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
                  )}
                  .
                </Typography>
              </Box>
              <MenuListWrapperRounded
                disablePadding
                sx={{
                  mb: 3,
                  mx: 3
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
                    primary={t('Server Status')}
                  />
                  <Box display="flex" alignItems="center">
                    <LabelWrapper
                      component="span"
                      sx={{
                        background: `${theme.colors.primary.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.primary.dark
                        )}`
                      }}
                    >
                      {t('Hot')}
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
                <MenuItem disabled>
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
              </MenuListWrapperRounded>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
          >
            <Box>
              <Box
                sx={{
                  textAlign: 'center'
                }}
                py={5}
                px={2}
              >
                <Avatar
                  variant="square"
                  sx={{
                    mx: 'auto',
                    mb: 2,
                    width: 'auto',
                    height: 36,
                    '& img': {
                      objectFit: 'contain'
                    }
                  }}
                  src="/static/images/placeholders/logo/netflix.svg"
                />
                <Rating defaultValue={3.5} precision={0.5} />
                <Typography
                  sx={{
                    pt: 1
                  }}
                  variant="subtitle2"
                  textAlign="center"
                >
                  {t(
                    'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
                  )}
                  .
                </Typography>
              </Box>
              <MenuListWrapperLine
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
                    primary={t('Server Status')}
                  />
                  <Box display="flex" alignItems="center">
                    <LabelWrapper
                      component="span"
                      sx={{
                        borderRadius: 50,
                        background: `${theme.colors.alpha.black[100]}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.alpha.black[100]
                        )}`
                      }}
                    >
                      {t('New')}
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
                <MenuItem disabled>
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
              </MenuListWrapperLine>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
          >
            <Box>
              <Box
                sx={{
                  textAlign: 'center'
                }}
                py={5}
                px={2}
              >
                <Avatar
                  variant="square"
                  sx={{
                    mx: 'auto',
                    mb: 2,
                    width: 'auto',
                    height: 36,
                    '& img': {
                      objectFit: 'contain'
                    }
                  }}
                  src="/static/images/placeholders/logo/slack-big.svg"
                />
                <Rating defaultValue={5} precision={0.5} />
                <Typography
                  sx={{
                    pt: 1
                  }}
                  variant="subtitle2"
                  textAlign="center"
                >
                  {t(
                    'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
                  )}
                  .
                </Typography>
              </Box>
              <MenuListWrapperSquare
                disablePadding
                sx={{
                  mb: 3,
                  mx: 3
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
                      654
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
                <MenuItem disabled>
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
              </MenuListWrapperSquare>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block5;

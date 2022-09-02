import { useRef, useState } from 'react';
import {
  Box,
  Button,
  useTheme,
  CardActionArea,
  Typography,
  MenuList,
  Grid,
  Divider,
  Card,
  MenuItem,
  ListItemText,
  alpha,
  Link,
  Popover,
  Stack,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import Text from 'src/components/Text';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';

const LabelWrapper = styled(Box)(
  ({ theme }) => `
  font-size: ${theme.typography.pxToRem(10)};
  font-weight: bold;
  text-transform: uppercase;
  border-radius: ${theme.general.borderRadiusSm};
  padding: ${theme.spacing(0.5, 1, 0.4)};
`
);

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
      .MuiTouchRipple-root {
        opacity: .2;
      }

      .MuiCardActionArea-focusHighlight {
        background: ${theme.colors.primary.main};
      }

      &:hover {
        .MuiCardActionArea-focusHighlight {
          opacity: .05;
        }
      }
`
);

const MenuListWrapperSecondary = styled(MenuList)(
  ({ theme }) => `
  padding: ${theme.spacing(3)};

  & .MuiMenuItem-root {
      border-radius: 50px;
      padding: ${theme.spacing(1, 1, 1, 2.5)};
      min-width: 200px;
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

const MenuListWrapperSuccess = styled(MenuList)(
  ({ theme }) => `
  padding: ${theme.spacing(3)};

  & .MuiMenuItem-root {
      border-radius: 50px;
      padding: ${theme.spacing(1, 1, 1, 2.5)};
      min-width: 200px;
      margin-bottom: 2px;
      position: relative;
      color: ${theme.colors.success.main};

      &.Mui-selected,
      &:hover,
      &.MuiButtonBase-root:active {
          background: ${theme.colors.success.lighter};
          color: ${theme.colors.success.dark};
      }

      &:last-child {
          margin-bottom: 0;
      }
    }
`
);

const MenuListWrapperError = styled(MenuList)(
  ({ theme }) => `
  padding: ${theme.spacing(3)};

  & .MuiMenuItem-root {
      border-radius: 50px;
      padding: ${theme.spacing(1, 1, 1, 2.5)};
      min-width: 200px;
      margin-bottom: 2px;
      position: relative;
      color: ${theme.colors.error.main};

      &.Mui-selected,
      &:hover,
      &.MuiButtonBase-root:active {
          background: ${theme.colors.error.lighter};
          color: ${theme.colors.error.dark};
      }

      &:last-child {
          margin-bottom: 0;
      }
    }
`
);

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.4)};
    height: ${theme.spacing(1.45)};
    display: inline-block;
    border: ${theme.colors.alpha.white[100]} solid 2px;
`
);

function HeaderMenu() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const ref2 = useRef<any>(null);
  const [isOpen2, setOpen2] = useState<boolean>(false);

  const handleOpen2 = (): void => {
    setOpen2(true);
  };

  const handleClose2 = (): void => {
    setOpen2(false);
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'inline-flex' }
        }}
      >
        <Button
          ref={ref}
          onClick={handleOpen}
          endIcon={<KeyboardArrowDownTwoToneIcon />}
          color="secondary"
          size="small"
          sx={{
            mr: 1,
            px: 2,
            backgroundColor: `${theme.colors.secondary.lighter}`,
            color: `${theme.colors.secondary.dark}`,

            '.MuiSvgIcon-root': {
              color: `${theme.colors.secondary.dark}`,
              transition: `${theme.transitions.create(['color'])}`
            },

            '&:hover': {
              backgroundColor: `${theme.colors.secondary.main}`,
              color: `${theme.palette.getContrastText(
                theme.colors.secondary.main
              )}`,

              '.MuiSvgIcon-root': {
                color: `${theme.palette.getContrastText(
                  theme.colors.secondary.main
                )}`
              }
            }
          }}
        >
          {t('Mega menu')}
        </Button>
        <Button
          ref={ref2}
          onClick={handleOpen2}
          endIcon={<KeyboardArrowDownTwoToneIcon />}
          color="secondary"
          size="small"
          sx={{
            px: 2,
            backgroundColor: `${theme.colors.secondary.lighter}`,
            color: `${theme.colors.secondary.dark}`,

            '.MuiSvgIcon-root': {
              color: `${theme.colors.secondary.dark}`,
              transition: `${theme.transitions.create(['color'])}`
            },

            '&:hover': {
              backgroundColor: `${theme.colors.secondary.main}`,
              color: `${theme.palette.getContrastText(
                theme.colors.secondary.main
              )}`,

              '.MuiSvgIcon-root': {
                color: `${theme.palette.getContrastText(
                  theme.colors.secondary.main
                )}`
              }
            }
          }}
        >
          {t('Dashboards')}
        </Button>
      </Box>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <Box
          sx={{
            p: 2,
            background: alpha(theme.colors.alpha.black[100], 0.06)
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              sx={{
                pb: 0.5
              }}
              variant="h4"
            >
              {t('Mega Menus')}
            </Typography>
            <Typography noWrap variant="subtitle2">
              {t('This is an example for custom menus')}
            </Typography>
          </Box>
          <Link
            href="#"
            variant="subtitle2"
            sx={{
              textTransform: 'none',
              display: { xs: 'none', lg: 'inline-block' }
            }}
          >
            {t('View all')}
          </Link>
        </Box>
        <Divider />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="stretch"
          alignItems="stretch"
          spacing={0}
        >
          <MenuListWrapperSecondary disablePadding>
            <MenuItem selected>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'h5'
                }}
                primary={t('Automation')}
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
                primary={t('Analytics')}
              />
              <Box display="flex" alignItems="center">
                <DotLegend
                  style={{
                    background: `${theme.colors.success.main}`
                  }}
                />
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
                primary={t('Banking')}
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
                primary={t('Commerce')}
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
                primary={t('Crypto')}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8
                }}
              />
            </MenuItem>
          </MenuListWrapperSecondary>
          <MenuListWrapperSuccess disablePadding>
            <MenuItem selected>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'h5'
                }}
                primary={t('Finance')}
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
                primary={t('Fitness')}
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
                primary={t('Healthcare')}
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
                primary={t('Helpdesk')}
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
                primary={t('Learning')}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8
                }}
              />
            </MenuItem>
          </MenuListWrapperSuccess>
          <MenuListWrapperError disablePadding>
            <MenuItem selected>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'h5'
                }}
                primary={t('Calendar')}
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
                primary={t('File Manager')}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  ml: 1,
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8
                }}
              />
            </MenuItem>
            <MenuItem disabled>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'h5'
                }}
                primary={t('Jobs Platform')}
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
                primary={t('Messenger')}
              />
              <Box display="flex" alignItems="center">
                <DotLegend
                  style={{
                    background: `${theme.colors.primary.main}`
                  }}
                />
                <ChevronRightTwoToneIcon
                  sx={{
                    color: `${theme.colors.alpha.black[30]}`,
                    opacity: 0.8
                  }}
                />
              </Box>
            </MenuItem>
            <MenuItem>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'h5'
                }}
                primary={t('Projects Board')}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8
                }}
              />
            </MenuItem>
          </MenuListWrapperError>
        </Stack>
        <Divider />
        <Box
          sx={{
            m: 2,
            textAlign: 'center'
          }}
        >
          <Button size="small" color="primary">
            {t('View more examples')}
          </Button>
        </Box>
      </Popover>
      <Popover
        disableScrollLock
        anchorEl={ref2.current}
        onClose={handleClose2}
        open={isOpen2}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        sx={{
          '.MuiPopover-paper': {
            background: theme.colors.gradients.blue3
          }
        }}
      >
        <Box
          sx={{
            maxWidth: 400
          }}
          p={3}
        >
          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            sx={{
              color: theme.colors.alpha.trueWhite[100],
              fontSize: theme.typography.pxToRem(18)
            }}
          >
            {t('Dashboards')}
          </Typography>
          <Typography
            variant="subtitle2"
            textAlign="center"
            sx={{
              color: theme.colors.alpha.trueWhite[70]
            }}
          >
            {t("This is just a menu example we've created")}
          </Typography>
          <Grid container mt={1} spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionAreaWrapper
                  sx={{
                    p: 2
                  }}
                >
                  <Text color="warning">
                    <AccountTreeTwoToneIcon
                      sx={{
                        mb: 1
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Projects')}</Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionAreaWrapper
                  sx={{
                    p: 2
                  }}
                >
                  <Text color="success">
                    <ContactSupportTwoToneIcon
                      sx={{
                        mb: 1
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Helpdesk')}</Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionAreaWrapper
                  sx={{
                    p: 2
                  }}
                >
                  <Text color="primary">
                    <DashboardCustomizeTwoToneIcon
                      sx={{
                        mb: 1
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Dashboard')}</Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardActionAreaWrapper
                  sx={{
                    p: 2
                  }}
                >
                  <Text color="error">
                    <PeopleOutlineTwoToneIcon
                      sx={{
                        mb: 1
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Customers')}</Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderMenu;

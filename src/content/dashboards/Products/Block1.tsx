import { Fragment } from 'react';

import {
  Box,
  Grid,
  List,
  ListItemAvatar,
  Button,
  alpha,
  ListItemButton,
  Badge,
  Card,
  Tooltip,
  Divider,
  Avatar,
  Rating,
  Typography,
  IconButton,
  ListItemText,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import Label from 'src/components/Label';
import StorageTwoToneIcon from '@mui/icons-material/StorageTwoTone';
import GaugeChart from 'react-gauge-chart';
import DataSaverOnTwoToneIcon from '@mui/icons-material/DataSaverOnTwoTone';

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

const ListItemButtonWrapper = styled(ListItemButton)(
  ({ theme }) => `
    transition: ${theme.transitions.create('all')};
    background: ${theme.colors.alpha.white[100]};
    position: relative;
    z-index: 8;
    border-radius: 0;

    &:hover {
        background: ${alpha(theme.colors.primary.main, 0.03)};
        z-index: 9;
        box-shadow: 
            0 0.56875rem 2.3rem ${alpha(theme.colors.alpha.black[100], 0.03)},
            0 0.9975rem 1.4rem ${alpha(theme.colors.alpha.black[100], 0.04)},
            0 0.35rem .5rem ${alpha(theme.colors.alpha.black[100], 0.05)},
            0 0.225rem 0.4rem ${alpha(theme.colors.alpha.black[100], 0.07)};
    }
  `
);

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      title: 'Build React Interface',
      category: 'Development',
      logo: '/static/images/placeholders/logo/discord-icon.svg',
      value: '4,685'
    },
    {
      id: 2,
      title: 'Create Ads Campaigns',
      category: 'Marketing',
      logo: '/static/images/placeholders/logo/google-icon.svg',
      value: '8,434',
      budget: 'over'
    },
    {
      id: 3,
      title: 'Resolve Github issues',
      category: 'Bugfixes',
      logo: '/static/images/placeholders/logo/spotify-icon.svg',
      value: '5,167',
      budget: ''
    },
    {
      id: 4,
      title: 'Build UI for Angular',
      category: 'Development',
      logo: '/static/images/placeholders/logo/slack-icon.svg',
      value: '43,584',
      budget: ''
    },
    {
      id: 5,
      title: 'Create User Workflows',
      category: 'Marketing',
      logo: '/static/images/placeholders/logo/pinterest-icon.svg',
      value: '5,978',
      budget: 'over'
    }
  ];

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
              <List disablePadding>
                {items.map((item) => (
                  <Fragment key={item.id}>
                    <Divider />
                    <ListItemButtonWrapper
                      sx={{
                        display: { xs: 'block', sm: 'flex' },
                        py: 2,
                        px: 2.5
                      }}
                    >
                      <ListItemAvatar
                        sx={{
                          minWidth: 'auto',
                          mr: 2,
                          mb: { xs: 2, sm: 0 }
                        }}
                      >
                        <Avatar
                          variant="square"
                          sx={{
                            width: 42,
                            height: 42
                          }}
                          alt={item.title}
                          src={item.logo}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography color="text.primary" variant="h5">
                            {item.title}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography noWrap variant="subtitle2">
                              {item.category}
                            </Typography>
                          </>
                        }
                      />
                      <Box
                        component="span"
                        sx={{
                          display: { xs: 'none', sm: 'inline-block' }
                        }}
                      >
                        <Box textAlign="right">
                          {item.budget ? (
                            <Label color="error">${item.value}</Label>
                          ) : (
                            <Label color="success">${item.value}</Label>
                          )}
                        </Box>
                      </Box>
                    </ListItemButtonWrapper>
                  </Fragment>
                ))}
              </List>
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
              background: `${theme.colors.gradients.orange3}`
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
                background: `${theme.colors.gradients.black1}`
              }}
            />
            <BoxComposedBg
              sx={{
                opacity: 0.5,
                background: `${theme.colors.gradients.blue2}`
              }}
            />
            <BoxComposedBg
              sx={{
                opacity: 0.5,
                background: `${theme.colors.gradients.blue5}`
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.3,
                backgroundImage:
                  'url("/static/images/placeholders/covers/2.jpg")'
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
                  <Card
                    sx={{
                      background: '#070919',
                      textAlign: 'center',
                      py: 4,
                      px: 2
                    }}
                  >
                    <Avatar
                      sx={{
                        width: theme.spacing(8),
                        height: theme.spacing(8),
                        background: `${alpha(theme.colors.warning.main, 0.15)}`,
                        color: `${theme.colors.warning.main}`,
                        mx: 'auto',
                        mb: 4
                      }}
                    >
                      <StorageTwoToneIcon />
                    </Avatar>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: `${theme.typography.pxToRem(18)}`,
                        color: `${theme.colors.alpha.trueWhite[100]}`,
                        pb: 1
                      }}
                    >
                      Gent Central Store
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        px: 2,
                        color: `${theme.colors.alpha.trueWhite[70]}`
                      }}
                    >
                      {t(
                        'High performance React template built with lots of powerful components'
                      )}
                      .
                    </Typography>
                    <Box
                      sx={{
                        mt: 3,
                        mb: 1,
                        mx: 'auto',
                        maxWidth: '380px'
                      }}
                    >
                      <GaugeChart
                        nrOfLevels={24}
                        textColor={theme.colors.alpha.trueWhite[100]}
                        needleColor={theme.colors.alpha.trueWhite[30]}
                        needleBaseColor={theme.colors.alpha.trueWhite[100]}
                        colors={[
                          alpha(theme.colors.warning.main, 0.8),
                          alpha(theme.colors.error.main, 0.9)
                        ]}
                        arcWidth={0.3}
                        percent={0.67}
                      />
                    </Box>
                    <Badge
                      color="success"
                      variant="dot"
                      sx={{
                        '.MuiBadge-dot': {
                          right: '5%'
                        }
                      }}
                      overlap="circular"
                      badgeContent=" "
                    >
                      <Button
                        disableRipple={false}
                        size="small"
                        sx={{
                          backgroundColor: `${theme.colors.alpha.trueWhite[10]}`,
                          color: `${theme.colors.alpha.trueWhite[100]}`,
                          borderRadius: 10,
                          padding: theme.spacing(1, 2),
                          fontWeight: 'normal',

                          '&:hover': {
                            backgroundColor: `${alpha(
                              theme.colors.alpha.trueWhite[100],
                              0.15
                            )}`,
                            color: `${theme.colors.alpha.trueWhite[100]}`
                          }
                        }}
                      >
                        {t('View Dashboard')}
                      </Button>
                    </Badge>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      background: '#070919',
                      textAlign: 'center',
                      py: 4,
                      px: 2
                    }}
                  >
                    <Badge
                      color="error"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      sx={{
                        '.MuiBadge-badge': {
                          animation: 'pulse 1s infinite',
                          transition: `${theme.transitions.create(['all'])}`
                        }
                      }}
                      badgeContent=" "
                    >
                      <Avatar
                        sx={{
                          width: theme.spacing(8),
                          height: theme.spacing(8),
                          background: `${alpha(theme.colors.info.main, 0.15)}`,
                          color: `${theme.colors.info.main}`,
                          mx: 'auto'
                        }}
                      >
                        <DataSaverOnTwoToneIcon />
                      </Avatar>
                    </Badge>
                    <Typography
                      variant="h4"
                      sx={{
                        pt: 4,
                        fontSize: `${theme.typography.pxToRem(18)}`,
                        color: `${theme.colors.alpha.trueWhite[100]}`,
                        pb: 1
                      }}
                    >
                      The Dubai Mall
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        px: 2,
                        color: `${theme.colors.alpha.trueWhite[70]}`
                      }}
                    >
                      {t(
                        'High performance React template built with lots of powerful components'
                      )}
                      .
                    </Typography>
                    <Box
                      sx={{
                        mt: 3,
                        mb: 1,
                        mx: 'auto',
                        maxWidth: '380px'
                      }}
                    >
                      <GaugeChart
                        nrOfLevels={24}
                        textColor={theme.colors.alpha.trueWhite[100]}
                        needleColor={theme.colors.alpha.trueWhite[30]}
                        needleBaseColor={theme.colors.alpha.trueWhite[100]}
                        colors={[
                          alpha(theme.colors.info.main, 0.9),
                          alpha(theme.colors.success.main, 1)
                        ]}
                        arcWidth={0.3}
                        percent={0.43}
                      />
                    </Box>

                    <Button
                      disableRipple={false}
                      size="small"
                      sx={{
                        backgroundColor: `${theme.colors.alpha.trueWhite[10]}`,
                        color: `${theme.colors.alpha.trueWhite[100]}`,
                        borderRadius: 10,
                        padding: theme.spacing(1, 2),
                        fontWeight: 'normal',

                        '&:hover': {
                          backgroundColor: `${alpha(
                            theme.colors.alpha.trueWhite[100],
                            0.15
                          )}`,
                          color: `${theme.colors.alpha.trueWhite[100]}`
                        }
                      }}
                    >
                      {t('View Dashboard')}
                    </Button>
                  </Card>
                </Grid>
              </Grid>
            </BoxComposedContent>
          </BoxComposed>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Block1;

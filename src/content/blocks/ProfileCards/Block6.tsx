import {
  Box,
  Grid,
  Card,
  Tooltip,
  Avatar,
  Typography,
  IconButton,
  Stack,
  Divider,
  Button,
  alpha,
  Badge,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import Label from 'src/components/Label';

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
    z-index: 7;
  `
);

const BoxComposedContent = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 7;

    .MuiTypography-root {
        color: ${theme.palette.primary.contrastText};

        & + .MuiTypography-root {
            color: ${alpha(theme.palette.primary.contrastText, 0.7)};
        }
    }
    
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

const ButtonWrapper = styled(Button)(
  ({ theme }) => `
      background: ${theme.colors.alpha.trueWhite[10]};
      border-color: ${theme.colors.alpha.trueWhite[30]};
      transition: ${theme.transitions.create(['all'])};
      color: ${theme.colors.alpha.trueWhite[100]};
  
      &:hover {
        background: ${alpha(theme.colors.alpha.trueWhite[100], 0.2)};
        border-color: ${theme.colors.alpha.trueWhite[30]};
        color: ${theme.colors.alpha.trueWhite[100]};
      }
  `
);

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          lg={5}
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
            pt={6}
            pb={5}
            px={5}
            sx={{
              position: 'relative',
              textAlign: 'center'
            }}
          >
            <Box>
              <Avatar
                sx={{
                  mx: 'auto',
                  mb: 1.5,
                  width: 94,
                  height: 94,
                  border: `${theme.colors.alpha.white[100]} solid 3px`,
                  boxShadow: `0 0 0 3px ${theme.colors.primary.main}`
                }}
                src="/static/images/avatars/5.jpg"
              />
              <Typography gutterBottom variant="h3">
                Marion Devine
              </Typography>

              <Box py={1}>
                <Label color="info">Web developer</Label>
                <Box component="span" px={1}>
                  <Label color="warning">Javascript</Label>
                </Box>
                <Label color="error">Angular</Label>
              </Box>

              <Typography variant="subtitle2">
                {t('The Ultimate UI Design System at your fingertips!')}
              </Typography>
              <Divider
                sx={{
                  mt: 3
                }}
              />
              <Stack
                sx={{
                  my: 3
                }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={0}
              >
                <Box>
                  <Typography
                    component="h6"
                    variant="subtitle2"
                    textAlign="center"
                    gutterBottom
                  >
                    {t('Current month')}
                  </Typography>
                  <Typography
                    component="h6"
                    variant="subtitle2"
                    color="text.primary"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    <Box component="span" pr={1}>
                      <small>$</small> 46,594
                    </Box>
                    <Label color="error">-8%</Label>
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    component="h6"
                    variant="subtitle2"
                    textAlign="center"
                    gutterBottom
                  >
                    {t('Last year')}
                  </Typography>
                  <Typography
                    component="h6"
                    variant="subtitle2"
                    color="text.primary"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    <Box component="span" pr={1}>
                      <small>$</small> 34,742
                    </Box>
                    <Label color="success">+14%</Label>
                  </Typography>
                </Box>
              </Stack>
              <Divider />
              <Box my={3}>
                <Typography
                  fontWeight="bold"
                  sx={{
                    textTransform: 'uppercase'
                  }}
                  textAlign="center"
                  variant="subtitle2"
                >
                  {t('Team members')}
                </Typography>
                <Box mt={2} display="flex" justifyContent="center">
                  <Avatar
                    variant="rounded"
                    sx={{
                      background: `${theme.colors.warning.main}`,
                      color: `${theme.palette.getContrastText(
                        theme.colors.warning.main
                      )}`,
                      borderRadius: `${theme.general.borderRadiusSm}`,
                      width: 44,
                      height: 44,
                      mr: 1,
                      boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`
                    }}
                  >
                    JK
                  </Avatar>
                  <Box mr={1}>
                    <Badge
                      color="success"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      variant="dot"
                      overlap="rectangular"
                    >
                      <Avatar
                        variant="rounded"
                        sx={{
                          background: `${theme.colors.primary.main}`,
                          color: `${theme.palette.getContrastText(
                            theme.colors.primary.dark
                          )}`,
                          borderRadius: `${theme.general.borderRadiusSm}`,
                          width: 44,
                          height: 44,
                          boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`
                        }}
                      >
                        HA
                      </Avatar>
                    </Badge>
                  </Box>
                  <Avatar
                    variant="rounded"
                    sx={{
                      borderRadius: `${theme.general.borderRadiusSm}`,
                      width: 44,
                      mr: 1,
                      height: 44,
                      boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`
                    }}
                    alt="Cindy Baker"
                    src="/static/images/avatars/3.jpg"
                  />
                  <Avatar
                    variant="rounded"
                    sx={{
                      borderRadius: `${theme.general.borderRadiusSm}`,
                      width: 44,
                      height: 44,
                      boxShadow: `0 .113rem .5rem ${theme.colors.alpha.black[10]}, 0 .126rem .225rem ${theme.colors.alpha.black[30]}`
                    }}
                    alt="Agnes Walker"
                    src="/static/images/avatars/4.jpg"
                  />
                </Box>
              </Box>
              <Divider />
              <Box
                sx={{
                  textAlign: 'center'
                }}
              >
                <Button
                  disableRipple={false}
                  variant="outlined"
                  sx={{
                    mt: 5
                  }}
                  startIcon={<AccountBoxTwoToneIcon />}
                  size="large"
                  color="primary"
                >
                  {t('View complete profile')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: 'flex'
          }}
        >
          <BoxComposed
            display="flex"
            alignItems="center"
            sx={{
              position: 'relative',
              minHeight: '100%',
              background: `${theme.colors.gradients.black2}`
            }}
          >
            <CardActions display="flex" alignItems="center">
              <Label color="black">
                <Typography
                  fontWeight="bold"
                  sx={{
                    px: 1,
                    fontSize: `${theme.typography.pxToRem(10)}`,
                    textTransform: 'uppercase'
                  }}
                >
                  {t('New release')}
                </Typography>
              </Label>
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
                background: `${theme.colors.gradients.blue1}`
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.5,
                backgroundImage:
                  'url("/static/images/placeholders/covers/5.jpg")'
              }}
            />
            <BoxComposedContent
              display="flex"
              flexGrow={1}
              alignItems="center"
              flexDirection="column"
              sx={{
                textAlign: 'center'
              }}
              p={{ xs: 4, xl: 8 }}
            >
              <Typography
                lineHeight="1.4"
                sx={{
                  pt: 3,
                  pb: 2,
                  fontSize: `${theme.typography.pxToRem(32)}`
                }}
                variant="h1"
              >
                {t('The Ultimate UI Design System at your fingertips!')}
              </Typography>
              <Typography lineHeight="1.5" fontWeight="normal" variant="h4">
                {t(
                  'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
                )}
                .
              </Typography>
              <Box mt={2}>
                <ButtonWrapper
                  disableRipple={false}
                  variant="outlined"
                  sx={{
                    mt: 5
                  }}
                  endIcon={<ArrowForwardTwoToneIcon />}
                  size="large"
                  color="primary"
                >
                  {t('Continue reading')}
                </ButtonWrapper>
              </Box>
            </BoxComposedContent>
          </BoxComposed>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Block6;

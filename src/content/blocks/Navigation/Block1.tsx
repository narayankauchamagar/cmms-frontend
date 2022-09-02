import {
  Box,
  Grid,
  Card,
  Tooltip,
  Avatar,
  CardActionArea,
  Typography,
  IconButton,
  Divider,
  Button,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';

import Text from 'src/components/Text';
import Label from 'src/components/Label';

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(13)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(1.2, 2.5, 1)};
    line-height: 1;
  `
);

const BoxComposed = styled(Box)(
  () => `
    position: relative;
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

const CardWrapper = styled(Box)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.05)};
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
      border-radius: 50px;
  
      &:hover {
        background: ${alpha(theme.colors.alpha.trueWhite[100], 0.2)};
        border-color: ${theme.colors.alpha.trueWhite[30]};
        color: ${theme.colors.alpha.trueWhite[100]};
      }
  `
);

function Block1() {
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
            display: 'flex'
          }}
        >
          <BoxComposed
            display="flex"
            alignItems="center"
            sx={{
              position: 'relative',
              minHeight: '100%',
              background: `${theme.colors.gradients.black1}`
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
                opacity: 0.4,
                background: `${theme.colors.gradients.green2}`
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
        <Grid
          item
          xs={12}
          lg={7}
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
            <CardActions>
              <Tooltip
                arrow
                placement="top"
                title={t('Get in touch via email')}
              >
                <IconButton
                  color="primary"
                  sx={{
                    alignSelf: 'center',
                    backgroundColor: `${theme.colors.primary.lighter}`,
                    transition: `${theme.transitions.create(['all'])}`,

                    '&:hover': {
                      backgroundColor: `${theme.colors.primary.main}`,
                      color: `${theme.palette.getContrastText(
                        theme.colors.primary.main
                      )}`
                    }
                  }}
                >
                  <EmailTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </CardActions>
            <Box>
              <Avatar
                sx={{
                  mx: 'auto',
                  mb: 1.5,
                  width: 94,
                  height: 94
                }}
                src="/static/images/avatars/2.jpg"
              />
              <LabelWrapper
                sx={{
                  display: 'inline-flex',
                  background: `${theme.colors.success.lighter}`,
                  color: `${theme.colors.success.main}`
                }}
              >
                {t('Online')}
              </LabelWrapper>
              <Typography
                gutterBottom
                sx={{
                  pt: 2
                }}
                variant="h2"
              >
                Lacie-Mae Mckay
              </Typography>
              <Typography variant="subtitle2">
                Senior Frontend Developer at <b>Google Inc.</b>
              </Typography>
              <Box
                mt={1.5}
                sx={{
                  textAlign: 'center'
                }}
              >
                <Tooltip arrow placement="top" title="Facebook">
                  <IconButton color="primary" size="large">
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="top" title="Twitter">
                  <IconButton
                    sx={{
                      mx: 1
                    }}
                    color="primary"
                    size="large"
                  >
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="top" title="Instagram">
                  <IconButton color="primary" size="large">
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>
          <Divider />
          <CardWrapper p={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
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
                    <Typography gutterBottom variant="h4">
                      {t('Projects')}
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                      {t('Newest tasks')}
                    </Typography>
                  </CardActionAreaWrapper>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
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
                    <Typography gutterBottom variant="h4">
                      {t('Helpdesk')}
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                      {t('Tickets overview')}
                    </Typography>
                  </CardActionAreaWrapper>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
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
                    <Typography gutterBottom variant="h4">
                      {t('Dashboard')}
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                      {t('Daily operations')}
                    </Typography>
                  </CardActionAreaWrapper>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
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
                    <Typography gutterBottom variant="h4">
                      {t('Customers')}
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                      {t('Manage data')}
                    </Typography>
                  </CardActionAreaWrapper>
                </Card>
              </Grid>
            </Grid>
          </CardWrapper>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Block1;

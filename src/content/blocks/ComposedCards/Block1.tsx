import {
  Box,
  Card,
  Typography,
  alpha,
  Grid,
  Divider,
  Button,
  Link,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Checkbox,
  TableContainer,
  styled,
  useTheme
} from '@mui/material';
import Text from 'src/components/Text';

import { useTranslation } from 'react-i18next';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import PointOfSaleTwoToneIcon from '@mui/icons-material/PointOfSaleTwoTone';
import PollTwoToneIcon from '@mui/icons-material/PollTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';

const BoxComposed = styled(Box)(
  () => `
    position: relative;
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

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 7;
  `
);

const Label = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.info.main};
    color: ${theme.palette.info.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 1.2)};
    border-radius: 50px;
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

const BoxOverlineButton = styled(Box)(
  ({ theme }) => `
    text-align: center;
    position: relative;
    z-index: 7;

    .MuiButton-root {
        border-radius: 50px;
        height: ${theme.spacing(7.5)};
        margin-top: -${theme.spacing(3.75)};
        padding: ${theme.spacing(0, 4)};
        border: 3px solid ${theme.colors.alpha.white[100]};
    }
  `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.05)};
  `
);

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <BoxComposed
        sx={{
          background: `${theme.colors.gradients.purple3}`
        }}
      >
        <CardActions>
          <Label>{t('New')}</Label>
        </CardActions>
        <BoxComposedBg
          sx={{
            opacity: 0.1,
            background: `${theme.colors.gradients.black1}`
          }}
        />
        <BoxComposedImage
          sx={{
            opacity: 0.1,
            backgroundImage: 'url("/static/images/placeholders/covers/2.jpg")'
          }}
        />
        <BoxComposedContent pb={9} pt={7}>
          <Typography
            textAlign="center"
            sx={{
              pb: 1
            }}
            variant="h3"
          >
            {t('Technical Support')}
          </Typography>
          <Typography textAlign="center" fontWeight="normal" variant="h4">
            {t(
              'If you have questions regarding you order, you can send us a message'
            )}
          </Typography>
        </BoxComposedContent>
      </BoxComposed>
      <BoxOverlineButton>
        <Button variant="contained" size="large" color="success">
          {t('Send message')}
        </Button>
      </BoxOverlineButton>
      <Box p={3}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <CardWrapper
              elevation={0}
              sx={{
                textAlign: 'center',
                pt: 3,
                pb: 2.5
              }}
            >
              <Text color="warning">
                <PersonTwoToneIcon fontSize="large" />
              </Text>
              <Typography
                variant="h3"
                sx={{
                  pt: 1
                }}
              >
                2,345
              </Typography>
              <Typography variant="subtitle2">{t('users')}</Typography>
            </CardWrapper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardWrapper
              elevation={0}
              sx={{
                textAlign: 'center',
                pt: 3,
                pb: 2.5
              }}
            >
              <Text color="success">
                <PointOfSaleTwoToneIcon fontSize="large" />
              </Text>
              <Typography
                variant="h3"
                sx={{
                  pt: 1
                }}
              >
                $3,586
              </Typography>
              <Typography variant="subtitle2">{t('sales')}</Typography>
            </CardWrapper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardWrapper
              elevation={0}
              sx={{
                textAlign: 'center',
                pt: 3,
                pb: 2.5
              }}
            >
              <Text color="info">
                <PollTwoToneIcon fontSize="large" />
              </Text>
              <Typography
                variant="h3"
                sx={{
                  pt: 1
                }}
              >
                $9,693
              </Typography>
              <Typography variant="subtitle2">{t('revenue')}</Typography>
            </CardWrapper>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow hover>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <Box>
                  <Link href="#" variant="h4" noWrap>
                    Inez Conley
                  </Link>
                  <Typography variant="subtitle1" noWrap>
                    Project Manager
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h4" noWrap>
                  $18,386
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4" noWrap>
                  <Text color="error">-$392</Text>
                </Typography>
              </TableCell>
              <TableCell align="center">
                <LabelWarning>{t('Pending')}</LabelWarning>
              </TableCell>
              <TableCell align="right">
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                  }}
                  color="text.secondary"
                >
                  <Typography
                    sx={{
                      pr: 0.5
                    }}
                    component="span"
                    variant="h4"
                    color="text.primary"
                  >
                    $68,492
                  </Typography>
                  <ArrowUpwardTwoToneIcon
                    sx={{
                      opacity: 0.6
                    }}
                  />
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <Box>
                  <Link href="#" variant="h4" noWrap>
                    Adyan Sosa
                  </Link>
                  <Typography variant="subtitle1" noWrap>
                    User Experience Designer
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h4" noWrap>
                  $6,356
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4" noWrap>
                  <Text color="warning">-374</Text>
                </Typography>
              </TableCell>
              <TableCell align="center">
                <LabelError>{t('Failed')}</LabelError>
              </TableCell>
              <TableCell align="right">
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                  }}
                  color="text.secondary"
                >
                  <Typography
                    sx={{
                      pr: 0.5
                    }}
                    component="span"
                    variant="h4"
                    color="text.primary"
                  >
                    483
                  </Typography>
                  <ArrowUpwardTwoToneIcon
                    sx={{
                      opacity: 0.7
                    }}
                  />
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <Box>
                  <Link href="#" variant="h4" noWrap>
                    Beck Simpson
                  </Link>
                  <Typography variant="subtitle1" noWrap>
                    Senior Consultant
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="h4" noWrap>
                  $16,281
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4" noWrap>
                  <Text color="success">+684</Text>
                </Typography>
              </TableCell>
              <TableCell align="center">
                <LabelSuccess>{t('Done')}</LabelSuccess>
              </TableCell>
              <TableCell align="right">
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                  }}
                  color="text.secondary"
                >
                  <Typography
                    sx={{
                      pr: 0.5
                    }}
                    component="span"
                    variant="h4"
                    color="text.primary"
                  >
                    $12,1M
                  </Typography>
                  <ArrowDownwardTwoToneIcon
                    sx={{
                      opacity: 0.6
                    }}
                  />
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Block1;

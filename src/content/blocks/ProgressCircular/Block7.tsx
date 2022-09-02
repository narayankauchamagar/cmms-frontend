import {
  Grid,
  Box,
  Card,
  Typography,
  Avatar,
  Divider,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar';
import Text from 'src/components/Text';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';

const LabelError = styled(Box)(
  ({ theme }) => `
    display: inline-flex;
    align-items: center;
    background: ${theme.colors.error.lighter};
    border: ${theme.colors.error.main} solid 2px;
    color: ${theme.colors.error.main};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(14)};
    font-weight: bold;
    padding: ${theme.spacing(0.5, 2, 0.5, 1)};
    border-radius: 80px;
  `
);

const LabelErrorAlt = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    alignItems: center;
    background: ${theme.palette.error.main};
    color: ${theme.palette.error.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(11)};
    font-weight: bold;
    padding: ${theme.spacing(0.5, 1)};
    border-radius: ${theme.general.borderRadiusSm};
  `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
    transition: ${theme.transitions.create(['transform', 'box-shadow'])};
    transform: scale(1);
    position: relative;
    z-index: 5;

    &:hover {
        z-index: 6;
        box-shadow: 
            0 0.56875rem 3.3rem ${alpha(theme.colors.alpha.black[100], 0.05)},
            0 0.9975rem 2.4rem ${alpha(theme.colors.alpha.black[100], 0.07)},
            0 0.35rem 1rem ${alpha(theme.colors.alpha.black[100], 0.1)},
            0 0.225rem 0.8rem ${alpha(theme.colors.alpha.black[100], 0.15)};
        transform: scale(1.01);
    }
  `
);

function Block7() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const data = {
    percentage1: 63.58,
    percentage2: 87,
    percentage3: 75
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <CardWrapper
          sx={{
            p: 2
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontSize: `${theme.typography.pxToRem(18)}`
              }}
              variant="h3"
            >
              {t('Weekly Sales')}
            </Typography>
            <Typography variant="h4">
              <Text color="success">$65,485.99</Text>
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              my: 2,
              maxWidth: '210px'
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={1}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 4,
                trailColor: theme.colors.alpha.black[10],
                pathColor: theme.colors.primary.main,
                strokeLinecap: 'round'
              })}
              strokeWidth={7}
              value={data.percentage1}
            >
              <Typography
                sx={{
                  color: `${theme.colors.primary.main}`,
                  mt: -1.7
                }}
                variant="h2"
              >
                {`${data.percentage1}%`}
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Divider />
          <Box my={2} display="flex" alignItems="center">
            <Avatar
              variant="rounded"
              sx={{
                mr: 1,
                width: 28,
                height: 28,
                p: 0,
                background: `${theme.colors.success.lighter}`,
                color: `${theme.colors.success.main}`
              }}
            >
              <KeyboardArrowDownTwoToneIcon />
            </Avatar>
            <Typography variant="h5">
              <Text color="success">+ 58.3%</Text>
            </Typography>
          </Box>
          <Typography variant="subtitle2">
            You had a 58% increase in sales during the last 7 days. Keep up the
            good work!
          </Typography>
        </CardWrapper>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardWrapper
          sx={{
            p: 2
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontSize: `${theme.typography.pxToRem(18)}`
              }}
              variant="h3"
            >
              {t('Returning Visitors')}
            </Typography>
            <Typography variant="h4">
              <Text color="warning">125,43k</Text>
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              mt: 2,
              maxWidth: '230px'
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2.2 + 1 / 5.85,
                trailColor: theme.colors.warning.lighter,
                pathColor: theme.colors.warning.main,
                strokeLinecap: 'round'
              })}
              strokeWidth={7}
              value={data.percentage2}
            >
              <LabelError
                sx={{
                  mt: -1.5
                }}
              >
                <ArrowUpwardTwoToneIcon
                  sx={{
                    mr: 0.5
                  }}
                />
                <span>1,65k</span>
              </LabelError>
              <Typography
                sx={{
                  mt: 0.5
                }}
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
              >
                {t('last week')}
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Divider />
          <Box my={2} display="flex" alignItems="center">
            <Avatar
              variant="rounded"
              sx={{
                mr: 1,
                width: 28,
                height: 28,
                p: 0,
                background: `${theme.colors.warning.lighter}`,
                color: `${theme.colors.warning.main}`
              }}
            >
              <KeyboardArrowDownTwoToneIcon />
            </Avatar>
            <Typography variant="h5">
              <Text color="warning">-23.66%</Text>
            </Typography>
          </Box>
          <Typography variant="subtitle2">
            You missed your target visitors numbers by 23.66%. Improve your
            ratings!
          </Typography>
        </CardWrapper>
      </Grid>
      <Grid item xs={12} md={4}>
        <CardWrapper
          sx={{
            p: 2,
            background: `${theme.colors.gradients.black2}`
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`,
                fontSize: `${theme.typography.pxToRem(18)}`
              }}
              variant="h3"
            >
              {t('Monthly Expenses')}
            </Typography>
            <Typography variant="h4">
              <LabelErrorAlt>$45,654</LabelErrorAlt>
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              my: 2,
              maxWidth: '210px'
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={1}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 4,
                trailColor: theme.colors.alpha.trueWhite[10],
                pathColor: theme.colors.error.main,
                strokeLinecap: 'round'
              })}
              strokeWidth={7}
              value={data.percentage3}
            >
              <Typography
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`,
                  mt: -1.7
                }}
                variant="h2"
              >
                {`${data.percentage3}%`}
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Divider
            sx={{
              background: `${theme.colors.alpha.trueWhite[10]}`
            }}
          />
          <Box my={2} display="flex" alignItems="center">
            <Avatar
              variant="rounded"
              sx={{
                mr: 1,
                width: 28,
                height: 28,
                p: 0,
                background: `${theme.colors.error.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.error.dark
                )}`
              }}
            >
              <KeyboardArrowUpTwoToneIcon />
            </Avatar>
            <Typography variant="h5">
              <Text color="error">- 23.68%</Text>
            </Typography>
          </Box>
          <Typography
            sx={{
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
            variant="subtitle2"
          >
            You're expenses are bigger than income. Do something to fix this!
          </Typography>
        </CardWrapper>
      </Grid>
    </Grid>
  );
}

export default Block7;

import {
  Grid,
  Box,
  CircularProgress,
  Card,
  Typography,
  alpha,
  circularProgressClasses,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const CardBorderBottom = styled(Card)(
  () => `
    border-bottom: transparent 5px solid;
  `
);

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.error.main}`,
            boxShadow: `
                    0 .7rem 1rem ${alpha(theme.colors.error.main, 0.08)},
                    0 .25rem .7rem ${alpha(theme.colors.error.main, 0.15)}
                    `,
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box flexGrow={1} mr={2}>
            <Typography
              component="div"
              fontWeight="bold"
              sx={{
                pb: 1
              }}
              variant="caption"
            >
              {t('Accounts')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="h2"
            >
              <KeyboardArrowUpTwoToneIcon
                sx={{
                  mr: 0.5,
                  color: `${theme.colors.success.main}`
                }}
              />
              <span>37,594</span>
            </Typography>
          </Box>
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  color: `${theme.colors.error.main}`
                }}
                variant="h5"
              >
                43%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.error.lighter
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.error.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={2}
              variant="determinate"
              value={43}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.success.main}`,
            boxShadow: `
                    0 .7rem 1rem ${alpha(theme.colors.success.main, 0.08)},
                    0 .25rem .7rem ${alpha(theme.colors.success.main, 0.15)}
                    `,
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box flexGrow={1} mr={2}>
            <Typography
              component="div"
              fontWeight="bold"
              sx={{
                pb: 1
              }}
              variant="caption"
            >
              {t('Subscriptions')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              variant="h2"
            >
              <AddTwoToneIcon
                sx={{
                  mr: 0.5,
                  color: `${theme.colors.success.main}`
                }}
              />
              <span>545</span>
              <Typography
                sx={{
                  alignSelf: 'self-end',
                  pl: 0.5
                }}
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                {t('new')}
              </Typography>
            </Typography>
          </Box>
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  color: `${theme.colors.success.main}`
                }}
                variant="h5"
              >
                76%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.success.lighter
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.success.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={2}
              variant="determinate"
              value={70}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
    </Grid>
  );
}

export default Block4;

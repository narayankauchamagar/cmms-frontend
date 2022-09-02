import {
  Grid,
  Box,
  CircularProgress,
  Card,
  Typography,
  Avatar,
  circularProgressClasses,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginTop: '-21px',
                marginLeft: '-21px'
              }}
            >
              <Avatar
                sx={{
                  width: 42,
                  height: 42,
                  p: 0,
                  background: `${theme.colors.error.lighter}`,
                  color: `${theme.colors.error.main}`
                }}
              >
                <ShowChartTwoToneIcon fontSize="small" />
              </Avatar>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.error.lighter
              }}
              size={96}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={96}
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
              thickness={3}
              variant="determinate"
              value={43}
            />
          </Box>
          <Box ml={2}>
            <Typography gutterBottom variant="h4" color="text.secondary">
              {t('Stocks')}
            </Typography>
            <Typography variant="h2">$6,594</Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginTop: '-21px',
                marginLeft: '-21px'
              }}
            >
              <Avatar
                sx={{
                  width: 42,
                  height: 42,
                  p: 0,
                  background: `${theme.colors.info.lighter}`,
                  color: `${theme.colors.info.main}`
                }}
              >
                <InsertChartTwoToneIcon fontSize="small" />
              </Avatar>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.info.lighter
              }}
              size={96}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={96}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.info.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={3}
              variant="determinate"
              value={82}
            />
          </Box>
          <Box ml={2}>
            <Typography gutterBottom variant="h4" color="text.secondary">
              {t('Sales')}
            </Typography>
            <Typography variant="h2">8,741</Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            background: `${theme.colors.gradients.blue1}`
          }}
        >
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginTop: '-21px',
                marginLeft: '-21px'
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: 42,
                  height: 42,
                  p: 0,
                  background: `${theme.colors.alpha.trueWhite[10]}`,
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
              >
                <LiveHelpTwoToneIcon fontSize="small" />
              </Avatar>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.alpha.trueWhite[10]
              }}
              size={96}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={96}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.alpha.trueWhite[70],
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={3}
              variant="determinate"
              value={49}
            />
          </Box>
          <Box ml={2}>
            <Typography
              gutterBottom
              variant="h4"
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              {t('Issues')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              142
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            background: `${theme.colors.gradients.green2}`
          }}
        >
          <Box display="inline-flex" position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginTop: '-21px',
                marginLeft: '-21px'
              }}
            >
              <Avatar
                sx={{
                  width: 42,
                  height: 42,
                  p: 0,
                  background: `${theme.colors.alpha.trueWhite[10]}`,
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
              >
                <PeopleAltTwoToneIcon fontSize="small" />
              </Avatar>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.alpha.trueWhite[10]
              }}
              size={96}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={96}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.alpha.trueWhite[100],
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={3}
              variant="determinate"
              value={89}
            />
          </Box>
          <Box ml={2}>
            <Typography
              gutterBottom
              variant="h4"
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              {t('Users')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              14,345k
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block2;

import {
  Grid,
  Box,
  Card,
  Typography,
  IconButton,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 7;
  `
);

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const data = {
    percentage1: 65,
    percentage2: 84,
    percentage3: 43,
    percentage4: 71
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            px: 3,
            pt: 2,
            pb: 1
          }}
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              {t('Customers')}
            </Typography>
            <IconButton size="small" color="primary">
              <MoreVertTwoToneIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                width: '120px'
              }}
            >
              <CircularProgressbarWithChildren
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2.2 + 1 / 5.85,
                  trailColor: theme.colors.info.lighter,
                  pathColor: theme.colors.info.main,
                  strokeLinecap: 'round'
                })}
                strokeWidth={8}
                value={data.percentage1}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: `${theme.colors.info.main}`,
                    mt: '-20px'
                  }}
                >
                  {`${data.percentage1}%`}
                </Typography>
              </CircularProgressbarWithChildren>
            </Box>
            <Box
              sx={{
                textAlign: 'right'
              }}
            >
              <Typography variant="h1">564</Typography>
              <Typography variant="subtitle2">{t('Last week')}</Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            px: 3,
            pt: 2,
            pb: 1
          }}
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`
              }}
            >
              {t('Orders')}
            </Typography>
            <IconButton size="small" color="primary">
              <MoreVertTwoToneIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            mb={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                width: '102px'
              }}
            >
              <CircularProgressbarWithChildren
                circleRatio={1}
                styles={buildStyles({
                  trailColor: theme.colors.primary.lighter,
                  pathColor: theme.colors.primary.main,
                  strokeLinecap: 'round'
                })}
                strokeWidth={8}
                value={data.percentage2}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: `${theme.colors.primary.main}`,
                    mt: '-20px'
                  }}
                >
                  {`${data.percentage2}%`}
                </Typography>
              </CircularProgressbarWithChildren>
            </Box>
            <Box
              sx={{
                textAlign: 'right'
              }}
            >
              <Typography variant="h1">456</Typography>
              <Typography variant="subtitle2">{t('Last month')}</Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            position: 'relative',
            p: 3
          }}
        >
          <CardActions>
            <IconButton size="small" color="primary">
              <MoreHorizTwoToneIcon />
            </IconButton>
          </CardActions>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                width: '105px'
              }}
            >
              <CircularProgressbarWithChildren
                circleRatio={1}
                styles={buildStyles({
                  trailColor: theme.colors.error.lighter,
                  pathColor: theme.colors.error.main,
                  strokeLinecap: 'round'
                })}
                strokeWidth={6}
                value={data.percentage3}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: `${theme.colors.error.main}`,
                    mt: '-20px'
                  }}
                >
                  {`${data.percentage3}%`}
                </Typography>
              </CircularProgressbarWithChildren>
            </Box>
            <Box
              sx={{
                mt: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="subtitle2" noWrap>
                {t('Project management')}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            background: `${theme.colors.gradients.blue4}`,
            position: 'relative',
            p: 3
          }}
        >
          <CardActions>
            <IconButton
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`,
                '&:hover': {
                  background: `${theme.colors.alpha.trueWhite[10]}`
                }
              }}
              size="small"
              color="primary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </CardActions>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                width: '105px'
              }}
            >
              <CircularProgressbarWithChildren
                circleRatio={1}
                styles={buildStyles({
                  trailColor: theme.colors.alpha.trueWhite[10],
                  pathColor: theme.colors.success.main,
                  strokeLinecap: 'round'
                })}
                strokeWidth={8}
                value={data.percentage3}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: `${theme.colors.success.main}`,
                    mt: '-20px'
                  }}
                >
                  {`${data.percentage3}%`}
                </Typography>
              </CircularProgressbarWithChildren>
            </Box>
            <Box
              sx={{
                mt: 2,
                textAlign: 'center'
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
                variant="subtitle2"
                noWrap
              >
                {t('Analytics statistics')}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block4;

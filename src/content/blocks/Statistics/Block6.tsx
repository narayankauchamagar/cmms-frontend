import {
  Grid,
  Box,
  Card,
  Typography,
  Avatar,
  alpha,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
import AddAlertTwoToneIcon from '@mui/icons-material/AddAlertTwoTone';

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5,
            background: `${theme.colors.gradients.black1}`
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                gutterBottom
                component="div"
                variant="caption"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
              >
                {t('New Accounts')}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
              >
                586,356
              </Typography>
            </Box>
            <Avatar
              variant="rounded"
              sx={{
                width: `${theme.spacing(7)}`,
                height: `${theme.spacing(7)}`,
                background: `${theme.colors.alpha.trueWhite[100]}`,
                color: `${theme.colors.success.main}`
              }}
            >
              <AccountBoxTwoToneIcon />
            </Avatar>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography
              variant="subtitle2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 0.5,
                color: `${theme.colors.success.main}`
              }}
            >
              <ArrowUpwardTwoToneIcon
                fontSize="small"
                sx={{
                  mr: 0.2
                }}
              />
              <span>16.5%</span>
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              {t('increase this month')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5,
            background: `${theme.colors.gradients.green2}`
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                gutterBottom
                component="div"
                variant="caption"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
              >
                {t('Sales')}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
              >
                23,684
              </Typography>
            </Box>
            <Avatar
              variant="rounded"
              sx={{
                width: `${theme.spacing(7)}`,
                height: `${theme.spacing(7)}`,
                background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <AddAlertTwoToneIcon />
            </Avatar>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography
              variant="subtitle2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 0.5,
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CompareArrowsTwoToneIcon
                fontSize="small"
                sx={{
                  mr: 0.2
                }}
              />
              <span>0.5%</span>
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              {t('compared to previous month')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 2.5,
            background: `${theme.colors.gradients.blue4}`
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                gutterBottom
                component="div"
                variant="caption"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[70]}`
                }}
              >
                {t('New Orders')}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
              >
                36,594
              </Typography>
            </Box>
            <Avatar
              variant="rounded"
              sx={{
                width: `${theme.spacing(7)}`,
                height: `${theme.spacing(7)}`,
                background: `${theme.colors.alpha.trueWhite[100]}`,
                color: `${theme.colors.warning.main}`
              }}
            >
              <ThumbUpTwoToneIcon />
            </Avatar>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography
              variant="subtitle2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 0.5,
                color: `${theme.colors.error.main}`
              }}
            >
              <ArrowDownwardTwoToneIcon
                fontSize="small"
                sx={{
                  mr: 0.2
                }}
              />
              <span>8.25%</span>
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              {t('decrease in orders amounts')}
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block6;

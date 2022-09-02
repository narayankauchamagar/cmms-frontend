import { Grid, Box, Card, Typography, Avatar, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
import AddAlertTwoToneIcon from '@mui/icons-material/AddAlertTwoTone';

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 3
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography gutterBottom component="div" variant="caption">
                {t('New Accounts')}
              </Typography>
              <Typography variant="h3">586,356</Typography>
            </Box>
            <Avatar
              sx={{
                width: `${theme.spacing(5.5)}`,
                height: `${theme.spacing(5.5)}`,
                background: `${theme.colors.error.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.error.dark
                )}`
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
            <Typography variant="subtitle2" noWrap>
              {t('increase this month')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 3
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography gutterBottom component="div" variant="caption">
                {t('Sales')}
              </Typography>
              <Typography variant="h3">23,684</Typography>
            </Box>
            <Avatar
              sx={{
                width: `${theme.spacing(5.5)}`,
                height: `${theme.spacing(5.5)}`,
                background: `${theme.colors.primary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.dark
                )}`
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
                color: `${theme.colors.warning.main}`
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
            <Typography variant="subtitle2" noWrap>
              {t('compared to previous month')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 3
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography gutterBottom component="div" variant="caption">
                {t('New Orders')}
              </Typography>
              <Typography variant="h3">36,594</Typography>
            </Box>
            <Avatar
              sx={{
                width: `${theme.spacing(5.5)}`,
                height: `${theme.spacing(5.5)}`,
                background: `${theme.colors.warning.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.warning.dark
                )}`
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
            <Typography variant="subtitle2" noWrap>
              {t('decrease in orders amounts')}
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block5;

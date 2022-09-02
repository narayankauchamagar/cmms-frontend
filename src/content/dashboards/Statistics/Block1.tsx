import {
  Grid,
  Box,
  Card,
  Typography,
  Divider,
  Tooltip,
  Stack,
  IconButton,
  Avatar,
  alpha,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
import AddAlertTwoToneIcon from '@mui/icons-material/AddAlertTwoTone';
import Text from 'src/components/Text';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import MoneyTwoToneIcon from '@mui/icons-material/MoneyTwoTone';
import CountUp from 'react-countup';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddLocationTwoToneIcon from '@mui/icons-material/AddLocationTwoTone';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
    padding: ${theme.spacing(1.5)};
    color: ${theme.palette.primary.contrastText};
    transform: translateY(0px);
    transition: ${theme.transitions.create([
      'color',
      'transform',
      'background'
    ])};
    
    .MuiSvgIcon-root {
        transform: scale(1);
        transition: ${theme.transitions.create(['transform'])};
    }

    &:hover {
        background: initial;
        transform: translateY(-2px);

        .MuiSvgIcon-root {
            transform: scale(1.2);
        }
    }
  `
);

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
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
      <Grid item xs={12} md={6}>
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
      <Grid item xs={12} md={6}>
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
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            p: 2.5,
            background: `${theme.colors.gradients.blue2}`
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
      <Grid item xs={12}>
        <Card>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="center"
            alignItems="stretch"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={0}
          >
            <Box
              display="flex"
              flex={1}
              justifyContent="space-evenly"
              alignItems="stretch"
            >
              <Box
                p={3}
                sx={{
                  textAlign: 'center'
                }}
              >
                <Text color="warning">
                  <MonetizationOnTwoToneIcon />
                </Text>
                <Typography variant="h3">$9,658</Typography>
                <Typography variant="subtitle2">{t('revenue')}</Typography>
              </Box>
              <Box
                p={3}
                sx={{
                  textAlign: 'center'
                }}
              >
                <Text color="success">
                  <PersonTwoToneIcon />
                </Text>
                <Typography variant="h3">23,594</Typography>
                <Typography variant="subtitle2">{t('users')}</Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flex={1}
              justifyContent="space-evenly"
              alignItems="stretch"
            >
              <Box
                p={3}
                sx={{
                  textAlign: 'center'
                }}
              >
                <Text color="black">
                  <SubscriptionsTwoToneIcon />
                </Text>
                <Typography variant="h3">1,064</Typography>
                <Typography variant="subtitle2">{t('orders')}</Typography>
              </Box>
              <Box
                p={3}
                sx={{
                  textAlign: 'center'
                }}
              >
                <Text color="error">
                  <MoneyTwoToneIcon />
                </Text>
                <Typography
                  sx={{
                    minWidth: 100
                  }}
                  variant="h3"
                >
                  <CountUp
                    start={0}
                    end={9.678}
                    duration={4}
                    separator=""
                    delay={1}
                    decimals={3}
                    decimal=","
                    prefix=""
                    suffix="M"
                  />
                </Typography>
                <Typography variant="subtitle2">{t('orders')}</Typography>
              </Box>
            </Box>
          </Stack>
          <Divider />
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="center"
            alignItems="stretch"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={0}
          >
            <Box
              display="flex"
              flex={1}
              justifyContent="space-evenly"
              alignItems="stretch"
            >
              <Box
                p={3}
                sx={{
                  textAlign: 'center'
                }}
              >
                <Tooltip arrow title={t('Tooltip for this icon button')}>
                  <IconButtonWrapper
                    sx={{
                      background: `${theme.colors.primary.main}`,
                      '&:hover': { background: `${theme.colors.primary.light}` }
                    }}
                  >
                    <AddCircleTwoToneIcon fontSize="small" />
                  </IconButtonWrapper>
                </Tooltip>
                <Tooltip arrow title={t('Tooltip for this icon button')}>
                  <IconButtonWrapper
                    sx={{
                      mx: 2,
                      background: `${theme.colors.success.main}`,
                      '&:hover': { background: `${theme.colors.success.light}` }
                    }}
                  >
                    <AddLocationTwoToneIcon fontSize="small" />
                  </IconButtonWrapper>
                </Tooltip>
                <Tooltip arrow title={t('Tooltip for this icon button')}>
                  <IconButtonWrapper
                    sx={{
                      background: `${theme.colors.warning.main}`,
                      '&:hover': { background: `${theme.colors.warning.light}` }
                    }}
                  >
                    <AddBusinessTwoToneIcon fontSize="small" />
                  </IconButtonWrapper>
                </Tooltip>
              </Box>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block1;

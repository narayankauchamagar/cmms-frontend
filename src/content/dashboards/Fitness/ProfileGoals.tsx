import { useRef, useState } from 'react';
import {
  Card,
  Stack,
  Typography,
  Divider,
  Grid,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Box,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import useAuth from 'src/hooks/useAuth';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { buildStyles } from 'react-circular-progressbar';
import Gauge from 'src/components/Gauge';

function ProfileGoals() {
  const { t }: { t: any } = useTranslation();
  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const { user } = useAuth();
  const theme = useTheme();

  const data = {
    weightLoss: 42,
    sleep: 65
  };

  const periods = [
    {
      value: 'today',
      text: t('Today')
    },
    {
      value: 'yesterday',
      text: t('Yesterday')
    },
    {
      value: 'last_month',
      text: t('Last month')
    },
    {
      value: 'last_year',
      text: t('Last year')
    }
  ];

  const [period, setPeriod] = useState<string>(periods[2].text);

  const GoalsBox = styled(Box)(
    ({ theme }) => `
      border-radius: ${theme.general.borderRadius};
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${theme.colors.alpha.trueWhite[100]};;
      padding: ${theme.spacing(3)};
`
  );

  const DotLegend = styled('span')(
    ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-flex;
    margin-right: ${theme.spacing(0.8)};
`
  );

  const TypographyPrimary = styled(Typography)(
    () => `
      color: ${theme.colors.alpha.trueWhite[100]};;
    `
  );

  return (
    <Card
      sx={{
        p: 3
      }}
    >
      <Box display="flex" alignItems="center">
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(9),
            height: theme.spacing(9)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: `${theme.typography.pxToRem(18)}`
            }}
            gutterBottom
          >
            {user.name}
          </Typography>
          <Typography variant="subtitle2">San Francisco, USA</Typography>
        </Box>
      </Box>

      <Stack
        sx={{
          mt: 4,
          mb: 3
        }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="space-evenly"
        alignItems="center"
        spacing={0}
      >
        <Box p={2}>
          <Typography align="center" variant="h3" gutterBottom>
            79
            <Typography variant="h4" component="span">
              {t('kg')}
            </Typography>
          </Typography>
          <Typography align="center" variant="subtitle2">
            {t('weight')}
          </Typography>
        </Box>
        <Box p={2}>
          <Typography align="center" variant="h3" gutterBottom>
            182
            <Typography variant="h4" component="span">
              {t('cm')}
            </Typography>
          </Typography>
          <Typography align="center" variant="subtitle2">
            {t('height')}
          </Typography>
        </Box>
        <Box p={2}>
          <Typography align="center" variant="h3" gutterBottom>
            24
            <Typography variant="h4" component="span">
              {t('cm')}
            </Typography>
          </Typography>
          <Typography align="center" variant="subtitle2">
            {t('age')}
          </Typography>
        </Box>
      </Stack>
      <Box
        mb={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4">{t('Your Goals')}</Typography>
        <Button
          size="small"
          variant="outlined"
          ref={actionRef1}
          onClick={() => setOpenMenuPeriod(true)}
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {period}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef1.current}
          onClose={() => setOpenMenuPeriod(false)}
          open={openPeriod}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          {periods.map((_period) => (
            <MenuItem
              key={_period.value}
              onClick={() => {
                setPeriod(_period.text);
                setOpenMenuPeriod(false);
              }}
            >
              {_period.text}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Grid spacing={3} container>
        <Grid item xs={12} md={6}>
          <GoalsBox
            sx={{
              background: theme.colors.gradients.blue1
            }}
          >
            <Box>
              <TypographyPrimary
                variant="subtitle1"
                sx={{
                  pb: 0.5,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <DotLegend style={{ background: theme.colors.success.main }} />
                {t('Weight Loss')}
              </TypographyPrimary>
              <Box>
                <TypographyPrimary
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    pr: 0.5,
                    display: 'inline-flex'
                  }}
                >
                  4.2
                </TypographyPrimary>
                <TypographyPrimary
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    display: 'inline-flex'
                  }}
                >
                  / 10 kg
                </TypographyPrimary>
              </Box>
            </Box>
            <Box>
              <Gauge
                circleRatio={1}
                styles={buildStyles({
                  rotation: 0.5
                })}
                value={data.weightLoss}
                strokeWidth={8}
                text={`${data.weightLoss}%`}
                color="trueWhite"
                size="medium"
              />
            </Box>
          </GoalsBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <GoalsBox
            sx={{
              background: theme.colors.gradients.blue3
            }}
          >
            <Box>
              <TypographyPrimary
                variant="subtitle1"
                sx={{
                  pb: 0.5,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <DotLegend style={{ background: theme.colors.error.main }} />
                {t('Sleep')}
              </TypographyPrimary>
              <Box>
                <TypographyPrimary
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    pr: 0.5,
                    display: 'inline-flex'
                  }}
                >
                  37
                </TypographyPrimary>
                <TypographyPrimary
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    display: 'inline-flex'
                  }}
                >
                  / 59 hours
                </TypographyPrimary>
              </Box>
            </Box>
            <Box>
              <Gauge
                circleRatio={1}
                styles={buildStyles({
                  rotation: 0.5
                })}
                value={data.sleep}
                strokeWidth={8}
                text={`${data.sleep}%`}
                color="trueWhite"
                size="medium"
              />
            </Box>
          </GoalsBox>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProfileGoals;

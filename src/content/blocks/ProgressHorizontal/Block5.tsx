import { Fragment } from 'react';

import {
  Box,
  Divider,
  Button,
  LinearProgress,
  List,
  ListItem,
  Card,
  Typography,
  IconButton,
  alpha,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import PageviewTwoToneIcon from '@mui/icons-material/PageviewTwoTone';
import Scrollbar from 'src/components/Scrollbar';

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 14px;
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.1)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.primary.dark,
              0.2
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusSm};
            background-color: ${theme.colors.primary.main};
        }
    `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.02)};
      border-radius: 0;
  `
);

const ListWrapper = styled(List)(
  () => `
      .MuiListItem-root:last-of-type + .MuiDivider-root {
          display: none;
      }
  `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      title: 'Orders',
      value: '345',
      progress: 34
    },
    {
      id: 2,
      title: 'Sales',
      value: '84',
      progress: 15
    },
    {
      id: 3,
      title: 'Users',
      value: '4,564',
      progress: 53
    },
    {
      id: 4,
      title: 'Visits',
      value: '1,54k',
      progress: 71
    },
    {
      id: 5,
      title: 'Revenue',
      value: '$34,325',
      progress: 47
    }
  ];

  return (
    <Card variant="outlined">
      <Box
        p={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography gutterBottom variant="h4">
            {t('Monthly targets')}
          </Typography>
          <Typography variant="subtitle2">
            {t('These are your performance indicators')}
          </Typography>
        </Box>
        <IconButton size="small" color="secondary">
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 301
        }}
      >
        <Scrollbar>
          <ListWrapper disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <ListItem
                  sx={{
                    display: 'block',
                    py: 1.5,
                    px: 3
                  }}
                >
                  <Box
                    display="flex"
                    mb={0.6}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h4">{t(item.title)}</Typography>
                    <Typography
                      sx={{
                        color: `${theme.colors.primary.main}`
                      }}
                      variant="h3"
                    >
                      {item.value}
                    </Typography>
                  </Box>
                  <LinearProgressPrimary
                    variant="determinate"
                    value={item.progress}
                  />
                  <Box
                    display="flex"
                    sx={{
                      pt: 0.4
                    }}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="subtitle1">0</Typography>
                    <Typography variant="subtitle1">100%</Typography>
                  </Box>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </ListWrapper>
        </Scrollbar>
      </Box>
      <Divider />
      <CardWrapper
        elevation={0}
        sx={{
          textAlign: 'center',
          p: 2
        }}
      >
        <Button startIcon={<PageviewTwoToneIcon />} variant="outlined">
          {t('View details')}
        </Button>
      </CardWrapper>
    </Card>
  );
}

export default Block5;

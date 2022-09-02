import {
  Button,
  Card,
  alpha,
  Tooltip,
  Box,
  Divider,
  Typography,
  Avatar,
  IconButton,
  List,
  ListItem,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.primary.lighter};
      color: ${theme.palette.primary.main};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
`
);

const BoxWrapper = styled(Box)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      border-radius: ${theme.general.borderRadius};
      text-align: center;
      width: ${theme.spacing(9)};
      height: ${theme.spacing(9)};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacing(1.5)};
      flex-shrink: 0;
      transition: ${theme.transitions.create(['background'])};
`
);

const ListItemWrapper = styled(ListItem)(
  ({ theme }) => `
      border-radius: 0;
      padding: ${theme.spacing(2)};
      
      &:hover {
        .MuiDate-wrapper {
            background: ${alpha(theme.colors.alpha.black[100], 0.08)};
        }
      }
`
);

function UpcomingEvents() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <Box
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <AvatarPrimary
            sx={{
              mr: 1.5
            }}
          >
            <DateRangeTwoToneIcon />
          </AvatarPrimary>
          <Typography variant="h4">{t('Upcoming Events')}</Typography>
        </Box>
        <Tooltip placement="top" arrow title={t('Create new event')}>
          <IconButton
            sx={{
              alignSelf: 'center'
            }}
            color="primary"
          >
            <ControlPointTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />
      <List disablePadding component="div">
        <ListItemWrapper alignItems="flex-start">
          <BoxWrapper className="MuiDate-wrapper">
            <Box>
              <Typography variant="h2" color="text.primary">
                23
              </Typography>
              <Typography variant="subtitle2">{t('June')}</Typography>
            </Box>
          </BoxWrapper>
          <Box>
            <Typography
              variant="h4"
              sx={{
                pt: 1
              }}
              color="text.primary"
              noWrap
              gutterBottom
            >
              {t('Healthy Body')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(
                'You will learn how to have a healthy body and how to stay fit in this event.'
              )}
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper alignItems="flex-start">
          <BoxWrapper className="MuiDate-wrapper">
            <Box>
              <Typography variant="h2" color="text.primary">
                30
              </Typography>
              <Typography variant="subtitle2">{t('July')}</Typography>
            </Box>
          </BoxWrapper>
          <Box>
            <Typography
              variant="h4"
              sx={{
                pt: 1
              }}
              color="text.primary"
              noWrap
              gutterBottom
            >
              {t('Healthy Nutrition - The Power is in You')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(
                'Three day course that will help you harness your inner power in order to have a healthier life.'
              )}
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper alignItems="flex-start">
          <BoxWrapper className="MuiDate-wrapper">
            <Box>
              <Typography variant="h2" color="text.primary">
                14
              </Typography>
              <Typography variant="subtitle2">{t('August')}</Typography>
            </Box>
          </BoxWrapper>
          <Box>
            <Typography
              variant="h4"
              sx={{
                pt: 1
              }}
              color="text.primary"
              noWrap
              gutterBottom
            >
              {t('Mindfulness Online Course')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(
                'Learn how to better manage the stresses of daily life, improve your overall health.'
              )}
            </Typography>
          </Box>
        </ListItemWrapper>
      </List>
      <Divider />
      <Box p={2}>
        <Button
          variant="outlined"
          size="small"
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {t('View all')}
        </Button>
      </Box>
    </Card>
  );
}

export default UpcomingEvents;

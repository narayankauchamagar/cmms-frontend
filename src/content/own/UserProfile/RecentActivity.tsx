import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CircularProgress,
  Divider,
  styled,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import { useDispatch, useSelector } from '../../../store';
import { getUserWorkOrdersOverview } from '../../../slices/analytics/user';
import { useEffect } from 'react';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
`
);

function RecentActivity() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { loading, workOrdersOverview } = useSelector(
    (state) => state.userAnalytics
  );
  useEffect(() => {
    dispatch(getUserWorkOrdersOverview());
  }, []);

  return (
    <Card>
      <CardHeader title={t('recent_activity')} />
      <Divider />
      <Box px={2} py={4} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <AssignmentTwoToneIcon />
        </AvatarPrimary>
        <Box pl={2} flex={1}>
          <Typography variant="h3">{t('work_orders')}</Typography>

          {loading.workOrdersOverview ? (
            <CircularProgress />
          ) : (
            <Box pt={2} display="flex">
              <Box pr={8}>
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                >
                  {t('created')}
                </Typography>
                <Typography variant="h2">
                  {workOrdersOverview.created}
                </Typography>
              </Box>
              <Box>
                <Typography
                  gutterBottom
                  variant="caption"
                  sx={{
                    fontSize: `${theme.typography.pxToRem(16)}`
                  }}
                >
                  {t('completed')}
                </Typography>
                <Typography variant="h2">
                  {workOrdersOverview.completed}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
}

export default RecentActivity;

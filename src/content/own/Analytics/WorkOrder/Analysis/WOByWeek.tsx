import { CircularProgress, Stack, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import AnalyticsCard from '../../AnalyticsCard';
import { Filter } from '../WOModal';
import { useDispatch, useSelector } from '../../../../../store';
import { useEffect } from 'react';
import { getCompleteByWeek } from '../../../../../slices/analytics/workOrder';
import { getDayAndMonth } from '../../../../../utils/dates';

interface WOStatusIncompleteProps {
  handleOpenModal: (
    columns: string[],
    filters: Filter[],
    title: string
  ) => void;
}
function WOByWeek({ handleOpenModal }: WOStatusIncompleteProps) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const { completeByWeek, loading } = useSelector((state) => state.woAnalytics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompleteByWeek());
  }, []);

  const columns: string[] = ['id'];

  const formattedData: {
    label: string;
    count: number;
    filters: Filter[];
  }[] = completeByWeek.map((data) => {
    return {
      ...data,
      recurring: data.count - data.reactive,
      label: getDayAndMonth(data.date),
      filters: [{ key: 'range', value: data.date }]
    };
  });
  const title = 'Completion comparison';
  return (
    <AnalyticsCard
      title={title}
      description="Comparison of various types of completed work orders."
    >
      {loading.completeByWeek ? (
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Stack>
      ) : (
        <LineChart width={400} height={508} data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            name={t('Complete')}
            type="monotone"
            dataKey="count"
            stroke={theme.colors.primary.main}
          />
          <Line
            name={t('Compliant')}
            type="monotone"
            dataKey="compliant"
            stroke={theme.colors.success.main}
          />
          <Line
            name={t('Reactive')}
            type="monotone"
            dataKey="reactive"
            stroke={theme.colors.warning.main}
          />
          <Line
            name={t('Recurring')}
            type="monotone"
            dataKey="recurring"
            stroke={theme.colors.error.main}
          />
        </LineChart>
      )}
    </AnalyticsCard>
  );
}

export default WOByWeek;

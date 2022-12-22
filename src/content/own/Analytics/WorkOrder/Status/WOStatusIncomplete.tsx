import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../../../store';
import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import AnalyticsCard from '../../AnalyticsCard';

function WOStatusIncomplete() {
  const { t }: { t: any } = useTranslation();
  const { files, loadingGet } = useSelector((state) => state.files);
  const theme = useTheme();

  const dispatch = useDispatch();
  const data = [
    {
      label: 'High',
      count: 10,
      color: theme.colors.error.main,
      estimatedHours: 20
    },
    {
      label: 'Medium',
      count: 10,
      color: theme.colors.warning.main,
      estimatedHours: 11
    },
    {
      label: 'Low',
      count: 20,
      color: theme.colors.success.main,
      estimatedHours: 15
    }
  ];

  return (
    <AnalyticsCard
      title="Work Remaining"
      description="This graph shows the number of incomplete work orders that are due in the date range specified in the filters. The estimated hours correspond to those individual work orders."
    >
      <ComposedChart width={400} height={508} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Bar>
        <Line type="monotone" dataKey="estimatedHours" stroke="#ff7300" />
      </ComposedChart>
    </AnalyticsCard>
  );
}

export default WOStatusIncomplete;

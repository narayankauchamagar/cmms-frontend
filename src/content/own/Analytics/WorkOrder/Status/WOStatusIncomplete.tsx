import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
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
import { Filter } from './WOModal';

interface WOStatusIncompleteProps {
  handleOpenModal: (
    columns: string[],
    filters: Filter[],
    title: string
  ) => void;
}
function WOStatusIncomplete({ handleOpenModal }: WOStatusIncompleteProps) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const columns: string[] = ['id'];
  const data = {
    high: {
      count: 10,
      estimatedHours: 20
    },
    medium: {
      count: 20,
      estimatedHours: 30
    },
    low: {
      count: 4,
      estimatedHours: 12
    }
  };
  const formattedData: {
    label: string;
    count: number;
    color: string;
    estimatedHours: number;
    filters: Filter[];
  }[] = [
    {
      label: 'High',
      count: data.high.count,
      color: theme.colors.error.main,
      estimatedHours: data.high.estimatedHours,
      filters: [{ key: 'fs', value: false }]
    },
    {
      label: 'Medium',
      count: data.medium.count,
      color: theme.colors.warning.main,
      estimatedHours: data.medium.estimatedHours,
      filters: [{ key: 'fs', value: false }]
    },
    {
      label: 'Low',
      count: data.low.count,
      color: theme.colors.success.main,
      estimatedHours: data.low.estimatedHours,
      filters: [{ key: 'fs', value: false }]
    }
  ];
  const title = 'Work Remaining';
  return (
    <AnalyticsCard
      title={title}
      description="This graph shows the number of incomplete work orders that are due in the date range specified in the filters. The estimated hours correspond to those individual work orders."
    >
      <ComposedChart width={400} height={508} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8">
          {formattedData.map((entry, index) => (
            <Cell
              key={index}
              fill={entry.color}
              onClick={() => {
                handleOpenModal(columns, entry.filters, t(title));
              }}
            />
          ))}
        </Bar>
        <Line type="monotone" dataKey="estimatedHours" stroke="#ff7300" />
      </ComposedChart>
    </AnalyticsCard>
  );
}

export default WOStatusIncomplete;

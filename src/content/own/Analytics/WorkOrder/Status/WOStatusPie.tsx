import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import AnalyticsCard from '../../AnalyticsCard';
import { Filter } from './WOModal';

interface WOStatusPieProps {
  handleOpenModal: (
    columns: string[],
    filters: Filter[],
    title: string
  ) => void;
}
function WOStatusPie({ handleOpenModal }: WOStatusPieProps) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const data = {
    complete: 10,
    inProgress: 15,
    onHold: 15,
    open: 30
  };

  const columns = ['id'];
  const formattedData = [
    {
      label: 'Complete',
      value: data.complete,
      color: theme.colors.error.main,
      filters: [{ key: 'status', value: 'COMPLETE' }]
    },
    {
      label: 'On hold',
      value: data.onHold,
      color: theme.colors.warning.main,
      filters: [{ key: 'status', value: 'ON_HOLD' }]
    },
    {
      label: 'In Progress',
      value: data.inProgress,
      color: theme.colors.success.main,
      filters: [{ key: 'status', value: 'IN_PROGRESS' }]
    },
    {
      label: 'Open',
      value: data.open,
      color: theme.colors.alpha.black[70],
      filters: [{ key: 'status', value: 'OPEN' }]
    }
  ];
  const title = t('Work Order Status');
  return (
    <AnalyticsCard
      title={title}
      description="Compliant work orders are defined as work orders that were completed before the due date. Cycle time refers to the number of days until a work order was completed."
    >
      <PieChart width={200} height={300}>
        <Pie
          data={formattedData}
          dataKey="value"
          nameKey="label"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={50}
          fill="#8884d8"
        >
          {formattedData.map((entry, index) => (
            <Cell
              key={index}
              fill={entry.color}
              onClick={() => {
                handleOpenModal(columns, entry.filters, title);
              }}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </AnalyticsCard>
  );
}

export default WOStatusPie;

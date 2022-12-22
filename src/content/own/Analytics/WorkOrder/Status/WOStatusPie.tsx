import { styled, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../../../store';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import AnalyticsCard from '../../AnalyticsCard';

const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: 10px;
      height: 10px;
      display: inline-block;
      margin-right: ${theme.spacing(0.5)};
  `
);

function WOStatusPie() {
  const { t }: { t: any } = useTranslation();
  const { files, loadingGet } = useSelector((state) => state.files);
  const theme = useTheme();

  const dispatch = useDispatch();
  const data = [
    {
      label: 'High',
      value: 10,
      color: theme.colors.error.main
    },
    {
      label: 'Medium',
      value: 10,
      color: theme.colors.warning.main
    },
    {
      label: 'Low',
      value: 20,
      color: theme.colors.success.main
    }
  ];

  return (
    <AnalyticsCard
      title="Work Order Status"
      description="Compliant work orders are defined as work orders that were completed before the due date. Cycle time refers to the number of days until a work order was completed."
    >
      <PieChart width={200} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="label"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={50}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </AnalyticsCard>
  );
}

export default WOStatusPie;

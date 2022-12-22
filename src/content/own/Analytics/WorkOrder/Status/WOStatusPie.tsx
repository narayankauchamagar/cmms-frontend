import {
  Card,
  Stack,
  styled,
  Tooltip as TooltipMUI,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../../../store';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

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
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2
      }}
    >
      <Stack direction="row" spacing={1}>
        <Typography variant="h4" textAlign="center">
          {t('Work Order Status')}
        </Typography>
        <TooltipMUI
          title={t(
            'Compliant work orders are defined as work orders that were completed before the due date. Cycle time refers to the number of days until a work order was completed.'
          )}
        >
          <InfoTwoToneIcon />
        </TooltipMUI>
      </Stack>
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
    </Card>
  );
}

export default WOStatusPie;

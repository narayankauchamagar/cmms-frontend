import {
  Card,
  Stack,
  Tooltip as TooltipMUI,
  Typography,
  useTheme
} from '@mui/material';
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
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

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
      <ComposedChart width={400} height={600} data={data}>
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
    </Card>
  );
}

export default WOStatusIncomplete;

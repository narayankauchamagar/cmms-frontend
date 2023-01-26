import { useTranslation } from 'react-i18next';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import AnalyticsCard from '../../AnalyticsCard';
import { Filter } from '../WOModal';
import { useDispatch, useSelector } from '../../../../../store';
import { useEffect } from 'react';
import Loading from '../../Loading';
import { getRepairTimeByAsset } from '../../../../../slices/analytics/asset';
import { getRandomColor } from '../../../../../utils/overall';

interface WOStatusPieProps {
  handleOpenModal: (
    columns: string[],
    filters: Filter[],
    title: string
  ) => void;
}
function RepairTimeByAsset({ handleOpenModal }: WOStatusPieProps) {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const { repairTimeByAsset, loading } = useSelector(
    (state) => state.assetAnalytics
  );

  useEffect(() => {
    dispatch(getRepairTimeByAsset());
  }, []);
  const columns: string[] = ['id'];

  const formattedData: {
    label: string;
    duration: number;
    color: string;
    filters: Filter[];
  }[] = repairTimeByAsset.map((asset) => {
    return {
      label: asset.name,
      duration: asset.duration,
      color: getRandomColor(),
      filters: [{ key: 'asset', value: asset.id }]
    };
  });

  const title = t('repair_time_by_asset');
  return (
    <AnalyticsCard title={title}>
      {loading.downtimesByAsset ? (
        <Loading />
      ) : (
        <BarChart width={508} height={508} data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="duration"
            fill="#8884d8"
            name={t('mean_time_to_repair_in_hours')}
          >
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
        </BarChart>
      )}
    </AnalyticsCard>
  );
}

export default RepairTimeByAsset;

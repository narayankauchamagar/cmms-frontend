import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../../../store';
import AnalyticsCard from '../../AnalyticsCard';

function HoursWorked() {
  const { t }: { t: any } = useTranslation();
  const { files, loadingGet } = useSelector((state) => state.files);

  const dispatch = useDispatch();
  const counts = {
    estimatedHours: 1,
    totalTime: 2
  };

  const datas: { label: string; value: number }[] = [
    { label: t('Estimated Hours'), value: counts.estimatedHours },
    { label: t('Total time spent'), value: counts.totalTime }
  ];
  return (
    <AnalyticsCard
      title="Hours Worked"
      height={200}
      description="These hours correspond to work orders that have a due date within the range specified in the filters."
    >
      <Stack sx={{ height: '100%', justifyContent: 'center' }}>
        <Stack direction="row" spacing={2}>
          {datas.map((data) => (
            <Stack key={data.label} alignItems="center">
              <Typography
                variant="h2"
                fontWeight="bold"
                style={{ cursor: 'pointer' }}
              >
                {data.value}
              </Typography>
              <Typography>{data.label}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </AnalyticsCard>
  );
}

export default HoursWorked;

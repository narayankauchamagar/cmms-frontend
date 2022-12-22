import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AnalyticsCard from '../../AnalyticsCard';
import { Filter } from './WOModal';

interface HoursWorkedProps {
  handleOpenModal: (
    columns: string[],
    filters: Filter[],
    title: string
  ) => void;
}
function HoursWorked({ handleOpenModal }: HoursWorkedProps) {
  const { t }: { t: any } = useTranslation();

  const counts = {
    estimatedHours: 1,
    totalTime: 2
  };
  const columns = ['id'];
  const datas: { label: string; value: number; filters: Filter[] }[] = [
    { label: t('Estimated Hours'), value: counts.estimatedHours, filters: [] },
    { label: t('Total time spent'), value: counts.totalTime, filters: [] }
  ];
  const title = t('Hours Worked');
  return (
    <AnalyticsCard
      title={title}
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
                onClick={() => handleOpenModal(columns, data.filters, title)}
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

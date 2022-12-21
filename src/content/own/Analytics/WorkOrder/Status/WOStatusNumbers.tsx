import { Card, Stack, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { useDispatch, useSelector } from '../../../../../store';

function WOStatusNumbers() {
  const { t }: { t: any } = useTranslation();
  const { files, loadingGet } = useSelector((state) => state.files);

  const dispatch = useDispatch();
  const counts = {
    workOrdersCount: 1,
    completeWO: 2,
    compliant: 1,
    avgCycleTime: 10
  };

  const datas: { label: string; value: number }[] = [
    { label: t('Count'), value: counts.workOrdersCount },
    { label: t('Complete'), value: counts.completeWO },
    { label: t('Compliant'), value: counts.compliant },
    { label: t('Average Cycle Time (Days)'), value: counts.avgCycleTime }
  ];
  return (
    <Card
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 200
      }}
    >
      <Stack direction="row" spacing={1}>
        <Typography variant="h4">{t('The numbers')}</Typography>
        <Tooltip
          title={t(
            'Compliant work orders are defined as work orders that were completed before the due date. Cycle time refers to the number of days until a work order was completed.'
          )}
        >
          <InfoTwoToneIcon />
        </Tooltip>
      </Stack>
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
    </Card>
  );
}

export default WOStatusNumbers;

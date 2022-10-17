import Asset from '../../../../models/owns/asset';
import { Box, Card, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface PropsType {
  asset: Asset;
}

const AssetWorkOrders = ({ asset }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const workOrders = [
    {
      id: 1,
      name: 'hgfjb',
      dueDate: 'new Date()',
      status: 'In progress',
      worker: 'hvbujb'
    },
    {
      id: 52,
      name: 'hgfjb',
      dueDate: 'new Date()',
      status: 'In progress',
      worker: ' ukhbcy'
    }
  ];
  return (
    <Box sx={{ px: 4 }}>
      <Grid container spacing={2}>
        {workOrders.length ? (
          workOrders.map((workOrder) => (
            <Grid key={workOrder.id} item xs={12}>
              <Card>
                <Box
                  sx={{
                    p: 2,
                    flexDirection: 'row',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Box>
                    <Typography variant="h4" gutterBottom>
                      {workOrder.name}
                    </Typography>
                    <Typography variant="subtitle1">{`#${workOrder.id}`}</Typography>
                  </Box>
                  <Typography variant="h6" color="error">
                    {`Due ${workOrder.dueDate}`}
                  </Typography>
                  <Typography variant="h6">{workOrder.worker}</Typography>
                  <Typography variant="h6">{workOrder.status}</Typography>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Card>
              <Box
                sx={{
                  height: 500,
                  p: 2,
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography variant="h4">
                  {t('There is no Work Order linked to this Asset')}
                </Typography>
              </Box>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default AssetWorkOrders;

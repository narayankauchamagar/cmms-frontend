import {
  Box,
  Card,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from '../../components/CustomDatagrid';
import { GridRowParams, GridToolbar } from '@mui/x-data-grid';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import { AssetDTO } from '../../../../models/owns/asset';
import { useDispatch, useSelector } from '../../../../store';
import { getMetersByAsset } from '../../../../slices/meter';
import { useContext, useEffect, useState } from 'react';
import Meter from '../../../../models/owns/meter';
import { getReadings } from '../../../../slices/reading';
import Reading from '../../../../models/owns/reading';
import { CompanySettingsContext } from '../../../../contexts/CompanySettingsContext';

interface PropsType {
  asset: AssetDTO;
}

const AssetMeters = ({ asset }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const { metersByAsset } = useSelector((state) => state.meters);
  const { readingsByMeter } = useSelector((state) => state.readings);
  const meters = metersByAsset[asset?.id] ?? [];
  const [selectedMeter, setSelectedMeter] = useState<Meter>();
  const { getFormattedDate } = useContext(CompanySettingsContext);
  const readings = readingsByMeter[selectedMeter?.id] ?? [];

  useEffect(() => {
    if (asset) dispatch(getMetersByAsset(asset?.id));
  }, [asset?.id]);

  useEffect(() => {
    if (meters.length) {
      setSelectedMeter(meters[0]);
    }
  }, [meters]);

  useEffect(() => {
    if (!readingsByMeter[selectedMeter?.id] && selectedMeter) {
      dispatch(getReadings(selectedMeter?.id));
    }
  }, [selectedMeter]);
  const columns: GridEnrichedColDef[] = [
    {
      field: 'value',
      headerName: t('Reading'),
      description: t('Reading'),
      width: 150,
      valueGetter: (params) => `${params.value} ${selectedMeter.unit}`
    },
    {
      field: 'createdAt',
      headerName: t('Date'),
      description: t('Date'),
      width: 150,
      valueGetter: (params) => getFormattedDate(params.value)
    },
    {
      field: 'createdBy',
      headerName: t('Added by'),
      description: t('Added By'),
      width: 150
    }
  ];
  return (
    <Box sx={{ px: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ height: 600, width: '95%' }}>
              <Stack
                direction="row"
                spacing={1}
                sx={{ my: 2, alignItems: 'center' }}
              >
                <Typography variant="h5">{t('Select Meter')}</Typography>
                <Select
                  value={selectedMeter?.id}
                  displayEmpty
                  onChange={(event) => {
                    setSelectedMeter(
                      meters.find(
                        (meter) => meter.id === Number(event.target.value)
                      )
                    );
                  }}
                >
                  {meters.map((meter) => (
                    <MenuItem key={meter.id} value={meter.id}>
                      {meter.name}
                    </MenuItem>
                  ))}
                </Select>
              </Stack>
              <CustomDataGrid
                columns={columns}
                rows={readings}
                components={{
                  Toolbar: GridToolbar
                }}
                onRowClick={(params: GridRowParams<Meter>) => null}
                initialState={{
                  columns: {
                    columnVisibilityModel: {}
                  }
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssetMeters;

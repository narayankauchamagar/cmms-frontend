import { DataGridPro, DataGridProProps } from '@mui/x-data-grid-pro';
import { useTranslation } from 'react-i18next';
import { Stack, Typography, useTheme } from '@mui/material';
import gridLocaleText from './GridLocaleText';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { useRef } from 'react';

interface CustomDatagridProps extends DataGridProProps {
  notClickable?: boolean;
}

function CustomDataGrid(props: CustomDatagridProps) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const { height } = useWindowDimensions();
  const tableRef = useRef<HTMLDivElement>();

  const getTableHeight = () => {
    if (tableRef.current) {
      const viewportOffset = tableRef.current.getBoundingClientRect();
      // these are relative to the viewport, i.e. the window
      const top = viewportOffset.top;
      return height - top - 15;
    }
    return 300;
  };
  const translatedGridLocaleText = Object.fromEntries(
    Object.entries(gridLocaleText).map(([key, value]) => {
      if (typeof value === 'function') {
        return [key, value];
      }
      return [key, t(value)];
    })
  );
  return (
    <div ref={tableRef} style={{ height: getTableHeight(), width: '100%' }}>
      <DataGridPro
        sx={{
          ' .MuiDataGrid-columnHeader': {
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backgroundColor: theme.colors.alpha.black[10]
          },
          '.MuiDataGrid-row': {
            cursor: props.notClickable ? 'auto' : 'pointer'
          }
        }}
        components={{
          NoRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              <Typography variant="h3">{t('no_content')}</Typography>
            </Stack>
          ),
          NoResultsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              <Typography variant="h3">{t('no_result_criteria')}</Typography>
            </Stack>
          )
        }}
        {...props}
        disableSelectionOnClick
        localeText={translatedGridLocaleText}
      />
    </div>
  );
}

export default CustomDataGrid;

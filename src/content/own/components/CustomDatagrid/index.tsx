import { DataGridProps, GridLocaleText } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import gridLocaleText from './GridLocaleText';
import { Dispatch, SetStateAction } from 'react';

interface CustomDatagridProps extends DataGridProps {
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
}

function CustomDataGrid(props: CustomDatagridProps) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const translatedGridLocaleText = Object.fromEntries(
    Object.entries(gridLocaleText).map(([key, value]) => {
      if (typeof value === 'function') {
        return [key, value];
      }
      return [key, t(value)];
    })
  );
  return (
    <DataGrid
      sx={{
        ' .MuiDataGrid-columnHeader': {
          fontWeight: 'bold',
          textTransform: 'uppercase',
          backgroundColor: theme.colors.alpha.black[10]
        }
      }}
      {...props}
      localeText={translatedGridLocaleText}
      onCellClick={() => {props.setOpenModal(true)}}
    />
  );
}

export default CustomDataGrid;

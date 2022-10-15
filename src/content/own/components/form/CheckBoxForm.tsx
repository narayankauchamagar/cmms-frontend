import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface PropsType {
  label: string;
  type?: 'simpleCheckbox' | 'groupCheckbox';
  listCheckbox?: {
    label: string;
    value: string | number;
    checked?: boolean;
  }[];
  checked?: boolean;
  direction?: 'row' | 'column';
  onChange?: (e: any) => void;
}

export default (props: PropsType) => {
  const { t }: { t: any } = useTranslation();

  return props.type === 'groupCheckbox' ? (
    <Box
      display="flex"
      flexDirection={props.direction || 'column'}
      justifyContent="space-between"
    >
      <Typography variant="h5" sx={{ pb: 1 }}>
        {t(`${props.label}`)}
      </Typography>
      {props.listCheckbox &&
        props.listCheckbox.map((item) => (
          <FormControlLabel
            key={item.label}
            control={<Checkbox checked={item.checked} />}
            label={t(`${item.label}`)}
            sx={{ marginLeft: 0.5 }}
          />
        ))}
    </Box>
  ) : (
    <Box>
      <FormControlLabel
        control={<Checkbox checked={props.checked} />}
        label={t(`${props.label}`)}
        onChange={props.onChange}
      />
    </Box>
  );
};

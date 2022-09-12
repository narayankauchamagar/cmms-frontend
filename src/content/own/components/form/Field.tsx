import { Box, InputAdornment, TextField } from '@mui/material';
import { IField } from '../../type';
import { useTranslation } from 'react-i18next';

interface PropsType extends IField {
  onChange: (event: any) => void;
  onBlur: (event: any) => any;
  value: any | '';
  placeholder?: string;
  error?: any;
  isDisabled?: boolean;
  //   fieldStyle?: any;
  errorMessage?: any;
  fullWidth?: boolean;
  //   helperText?: string;
  variant?: 'outlined' | any;
  required?: boolean;
}

export default (props: PropsType) => {
  const { t }: { t: any } = useTranslation();

  return (
    <Box sx={{ my: 2 }}>
      <TextField
        error={props.error}
        fullWidth={props.fullWidth || true}
        helperText={props.error && props.errorMessage}
        // helperText={touched.name && errors.name}
        label={t(`${props.label}`)}
        placeholder={t(`${props.placeholder}`)}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        value={props.value}
        variant={props.value || 'outlined'}
        disabled={props.isDisabled}
        required={props.required || false}
        multiline={props.multiple}
        rows={props.multiple && 4}
        InputProps={
          props.icon && {
            startAdornment: (
              <InputAdornment position="start">{props.icon}</InputAdornment>
            )
          }
        }
      />
    </Box>
  );
};

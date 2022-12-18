import { Autocomplete, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface PropsType {
  options: {
    label: string;
    value: string | number;
  }[];
  label: string;
  value: { label: string; value: string } | { label: string; value: string }[];
  placeholder?: string;
  error: boolean;
  errorMessage: any;
  multiple?: boolean;
  required?: boolean;
  disabled: boolean;
  fullWidth?: boolean;
  onOpen?: () => void;
  onChange: (event: any, values: { label: string; value: string }[]) => void;
  loading?: boolean;
  //   defaultValue: any;
  //   variant?: 'outlined' | any;
}

export default (props: PropsType) => {
  const { t }: { t: any } = useTranslation();
  return (
    <Autocomplete
      fullWidth={props.fullWidth || true}
      multiple={props.multiple}
      filterSelectedOptions
      limitTags={5}
      onOpen={props.onOpen}
      disabled={props.disabled}
      onChange={props.onChange}
      loading={props.loading}
      // @ts-ignore
      isOptionEqualToValue={(option, value) => option.value == value.value}
      defaultValue={props.value || (props.multiple ? [] : null)}
      options={props.options}
      // @ts-ignore
      getOptionLabel={(option) => option.label}
      // defaultValue={[jobsLocations[1]]}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth={props.fullWidth || true}
          variant="outlined"
          required={props.required}
          label={t(props.label)}
          placeholder={t(props.placeholder || props.label)}
          error={props.error}
          helperText={props.error && props.errorMessage}
        />
      )}
    />
  );
};

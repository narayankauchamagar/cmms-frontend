import { Box, Typography } from '@mui/material';

export default function NoRowsMessage({
  message,
  action
}: {
  message: string;
  action: string;
}) {
  return (
    <Box sx={{ mt: 2, px: 3, textAlign: 'center' }}>
      <Typography variant="h4">{message}</Typography>
      <Typography component="span" variant="subtitle2">
        {action}
      </Typography>
    </Box>
  );
}

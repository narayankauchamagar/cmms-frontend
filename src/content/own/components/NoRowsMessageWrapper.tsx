import { Stack } from '@mui/material';
import NoRowsMessage from './NoRowsMessage';

export default function NoRowsMessageWrapper({
  message,
  action
}: {
  message: string;
  action: string;
}) {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <NoRowsMessage message={message} action={action} />
    </Stack>
  );
}

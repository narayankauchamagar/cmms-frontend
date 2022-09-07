import { Dialog, DialogTitle, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface FormModalProps {
  children?: ReactNode;
  title: string;
  subtitle?: string;
  open: boolean;
  onClose: () => void;
}
function CustomDialog(props: FormModalProps) {
  const { open, onClose, children, title, subtitle } = props;
  const { t }: { t: any } = useTranslation();
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t(title)}
        </Typography>
        <Typography variant="subtitle2">{t(subtitle)}</Typography>
      </DialogTitle>
      {children}
    </Dialog>
  );
}

export default CustomDialog;

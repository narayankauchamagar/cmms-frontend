import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import { useDispatch } from '../../../store';
import { useContext } from 'react';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';

interface SignatureProps {
  open: boolean;
  onClose: () => void;
  onCompleteWithSignature: (id: number) => Promise<void | number | number[]>;
}
export default function SignatureModal({
  open,
  onClose,
  onCompleteWithSignature
}: SignatureProps) {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const { uploadFiles } = useContext(CompanySettingsContext);
  const fields: Array<IField> = [
    {
      name: 'signature',
      type: 'file',
      label: t('Signature'),
      fileType: 'image'
    }
  ];
  const shape = {
    signature: Yup.array().required(t('Image is required'))
  };
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add Signature to close this Work Order')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Form
          fields={fields}
          validation={Yup.object().shape(shape)}
          submitText={t('Sign')}
          values={{}}
          onChange={({ field, e }) => {}}
          onSubmit={async (values) => {
            return new Promise<void>((resolve, rej) => {
              uploadFiles([], values.signature)
                .then((files) => {
                  onCompleteWithSignature(files[0].id)
                    .then(onClose)
                    .finally(resolve);
                })
                .catch((err) => {
                  rej(err);
                });
            });
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

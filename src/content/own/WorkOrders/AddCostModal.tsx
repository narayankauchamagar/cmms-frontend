import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import { IField } from '../type';

interface AddCostProps {
  open: boolean;
  onClose: () => void;
}
export default function AddCostModal({ open, onClose }: AddCostProps) {
  const { t }: { t: any } = useTranslation();
  const fields: Array<IField> = [
    {
      name: 'description',
      type: 'text',
      label: t('Cost Description'),
      required: true
    },
    {
      name: 'assignedTo',
      type: 'select',
      label: t('Assigned To'),
      type2: 'user',
      midWidth: true
    },
    {
      name: 'category',
      type: 'select',
      label: t('Category'),
      type2: 'category',
      category: 'cost-categories',
      midWidth: true
    },
    {
      name: 'date',
      type: 'date',
      label: t('Date')
    },
    {
      name: 'includeToTotalCost',
      type: 'switch',
      label: t('Include this cost in the total cost'),
      helperText: t(
        'This will add the cost to the total cost spent on the Work Order'
      )
    }
  ];
  const shape = {
    description: Yup.string().required(t('Cost Description is required')),
    minutes: Yup.number().required(t('Minutes field is required'))
  };
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add Additional Cost')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add Additional Cost')}
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
          submitText={t('Add')}
          values={{ includeToTotalCost: true }}
          onChange={({ field, e }) => {}}
          onSubmit={async (values) => {
            try {
              await wait(2000);
              onClose();
            } catch (err) {
              console.error(err);
            }
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

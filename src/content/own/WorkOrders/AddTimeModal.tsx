import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import { IField } from '../type';
import { categories } from '../../../models/owns/category';

interface AddTimeProps {
  open: boolean;
  onClose: () => void;
}
export default function AddTimeModal({ open, onClose }: AddTimeProps) {
  const { t }: { t: any } = useTranslation();
  const fields: Array<IField> = [
    {
      name: 'assignedTo',
      type: 'select',
      label: t('Assigned To'),
      type2: 'user',
      midWidth: true
    },
    {
      name: 'hourlyRate',
      type: 'number',
      label: t('Hourly Rate'),
      midWidth: true
    },
    {
      name: 'includeToTotalTime',
      type: 'switch',
      label: t('Include this time in the total time'),
      helperText: t(
        'This will add the duration to the total time spent on the Work Order'
      )
    },
    {
      name: 'startedAt',
      type: 'date',
      label: t('Work Started At')
    },
    {
      name: 'category',
      type: 'select',
      label: t('Category'),
      items: categories.map((category) => {
        return { label: category.name, value: category.id };
      })
    },
    {
      name: 'duration',
      type: 'titleGroupField',
      label: t('Duration')
    },
    {
      name: 'hours',
      type: 'number',
      label: t('Hours'),
      midWidth: true,
      required: true
    },
    {
      name: 'minutes',
      type: 'number',
      label: t('Minutes'),
      midWidth: true,
      required: true
    }
  ];
  const shape = {
    hours: Yup.number().required(t('Hours field is required')),
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
          {t('Add Time')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add Time')}
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
          values={{ includeToTotalTime: true }}
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

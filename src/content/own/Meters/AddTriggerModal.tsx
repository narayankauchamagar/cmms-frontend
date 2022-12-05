import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import { formatSelect, formatSelectMultiple } from '../../../utils/formatters';
import { useDispatch } from '../../../store';
import { createWorkOrderMeterTrigger } from '../../../slices/workOrderMeterTrigger';
import { getWOBaseFields } from '../../../utils/fields';
import Meter from '../../../models/owns/meter';

interface AddTriggerProps {
  open: boolean;
  onClose: () => void;
  meter: Meter;
}
export default function AddTriggerModal({
  open,
  onClose,
  meter
}: AddTriggerProps) {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const fields: Array<IField> = [
    {
      name: 'name',
      type: 'text',
      label: t('Trigger Name'),
      required: true
    },
    {
      name: 'triggerCondition',
      type: 'select',
      label: t('When Meter Reading is'),
      items: [
        { label: 'Greater than', value: 'MORE_THAN' },
        { label: 'Lower than', value: 'LESS_THAN' }
      ],
      midWidth: true,
      required: true
    },
    {
      name: 'value',
      type: 'number',
      label: t('Value') + '(' + meter.unit + ')',
      midWidth: true,
      required: true
    },
    {
      name: 'workOrderConfig',
      type: 'titleGroupField',
      label: t('Work Order Configuration')
    },
    ...getWOBaseFields(t)
  ];
  const shape = {
    name: Yup.string().required(t('The trigger name is required')),
    title: Yup.string().required(t('The Work Order title is required')),
    value: Yup.number().required(t('The value is required')),
    triggerCondition: Yup.object().required(t('The condition is required'))
  };
  const formatValues = (values) => {
    values.primaryUser = formatSelect(values.primaryUser);
    values.location = formatSelect(values.location);
    values.team = formatSelect(values.team);
    values.asset = formatSelect(values.asset);
    values.assignedTo = formatSelectMultiple(values.assignedTo);
    values.priority = values.priority?.value;
    values.triggerCondition = values.triggerCondition.value;
    return values;
  };
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add Work Order Trigger')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a Work Order Trigger')}
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
          values={{ dueDate: null }}
          onChange={({ field, e }) => {}}
          onSubmit={async (values) => {
            const formattedValues = formatValues(values);
            return dispatch(
              createWorkOrderMeterTrigger(meter.id, formattedValues)
            ).then(() => onClose());
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

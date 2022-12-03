import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import { formatSelect } from '../../../utils/formatters';
import { useDispatch } from '../../../store';
import { createAdditionalCost } from '../../../slices/additionalCost';
import useAuth from '../../../hooks/useAuth';
import FeatureErrorMessage from '../components/FeatureErrorMessage';
import { PlanFeature } from '../../../models/owns/subscriptionPlan';

interface AddCostProps {
  open: boolean;
  onClose: () => void;
  workOrderId: number;
}
export default function AddCostModal({
  open,
  onClose,
  workOrderId
}: AddCostProps) {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const { hasFeature } = useAuth();
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
      label: t('Date'),
      midWidth: true
    },
    {
      name: 'cost',
      type: 'number',
      label: t('Cost'),
      midWidth: true
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
    cost: Yup.number().required(t('Cost is required'))
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
        {hasFeature(PlanFeature.ADDITIONAL_COST) ? (
          <Form
            fields={fields}
            validation={Yup.object().shape(shape)}
            submitText={t('Add')}
            values={{ includeToTotalCost: true }}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              const formattedValues = { ...values };
              formattedValues.assignedTo = formatSelect(
                formattedValues.assignedTo
              );
              formattedValues.category = formatSelect(formattedValues.category);
              return dispatch(
                createAdditionalCost(workOrderId, formattedValues)
              ).finally(() => onClose());
            }}
          />
        ) : (
          <FeatureErrorMessage message="Upgrade to add Itemized cost tracking to your Work Orders. " />
        )}
      </DialogContent>
    </Dialog>
  );
}

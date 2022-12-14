import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField } from '../type';
import { formatSelect, formatSelectMultiple } from '../../../utils/formatters';
import { useDispatch } from '../../../store';
import { editWorkOrderMeterTrigger } from '../../../slices/workOrderMeterTrigger';
import { getWOBaseFields, getWOBaseValues } from '../../../utils/fields';
import Meter from '../../../models/owns/meter';
import WorkOrderMeterTrigger from '../../../models/owns/workOrderMeterTrigger';
import { useContext } from 'react';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';
import { getImageAndFiles } from '../../../utils/overall';

interface EditTriggerProps {
  open: boolean;
  onClose: () => void;
  meter: Meter;
  workOrderMeterTrigger: WorkOrderMeterTrigger;
}
export default function EditTriggerModal({
  open,
  onClose,
  meter,
  workOrderMeterTrigger
}: EditTriggerProps) {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { uploadFiles } = useContext(CompanySettingsContext);
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
  const onEditSuccess = () => {
    onClose();
    showSnackBar(
      t('The Work Order trigger has been updated successfully'),
      'success'
    );
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The Work Order trigger couldn't be updated"), 'error');

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
          {t('Edit Work Order Trigger')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to edit the Work Order Trigger')}
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
          submitText={t('Save')}
          values={{
            ...workOrderMeterTrigger,
            triggerCondition: {
              label: t(workOrderMeterTrigger?.triggerCondition),
              value: workOrderMeterTrigger?.triggerCondition
            },
            ...getWOBaseValues(t, workOrderMeterTrigger)
          }}
          onChange={({ field, e }) => {}}
          onSubmit={async (values) => {
            let formattedValues = formatValues(values);
            const files = formattedValues.files.find((file) => file.id)
              ? []
              : formattedValues.files;
            return new Promise<void>((resolve, rej) => {
              uploadFiles(files, formattedValues.image)
                .then((files) => {
                  const imageAndFiles = getImageAndFiles(
                    files,
                    workOrderMeterTrigger.image
                  );
                  formattedValues = {
                    ...formattedValues,
                    image: imageAndFiles.image,
                    files: [
                      ...workOrderMeterTrigger.files,
                      ...imageAndFiles.files
                    ]
                  };
                  dispatch(
                    editWorkOrderMeterTrigger(
                      meter.id,
                      workOrderMeterTrigger.id,
                      formattedValues
                    )
                  )
                    .then(() => {
                      onEditSuccess();
                      resolve();
                    })
                    .catch((err) => {
                      onEditFailure(err);
                      rej();
                    });
                })
                .catch((err) => {
                  onEditFailure(err);
                  rej();
                });
            });
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

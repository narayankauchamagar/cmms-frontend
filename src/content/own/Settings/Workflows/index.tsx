import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import { Checklist } from '../../../../models/owns/checklists';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../../../store';
import { CustomSnackBarContext } from '../../../../contexts/CustomSnackBarContext';
import { deleteChecklist } from '../../../../slices/checklist';
import ConfirmDialog from '../../components/ConfirmDialog';
import useAuth from '../../../../hooks/useAuth';
import { PlanFeature } from '../../../../models/owns/subscriptionPlan';
import FeatureErrorMessage from '../../components/FeatureErrorMessage';
import { getWorkflows } from '../../../../slices/workflow';
import {
  mainConditions,
  partActions,
  partConditions,
  purchaseOrderActions,
  purchaseOrderConditions,
  requestActions,
  requestConditions,
  taskActions,
  taskConditions,
  WFMainCondition,
  WorkflowActionType,
  WorkflowCondition,
  WorkflowConditionType,
  workOrderActions,
  workOrderConditions
} from '../../../../models/owns/workflow';

function Workflows() {
  const { t }: { t: any } = useTranslation();
  const [openCreateChecklist, setOpenCreateChecklist] = useState(false);
  const [openEditChecklist, setOpenEditChecklist] = useState(false);
  const [view, setView] = useState<'list' | 'create' | 'update'>('list');
  const [currentChecklist, setCurrentChecklist] = useState<Checklist>();
  const [currentMainCondition, setCurrentMainCondition] =
    useState<WFMainCondition>(mainConditions[0]);
  interface UICondition {
    conditionType: WorkflowConditionType;
    value: string | number;
    values?: string | number[];
  }
  const [currentConditions, setCurrentConditions] = useState<UICondition[]>([]);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { hasFeature } = useAuth();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { companySettingsId } = user;
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { workflows } = useSelector((state) => state.workflows);
  type FieldType = 'text' | 'number' | 'select' | 'date' | 'dateRange';
  interface ConditionField {
    type: FieldType;
    items?: { label: string; value: number }[];
    accessor: keyof WorkflowCondition;
    accessors?: (keyof WorkflowCondition)[];
    formatter?: (value: string | number) => { id: number } | string | number;
  }
  const conditionsConfig: Record<WorkflowConditionType, ConditionField> = {
    ASSET_IS: { type: 'select', items: [], accessor: 'asset' },
    CATEGORY_IS: {
      type: 'text',
      accessor: currentMainCondition.startsWith('WORK_ORDER')
        ? 'workOrderCategory'
        : 'purchaseOrderCategory'
    },
    CREATED_AT_BETWEEN: {
      type: 'dateRange',
      accessor: null,
      accessors: ['startDate', 'endDate']
    },
    DUE_DATE_AFTER: { type: 'date', accessor: 'endDate' },
    DUE_DATE_BETWEEN: {
      type: 'dateRange',
      accessor: null,
      accessors: ['startDate', 'endDate']
    },
    LOCATION_IS: { type: 'select', items: [], accessor: 'location' },
    NAME_CONTAINS: { type: 'text', accessor: 'label' },
    NAME_IS: { type: 'text', accessor: 'label' },
    NUMBER_VALUE_INFERIOR: { type: 'number', accessor: 'numberValue' },
    NUMBER_VALUE_SUPERIOR: { type: 'number', accessor: 'numberValue' },
    PART_IS: { type: 'select', items: [], accessor: 'part' },
    PRIORITY_IS: { type: 'select', items: [], accessor: 'priority' },
    QUANTITY_INFERIOR: { type: 'number', accessor: 'numberValue' },
    STATUS_IS: { type: 'select', items: [], accessor: 'priority' },
    TEAM_IS: { type: 'select', items: [], accessor: 'team' },
    TITLE_CONTAINS: { type: 'text', accessor: 'value' },
    USER_IS: { type: 'select', items: [], accessor: 'user' },
    VALUE_CONTAINS: { type: 'text', accessor: 'value' },
    VALUE_IS: { type: 'text', accessor: 'value' },
    VENDOR_IS: { type: 'select', items: [], accessor: 'vendor' }
  };
  // @ts-ignore
  const mainConditionsConfig: Record<
    WFMainCondition,
    {
      conditions: WorkflowConditionType[];
      actions: WorkflowActionType[];
    }
  > = {
    WORK_ORDER_CREATED: {
      conditions: workOrderConditions,
      actions: workOrderActions
    },
    WORK_ORDER_CLOSED: {
      conditions: workOrderConditions,
      actions: workOrderActions
    },
    WORK_ORDER_ARCHIVED: {
      conditions: workOrderConditions,
      actions: workOrderActions
    },
    REQUEST_CREATED: {
      conditions: requestConditions,
      actions: requestActions
    },
    REQUEST_APPROVED: {
      conditions: requestConditions,
      actions: requestActions
    },
    REQUEST_REJECTED: {
      conditions: workOrderConditions,
      actions: requestActions
    },
    PURCHASE_ORDER_CREATED: {
      conditions: purchaseOrderConditions,
      actions: purchaseOrderActions
    },
    PURCHASE_ORDER_UPDATED: {
      conditions: purchaseOrderConditions,
      actions: purchaseOrderActions
    },
    TASK_UPDATED: {
      conditions: taskConditions,
      actions: taskActions
    },
    PART_UPDATED: {
      conditions: partConditions,
      actions: partActions
    }
  } as const;
  useEffect(() => {
    if (hasFeature(PlanFeature.CHECKLIST)) dispatch(getWorkflows());
  }, []);
  const onDeleteSuccess = () => {
    showSnackBar(t('checklist_delete_success'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t('checklist_delete_failure'), 'error');

  const handleDelete = (id: number) => {
    dispatch(deleteChecklist(id)).then(onDeleteSuccess).catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const handleConditionTypeChange = (
    value: WorkflowConditionType,
    index: number
  ) => {
    const newConditions = [...currentConditions];
    newConditions[index].conditionType = value;
    setCurrentConditions(newConditions);
  };
  const handleConditionValueChange = (
    value: string | number,
    index: number
  ) => {
    const newConditions = [...currentConditions];
    newConditions[index].value = value;
    setCurrentConditions(newConditions);
  };
  const onNewCondition = () => {
    setCurrentConditions((conditions) => [
      ...conditions,
      {
        conditionType: mainConditionsConfig[currentMainCondition].conditions[0],
        value: null
      }
    ]);
  };
  const renderSingleCondition = (condition: UICondition, index: number) => {
    const config = conditionsConfig[condition.conditionType];
    return (
      <Box>
        <Select
          value={condition.conditionType}
          onChange={(event) =>
            handleConditionTypeChange(
              event.target.value as WorkflowConditionType,
              index
            )
          }
        >
          {mainConditionsConfig[currentMainCondition].conditions.map(
            (condition, index) => (
              <MenuItem key={index} value={condition}>
                {t(condition)}
              </MenuItem>
            )
          )}
        </Select>
        <Box sx={{ mt: 1 }}>
          {['text', 'number'].includes(config.type) && (
            <TextField
              value={condition.value}
              onChange={(event) =>
                handleConditionValueChange(event.target.value, index)
              }
              type={config.type}
            />
          )}
        </Box>
      </Box>
    );
  };
  return (
    <SettingsLayout tabIndex={5}>
      {hasFeature(PlanFeature.CHECKLIST) ? (
        <Box
          sx={{
            p: 4
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">{t('workflow_description')}</Typography>
            </Grid>
            <Grid item xs={12}>
              {view === 'list' && (
                <Button
                  sx={{
                    mb: 2
                  }}
                  variant="contained"
                  onClick={() => setView('create')}
                  startIcon={<AddTwoToneIcon fontSize="small" />}
                >
                  {t('create_workflow')}
                </Button>
              )}
              {view === 'create' && (
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="h6">{t('if')}</Typography>
                    <Select
                      value={currentMainCondition}
                      onChange={(event) => {
                        setCurrentMainCondition(
                          event.target.value as WFMainCondition
                        );
                        setCurrentConditions([]);
                      }}
                    >
                      {mainConditions.map((mainCondition, index) => (
                        <MenuItem key={index} value={mainCondition}>
                          {t(mainCondition)}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6">{t('and_optional')}</Typography>
                    <Stack direction="column" spacing={2}>
                      {currentConditions.map((condition, index) =>
                        renderSingleCondition(condition, index)
                      )}
                      <Button
                        onClick={onNewCondition}
                        color="success"
                        variant="outlined"
                      >
                        {t('add_condition')}
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6">{t('then')}</Typography>
                    <Select>
                      {mainConditionsConfig[currentMainCondition].actions.map(
                        (action, index) => (
                          <MenuItem key={index} value={action}>
                            {t(action)}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        onClick={() => setView('list')}
                      >
                        {t('cancel')}
                      </Button>
                      <Button variant="contained">{t('save')}</Button>
                    </Stack>
                  </Grid>
                </Grid>
              )}
            </Grid>

            <ConfirmDialog
              open={openDelete}
              onCancel={() => {
                setOpenDelete(false);
              }}
              onConfirm={() => handleDelete(currentChecklist?.id)}
              confirmText={t('to_delete')}
              question={t('confirm_delete_checklist')}
            />
          </Grid>
        </Box>
      ) : (
        <FeatureErrorMessage message="upgrade_checklist" />
      )}
    </SettingsLayout>
  );
}

export default Workflows;

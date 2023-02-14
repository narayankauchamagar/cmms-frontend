import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
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
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { hasFeature } = useAuth();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { companySettingsId } = user;
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { workflows } = useSelector((state) => state.workflows);

  // @ts-ignore
  const config: Record<
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
                    <Select>
                      {config[currentMainCondition].conditions.map(
                        (condition, index) => (
                          <MenuItem key={index} value={condition}>
                            {t(condition)}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6">{t('then')}</Typography>
                    <Select>
                      {config[currentMainCondition].actions.map(
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

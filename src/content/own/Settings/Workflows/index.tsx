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
import { getVendorsMini } from '../../../../slices/vendor';
import { getUsersMini } from '../../../../slices/user';
import { getLocationsMini } from '../../../../slices/location';
import { getCategories } from '../../../../slices/category';
import { getAssetsMini } from '../../../../slices/asset';
import { getTeamsMini } from '../../../../slices/team';
import { getCurrencies } from '../../../../slices/currency';
import { AssetMiniDTO } from '../../../../models/owns/asset';
import { LocationMiniDTO } from '../../../../models/owns/location';
import { PartMiniDTO } from '../../../../models/owns/part';
import { getPartsMini } from '../../../../slices/part';
import { UserMiniDTO } from '../../../../models/user';
import { VendorMiniDTO } from '../../../../models/owns/vendor';
import { TeamMiniDTO } from '../../../../models/owns/team';
import Category from '../../../../models/owns/category';

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
  const { vendorsMini } = useSelector((state) => state.vendors);
  const { locationsMini, locationsHierarchy } = useSelector(
    (state) => state.locations
  );
  const { categories } = useSelector((state) => state.categories);
  const { usersMini } = useSelector((state) => state.users);
  const { assetsMini } = useSelector((state) => state.assets);
  const { teamsMini } = useSelector((state) => state.teams);
  const { currencies } = useSelector((state) => state.currencies);
  const { partsMini } = useSelector((state) => state.parts);

  const fetchVendors = async () => {
    if (!vendorsMini.length) dispatch(getVendorsMini());
  };
  const fetchParts = async () => {
    if (!partsMini.length) dispatch(getPartsMini());
  };
  const fetchUsers = async () => {
    if (!usersMini.length) dispatch(getUsersMini());
  };
  const fetchLocations = async () => {
    if (!locationsMini.length) dispatch(getLocationsMini());
  };
  const fetchCategories = async (category: string) => {
    if (!categories[category]) dispatch(getCategories(category));
  };
  const fetchAssets = async () => {
    if (!assetsMini.length) dispatch(getAssetsMini());
  };
  const fetchTeams = async () => {
    if (!teamsMini.length) dispatch(getTeamsMini());
  };
  const fetchCurrencies = async () => {
    if (!currencies.length) dispatch(getCurrencies());
  };
  type FieldType = 'text' | 'number' | 'select' | 'date' | 'dateRange';

  interface ConditionField<T> {
    type: FieldType;
    items?: T[];
    accessor: keyof WorkflowCondition;
    accessors?: (keyof WorkflowCondition)[];
    formatter?: (value: T) => { label: string; value: string | number };
    onOpen?: () => void;
  }

  const conditionsConfig: Record<
    WorkflowConditionType,
    ConditionField<
      | AssetMiniDTO
      | LocationMiniDTO
      | PartMiniDTO
      | string
      | UserMiniDTO
      | VendorMiniDTO
      | TeamMiniDTO
      | Category
    >
  > = {
    ASSET_IS: {
      type: 'select',
      items: assetsMini,
      accessor: 'asset',
      onOpen: fetchAssets,
      formatter: (asset: AssetMiniDTO) => ({
        label: asset.name,
        value: asset.id
      })
    },
    CATEGORY_IS: {
      type: 'select',
      accessor: currentMainCondition.startsWith('WORK_ORDER')
        ? 'workOrderCategory'
        : 'purchaseOrderCategory',
      items:
        categories[
          currentMainCondition.startsWith('WORK_ORDER')
            ? 'work-order-categories'
            : 'purchase-order-categories'
        ] ?? [],
      onOpen: () =>
        fetchCategories(
          currentMainCondition.startsWith('WORK_ORDER')
            ? 'work-order-categories'
            : 'purchase-order-categories'
        ),
      formatter: (category: Category) => ({
        label: category.name,
        value: category.id
      })
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
    LOCATION_IS: {
      type: 'select',
      items: locationsMini,
      accessor: 'location',
      onOpen: fetchLocations,
      formatter: (location: LocationMiniDTO) => ({
        label: location.name,
        value: location.id
      })
    },
    NAME_CONTAINS: { type: 'text', accessor: 'label' },
    NAME_IS: { type: 'text', accessor: 'label' },
    NUMBER_VALUE_INFERIOR: { type: 'number', accessor: 'numberValue' },
    NUMBER_VALUE_SUPERIOR: { type: 'number', accessor: 'numberValue' },
    PART_IS: {
      type: 'select',
      items: partsMini,
      accessor: 'part',
      onOpen: fetchParts,
      formatter: (part: PartMiniDTO) => ({ label: part.name, value: part.id })
    },
    PRIORITY_IS: {
      type: 'select',
      items: ['NONE', 'LOW', 'MEDIUM', 'HIGH'],
      accessor: 'priority',
      formatter: (priority: string) => ({ label: t(priority), value: priority })
    },
    QUANTITY_INFERIOR: { type: 'number', accessor: 'numberValue' },
    STATUS_IS: {
      type: 'select',
      items: ['OPEN', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETE'],
      accessor: 'workOrderStatus',
      formatter: (status: string) => ({ label: t(status), value: status })
    },
    TEAM_IS: {
      type: 'select',
      items: teamsMini,
      accessor: 'team',
      onOpen: fetchTeams,
      formatter: (team: TeamMiniDTO) => ({ label: team.name, value: team.id })
    },
    TITLE_CONTAINS: { type: 'text', accessor: 'value' },
    USER_IS: {
      type: 'select',
      items: usersMini,
      accessor: 'user',
      onOpen: fetchUsers,
      formatter: (user: UserMiniDTO) => ({
        label: `${user.firstName} ${user.lastName}`,
        value: user.id
      })
    },
    VALUE_CONTAINS: { type: 'text', accessor: 'value' },
    VALUE_IS: { type: 'text', accessor: 'value' },
    VENDOR_IS: {
      type: 'select',
      items: vendorsMini,
      accessor: 'vendor',
      onOpen: fetchVendors,
      formatter: (vendor: VendorMiniDTO) => ({
        label: vendor.companyName,
        value: vendor.id
      })
    }
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
          {['text', 'number'].includes(config.type) ? (
            <TextField
              value={condition.value}
              onChange={(event) =>
                handleConditionValueChange(event.target.value, index)
              }
              type={config.type}
            />
          ) : config.type === 'select' ? (
            <Select
              value={condition.value}
              onChange={(event) =>
                handleConditionValueChange(event.target.value, index)
              }
              onOpen={config.onOpen}
            >
              {config.items.map((item, index) => (
                <MenuItem key={index} value={config.formatter(item).value}>
                  {config.formatter(item).label}
                </MenuItem>
              ))}
            </Select>
          ) : null}
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

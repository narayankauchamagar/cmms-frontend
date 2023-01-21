import { Box, Button, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import CustomDataGrid from '../../components/CustomDatagrid';
import { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import {
  GridActionsCellItem,
  GridRenderCellParams,
  GridRowParams,
  GridToolbar,
  GridValueGetterParams
} from '@mui/x-data-grid';
import { Checklist } from '../../../../models/owns/checklists';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import SelectTasksModal from '../../components/form/SelectTasks';
import { useContext, useEffect, useState } from 'react';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useDispatch, useSelector } from '../../../../store';
import { CustomSnackBarContext } from '../../../../contexts/CustomSnackBarContext';
import {
  addChecklist,
  deleteChecklist,
  editChecklist,
  getChecklists
} from '../../../../slices/checklist';
import ConfirmDialog from '../../components/ConfirmDialog';
import { getTaskFromTaskBase } from '../../../../utils/formatters';
import useAuth from '../../../../hooks/useAuth';
import { PlanFeature } from '../../../../models/owns/subscriptionPlan';
import FeatureErrorMessage from '../../components/FeatureErrorMessage';

function Checklists() {
  const { t }: { t: any } = useTranslation();
  const [openCreateChecklist, setOpenCreateChecklist] = useState(false);
  const [openEditChecklist, setOpenEditChecklist] = useState(false);
  const [currentChecklist, setCurrentChecklist] = useState<Checklist>();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { hasFeature } = useAuth();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { companySettingsId } = user;
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { checklists } = useSelector((state) => state.checklists);

  useEffect(() => {
    if (hasFeature(PlanFeature.CHECKLIST)) dispatch(getChecklists());
  }, []);
  const onDeleteSuccess = () => {
    showSnackBar(t('The Checklist has been deleted successfully'), 'success');
  };
  const onDeleteFailure = (err) =>
    showSnackBar(t("The Checklist couldn't be deleted"), 'error');

  const handleDelete = (id: number) => {
    dispatch(deleteChecklist(id)).then(onDeleteSuccess).catch(onDeleteFailure);
    setOpenDelete(false);
  };
  const columns: GridEnrichedColDef[] = [
    {
      field: 'name',
      headerName: t('name'),
      description: t('name'),
      width: 150,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ fontWeight: 'bold' }}>{params.value}</Box>
      )
    },
    {
      field: 'description',
      headerName: t('Description'),
      description: t('Description'),
      width: 150
    },
    {
      field: 'category',
      headerName: t('Category'),
      description: t('Category'),
      width: 150
    },
    {
      field: 'tasks',
      headerName: t('Tasks'),
      description: t('Tasks'),
      valueGetter: (params: GridValueGetterParams<null, Checklist>) =>
        params.row.taskBases.length,
      width: 150
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: t('actions'),
      description: t('actions'),
      getActions: (params: GridRowParams<Checklist>) => [
        <GridActionsCellItem
          key="delete"
          icon={<DeleteTwoToneIcon fontSize="small" color="error" />}
          onClick={() => {
            setCurrentChecklist(params.row);
            setOpenDelete(true);
          }}
          label="Remove Checklist"
        />
      ]
    }
  ];
  return (
    <SettingsLayout tabIndex={4}>
      {hasFeature(PlanFeature.CHECKLIST) ? (
        <>
          <Grid item xs={12}>
            <Box
              sx={{
                height: 600,
                width: '95%',
                p: 4
              }}
            >
              <Button
                sx={{
                  mb: 2
                }}
                variant="contained"
                onClick={() => setOpenCreateChecklist(true)}
                startIcon={<AddTwoToneIcon fontSize="small" />}
              >
                {t('Create Checklist')}
              </Button>
              <CustomDataGrid
                columns={columns}
                rows={checklists}
                components={{
                  Toolbar: GridToolbar
                }}
                onRowClick={(params: GridRowParams<Checklist>) => {
                  setCurrentChecklist(params.row);
                  setOpenEditChecklist(true);
                }}
                initialState={{
                  columns: {
                    columnVisibilityModel: {}
                  }
                }}
              />
            </Box>
          </Grid>
          <SelectTasksModal
            open={openCreateChecklist}
            onClose={() => setOpenCreateChecklist(false)}
            selected={[]}
            onSelect={(tasks, infos): Promise<void> => {
              return new Promise<void>((res, rej) => {
                dispatch(
                  addChecklist(
                    {
                      ...infos,
                      taskBases: tasks.map((task) => {
                        return {
                          ...task.taskBase,
                          options: task.taskBase.options.map(
                            (option) => option.label
                          )
                        };
                      })
                    },
                    companySettingsId
                  )
                ).finally(res);
              });
            }}
            action="createChecklist"
          />
          <SelectTasksModal
            open={openEditChecklist}
            onClose={() => setOpenEditChecklist(false)}
            selected={
              currentChecklist?.taskBases.map((taskBase) =>
                getTaskFromTaskBase(taskBase)
              ) ?? []
            }
            onSelect={(tasks, infos) => {
              return new Promise<void>((res, rej) => {
                dispatch(
                  editChecklist(currentChecklist.id, {
                    ...infos,
                    taskBases: tasks.map((task) => {
                      return {
                        ...task.taskBase,
                        options: task.taskBase.options.map(
                          (option) => option.label
                        )
                      };
                    })
                  })
                ).finally(res);
              });
            }}
            action="editChecklist"
            infos={{
              name: currentChecklist?.name,
              description: currentChecklist?.description,
              category: currentChecklist?.category
            }}
          />
          <ConfirmDialog
            open={openDelete}
            onCancel={() => {
              setOpenDelete(false);
            }}
            onConfirm={() => handleDelete(currentChecklist?.id)}
            confirmText={t('to_delete')}
            question={t('Are you sure you want to delete this Checklist?')}
          />
        </>
      ) : (
        <FeatureErrorMessage message="Please Upgrade to use Checklists" />
      )}
    </SettingsLayout>
  );
}

export default Checklists;

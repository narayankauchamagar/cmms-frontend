import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Tab,
  Tabs,
  Typography,
  Zoom
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropResult } from 'react-beautiful-dnd';
import { reorder } from '../../../../../utils/items';
import { Task, TaskType } from '../../../../../models/owns/tasks';
import DraggableTaskList from './DraggableTaskList';
import { randomInt } from '../../../../../utils/generators';
import SingleTask from './SingleTask';
import { useSnackbar } from 'notistack';

interface SelectTasksProps {}
export default function SelectTasks({}: SelectTasksProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { t }: { t: any } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [currentTab, setCurrentTab] = useState<string>('edit');
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const [tasks, setTasks] = useState<Task[]>([]);
  const onLabelChange = (value: string, id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, label: value };
      }
      return task;
    });
    setTasks(newTasks);
  };
  const onTypeChange = (value: TaskType, id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, type: value };
      }
      return task;
    });
    setTasks(newTasks);
  };
  const onUserChange = (user: number, id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, user };
      }
      return task;
    });
    setTasks(newTasks);
  };
  const onAssetChange = (asset: number, id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, asset };
      }
      return task;
    });
    setTasks(newTasks);
  };
  const onChoicesChange = (choices: string[], id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, options: choices };
      }
      return task;
    });
    console.log(newTasks);
    setTasks(newTasks);
  };
  const onSave = () => {
    if (tasks.some((task) => !task.label)) {
      enqueueSnackbar(t('Remove blank tasks'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
      });
    }
  };

  const onRemove = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  const tabs = [
    { value: 'edit', label: t('Edit') },
    { value: 'preview', label: t('Preview') }
  ];
  const onClose = () => setOpenModal(false);
  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: randomInt(),
        label: '',
        type: 'subtask',
        notes: ''
      }
    ]);
  };
  const onDragEnd = ({ destination, source }: DropResult) => {
    // dropped outside the list
    if (!destination) return;
    const newTasks = reorder(tasks, source.index, destination.index);
    setTasks(newTasks);
  };
  return (
    <Box>
      <Dialog fullWidth maxWidth="sm" open={openModal} onClose={onClose}>
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('Add Tasks')}
          </Typography>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            p: 3
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Tabs
              sx={{ mb: 2 }}
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
            <Box>
              <Button onClick={addTask} startIcon={<AddTwoToneIcon />}>
                Task
              </Button>
              <Button startIcon={<AddTwoToneIcon />}>Checklist</Button>
            </Box>
          </Box>
          {currentTab === 'edit' && (
            <Box>
              <DraggableTaskList
                tasks={tasks}
                onDragEnd={onDragEnd}
                onLabelChange={onLabelChange}
                onTypeChange={onTypeChange}
                onRemove={onRemove}
                onUserChange={onUserChange}
                onAssetChange={onAssetChange}
                onChoicesChange={onChoicesChange}
              />
            </Box>
          )}
          {currentTab === 'preview' && (
            <Box sx={{ p: 2 }}>
              {tasks.map((task) => (
                <SingleTask preview task={task} key={task.id} />
              ))}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            {t('Cancel')}
          </Button>
          <Button disabled={!tasks.length} onClick={onSave} variant="contained">
            Add tasks
          </Button>
        </DialogActions>
      </Dialog>

      <Button startIcon={<AddTwoToneIcon />} onClick={() => setOpenModal(true)}>
        Add Tasks
      </Button>
    </Box>
  );
}

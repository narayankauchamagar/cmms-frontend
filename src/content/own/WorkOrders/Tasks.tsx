import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import { useContext, useEffect, useState } from 'react';
import SingleTask from '../components/form/SelectTasks/SingleTask';
import { Task } from '../../../models/owns/tasks';
import { patchTask } from '../../../slices/task';
import { useDispatch } from '../../../store';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';

interface TasksProps {
  tasksProps: Task[];
  workOrderId: number;
}

export default function Tasks({ tasksProps, workOrderId }: TasksProps) {
  const { t }: { t: any } = useTranslation();
  const [notes, setNotes] = useState<Map<number, boolean>>(new Map());
  const [tasks, setTasks] = useState<Task[]>(tasksProps);
  const dispatch = useDispatch();
  const { showSnackBar } = useContext(CustomSnackBarContext);

  useEffect(() => setTasks(tasksProps), [tasksProps]);

  function handleChange(value: string | number, id: number) {
    const task = tasks.find((task) => task.id === id);
    dispatch(patchTask(workOrderId, id, { ...task, value }))
      .then(() => showSnackBar(t('Task updated successfully'), 'success'))
      .catch(() => showSnackBar(t("Task couldn't be updated"), 'error'));

    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, value };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleNoteChange(value: string, id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, notes: value };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function toggleNotes(id: number) {
    const newNotes = new Map(notes);
    newNotes.set(id, !newNotes.get(id));
    setNotes(newNotes);
  }

  function handleSaveNotes(value: string, id: number) {
    const task = tasks.find((task) => task.id === id);
    return dispatch(patchTask(workOrderId, id, { ...task, notes: value })).then(
      () => showSnackBar(t('Notes saved successfully'), 'success')
    );
  }
  return (
    <Card>
      <CardHeader title={t('Tasks')} avatar={<TaskAltTwoToneIcon />} />
      <Divider />
      <CardContent>
        <FormControl fullWidth>
          {tasks.map((task) => (
            <SingleTask
              key={task.id}
              task={task}
              handleChange={handleChange}
              handleNoteChange={handleNoteChange}
              handleSaveNotes={handleSaveNotes}
              toggleNotes={toggleNotes}
              notes={notes}
            />
          ))}
        </FormControl>
      </CardContent>
    </Card>
  );
}

import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  Collapse
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import NoteTwoToneIcon from '@mui/icons-material/NoteTwoTone';
import { useEffect, useState } from 'react';
import Field from '../components/form/Field';

interface TasksProps {}
export default function Tasks({}: TasksProps) {
  const { t }: { t: any } = useTranslation();
  const [notes, setNotes] = useState<Map<number, boolean>>(new Map());
  const defaultTasks = [
    {
      id: 74,
      label: 'Clean air filter & check its condition',
      type: 'basic',
      status: 'OPEN',
      notes: ''
    },
    { id: 75, label: 'Clean', type: 'basic', status: 'OPEN', notes: '' }
  ];
  const [tasks, setTasks] = useState(defaultTasks);
  const basicOptions = [
    { label: t('Open'), value: 'OPEN' },
    { label: t('In Progress'), value: 'IN_PROGRESS' },
    { label: t('On Hold'), value: 'ON_HOLD' },
    { label: t('Complete'), value: 'COMPLETE' }
  ];

  function handleChange(value: string, id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: value };
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

  return (
    <Card>
      <CardHeader title={t('Tasks')} avatar={<TaskAltTwoToneIcon />} />
      <Divider />
      <CardContent>
        <FormControl fullWidth>
          {tasks.map((task) => (
            <Box key={task.id} sx={{ mt: 1 }}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {task.label}
                  </Typography>
                  <Select
                    value={task.status}
                    onChange={(event) =>
                      handleChange(event.target.value, task.id)
                    }
                  >
                    {task.type === 'basic'
                      ? basicOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                </Box>
                <IconButton onClick={() => toggleNotes(task.id)}>
                  <NoteTwoToneIcon />
                </IconButton>
              </Box>
              <Collapse in={notes.get(task.id)}>
                <Box sx={{ p: 1 }}>
                  <Field
                    multiple={true}
                    onChange={(event) =>
                      handleNoteChange(event.target.value, task.id)
                    }
                    value={task.notes}
                    label={t('Notes')}
                    type={'text'}
                  />
                </Box>
              </Collapse>
              <Divider sx={{ mt: 1 }} />
            </Box>
          ))}
        </FormControl>
      </CardContent>
    </Card>
  );
}

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import NoteTwoToneIcon from '@mui/icons-material/NoteTwoTone';
import { useState } from 'react';
import Field from '../components/form/Field';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import { Task } from '../../../models/owns/tasks';

interface TasksProps {}

export default function Tasks({}: TasksProps) {
  const { t }: { t: any } = useTranslation();
  const [notes, setNotes] = useState<Map<number, boolean>>(new Map());
  const defaultTasks: Task[] = [
    {
      id: 74,
      label: 'Clean air filter & check its condition',
      type: 'basic',
      value: 'OPEN',
      notes: ''
    },
    { id: 75, label: 'Clean', type: 'basic', value: 'OPEN', notes: '' },
    {
      id: 77,
      label: 'Clean air filter & check its condition',
      type: 'number',
      value: 0,
      notes: ''
    }
  ];
  const [tasks, setTasks] = useState(defaultTasks);
  const theme = useTheme();
  const basicOptions = [
    { label: t('Open'), value: 'OPEN' },
    { label: t('In Progress'), value: 'IN_PROGRESS' },
    { label: t('On Hold'), value: 'ON_HOLD' },
    { label: t('Complete'), value: 'COMPLETE' }
  ];

  function handleChange(value: string | number, id: number) {
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

  return (
    <Card>
      <CardHeader title={t('Tasks')} avatar={<TaskAltTwoToneIcon />} />
      <Divider />
      <CardContent>
        <FormControl fullWidth>
          {tasks.map((task) => (
            <Box
              key={task.id}
              sx={{
                mt: 1,
                p: 2,
                backgroundColor: theme.colors.alpha.black[5]
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {task.label}
                  </Typography>
                  {['basic'].includes(task.type) ? (
                    <Select
                      value={task.value}
                      onChange={(event) =>
                        handleChange(event.target.value, task.id)
                      }
                      sx={{ backgroundColor: 'white' }}
                    >
                      {task.type === 'basic'
                        ? basicOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))
                        : null}
                    </Select>
                  ) : (
                    <Box sx={{ backgroundColor: 'white' }}>
                      <Field
                        onChange={(event) =>
                          handleChange(event.target.value, task.id)
                        }
                        value={task.value}
                        label={t('Value')}
                        type={task.type as 'number' | 'text'}
                      />
                    </Box>
                  )}
                </Box>
                <Box>
                  <IconButton onClick={() => toggleNotes(task.id)}>
                    <NoteTwoToneIcon color="primary" />
                  </IconButton>
                  <IconButton>
                    <AttachFileTwoToneIcon color="primary" />
                  </IconButton>
                </Box>
              </Box>
              <Collapse in={notes.get(task.id)}>
                <Box sx={{ p: 1, backgroundColor: 'white' }}>
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
            </Box>
          ))}
        </FormControl>
      </CardContent>
    </Card>
  );
}

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
  SelectChangeEvent
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import { useState } from 'react';

interface TasksProps {}
export default function Tasks({}: TasksProps) {
  const { t }: { t: any } = useTranslation();
  const defaultTasks = [
    {
      id: 74,
      label: 'Clean air filter & check its condition',
      type: 'basic',
      status: 'OPEN'
    },
    { id: 75, label: 'Clean', type: 'basic', status: 'OPEN' }
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

  return (
    <Card>
      <CardHeader title={t('Tasks')} avatar={<TaskAltTwoToneIcon />} />
      <Divider />
      <CardContent>
        <FormControl fullWidth>
          {tasks.map((task) => (
            <Box key={task.id} sx={{ mt: 1 }}>
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
              <Divider sx={{ mt: 1 }} />
            </Box>
          ))}
        </FormControl>
      </CardContent>
    </Card>
  );
}

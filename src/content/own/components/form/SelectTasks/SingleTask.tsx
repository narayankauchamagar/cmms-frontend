import {
  Box,
  Collapse,
  IconButton,
  MenuItem,
  Select,
  Typography,
  useTheme
} from '@mui/material';
import Field from '../Field';
import NoteTwoToneIcon from '@mui/icons-material/NoteTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import { Task, TaskType } from '../../../../../models/owns/tasks';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface SingleTaskProps {
  task: Task;
  preview?: boolean;
  handleChange?: (value: string | number, id: number) => void;
  handleNoteChange?: (value: string, id: number) => void;
  toggleNotes?: (id: number) => void;
  notes?: Map<number, boolean>;
}
export default function SingleTask({
  task,
  handleChange,
  handleNoteChange,
  preview,
  toggleNotes,
  notes
}: SingleTaskProps) {
  const theme = useTheme();
  const { t }: { t: any } = useTranslation();
  const navigate = useNavigate();

  const subtaskOptions = [
    { label: t('Open'), value: 'OPEN' },
    { label: t('In Progress'), value: 'IN_PROGRESS' },
    { label: t('On Hold'), value: 'ON_HOLD' },
    { label: t('Complete'), value: 'COMPLETE' }
  ];
  const inspectionOptions = [
    { label: t('Pass'), value: 'PASS' },
    { label: t('Flag'), value: 'FLAG' },
    { label: t('Fail'), value: 'FAIL' }
  ];

  const getOptions = (type: TaskType, options: string[]) => {
    switch (type) {
      case 'subtask':
        return subtaskOptions;
      case 'inspection':
        return inspectionOptions;
      case 'multiple':
        return options.map((option) => {
          return {
            label: option,
            value: option
          };
        });
      default:
        break;
    }
  };
  return (
    <Box
      key={task.id}
      sx={{
        mt: 1,
        p: 2,
        backgroundColor: theme.colors.alpha.black[5]
      }}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box>
          <Typography variant="h6" fontWeight="bold">
            {task.taskBase.label || `<${t('Enter a task name')}>`}
          </Typography>
          {['subtask', 'inspection', 'multiple'].includes(
            task.taskBase.type
          ) ? (
            <Select
              value={
                preview
                  ? getOptions(task.taskBase.type, task.taskBase.options)[0]
                      .value
                  : task.value
              }
              onChange={(event) =>
                !preview && handleChange(event.target.value, task.id)
              }
              sx={{ backgroundColor: 'white' }}
            >
              {getOptions(task.taskBase.type, task.taskBase.options).map(
                (option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                )
              )}
            </Select>
          ) : (
            <Box sx={{ backgroundColor: 'white' }}>
              <Field
                onChange={(event) =>
                  !preview && handleChange(event.target.value, task.id)
                }
                value={task.value}
                label={t('Value')}
                type={
                  task.taskBase.type === 'meter'
                    ? 'number'
                    : (task.taskBase.type as 'number' | 'text')
                }
              />
            </Box>
          )}
        </Box>
        <Box>
          {task.taskBase.type === 'meter' && (
            <IconButton
              onClick={() =>
                !preview && navigate(`/app/meters/${task.taskBase.meter}`)
              }
            >
              <SpeedTwoToneIcon color="primary" />
            </IconButton>
          )}
          <IconButton onClick={() => !preview && toggleNotes(task.id)}>
            <NoteTwoToneIcon color="primary" />
          </IconButton>
          <IconButton>
            <AttachFileTwoToneIcon color="primary" />
          </IconButton>
        </Box>
      </Box>
      <Collapse in={preview ? false : notes.get(task.id)}>
        <Box sx={{ p: 1, backgroundColor: 'white' }}>
          <Field
            multiple={true}
            onChange={(event) =>
              !preview && handleNoteChange(event.target.value, task.id)
            }
            value={task.notes}
            label={t('Notes')}
            type={'text'}
          />
        </Box>
      </Collapse>
    </Box>
  );
}

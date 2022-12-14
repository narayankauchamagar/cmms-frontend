import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  Grid,
  IconButton,
  Link,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import Field from '../Field';
import NoteTwoToneIcon from '@mui/icons-material/NoteTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import { Task, TaskOption, TaskType } from '../../../../../models/owns/tasks';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { getAssetUrl } from '../../../../../utils/urlPaths';

interface SingleTaskProps {
  task: Task;
  preview?: boolean;
  handleChange?: (value: string | number, id: number) => void;
  handleSaveNotes?: (value: string, id: number) => Promise<void>;
  handleNoteChange?: (value: string, id: number) => void;
  handleSelectImages?: (id: number) => void;
  toggleNotes?: (id: number) => void;
  notes?: Map<number, boolean>;
}
export default function SingleTask({
  task,
  handleChange,
  handleNoteChange,
  handleSaveNotes,
  preview,
  toggleNotes,
  notes,
  handleSelectImages
}: SingleTaskProps) {
  const theme = useTheme();
  const { t }: { t: any } = useTranslation();
  const navigate = useNavigate();
  const [savingNotes, setSavingNotes] = useState<boolean>(false);

  const changeHandler = (event) =>
    !preview && handleChange(event.target.value, task.id);

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 1500),
    []
  );

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

  const getOptions = (type: TaskType, options: TaskOption[]) => {
    switch (type) {
      case 'SUBTASK':
        return subtaskOptions;
      case 'INSPECTION':
        return inspectionOptions;
      case 'MULTIPLE':
        return options
          .map((option) => option.label)
          .map((option) => {
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
          {['SUBTASK', 'INSPECTION', 'MULTIPLE'].includes(
            task.taskBase.taskType
          ) ? (
            <Select
              value={
                preview
                  ? getOptions(task.taskBase.taskType, task.taskBase.options)[0]
                      .value
                  : task.value
              }
              onChange={(event) =>
                !preview && handleChange(event.target.value, task.id)
              }
              sx={{ backgroundColor: 'white' }}
            >
              {getOptions(task.taskBase.taskType, task.taskBase.options).map(
                (option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                )
              )}
            </Select>
          ) : (
            <Box sx={{ backgroundColor: 'white' }}>
              <TextField
                onChange={debouncedChangeHandler}
                defaultValue={task.value}
                label={t('Value')}
                type={
                  task.taskBase.taskType === 'METER'
                    ? 'number'
                    : (task.taskBase.taskType as 'number' | 'text')
                }
              />
            </Box>
          )}
        </Box>
        <Box>
          {task.taskBase.taskType === 'METER' && (
            <IconButton
              onClick={() =>
                !preview && navigate(`/app/meters/${task.taskBase.meter}`)
              }
            >
              <SpeedTwoToneIcon color="primary" />
            </IconButton>
          )}
          <Tooltip arrow placement="top" title={t('Add Notes')}>
            <IconButton onClick={() => !preview && toggleNotes(task.id)}>
              <NoteTwoToneIcon color="primary" />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="top" title={t('Attach Images')}>
            <IconButton onClick={() => !preview && handleSelectImages(task.id)}>
              <AttachFileTwoToneIcon color="primary" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      {task.taskBase.asset && (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ mt: 1 }}
        >
          <Typography variant="h6" fontWeight="bold">
            {t('Concerned Asset')}
          </Typography>
          <Link variant="h6" href={getAssetUrl(task.taskBase.asset.id)}>
            {task.taskBase.asset.name}
          </Link>
        </Box>
      )}
      <Collapse sx={{ mt: 2 }} in={preview ? false : notes.get(task.id)}>
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
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            startIcon={savingNotes ? <CircularProgress size="1rem" /> : null}
            disabled={savingNotes}
            onClick={() => {
              setSavingNotes(true);
              handleSaveNotes(task.notes, task.id).finally(() =>
                setSavingNotes(false)
              );
            }}
          >
            {t('Save')}
          </Button>
        </Box>
        <Grid container spacing={1} sx={{ mt: 2 }}>
          {task.images.map((image) => (
            <Grid item key={image.id}>
              <img
                src={image.url}
                alt={'task'}
                style={{ borderRadius: 5, height: 150, cursor: 'pointer' }}
              />
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </Box>
  );
}

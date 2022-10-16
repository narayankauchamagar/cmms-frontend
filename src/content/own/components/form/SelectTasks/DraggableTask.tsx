import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import {
  Box,
  IconButton,
  ListItem,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import DragIndicatorTwoToneIcon from '@mui/icons-material/DragIndicatorTwoTone';
import { Task, TaskType } from '../../../../../models/owns/tasks';
import { useTranslation } from 'react-i18next';
import DoDisturbOnTwoToneIcon from '@mui/icons-material/DoDisturbOnTwoTone';

const useStyles = makeStyles({
  draggingListItem: {
    background: 'rgb(235,235,235)'
  }
});

export type DraggableListItemProps = {
  task: Task;
  index: number;
  onLabelChange: (value: string, id: number) => void;
  onTypeChange: (value: TaskType, id: number) => void;
  onRemove: (id: number) => void;
};

const DraggableListItem = ({
  task,
  index,
  onLabelChange,
  onTypeChange,
  onRemove
}: DraggableListItemProps) => {
  const classes = useStyles();
  const { t }: { t: any } = useTranslation();

  const taskTypes = [
    { label: t('Sub-task Status'), value: 'subtask' },
    { label: t('Text Field'), value: 'text' },
    { label: t('Number Field'), value: 'number' },
    { label: t('Inspection Check'), value: 'inspection' },
    { label: t('Multiple Choice'), value: 'multiple' },
    { label: t('Meter Reading'), value: 'meter' }
  ];
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={snapshot.isDragging ? classes.draggingListItem : ''}
          sx={{ justifyContent: 'space-between' }}
        >
          <Box sx={{ alignItems: 'center' }}>
            <DragIndicatorTwoToneIcon />
            <TextField
              onChange={(event) => onLabelChange(event.target.value, task.id)}
              value={task.label}
            />
          </Box>
          <Select
            value={task.type}
            onChange={(event) =>
              onTypeChange(event.target.value as TaskType, task.id)
            }
          >
            {taskTypes.map((taskType) => (
              <MenuItem key={taskType.value} value={taskType.value}>
                {taskType.label}
              </MenuItem>
            ))}
          </Select>
          <IconButton>
            <DoDisturbOnTwoToneIcon
              color="error"
              onClick={() => onRemove(task.id)}
            />
          </IconButton>
        </ListItem>
      )}
    </Draggable>
  );
};

export default DraggableListItem;

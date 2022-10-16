import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import DragIndicatorTwoToneIcon from '@mui/icons-material/DragIndicatorTwoTone';
import { Task } from '../../../../../models/owns/tasks';

const useStyles = makeStyles({
  draggingListItem: {
    background: 'rgb(235,235,235)'
  }
});

export type DraggableListItemProps = {
  item: Task;
  index: number;
  onLabelChange: (value: string, id: number) => void;
};

const DraggableListItem = ({
  item,
  index,
  onLabelChange
}: DraggableListItemProps) => {
  const classes = useStyles();
  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={snapshot.isDragging ? classes.draggingListItem : ''}
        >
          <DragIndicatorTwoToneIcon />
          <TextField
            onChange={(event) => onLabelChange(event.target.value, item.id)}
            value={item.label}
          />
        </ListItem>
      )}
    </Draggable>
  );
};

export default DraggableListItem;

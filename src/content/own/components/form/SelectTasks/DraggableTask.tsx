import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import {
  Box,
  Collapse,
  Divider,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import DragIndicatorTwoToneIcon from '@mui/icons-material/DragIndicatorTwoTone';
import { Task, TaskType } from '../../../../../models/owns/tasks';
import { useTranslation } from 'react-i18next';
import DoDisturbOnTwoToneIcon from '@mui/icons-material/DoDisturbOnTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { users } from '../../../../../models/owns/user';
import { useState } from 'react';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

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
  onUserChange: (user: number, id: number) => void;
  onRemove: (id: number) => void;
};

const DraggableListItem = ({
  task,
  index,
  onLabelChange,
  onTypeChange,
  onRemove,
  onUserChange
}: DraggableListItemProps) => {
  const classes = useStyles();
  const { t }: { t: any } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const taskTypes = [
    { label: t('Sub-task Status'), value: 'subtask' },
    { label: t('Text Field'), value: 'text' },
    { label: t('Number Field'), value: 'number' },
    { label: t('Inspection Check'), value: 'inspection' },
    { label: t('Multiple Choice'), value: 'multiple' },
    { label: t('Meter Reading'), value: 'meter' }
  ];
  const [openAssignUser, setOpenAssignUser] = useState<boolean>(false);
  const renderMenu = () => (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}
    >
      <MenuItem onClick={() => setOpenAssignUser(!openAssignUser)}>
        {openAssignUser && <CheckTwoToneIcon />}
        Assign User
      </MenuItem>
      <MenuItem onClick={handleClose}>Assign Asset</MenuItem>
    </Menu>
  );
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={snapshot.isDragging ? classes.draggingListItem : ''}
          sx={{ width: '100%' }}
        >
          {renderMenu()}
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <DragIndicatorTwoToneIcon />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ alignItems: 'center' }}>
                  <TextField
                    onChange={(event) =>
                      onLabelChange(event.target.value, task.id)
                    }
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
                <Box>
                  <IconButton>
                    <DoDisturbOnTwoToneIcon
                      color="error"
                      onClick={() => onRemove(task.id)}
                    />
                  </IconButton>
                  <IconButton onClick={handleOpenMenu}>
                    <MoreVertTwoToneIcon />
                  </IconButton>
                </Box>
              </Box>
              <Collapse in={openAssignUser}>
                <Select
                  sx={{ mt: 1 }}
                  onChange={(event) =>
                    onUserChange(Number(event.target.value), task.id)
                  }
                >
                  <MenuItem value="">{t('Select User')}</MenuItem>
                  {users.map((user) => (
                    <MenuItem
                      key={user.id}
                      value={user.id}
                    >{`${user.firstName} ${user.lastName}`}</MenuItem>
                  ))}
                </Select>
              </Collapse>
            </Box>
          </Box>
        </ListItem>
      )}
    </Draggable>
  );
};

export default DraggableListItem;

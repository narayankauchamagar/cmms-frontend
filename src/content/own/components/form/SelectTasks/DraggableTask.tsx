import * as React from 'react';
import { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import {
  Box,
  Button,
  Collapse,
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
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { assets } from '../../../../../models/owns/asset';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

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
  onAssetChange: (user: number, id: number) => void;
  onChoicesChange: (choices: string[], id: number) => void;
  onRemove: (id: number) => void;
};

const DraggableListItem = ({
  task,
  index,
  onLabelChange,
  onTypeChange,
  onRemove,
  onUserChange,
  onAssetChange,
  onChoicesChange
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
  const [openAssignUser, setOpenAssignUser] = useState<boolean>(!!task.user);
  const [openAssignAsset, setOpenAssignAsset] = useState<boolean>(!!task.asset);
  const [choices, setChoices] = useState<string[]>(task.options ?? ['', '']);
  const handleChoiceChange = (value: string, index: number) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };
  const handleAddOption = () => {
    const newChoices = [...choices, ''];
    setChoices(newChoices);
  };
  const handleRemoveOption = (id: number) => {
    const newChoices = [...choices];
    newChoices.splice(id, 1);
    setChoices(newChoices);
  };
  useEffect(() => onChoicesChange(choices, task.id), [choices]);

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
      <MenuItem onClick={() => setOpenAssignAsset(!openAssignAsset)}>
        {openAssignAsset && <CheckTwoToneIcon />}
        Assign Asset
      </MenuItem>{' '}
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
                  sx={{ ml: 1 }}
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
                  <IconButton onClick={() => onRemove(task.id)}>
                    <DoDisturbOnTwoToneIcon color="error" />
                  </IconButton>
                  <IconButton onClick={handleOpenMenu}>
                    <MoreVertTwoToneIcon />
                  </IconButton>
                </Box>
              </Box>
              <Collapse
                in={
                  openAssignUser || openAssignAsset || task.type === 'multiple'
                }
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    ml: 2
                  }}
                >
                  {openAssignUser && (
                    <Select
                      sx={{ mt: 1 }}
                      onChange={(event) =>
                        onUserChange(Number(event.target.value), task.id)
                      }
                      displayEmpty
                      defaultValue=""
                      value={task.user ?? ''}
                    >
                      <MenuItem value="">{t('Select User')}</MenuItem>
                      {users.map((user) => (
                        <MenuItem
                          key={user.id}
                          value={user.id}
                        >{`${user.firstName} ${user.lastName}`}</MenuItem>
                      ))}
                    </Select>
                  )}
                  {openAssignAsset && (
                    <Select
                      sx={{ mt: 1 }}
                      onChange={(event) =>
                        onAssetChange(Number(event.target.value), task.id)
                      }
                      displayEmpty
                      defaultValue=""
                      value={task.asset ?? ''}
                    >
                      <MenuItem value="">{t('Select Asset')}</MenuItem>
                      {assets.map((asset) => (
                        <MenuItem key={asset.id} value={asset.id}>
                          {asset.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                  {task.type === 'multiple' && (
                    <Box>
                      {choices.map((choice, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            mt: 1
                          }}
                        >
                          <TextField
                            value={choice}
                            onChange={(event) =>
                              handleChoiceChange(event.target.value, index)
                            }
                          />
                          {choices.length > 2 && (
                            <IconButton
                              sx={{ ml: 2 }}
                              onClick={() => handleRemoveOption(index)}
                            >
                              <DoDisturbOnTwoToneIcon color="error" />
                            </IconButton>
                          )}
                        </Box>
                      ))}
                      <Button
                        onClick={handleAddOption}
                        startIcon={<AddTwoToneIcon />}
                        sx={{ mt: 1 }}
                      >
                        Add New Option
                      </Button>
                    </Box>
                  )}
                </Box>
              </Collapse>
            </Box>
          </Box>
        </ListItem>
      )}
    </Draggable>
  );
};

export default DraggableListItem;

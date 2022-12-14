import * as React from 'react';
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder
} from 'react-beautiful-dnd';
import { Task, TaskType } from '../../../../../models/owns/tasks';
import DraggableTask from './DraggableTask';
import { AssetMiniDTO } from '../../../../../models/owns/asset';
import { UserMiniDTO } from '../../../../../models/user';

export type DraggableListProps = {
  tasks: Task[];
  onDragEnd: OnDragEndResponder;
  onLabelChange: (value: string, id: number) => void;
  onTypeChange: (value: TaskType, id: number) => void;
  onAssetChange: (asset: AssetMiniDTO, id: number) => void;
  onRemove: (id: number) => void;
  onUserChange: (user: UserMiniDTO, id: number) => void;
  onChoicesChange: (choices: string[], id: number) => void;
};

const DraggableTaskList = React.memo(
  ({
    tasks,
    onDragEnd,
    onLabelChange,
    onTypeChange,
    onRemove,
    onUserChange,
    onAssetChange,
    onChoicesChange
  }: DraggableListProps) => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((item, index) => (
                <DraggableTask
                  task={item}
                  index={index}
                  key={item.id}
                  onLabelChange={onLabelChange}
                  onTypeChange={onTypeChange}
                  onRemove={onRemove}
                  onUserChange={onUserChange}
                  onAssetChange={onAssetChange}
                  onChoicesChange={onChoicesChange}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
);

export default DraggableTaskList;

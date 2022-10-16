import * as React from 'react';
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder
} from 'react-beautiful-dnd';
import { Task } from '../../../../../models/owns/tasks';
import DraggableTask from './DraggableTask';

export type DraggableListProps = {
  items: Task[];
  onDragEnd: OnDragEndResponder;
  onLabelChange: (value: string, id: number) => void;
};

const DraggableTaskList = React.memo(
  ({ items, onDragEnd, onLabelChange }: DraggableListProps) => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <DraggableTask
                  item={item}
                  index={index}
                  key={item.id}
                  onLabelChange={onLabelChange}
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

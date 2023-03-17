import * as React from 'react';
import { useEffect } from 'react';
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder
} from 'react-beautiful-dnd';
import { Task, TaskType } from '../../../../../models/owns/tasks';
import DraggableTask from './DraggableTask';
import { AssetMiniDTO } from '../../../../../models/owns/asset';
import { UserMiniDTO } from '../../../../../models/user';
import { getUsersMini } from '../../../../../slices/user';
import { getAssetsMini } from '../../../../../slices/asset';
import { useDispatch, useSelector } from '../../../../../store';
import { getMetersMini } from 'src/slices/meter';
import { MeterMiniDTO } from 'src/models/owns/meter';

export type DraggableListProps = {
  tasks: Task[];
  onDragEnd: OnDragEndResponder;
  onLabelChange: (value: string, id: number) => void;
  onTypeChange: (value: TaskType, id: number) => void;
  onAssetChange: (asset: AssetMiniDTO, id: number) => void;
  onMeterChange: (meter: MeterMiniDTO, id: number) => void;
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
    onChoicesChange,
    onMeterChange
  }: DraggableListProps) => {
    const { usersMini } = useSelector((state) => state.users);
    const { assetsMini } = useSelector((state) => state.assets);
    const { metersMini } = useSelector((state) => state.meters);
    const dispatch = useDispatch();
    useEffect(() => {
      if (!usersMini.length) {
        dispatch(getUsersMini());
      }
      if (!assetsMini.length) {
        dispatch(getAssetsMini());
      }
      if (!metersMini.length) {
        dispatch(getMetersMini());
      }
    }, []);
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
                  onMeterChange={onMeterChange}
                  onChoicesChange={onChoicesChange}
                  assetsMini={assetsMini}
                  usersMini={usersMini}
                  metersMini={metersMini}
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

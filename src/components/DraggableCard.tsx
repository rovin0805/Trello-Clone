import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${props => props.theme.cardColor};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableCardProps) {
  console.log(`${toDo} is rendered`);
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {provided => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

// props가 바뀌지 않으면 다시 렌더링 하지 않음
export default React.memo(DraggableCard);

import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) {
      return;
    }
    // setToDos(prev => {
    //   const reorderingDos = [...prev];
    //   // 1) Delete an item on source.index
    //   reorderingDos.splice(source.index, 1); // splice(start, length)
    //   // 2) Put back the item on the destination.index
    //   reorderingDos.splice(destination?.index, 0, draggableId);
    //   return reorderingDos;
    // });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board toDos={toDos[boardId]} boardId={boardId} key={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;

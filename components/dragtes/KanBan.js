import styled from "styled-components";

import {DragDropContext, Droppable} from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const Kanban = ({columns, setColumns, deleteTask, setTimeStamp}) => {
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const {source, destination} = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <DragDropContext
      onDragEnd={result => onDragEnd(result, columns, setColumns)}
    >
      <Container>
        <TaskColumnStyles>
          {columns &&
            Object.entries(columns).map(([columnId, column]) => {
              return (
                <Droppable
                  key={`column${columnId}`}
                  droppableId={String(columnId)}
                  direction="horizontal"
                >
                  {provided => (
                    <ListContainer>
                      <Title>{column.title}</Title>

                      <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {column?.items?.map((item, index) => (
                          <TaskCard
                            columnId={columnId}
                            deleteTask={deleteTask}
                            key={index}
                            item={item}
                            index={index}
                            setTimeStamp={setTimeStamp}
                          />
                        ))}
                        {provided.placeholder}
                      </TaskList>
                    </ListContainer>
                  )}
                </Droppable>
              );
            })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
  );
};

export default Kanban;

const Container = styled.div`
  width: 100%;
`;
const ListContainer = styled.div`
  height: 160px;
  width: 100%;

  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const TaskList = styled.div`
  display: flex;
  width: auto;
  height: auto;
  position: relative;
  border-radius: 5px;
  padding-bottom: 10px;

  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const TaskColumnStyles = styled.div`
  display: flex;
  width: 100%;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  color: #fff;

  padding: 2px 15px;
  margin: 0;
  margin-bottom: 5px;

  align-self: flex-start;
  font-size: 1.3rem;
`;

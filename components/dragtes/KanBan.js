import React, {useState, useEffect} from "react";
import styled from "styled-components";

import {DragDropContext, Droppable} from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const Kanban = ({projectid}) => {
  const [columns, setColumns] = useState([]);
  const [timeOutReset, setTimeOutReset] = useState(false);
  const [allData, setAllData] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/projects/${projectid}`);
      const data = await response.json();
      setAllData(data);
      console.log(data);
      setColumns(data.columns);
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (allData) {
      clearTimeout(timeOutReset);
      setTimeOutReset(setTimeout(pushData, 2000));
    }
    async function pushData() {
      const response = await fetch("/api/projects", {
        method: "PUT",
        body: JSON.stringify({
          projectname: allData.projectname,
          columns: columns,
        }),
        headers: {"Content-Type": "application/json"},
      });
      console.log(response);
    }
  }, [columns]);

  //const [tasks, setTasks] = useState([]);

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
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <Droppable
                key={`column${columnId}`}
                droppableId={String(columnId)}
              >
                {provided => (
                  <ListContainer>
                    <Title>{column.title}</Title>

                    <TaskList
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {column.items.map((item, index) => (
                        <TaskCard key={index} item={item} index={index} />
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

const Title = styled.span`
  color: #fff;

  padding: 2px 10px;

  align-self: flex-start;
  font-size: 1.3rem;
`;

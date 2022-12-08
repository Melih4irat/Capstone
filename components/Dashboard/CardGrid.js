import styled from "styled-components";
import {DoneTaskCard} from "./DoneTaskCard";
import {ProjectCard} from "./ProjectCard";
import {TaskToFinishCard} from "./TaskToFinischCard";
import {ToDoTaskCard} from "./ToDoTaskCard";
import {WiPCard} from "./WiPCard";

export function CardGrid() {
  return (
    <GridContainer>
      <DoneTaskCard />
      <ToDoTaskCard />
      <WiPCard />
      <ProjectCard />
      <TaskToFinishCard />
    </GridContainer>
  );
}

const GridContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

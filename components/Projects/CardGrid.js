import styled from "styled-components";
import {ProjectCard} from "./ProjectCard";

export function CardGrid() {
  return (
    <GridContainer>
      <ProjectCard />
      <AddProjectButton>Add Projekt +</AddProjectButton>

      <DeleteProjectButton>Delete Projekt -</DeleteProjectButton>
    </GridContainer>
  );
}

const GridContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AddProjectButton = styled.button`
  width: 150px;
  height: 40px;
  color: white;

  font-size: 1rem;
  border-radius: 10px;
  background: rgba(0, 255, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 255, 0, 0.3);
  margin: 5px 0;
`;
const DeleteProjectButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 1rem;
  color: white;

  border-radius: 10px;
  background: rgba(255, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 0, 0, 0.3);
  margin: 5px 0;
`;

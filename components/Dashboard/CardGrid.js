import styled from "styled-components";
// import {DoneTaskCard} from "./DoneTaskCard";
// import {ProjectCard} from "./ProjectCard";
// import {TaskToFinishCard} from "./TaskToFinischCard";
// import {ToDoTaskCard} from "./ToDoTaskCard";
// import {WiPCard} from "./WiPCard";
import {useState, useEffect} from "react";

export function CardGrid() {
  const [projects, setProjects] = useState([]);
  const [meetings, setMeetings] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/meetings");
      const data = await response.json();
      setMeetings(data);
    }
    fetchData();
  }, []);

  function getTotalNumberOfDone(projects) {
    return projects.reduce((total, project) => {
      return total + project?.columns?.done?.items?.length;
    }, 0);
  }
  const totalNumberOfDone = getTotalNumberOfDone(projects);

  function getTotalNumberOfWiP(projects) {
    return projects.reduce((total, project) => {
      return total + project?.columns?.wip?.items?.length;
    }, 0);
  }
  const totalNumberOfWiP = getTotalNumberOfWiP(projects);

  function getTotalNumberOfToDo(projects) {
    return projects.reduce((total, project) => {
      return total + project?.columns?.todo?.items?.length;
    }, 0);
  }
  const totalNumberOfToDo = getTotalNumberOfToDo(projects);

  return (
    <GridContainer>
      <DoneTaskCard>
        <ContainerHeadingTwo>Done Tasks</ContainerHeadingTwo>
        <DoneParamCircle>
          <ContainerHeadingThree>{totalNumberOfDone}</ContainerHeadingThree>
        </DoneParamCircle>
      </DoneTaskCard>
      <ToDoTaskCard>
        <ContainerHeadingTwo>To Do</ContainerHeadingTwo>
        <ParamCircle>
          <ContainerHeadingThree>{totalNumberOfToDo}</ContainerHeadingThree>
        </ParamCircle>
      </ToDoTaskCard>
      <WiPCard>
        <ContainerHeadingTwo>WiP</ContainerHeadingTwo>
        <ParamCircle>
          <ContainerHeadingThree>{totalNumberOfWiP}</ContainerHeadingThree>
        </ParamCircle>
      </WiPCard>
      <ProjectCard>
        <ContainerHeadingTwo>Projects</ContainerHeadingTwo>
        <ParamCircle>
          <ContainerHeadingThree>
            {projects ? projects.length : "0"}
          </ContainerHeadingThree>
        </ParamCircle>
      </ProjectCard>
      <MeetingCard>
        <ContainerHeadingTwo>Meetings</ContainerHeadingTwo>
        <ParamCircle>
          <ContainerHeadingThree>
            {meetings ? meetings.length : "0"}
          </ContainerHeadingThree>
        </ParamCircle>
      </MeetingCard>
    </GridContainer>
  );
}

const GridContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const DoneTaskCard = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  margin: 2.5%;
  display: flex;
`;
const ToDoTaskCard = styled.div`
  width: 45%;
  height: 100px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  margin: 2.5%;
  display: flex;
`;
const ProjectCard = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  margin: 2.5%;
  display: flex;
`;
const MeetingCard = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  margin: 2.5%;
  display: flex;
`;

const WiPCard = styled.div`
  width: 45%;
  height: 100px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  margin: 2.5%;
  display: flex;
`;
const ContainerHeadingTwo = styled.h2`
  font-size: 1rem;
  color: #000;
  margin-left: 15px;
  background: rgba(255, 255, 255, 0.7);
  padding: 5px;
  height: 30%;
  border-radius: 8px;
`;
const ParamCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const DoneParamCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const ContainerHeadingThree = styled.h3`
  font-size: 1.3rem;
  color: #fff;
`;

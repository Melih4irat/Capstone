import styled from "styled-components";

import AnalogClock from "analog-clock-react";
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
  let options = {
    useCustomTime: false,
    width: "80px",
    border: false,
    borderColor: "#b3b2b2",
    baseColor: "#ffffff",
    centerColor: "#fcfcfc",
    centerBorderColor: "#000000",
    handColors: {
      second: "#d81c7a",
      minute: "#000000",
      hour: "#000000",
    },
  };
  let today = new Date();

  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateOptions.timeZone = "UTC";

  let now = today.toLocaleString("de-DE", dateOptions);

  return (
    <GridContainer>
      <InfoTaskCard>
        <LeftContainer>
          <Greetings>Hi, User !</Greetings>
          <Dates>Heute ist {now}</Dates>
        </LeftContainer>
        <ClockContainer>
          <AnalogClock {...options} />
        </ClockContainer>
      </InfoTaskCard>

      <DoneTaskCard>
        <div className="header">
          <ContainerHeadingTwo>Done Tasks</ContainerHeadingTwo>
        </div>
        <div className="footer">
          <DoneParamCircle>
            <ContainerHeadingThree>{totalNumberOfDone}</ContainerHeadingThree>
          </DoneParamCircle>
        </div>
      </DoneTaskCard>
      <ToDoTaskCard>
        <div className="header">
          <ContainerHeadingTwo>To Do</ContainerHeadingTwo>
        </div>
        <ParamCircle>
          <ContainerHeadingThree>{totalNumberOfToDo}</ContainerHeadingThree>
        </ParamCircle>
      </ToDoTaskCard>
      <WiPCard>
        <div className="header">
          <ContainerHeadingTwo>WiP</ContainerHeadingTwo>
        </div>
        <ParamCircle>
          <ContainerHeadingThree>{totalNumberOfWiP}</ContainerHeadingThree>
        </ParamCircle>
      </WiPCard>
      <ProjectCard>
        <div className="header">
          <ContainerHeadingTwo>Projects</ContainerHeadingTwo>
        </div>
        <ParamCircle>
          <ContainerHeadingThree>
            {projects ? projects.length : "0"}
          </ContainerHeadingThree>
        </ParamCircle>
      </ProjectCard>
      <MeetingCard>
        <div className="header">
          <ContainerHeadingTwo>Meetings</ContainerHeadingTwo>
        </div>
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
const InfoTaskCard = styled.div`
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
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 5%;
  width: 50%;
`;
const Greetings = styled.h2`
  font-size: 1.7rem;
  color: #000;
  margin: 0;
`;
const Dates = styled.span`
  color: #000;
  font-size: 0.8rem;
  width: 80%;
`;
const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
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
  .header {
    height: 30%;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: flex-start;
    border-radius: 15px 15px 0 0;
    padding: 8px;
  }
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
  .header {
    height: 30%;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: flex-start;
    border-radius: 15px 15px 0 0;
    padding: 8px;
  }
`;
const ProjectCard = styled.div`
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
  .header {
    height: 30%;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: flex-start;
    border-radius: 15px 15px 0 0;
    padding: 8px;
  }
`;
const MeetingCard = styled.div`
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
  .header {
    height: 30%;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: flex-start;
    border-radius: 15px 15px 0 0;
    padding: 8px;
  }
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
  .header {
    height: 30%;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: flex-start;
    border-radius: 15px 15px 0 0;
    padding: 8px;
  }
`;

const ContainerHeadingTwo = styled.h2`
  font-size: 0.8rem;
  color: #000;
  margin: 0;
  padding: 5px;
  display: flex;
  align-items: center;
  height: 15%;
`;
const ParamCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background-color: orange;
  opacity: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 12%;
  right: 8%;
`;
const DoneParamCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background-color: green;
  opacity: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 12%;
  right: 4%;
`;
const ContainerHeadingThree = styled.h3`
  font-size: 1rem;
  color: #fff;
`;

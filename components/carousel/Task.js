import {FaPencilAlt} from "react-icons/fa";
import styled from "styled-components";

export function Task() {
  return (
    <TaskCard>
      <Priority>High Priority</Priority>
      <Taskname>Taskname</Taskname>
      <Description>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr...
      </Description>
      <MaxTime>
        <Time>00:00:00</Time>
        <TimeScale>min</TimeScale>
      </MaxTime>
      <ChangeTask>
        <FaPencilAlt />
      </ChangeTask>
    </TaskCard>
  );
}

const TaskCard = styled.article`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  width: 60%;
  height: 120px;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0 10px;
  position: relative;
  padding: 10px;
`;

const Priority = styled.div`
  width: 70px;
  height: 15px;
  background-color: red;
  font-size: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const Taskname = styled.h3`
  margin: 5px 0;
`;

const Description = styled.p`
  margin: 5px 10px;
  font-size: 0.8rem;
`;
const MaxTime = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ChangeTask = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
`;
const Time = styled.span`
  font-size: 0.7rem;
`;
const TimeScale = styled.span`
  font-size: 0.7rem;
`;

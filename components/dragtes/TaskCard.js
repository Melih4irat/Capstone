import React, {useState, useEffect} from "react";
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import {FaTrashAlt, FaPlayCircle, FaStopCircle} from "react-icons/fa";

const TaskCard = ({item, index, deleteTask, columnId, setTimeStamp}) => {
  const [displayTime, setDisplayTime] = useState(
    item.elapsedtime
      ? new Date(item.elapsedtime - 3600000).toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      : "00:00:00"
  );
  const [elapsedTime, setElapsedTime] = useState(0);
  // function startTimer() {
  //   // let startTime = item.timestamp;

  //   setInterval(() => {
  //     let elapsedTime = Date.now() - item.timestamp;
  //     // console.log(elapsedTime);
  //     // Do something with the elapsed time
  //   }, 1000);
  // }

  // useEffect(() => {
  //   if (item.timestamp) {
  //     startTimer();
  //   }
  // }, []);
  // console.log(Date.now() - item.timestamp);
  function calculateTime() {
    let ms2 = Date.now();
    let msElapsed = item.elapsedtime ? item.elapsedtime : 0;
    let ms = ms2 - item.timestamp + msElapsed;
    let date = new Date(ms - 3600000);
    let time = date.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setDisplayTime(time);
    setElapsedTime(ms);
  }
  useEffect(() => {
    if (item.timestamp) {
      setTimeout(calculateTime, 1000);
    }
  }, [displayTime]);
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
            <Taskname>{item.Task}</Taskname>
            <Description>{item.description}</Description>
            <Priority>{item.priority}</Priority>
            <MaxTime>
              {item.timestamp ? (
                <StoppButton
                  onClick={() =>
                    setTimeStamp(item, columnId, false, elapsedTime)
                  }
                >
                  <FaStopCircle />
                </StoppButton>
              ) : (
                <StartButton
                  onClick={() => {
                    setDisplayTime("starting...");
                    setTimeStamp(item, columnId, Date.now(), false);
                  }}
                >
                  <FaPlayCircle />
                </StartButton>
              )}

              <Time>{displayTime}</Time>
            </MaxTime>
            <DeleteTask onClick={() => deleteTask(columnId, item)}>
              <FaTrashAlt />
            </DeleteTask>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 10px;
  height: 100%;
  border-radius: 5px;
  width: 220px;
  background: rgba(255, 255, 255, 0.2);
  padding-bottom: 30px;
  position: relative;

  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  margin-right: 15px;
  z-index: 0;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
`;
const Priority = styled.div`
  width: 80px;
  height: 20px;
  background-color: red;
  font-size: 0.7rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: absolute;
  bottom: 6px;
  left: 10px;
  ${props =>
    props.children === "Mid Priority" && "background-color:yellow; color:#000;"}
  ${props => props.children === "Low Priority" && "background-color:green;"}
`;
const Taskname = styled.h3`
  background: rgba(255, 255, 255, 0.7);
  padding: 3px;
  margin: 0 0 5px 0;
  border-radius: 7px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.7rem;
  color: #fff;

  padding: 3px;
`;
const MaxTime = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StartButton = styled.button`
  font-size: 1.3rem;
  background: none;
  border: none;
  margin: 0;
  color: green;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const StoppButton = styled.button`
  font-size: 1.3rem;
  background: none;
  border: none;
  margin: 0;
  color: red;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const DeleteTask = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: red;
  padding: 5px;
  border-radius: 5px;
`;
const Time = styled.span`
  font-size: 0.8rem;
  color: #fff;
`;

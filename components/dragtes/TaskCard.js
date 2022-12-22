import React from "react";
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import {FaTrashAlt, FaPlayCircle} from "react-icons/fa";

const TaskCard = ({item, index}) => {
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

            <MaxTime>
              <Priority>{item.priority}</Priority>
              <StartButton>
                <FaPlayCircle />
              </StartButton>

              <Time>{item.time}</Time>
            </MaxTime>
            <DeleteTask>
              <FaTrashAlt />
            </DeleteTask>

            {/* <div className="secondary-details"> */}
            {/* <p> */}
            {/* <span>
                  {new Date(item.Due_Date).toLocaleDateString("en-us", {
                    month: "short",
                    day: "2-digit",
                  })}
                </span> */}
            {/* </p> */}
            {/* </div> */}
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
  height: 130px;
  border-radius: 5px;
  width: 200px;
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
  margin-right: 10px;
`;
const Taskname = styled.h3`
  margin: 5px 0;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.8rem;
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
const DeleteTask = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: red;
`;
const Time = styled.span`
  font-size: 0.8rem;
`;

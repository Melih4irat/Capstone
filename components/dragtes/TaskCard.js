import React from "react";
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import {FaTrashAlt} from "react-icons/fa";

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
            <Priority>High Priority</Priority>
            <Taskname>{item.Task}</Taskname>
            <Description>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr...
            </Description>
            <MaxTime>
              <Time>00:00:00</Time>
              <TimeScale>min</TimeScale>
            </MaxTime>
            <ChangeTask>
              <FaTrashAlt />
            </ChangeTask>

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
  justify-content: center;
  align-items: flex-start;
  padding: 10px 10px;
  min-height: 106px;
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
  margin: 0 10px;
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
  border: 1px solid rgba(255, 0, 0, 0.6);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  background: rgba(255, 0, 0, 0.6);
  color: #fff;
  height: 30px;
  width: 30px;
`;
const Time = styled.span`
  font-size: 0.7rem;
`;
const TimeScale = styled.span`
  font-size: 0.7rem;
`;

import React from "react";
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import {FaPencilAlt, FaRegWindowClose} from "react-icons/fa";
import {useState} from "react";

const TaskCard = ({item, index}) => {
  const [showModal, setShowModal] = useState(false);
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
            <ChangeTask onClick={() => setShowModal(true)}>
              <FaPencilAlt />
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
          {showModal ? (
            <ModalContainer>
              <Form action="" method="">
                <Label for="pname">Projectname</Label>
                <Input type="text" id="pname"></Input>
                <Label for="description">Description</Label>
                <DescriptionInput id="description"></DescriptionInput>
                <Label for="date">Enddate</Label>
                <Input type="text" id="date"></Input>

                <Label for="prio">Priority</Label>
                <PriorityContainer>
                  <RadioInputHigh
                    type="radio"
                    name="prio"
                    id="prioHigh"
                  ></RadioInputHigh>
                  <Label for="prioHigh"></Label>
                  <RadioInputMid
                    type="radio"
                    name="prio"
                    id="prioMid"
                  ></RadioInputMid>
                  <Label for="prioMid"></Label>
                  <RadioInputLow
                    type="radio"
                    name="prio"
                    id="prioLow"
                  ></RadioInputLow>
                  <Label for="prioLow"></Label>
                </PriorityContainer>
              </Form>
              <CloseButton onClick={() => setShowModal(false)}>
                <FaRegWindowClose />
              </CloseButton>

              <AddTaskButton>Add Task</AddTaskButton>
            </ModalContainer>
          ) : null}
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

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
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
  border: none;
  background: none;
`;
const Time = styled.span`
  font-size: 0.7rem;
`;
const TimeScale = styled.span`
  font-size: 0.7rem;
`;
const ModalContainer = styled.div`
  width: 250px;
  height: 400px;
  padding: 10px 0;
  padding-bottom: 20px;

  background-color: white;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 20vh;

  border-radius: 15px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Label = styled.label`
  font-size: 0.8rem;
  margin-top: 10px;
`;
const Input = styled.input`
  height: 30px;
  width: 150px;
  margin: 5px 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;
const DescriptionInput = styled.textarea`
  height: 80px;
  width: 150px;
  margin: 5px 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;
const PriorityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;
const RadioInputHigh = styled.input`
  width: 25px;
  height: 25px;
  accent-color: red;
  outline: 2px solid red;
`;
const RadioInputMid = styled.input`
  width: 25px;
  height: 25px;
  accent-color: yellow;
  outline: 2px solid yellow;
`;
const RadioInputLow = styled.input`
  width: 25px;
  height: 25px;
  accent-color: green;
  outline: 2px solid green;
  outline-radius: 100%;
`;

const AddTaskButton = styled.button`
  width: 100px;
  height: 40px;
  color: white;

  font-size: 1rem;
  border-radius: 10px;
  background: rgba(0, 255, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 255, 0, 0.3);
  margin: 5px 5px;
`;

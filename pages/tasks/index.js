import styled from "styled-components";
import {FaRegWindowClose} from "react-icons/fa";
import {Carousel} from "../../components/carousel/Carousel";
import {useState} from "react";

export default function Tasks() {
  const [showModal, setShowModal] = useState(false);
  return (
    <MainPage>
      <Header>
        <SelectProject>
          <option>Projectname</option>
        </SelectProject>
        <AddTaskButton onClick={() => setShowModal(true)}>
          Add Task+
        </AddTaskButton>
      </Header>
      <Container>
        <Heading>To Do</Heading>
        <Carousel />
      </Container>
      <Container>
        <Heading>Work in Progress</Heading>
        <Carousel />
      </Container>
      <Container>
        <Heading>Done</Heading>
        <Carousel />
      </Container>
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
    </MainPage>
  );
}

const MainPage = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.header`
  width: 100%;
  height: 70px;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 10px;
`;
const SelectProject = styled.select`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
`;
const Container = styled.section`
  width: 100%;
  text-align: left;
`;
const Heading = styled.h2`
  margin-bottom: 5px;
  color: #fff;
  margin-left: 20px;
  font-size: 1.2rem;
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

const ModalContainer = styled.div`
  width: 250px;
  height: 400px;
  padding: 10px 0;
  padding-bottom: 20px;

  background-color: white;
  z-index: 2;
  bottom: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;

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

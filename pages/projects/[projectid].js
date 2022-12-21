import Kanban from "../../components/dragtes/KanBan";
import styled from "styled-components";
import {useState, useEffect} from "react";
import {FaRegWindowClose, FaArrowAltCircleRight} from "react-icons/fa";
import {useRouter} from "next/router";

export default function Project({setPageState}) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    }
    fetchData();

    setPageState("projects");
  }, []);
  const router = useRouter();
  const {projectid} = router.query;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showModal, setShowModal] = useState(false);
  return (
    <MainPage className="App">
      <Header>
        <ChangeProject>
          <SelectProject name="id">
            {projects.map(project => {
              return (
                <option key={project._id} value={project._id}>
                  {project.projectname}
                </option>
              );
            })}
          </SelectProject>
          <MoveButton>
            <FaArrowAltCircleRight />
          </MoveButton>
        </ChangeProject>
        <AddTaskButton onClick={() => setShowModal(true)}>
          Add Task+
        </AddTaskButton>
      </Header>
      {showModal ? (
        <ModalContainer>
          <Form action="" method="">
            <Label for="pname">Projectname</Label>
            <Input type="text" id="pname"></Input>
            <Label for="description">Description</Label>
            <DescriptionInput id="description"></DescriptionInput>

            <Label for="prio">Priority</Label>
            <PriorityContainer>
              <RadioContainer>
                <RadioInputHigh
                  type="radio"
                  name="prio"
                  id="prioHigh"
                ></RadioInputHigh>
                <LabelRadio for="prioHigh">
                  High
                  <br />
                  Priority
                </LabelRadio>
              </RadioContainer>
              <RadioContainer>
                <RadioInputMid
                  type="radio"
                  name="prio"
                  id="prioMid"
                ></RadioInputMid>
                <LabelRadio for="prioMid">
                  Mid <br />
                  Priority
                </LabelRadio>
              </RadioContainer>
              <RadioContainer>
                <RadioInputLow
                  type="radio"
                  name="prio"
                  id="prioLow"
                ></RadioInputLow>
                <LabelRadio for="prioLow">
                  Low
                  <br />
                  Priority
                </LabelRadio>
              </RadioContainer>
            </PriorityContainer>
          </Form>
          <CloseButton onClick={() => setShowModal(false)}>
            <FaRegWindowClose />
          </CloseButton>

          <AddTaskButton>Add Task</AddTaskButton>
        </ModalContainer>
      ) : null}

      <Kanban projectid={projectid} />
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
const ChangeProject = styled.div`
  display: flex;
  align-items: center;
`;
const SelectProject = styled.select`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
`;
const MoveButton = styled.button`
  font-size: 1rem;
  border-radius: 10px;
  background: rgba(0, 255, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 255, 0, 0.3);
  margin: 5px 5px;
  color: white;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 320px;
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
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Label = styled.label`
  font-size: 0.8rem;
  text-align: left;
`;
const LabelRadio = styled.label`
  font-size: 0.8rem;
  text-align: center;
`;
const Input = styled.input`
  height: 30px;
  width: 150px;
  margin: 5px 0;
  padding: 0 5px;
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
  width: 160px;
`;
const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;
const RadioInputHigh = styled.input`
  width: 25px;
  height: 25px;
  accent-color: red;
  margin: 0;
`;
const RadioInputMid = styled.input`
  width: 25px;
  height: 25px;
  accent-color: yellow;
  margin: 0;
`;
const RadioInputLow = styled.input`
  width: 25px;
  height: 25px;
  accent-color: green;
  margin: 0;
`;

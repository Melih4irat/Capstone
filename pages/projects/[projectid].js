import Kanban from "../../components/dragtes/KanBan";
import styled from "styled-components";
import {useState, useEffect} from "react";
import {FaRegWindowClose} from "react-icons/fa";
import {useRouter} from "next/router";
import {v4} from "uuid";

export default function Project({setPageState}) {
  const router = useRouter();
  const {projectid} = router.query;

  const [columns, setColumns] = useState(null);
  const [timeOutReset, setTimeOutReset] = useState(false);
  const [allData, setAllData] = useState(false);

  useEffect(() => {
    setPageState("projects");
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/projects/${projectid}`);
        if (response.ok) {
          const data = await response.json();
          setAllData(data);
          setColumns(data.columns);
        } else {
          throw new Error(`fetch failed with status ${response.status}`);
        }
      } catch (error) {
        alert(error);
      }

      console.log(window.location.href);
    }
    if (projectid) {
      fetchData();
    }
  }, [projectid]);

  useEffect(() => {
    if (allData) {
      clearTimeout(timeOutReset);
      setTimeOutReset(setTimeout(pushData, 2000));
    }
    async function pushData() {
      await fetch("/api/projects", {
        method: "PUT",
        body: JSON.stringify({
          projectname: allData.projectname,
          columns: columns,
        }),
        headers: {"Content-Type": "application/json"},
      });
    }
  }, [columns]);

  function deleteTask(columnId, card) {
    const newItems = columns[columnId].items.filter(task => task !== card);

    setColumns({
      ...columns,
      [columnId]: {...columns[columnId], items: newItems},
    });
  }

  function handleNewTask(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const newTask = {...formData, timestamp: false, id: v4()};
    setColumns({
      ...columns,
      todo: {...columns.todo, items: [...columns.todo.items, newTask]},
    });
    setShowModal(false);
  }
  function setTimeStamp(taskToChange, column, time, elapsedTime) {
    console.log(time, elapsedTime);
    if (elapsedTime) {
      const newItems = columns[column].items.map(task => {
        if (task === taskToChange) {
          return {...task, timestamp: time, elapsedtime: elapsedTime};
        } else {
          return task;
        }
      });
      setColumns({
        ...columns,
        [column]: {...columns[column], items: newItems},
      });
    } else {
      const newItems = columns[column].items.map(task => {
        if (task === taskToChange) {
          return {...task, timestamp: time};
        } else {
          return task;
        }
      });
      setColumns({
        ...columns,
        [column]: {...columns[column], items: newItems},
      });
    }
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showModal, setShowModal] = useState(false);
  return (
    <MainPage className="App">
      <Header>
        <HeadingOne>{allData.projectname}</HeadingOne>

        <AddTaskButton onClick={() => setShowModal(true)}>
          Add Task+
        </AddTaskButton>
      </Header>
      {showModal ? (
        <ModalContainer>
          <Form onSubmit={event => handleNewTask(event)}>
            <Label for="pname">Taskname</Label>
            <Input name="Task" type="text" id="pname" required></Input>
            <Label for="description">Description</Label>
            <DescriptionInput
              name="description"
              id="description"
              required
            ></DescriptionInput>

            <Label for="prio">Priority</Label>
            <PriorityContainer>
              <RadioContainer>
                <RadioInputHigh
                  type="radio"
                  name="priority"
                  id="prioHigh"
                  value="High Priority"
                  required
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
                  name="priority"
                  id="prioMid"
                  value="Mid Priority"
                ></RadioInputMid>
                <LabelRadio for="prioMid">
                  Mid <br />
                  Priority
                </LabelRadio>
              </RadioContainer>
              <RadioContainer>
                <RadioInputLow
                  type="radio"
                  name="priority"
                  id="prioLow"
                  value="Low Priority"
                ></RadioInputLow>
                <LabelRadio for="prioLow">
                  Low
                  <br />
                  Priority
                </LabelRadio>
              </RadioContainer>
            </PriorityContainer>
            <AddTaskButton type="submit">Add Task</AddTaskButton>
          </Form>
          <CloseButton onClick={() => setShowModal(false)}>
            <FaRegWindowClose />
          </CloseButton>
        </ModalContainer>
      ) : null}

      {columns && (
        <Kanban
          columns={columns}
          setColumns={setColumns}
          deleteTask={deleteTask}
          setTimeStamp={setTimeStamp}
        />
      )}
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
const HeadingOne = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
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

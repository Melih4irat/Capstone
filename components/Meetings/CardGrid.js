import {MeetingCard} from "./MeetingCard";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {FaRegWindowClose} from "react-icons/fa";
export function CardGrid() {
  const [meetings, setMeetings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/meetings");
      let data = [];
      data = await response.json();

      setMeetings(data);
    }
    fetchData();
  }, [reload]);
  async function handleAddMeeting(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    try {
      await fetch("/api/meetings", {
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"},
        method: "POST",
      });
      alert("Meeting added!");
    } catch (error) {
      alert(error.message);
    }
    event.target.reset();
    setShowModal(false);
    setReload(!reload);
  }
  async function handleDeleteMeeting(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    try {
      const response = await fetch("/api/meetings", {
        body: JSON.stringify(data),
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Meeting deleted!");
      } else {
        throw new Error(`Fetch fehlgeschlagen mit Status: ${response.status}`);
      }
    } catch (error) {
      alert(error.message);
    }
    setShowSecondModal(false);
    setReload(!reload);
  }
  console.log(meetings);

  return (
    <GridContainer>
      {meetings.map(meeting => {
        return (
          <MeetingCard
            key={meeting._id}
            meeting={meeting.meeting}
            description={meeting.description}
            date={meeting.date}
            time={meeting.time}
          />
        );
      })}

      <AddMeetingButton onClick={() => setShowModal(true)}>
        Add Meeting
      </AddMeetingButton>
      <DeleteMeetingButton onClick={() => setShowSecondModal(true)}>
        Delete Meeting
      </DeleteMeetingButton>
      {showModal ? (
        <ModalContainer>
          <Form onSubmit={event => handleAddMeeting(event)}>
            <Label for="mname">Titel</Label>
            <Input name="meeting" type="text" id="mname" required></Input>
            <Label for="dname">Description</Label>
            <Input name="description" type="text" id="dname" required></Input>
            <Label for="daname">Date</Label>
            <Input name="date" type="date" id="daname" required></Input>
            <Label for="tname">Time</Label>
            <Input name="time" type="time" id="tname" required></Input>

            <CloseButton onClick={() => setShowModal(false)}>
              <FaRegWindowClose />
            </CloseButton>

            <AddMeetingButton type="submit">Add Meeting</AddMeetingButton>
          </Form>
        </ModalContainer>
      ) : null}
      {showSecondModal ? (
        <ModalContainer>
          <Form onSubmit={event => handleDeleteMeeting(event)}>
            <SelectProject name="id">
              <option>--Meeting--</option>
              {meetings.map(meeting => {
                return (
                  <option key={meeting._id} value={meeting._id}>
                    {meeting.meeting}
                  </option>
                );
              })}
            </SelectProject>
            <DeleteMeetingButton type="submit">
              Delete Project
            </DeleteMeetingButton>
          </Form>
          <CloseButton onClick={() => setShowSecondModal(false)}>
            <FaRegWindowClose />
          </CloseButton>
        </ModalContainer>
      ) : null}
    </GridContainer>
  );
}
const GridContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AddMeetingButton = styled.button`
  width: 150px;
  height: 40px;
  color: white;

  font-size: 1rem;
  border-radius: 10px;
  background: rgba(0, 255, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 255, 0, 0.3);
  margin: 5px 0;
`;
const DeleteMeetingButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 1rem;
  color: white;

  border-radius: 10px;
  background: rgba(255, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 0, 0, 0.3);
  margin: 5px 0;
`;
const ModalContainer = styled.div`
  width: 250px;
  height: auto;
  padding: 15px 0;

  background-color: white;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
`;
const Label = styled.label`
  font-size: 0.8rem;
  text-align: center;
`;
const Input = styled.input`
  height: 30px;
  width: 150px;
  margin: 5px 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const SelectProject = styled.select`
  height: 30px;
  width: 150px;
  margin: 5px 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

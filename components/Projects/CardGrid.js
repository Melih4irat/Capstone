import styled from "styled-components";
import {ProjectCard} from "./ProjectCard";
import {useState} from "react";
import {FaRegWindowClose} from "react-icons/fa";

export function CardGrid() {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  return (
    <GridContainer>
      <ProjectCard />
      <AddProjectButton onClick={() => setShowModal(true)}>
        Add Projekt +
      </AddProjectButton>

      <DeleteProjectButton onClick={() => setShowSecondModal(true)}>
        Delete Projekt -
      </DeleteProjectButton>
      {showModal ? (
        <ModalContainer>
          <Form action="" method="">
            <Label for="pname">Projectname</Label>
            <Input type="text" id="pname"></Input>
            <SelectUser>
              <option>--User--</option>
            </SelectUser>
          </Form>
          <CloseButton onClick={() => setShowModal(false)}>
            <FaRegWindowClose />
          </CloseButton>

          <AddProjectButton>Add Project</AddProjectButton>
        </ModalContainer>
      ) : null}
      {showSecondModal ? (
        <ModalContainer>
          <Form>
            <SelectProject>
              <option>--Project--</option>
            </SelectProject>
          </Form>
          <CloseButton onClick={() => setShowSecondModal(false)}>
            <FaRegWindowClose />
          </CloseButton>
          <DeleteProjectButton>Delete Project</DeleteProjectButton>
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
const AddProjectButton = styled.button`
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
const DeleteProjectButton = styled.button`
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
  height: 200px;
  padding: 10px 0;

  background-color: white;
  z-index: 2;
  bottom: 28vh;
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
`;
const Label = styled.label`
  font-size: 0.8rem;
`;
const Input = styled.input`
  height: 30px;
  width: 150px;
  margin: 5px 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;
const SelectUser = styled.select`
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

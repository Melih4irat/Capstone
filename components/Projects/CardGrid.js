import styled from "styled-components";
import {ProjectCard} from "./ProjectCard";
import {useState, useEffect} from "react";
import {FaRegWindowClose} from "react-icons/fa";
import Link from "next/link";

export function CardGrid() {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    }
    fetchData();
  }, [reload]);

  async function handleAddProject(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    try {
      await fetch("/api/projects", {
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"},
        method: "POST",
      });
      alert("Project added!");
    } catch (error) {
      alert(error.message);
    }
    event.target.reset();
    setShowModal(false);
    setReload(!reload);
  }
  async function handleDeleteProject(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    try {
      const response = await fetch("/api/projects", {
        body: JSON.stringify(data),
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Project deleted!");
      } else {
        throw new Error(`Fetch fehlgeschlagen mit Status: ${response.status}`);
      }
    } catch (error) {
      alert(error.message);
    }
    setShowSecondModal(false);
    setReload(!reload);
  }
  return (
    <GridContainer>
      {projects.map(({_id, projectname, columns}) => {
        console.log(columns);
        return (
          <CardLink key={_id} href={`/projects/${_id}`}>
            <ProjectCard columns={columns} projectname={projectname} />
          </CardLink>
        );
      })}
      <AddProjectButton onClick={() => setShowModal(true)}>
        Add Projekt +
      </AddProjectButton>
      <DeleteProjectButton onClick={() => setShowSecondModal(true)}>
        Delete Projekt -
      </DeleteProjectButton>
      {showModal ? (
        <ModalContainer>
          <Form onSubmit={event => handleAddProject(event)}>
            <Label for="pname">Projectname</Label>
            <Input name="projectname" type="text" id="pname"></Input>

            <CloseButton onClick={() => setShowModal(false)}>
              <FaRegWindowClose />
            </CloseButton>

            <AddProjectButton type="submit">Add Project</AddProjectButton>
          </Form>
        </ModalContainer>
      ) : null}
      {showSecondModal ? (
        <ModalContainer>
          <Form onSubmit={event => handleDeleteProject(event)}>
            <SelectProject name="id">
              <option>--Project--</option>
              {projects.map(project => {
                return (
                  <option key={project._id} value={project._id}>
                    {project.projectname}
                  </option>
                );
              })}
            </SelectProject>
            <DeleteProjectButton type="submit">
              Delete Project
            </DeleteProjectButton>
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
  padding: 15px 0;

  background-color: white;
  z-index: 2;
  bottom: 28vh;
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

const SelectProject = styled.select`
  height: 30px;
  width: 150px;
  margin: 5px 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;
const CardLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  padding: 0;
`;

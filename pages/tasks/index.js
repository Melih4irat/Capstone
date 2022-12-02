import styled from "styled-components";
import {Carousel} from "../../components/carousel/Carousel";

export default function Tasks() {
  return (
    <MainPage>
      <Header>
        <SelectProject>
          <option>Projectname</option>
        </SelectProject>
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

import styled from "styled-components";
import {CardGrid} from "../../components/Projects/CardGrid";
import {useEffect} from "react";
export default function Projects({setPageState}) {
  useEffect(() => {
    setPageState("projects");
  }, []);
  return (
    <MainPage>
      <Header>
        <HeadingOne>Projects</HeadingOne>
      </Header>
      <CardGrid />
    </MainPage>
  );
}

const MainPage = styled.main`
  width: 100vw;
  min-height: 100vh;
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
  padding-bottom: 20vh;
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
const HeadingOne = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
`;

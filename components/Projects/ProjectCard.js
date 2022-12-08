import styled from "styled-components";
export function ProjectCard({projectname, toDo, WiP, Done}) {
  return (
    <CardContainer>
      <HeadingTwo>{projectname}</HeadingTwo>
      <Container>
        <ParamInnerContainer>
          <HeadingThree>Tasks</HeadingThree>
          <ParamCircle>
            <ParamHeadingThree>
              {toDo.length + WiP.length + Done.length}
            </ParamHeadingThree>
          </ParamCircle>
        </ParamInnerContainer>

        <ParamInnerContainer>
          <HeadingThree>Done</HeadingThree>
          <ParamCircleDone>
            <ParamHeadingThree>{Done.length}</ParamHeadingThree>
          </ParamCircleDone>
        </ParamInnerContainer>
      </Container>
    </CardContainer>
  );
}
const CardContainer = styled.article`
  width: 100%;
  height: 70px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 1.5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeadingTwo = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-left: 15px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 10px;
  padding: 5px 0;
  height: 100%;
`;

const ParamInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ParamCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 30px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ParamCircleDone = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 30px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ParamHeadingThree = styled.h3`
  font-size: 0.8rem;
  color: #fff;
  margin: 0;
`;
const HeadingThree = styled.h3`
  font-size: 0.8rem;

  color: #fff;
  margin: 0 10px;
`;

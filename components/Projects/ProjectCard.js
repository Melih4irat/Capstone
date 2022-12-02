import styled from "styled-components";
export function ProjectCard() {
  return (
    <CardContainer>
      <HeadingTwo>Projectname</HeadingTwo>
      <ParamContainer>
        <ParamInnerContainer>
          <HeadingThree>Tasks</HeadingThree>
          <ParamCircle>
            <ParamHeadingThree>0</ParamHeadingThree>
          </ParamCircle>
        </ParamInnerContainer>

        <ParamInnerContainer>
          <HeadingThree>Done</HeadingThree>
          <ParamCircle>
            <ParamHeadingThree>0</ParamHeadingThree>
          </ParamCircle>
        </ParamInnerContainer>
      </ParamContainer>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 3.5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeadingTwo = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-left: 15px;
`;
const ParamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
const ParamInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ParamCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 10px;
  right: 10px;
`;
const ParamHeadingThree = styled.h3`
  font-size: 1rem;
  color: #fff;
`;
const HeadingThree = styled.h3`
  font-size: 0.8rem;
  margin-left: 10px;
  margin-right: 5px;
  color: #fff;
`;

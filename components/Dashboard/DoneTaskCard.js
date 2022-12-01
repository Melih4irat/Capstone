import styled from "styled-components";
export function DoneTaskCard() {
  return (
    <CardContainer>
      <ContainerHeadingTwo>Done Tasks</ContainerHeadingTwo>
      <ParamCircle>
        <ContainerHeadingThree>0</ContainerHeadingThree>
      </ParamCircle>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  postion: relative;
  margin: 2.5%;
`;

const ContainerHeadingTwo = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-left: 15px;
`;
const ParamCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
const ContainerHeadingThree = styled.h3`
  font-size: 1.3rem;
  color: #fff;
`;

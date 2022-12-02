import styled from "styled-components";
import {Task} from "./Task";
export function Carousel() {
  return (
    <CarouselContainer>
      <CarouselInnerContainer>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </CarouselInnerContainer>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  width: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  padding: 0;
`;
const CarouselInnerContainer = styled.div`
  overflow: scroll;
  display: flex;
  width: auto;
  height: 100%;
  position: relative;
  -webkit-overflow-scrolling: touch;
`;

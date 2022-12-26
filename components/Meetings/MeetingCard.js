import styled from "styled-components";
export function MeetingCard(meeting) {
  return (
    <CardContainer>
      <ContainerTop>
        <HeadingContainer>
          <HeadingTwo>{meeting.meeting}</HeadingTwo>
        </HeadingContainer>

        <DateContainer>
          <Date>{meeting.date}</Date>
          <Time>{meeting.time} Uhr</Time>
        </DateContainer>
      </ContainerTop>
      <ContainerBottom>
        <Description>{meeting.description}</Description>
      </ContainerBottom>
    </CardContainer>
  );
}
const CardContainer = styled.article`
  width: 100%;
  height: 100px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;
const HeadingTwo = styled.h2`
  font-size: 1rem;
  color: #000;

  background: rgba(255, 255, 255, 0.7);
  padding: 5px;
  border-radius: 5px;
  margin: 0;
`;
const Description = styled.p`
  font-size: 0.7rem;
  color: #fff;
  margin: 0;
`;
const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px 0 10px;
`;
const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px 0 10px;
`;
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  margin-right: 10px;

  height: 100%;
`;
const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.7);
  padding: 5px 7px;
  border-radius: 5px; ;
`;
const Date = styled.span`
  font-size: 0.8rem;
`;
const Time = styled.span`
  font-size: 0.8rem;
`;

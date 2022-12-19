import Kanban from "../../components/dragtes/KanBan";
import styled from "styled-components";
export default function dragtes() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <MainPage className="App">
      <Header />

      <Kanban />
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 10px;
`;

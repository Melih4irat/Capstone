import styled from "styled-components";
export default function dashboard() {
  return (
    <MainPage>
      <h1>Dashboard</h1>
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
`;

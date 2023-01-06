import {useEffect} from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function Home({setPageState}) {
  useEffect(() => {
    setPageState("none");
  }, []);
  return (
    <MainPage>
      <div className="container">
        <Image
          src={require("./../img/project.png")}
          width="200"
          height="200"
          alt="logo"
        />
        <h1>Projectify</h1>
        <Link href="/dashboard">
          <button>Go to Board</button>
        </Link>
      </div>
    </MainPage>
  );
}
const MainPage = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f4d03f;
  background-image: linear-gradient(132deg, #f4d03f 0%, #16a085 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 300px;
    height: 60%;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    align-items: center;
    padding-top: 2rem;
  }
  h1 {
    color: #003300;
    font-size: 2.5rem;
    margin: 7% 0 7% 0;
  }
  button {
    width: 150px;
    height: 40px;
    color: white;

    font-size: 1rem;
    border-radius: 10px;
    background: rgba(0, 255, 0, 0.6);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 255, 0, 0.3);
  }
`;

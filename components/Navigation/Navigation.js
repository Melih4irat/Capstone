import styled from "styled-components";
import Link from "next/link";
import {FaHome, FaClipboardList, FaCalendarAlt, FaUser} from "react-icons/fa";
import {useState} from "react";

export default function Navigation() {
  const [pageState, setPageState] = useState("profile");
  return (
    <Navbar>
      <NavList>
        <NavItem>
          <Link href="/dashboard">
            <Home
              pageState={pageState}
              onClick={() => setPageState("dashboard")}
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/projects">
            <ClipBoard
              pageState={pageState}
              onClick={() => setPageState("projects")}
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/calendar">
            <Calendar
              pageState={pageState}
              onClick={() => setPageState("calendar")}
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/profile">
            <Profile
              pageState={pageState}
              onClick={() => setPageState("profile")}
            />
          </Link>
        </NavItem>
      </NavList>
    </Navbar>
  );
}

const Navbar = styled.nav`
  width: 80vw;
  height: 50px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  box-sizing: content-box;

  position: fixed;
  bottom: 30px;
  right: 10%;
  left: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
`;
const NavItem = styled.li`
  list-style-type: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = styled(FaHome)`
  border-radius: 50px;
  padding: 22px;
  box-sizing: content-box;
  color: black;
  font-size: 1.2rem;
  ${props =>
    props.pageState === "dashboard"
      ? "background-color: rgba(255,165,0, 0.9); color:white;"
      : " "};
`;
const ClipBoard = styled(FaClipboardList)`
  border-radius: 50px;
  padding: 22px;
  box-sizing: content-box;
  color: black;
  font-size: 1.2rem;

  ${props =>
    props.pageState === "projects"
      ? "background-color: rgba(255,165,0, 0.9); color:white;"
      : " "};
`;
const Calendar = styled(FaCalendarAlt)`
  border-radius: 50px;
  padding: 22px;
  box-sizing: content-box;
  color: black;
  font-size: 1.2rem;
  ${props =>
    props.pageState === "calendar"
      ? "background-color: rgba(255,165,0, 0.9); color:white;"
      : " "};
`;
const Profile = styled(FaUser)`
  border-radius: 50px;
  padding: 22px;
  box-sizing: content-box;
  color: black;
  font-size: 1.2rem;
  ${props =>
    props.pageState === "profile"
      ? "background-color: rgba(255,165,0, 0.9); color:white;"
      : " "};
`;

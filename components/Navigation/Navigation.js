import styled from "styled-components";
import Link from "next/link";
import {FaHome, FaClipboardList, FaCalendarAlt} from "react-icons/fa";

export default function Navigation({pageState, setPageState}) {
  return (
    <Navbar pageState={pageState}>
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
          <Link href="/meetings">
            <Calendar
              pageState={pageState}
              onClick={() => setPageState("meetings")}
            />
          </Link>
        </NavItem>
        {/* <NavItem>
          <Link href="/profile">
            <Profile
              pageState={pageState}
              onClick={() => setPageState("profile")}
            />
          </Link>
        </NavItem> */}
      </NavList>
    </Navbar>
  );
}

const Navbar = styled.nav`
  width: 60vw;
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
  right: 20%;
  left: 20%;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props => (props.pageState === "none" ? "display:none;" : " ")};
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
      ? "background-color: rgba(255,165,0, 0.9); color:white; border: 1px solid rgba(255,165,255, 1.0);"
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
      ? "background-color: rgba(255,165,0, 0.9); color:white; border: 1px solid rgba(255,165,255, 1.0);"
      : " "};
`;
const Calendar = styled(FaCalendarAlt)`
  border-radius: 50px;
  padding: 22px;
  box-sizing: content-box;
  color: black;
  font-size: 1.2rem;
  ${props =>
    props.pageState === "meetings"
      ? "background-color: rgba(255,165,0, 0.9); color:white; border: 1px solid rgba(255,165,255, 1.0);"
      : " "};
`;
// const Profile = styled(FaUser)`
//   border-radius: 50px;
//   padding: 22px;
//   box-sizing: content-box;
//   color: black;
//   font-size: 1.2rem;
//   ${props =>
//     props.pageState === "profile"
//       ? "background-color: rgba(255,165,0, 0.9); color:white; border: 1px solid rgba(255,165,255, 1.0);"
//       : " "};
// `;

import {useEffect} from "react";

export default function Home({setPageState}) {
  useEffect(() => {
    setPageState("none");
  }, []);
  return <h1>Login</h1>;
}

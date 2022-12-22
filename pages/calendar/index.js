import {useEffect} from "react";

export default function Calendar({setPageState}) {
  useEffect(() => {
    setPageState("calendar");
  }, []);
  return <h1>Calendar</h1>;
}

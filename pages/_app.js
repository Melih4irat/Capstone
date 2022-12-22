import GlobalStyles from "../styles/GlobalStyles";
import Navigation from "../components/Navigation/Navigation";
import {useState} from "react";
function MyApp({Component, pageProps}) {
  const [pageState, setPageState] = useState("");
  return (
    <>
      <GlobalStyles />
      <Navigation pageState={pageState} setPageState={setPageState} />
      <Component
        pageState={pageState}
        setPageState={setPageState}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;

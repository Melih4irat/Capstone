import GlobalStyles from "../styles/GlobalStyles";
import Navigation from "../components/Navigation/Navigation";
function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </>
  );
}

export default MyApp;

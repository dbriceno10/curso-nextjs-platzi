import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import "../style.css";

function MyApp({ Component, pageProps }: AppProps) {
  //Está englobando en este componente a todas nuestras páginas.
  //Sería un lugar ideal para poner a los providers englobando a nuestro componente.
  //También es un buen lugar para colocar un layout
  //También sería un buen lugar para colocar props adicionales

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;

import { Provider } from "next-auth/client";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import "../css/customcss.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

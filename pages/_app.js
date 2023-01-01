import "../styles/globals.css";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../Component/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
      <Toaster />
    </>
  );
}

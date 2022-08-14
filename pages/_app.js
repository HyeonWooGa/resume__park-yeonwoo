import Script from "next/script";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <Script
          src="https://kit.fontawesome.com/14247c5db5.js"
          crossorigin="anonymous"
        ></Script>
      </Layout>
    </>
  );
}

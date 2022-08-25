import Script from "next/script";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
          <Script
            src="https://kit.fontawesome.com/14247c5db5.js"
            crossorigin="anonymous"
          ></Script>
        </Layout>
      </RecoilRoot>
    </>
  );
}

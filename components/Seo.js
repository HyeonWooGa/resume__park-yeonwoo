import Head from "next/head";

export default function Seo({ title }) {
  return (
    <>
      <Head>
        <title>{`박연우 - ${title}`}</title>
      </Head>
    </>
  );
}

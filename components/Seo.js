import Head from "next/head";
import { useRecoilValue } from "recoil";
import { isEngState } from "../states/atoms";

export default function Seo({ title }) {
  const isEng = useRecoilValue(isEngState);
  return (
    <>
      {isEng ? (
        <Head>
          <title>{`Park Yeonwoo ${title}`}</title>
        </Head>
      ) : (
        <Head>
          <title>{`박연우 ${title}`}</title>
        </Head>
      )}
    </>
  );
}

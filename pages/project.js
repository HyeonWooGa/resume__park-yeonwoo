import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Seo from "../components/Seo";
import { isEngState } from "../states/atoms";

const Wrapper = styled.div``;

export default function Project() {
  const isEng = useRecoilValue(isEngState);
  return (
    <>
      <Seo title={isEng ? "- Project" : "- 프로젝트"} />
      <Wrapper></Wrapper>
    </>
  );
}

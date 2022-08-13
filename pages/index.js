import styled from "styled-components";
import Seo from "../components/Seo";

const Wrapper = styled.div`
  border: 1px solid white;
`;

export default function Home() {
  return (
    <>
      <Seo title="On The Rocket" />
      <Wrapper></Wrapper>
    </>
  );
}

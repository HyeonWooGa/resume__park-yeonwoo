import styled from "styled-components";
import Seo from "../components/Seo";

const Wrapper = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 100%;
  min-width: 500px;
`;

const Container = styled.div`
  display: flex;
  p {
    margin: 0 auto;
  }
`;

export default function About() {
  return (
    <>
      <Seo title="About" />
      <Wrapper>
        <h2>"안녕하세요, 하늘을 향하는 웹 개발자 박연우입니다."</h2>
        <Container>
          <p>안녕하세요</p>
          <p>반갑습니다</p>
        </Container>
      </Wrapper>
    </>
  );
}

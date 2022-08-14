import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const I = styled.i`
  font-size: 24px;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Toggles = styled.div`
  width: 20%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  width: 50%;
`;

const Title = styled.div`
  width: 30%;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 30px;
  a {
    font-weight: 600;
    font-size: 18px;
  }
  a.active {
    color: tomato;
  }
`;

export default function NavBar() {
  const router = useRouter();
  // console.log(router);
  return (
    <Wrapper>
      <Title>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>박연우</a>
        </Link>
        <Container>
          <a
            target="_blank"
            href="https://github.com/HyeonWooGa"
            rel="noreferrer"
          >
            <I className="fa-brands fa-github"></I>
          </a>
          <a
            target="_blank"
            href="https://velog.io/@hyeonwooga"
            rel="noreferrer"
          >
            <I className="fa-brands fa-vimeo"></I>
          </a>
        </Container>
      </Title>
      <Nav>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>이력서</a>
        </Link>
        <Link href="/project">
          <a className={router.pathname === "/project" ? "active" : ""}>
            프로젝트
          </a>
        </Link>
      </Nav>
      <Toggles>eng | kor dark | light</Toggles>
    </Wrapper>
  );
}

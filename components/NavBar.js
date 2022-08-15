import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkState, isEngState } from "../states/atoms";

const I = styled.i`
  font-size: 24px;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Toggles = styled.div`
  width: 20%;
  display: flex;
  gap: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  width: 50%;
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
  .active {
    color: tomato;
  }
`;

const Title = styled.div`
  width: 30%;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Button = styled.button`
  font-weight: 400;
  font-size: 12px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export default function NavBar() {
  const [isEng, setIsEng] = useRecoilState(isEngState);
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const router = useRouter();
  // console.log(router);

  const handleClickEng = () => setIsEng(true);
  const handleClickKor = () => setIsEng(false);
  const handleClickDark = () => setIsDark(true);
  const handleClickLight = () => setIsDark(false);

  return (
    <Wrapper>
      <Title>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>
            {isEng ? "Park Yeonwoo" : "박연우"}
          </a>
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
          <a className={router.pathname === "/about" ? "active" : ""}>
            {isEng ? "Resume" : "이력서"}
          </a>
        </Link>
        <Link href="/project">
          <a className={router.pathname === "/project" ? "active" : ""}>
            {isEng ? "Project" : "프로젝트"}
          </a>
        </Link>
      </Nav>
      <Toggles>
        <ButtonContainer>
          <Button className={isEng ? "active" : ""} onClick={handleClickEng}>
            ENG
          </Button>
          <Button className={isEng ? "" : "active"} onClick={handleClickKor}>
            KOR
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button className={isDark ? "active" : ""} onClick={handleClickDark}>
            DARK
          </Button>
          <Button className={isDark ? "" : "active"} onClick={handleClickLight}>
            LIGHT
          </Button>
        </ButtonContainer>
      </Toggles>
    </Wrapper>
  );
}

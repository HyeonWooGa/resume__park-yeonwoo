import styled from "styled-components";
import Seo from "../components/Seo";

const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: solid 1px white;
  margin: 40px auto;
  border-radius: 40px;
  padding: 40px 80px;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const P = styled.p`
  width: 100%;
  line-height: 200%;
`;

const Hr = styled.hr`
  width: 100%;
`;

const I = styled.i`
  font-size: 40px;
`;

export default function About() {
  return (
    <>
      <Seo title="About" />
      <Wrapper>
        <h2>
          "박연우 On the Rocket" <i className="fa-solid fa-rocket"></i> 🚀
        </h2>
        <Hr />
        <h3>About</h3>
        <P>
          저는 스스로 매일 다짐하는 슬로건이 있습니다.
          <br /> "No Hope to No Cap"
          <br /> "답이 없어 보이던 사람이 의심할 여지없어 보이는 사람으로"
          <br />
          <br /> 전 아직 목표까지 나아가야할 거리가 많이 남았지만
          <br /> 저의 이력서, 포트폴리오, 블로그를 보시면서
          <br /> 저와 함께 일하면 재미있을지 생각해주실 수 있나요?
        </P>
        <Hr />
        <h3>Skills</h3>
        <P>
          JavaScript <i className="fa-brands fa-js"></i>
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 웹 풀스택 (Express, MongoDB, Vanill
          JS) 유튜브 클론코딩
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- DOM 과 EventListner 활용 빈칸 채우기
          웹 앱 V1 프로젝트 개발
          <br />
          <br /> TypeScript
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Class, 객체지향 활용하여 블록체인을
          직접 개발
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- NextJS, React 대부분 TypeScript 사용
          <br />
          <br /> React <i className="fa-brands fa-react"></i>
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- State, Props 활용한 9개의 미니게임
          모음 웹 앱 개발
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 모션 프레임, 인터랙션 등 적용하여
          Netflix 클론 코딩
          <br />
          <br /> NextJS
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- SSR + CSR 로 이력서 웹사이트 개발
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- SEO 적용하여 빈칸 채우기 웹 앱 V2
          프로젝트 개발
          <br />
          <br /> 협업 및 문서화
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 프론트엔드 개발공부 디스코드 운영
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 페어 프로그래밍와 스터디를 통해
          꾸준한 코드리뷰 경험
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 학습내용, 프로젝트 진행과정, 회고 등
          꾸준한 블로그 작성
        </P>
        <Hr />
        <h3>Educations</h3>
        <P>
          조은의 프론트엔드 실무 가이드 : 요구사항 분석과 적정기술 (2022.07)
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 코드컨벤션 (ESLint)
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 유닛테스트 (Jest,
          React-Testing-Library)
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- CI/CD (Github Actions)
          <br />
          <br /> 코드스테이츠 프론트엔드 부트캠프 (2022.07 - 진행중)
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 페어 프로그래밍
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 스터디 운영 및 참여
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 기초부터 심화까지 학습내용 블로그
          작성하며 정리
        </P>
        <Hr />
        <h3>Watch Me More At</h3>
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
      </Wrapper>
    </>
  );
}

import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Seo from "../components/Seo";
import { isEngState } from "../states/atoms";

const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: solid 1px white;
  margin: 0px auto;
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

export default function Resume() {
  const isEng = useRecoilValue(isEngState);
  return (
    <>
      <Seo title={isEng ? "- Resume" : "이력서"} />
      <Wrapper>
        <h2>
          {isEng ? `"Challenger Park Yeonwoo" ` : `"Challenger 박연우" `}
          <i className="fa-solid fa-rocket"></i>
        </h2>
        <Hr />
        <h3>{isEng ? "About" : "소개"}</h3>
        {isEng ? (
          <P>
            I was 30 years old Man at a Crossroads of Choice.
            <br /> Should I just live an UNHAPPY life?
            <br /> Or Should I live an HAPPY life?
            <br />
            <br /> It was Not an Easy Decision.
            <br /> I felt Pressured at the Failure of the Challenge.
            <br /> But my Sincerity was bigger, and now also on.
            <br />
            <br /> Thanks for Watching Me
            <br />
            Growing by Sincerity.
            <br />
          </P>
        ) : (
          <P>
            나이 30살 선택의 기로에 서 있었습니다.
            <br /> 그냥 평범하지만 만족하지 못하는 삶을 살까?
            <br /> 아니면 특별하고 만족하는 인생을 살아볼까?
            <br />
            <br /> 쉬운 결정은 아니였습니다.
            <br /> 도전의 실패에 대한 부담감이 적지 않았습니다.
            <br /> 하지만, 개발에 대한 진정성이 더 컸고 지금도 그렇습니다.
            <br />
            <br /> 진정성으로 성장할 저를 지켜봐주셔서
            <br /> 감사합니다.
          </P>
        )}
        <Hr />
        <h3>{isEng ? "Skills" : "기술"}</h3>
        {isEng ? (
          <P>
            JavaScript <i className="fa-brands fa-js"></i>
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Web Full Stack (Express, MongoDB,
            Vanill JS) YouTube Clone Coding
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Development of &quot;Fill the Blank
            V1&quot; Web App Project Using DOM and EventListner
            <br />
            <br /> TypeScript
            {/*<br /> &nbsp;&nbsp;&nbsp;&nbsp;- Class, 객체지향 활용하여 블록체인을
          직접 개발*/}
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Using TypeScript at
            &#39;NextJS&#39; and &#39;ReactJS&#39;
            <br />
            <br /> React <i className="fa-brands fa-react"></i>
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Development of &quot;9 Mini Game
            Collection&quot; Web App Using State and Props
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Clone Coding of &quot;Netflix&quot;
            Using
            <br />
            <br /> NextJS
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Development of &quot;Resume&quot;
            Web App Using SSR and CSR
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Development of &quot;Fill the Blank
            V2&quot; Web App Project Applying SEO
            <br />
            <br /> Work in Cooperation &amp; Documentation
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Run a &quot;Front-End Dev&quot;
            Study Discord
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Experience of &quot;Code
            Review&quot; by Pair Programming and Algorithm Study
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Blogging of Learning Contents,
            Project Progress and Retrospect
          </P>
        ) : (
          <P>
            JavaScript <i className="fa-brands fa-js"></i>
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 웹 풀스택 (Express, MongoDB, Vanill
            JS) 유튜브 클론코딩
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- DOM 과 EventListner 활용 빈칸
            채우기 웹 앱 V1 프로젝트 개발
            <br />
            <br /> TypeScript
            {/*<br /> &nbsp;&nbsp;&nbsp;&nbsp;- Class, 객체지향 활용하여 블록체인을
          직접 개발*/}
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- NextJS, React 대부분 TypeScript
            사용
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
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 학습내용, 프로젝트 진행과정, 회고
            등 꾸준한 블로그 작성
          </P>
        )}

        <Hr />
        <h3>{isEng ? "Educations" : "교육"}</h3>
        {isEng ? (
          <P>
            Double Major in Computer Software Engineering, SCH University
            (Graduated on 2018.08)
            <br />
            <br /> Self-Study with Nomad Coder Lecture (2022.03 - Ongoing)
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Clone Coding to get used to
            development
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Learning from Origin to Trend Tech
            Stack
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- A to Z full stack experience by per
            project
            <br />
            <br /> Cho Eun&#39;s Practice Work Guide (2022.07)
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Code Convention (ESLint)
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Unit Test (Jest,
            React-Testing-Library)
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- CI/CD (Github Actions)
            <br />
            <br /> CodeStates Front-End BootCamp (2022.07 - Ongoing)
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Blog to make up for the lack of a
            theoretical foundation
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Run a Study and Growing, Sharing
            Information with Them
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- Project Experience with Back-End
            Dev
          </P>
        ) : (
          <P>
            순천향대학교 컴퓨터소프트웨어공학과 복수전공 (2018.08 졸업)
            <br />
            <br /> 노마드코더 강의로 독학 (2022.03 - 진행중)
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 클론코딩 위주로 개발이 빨리
            익숙해지는 효과
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 오래된 기술부터 최신 기술 순서로
            학습
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 프로젝트 단위 A to Z 풀스택 경험
            <br />
            <br /> 조은의 프론트엔드 실무 가이드 : 요구사항 분석과 적정기술
            (2022.07)
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 코드컨벤션 (ESLint)
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 유닛테스트 (Jest,
            React-Testing-Library)
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- CI/CD (Github Actions)
            <br />
            <br /> 코드스테이츠 프론트엔드 부트캠프 (2022.07 - 진행중)
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 부족한 이론 기반을 보충하며
            블로그에 기록
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 80명 넘는 스터디 운영하며 정보 공유
            및 성장
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 백엔드 부트캠프 교육생과 프로젝트
            경험
          </P>
        )}
        <Hr />
        <h3>{isEng ? "Watch Me More At" : "깃허브 & 블로그"}</h3>
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

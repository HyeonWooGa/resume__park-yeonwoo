import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Seo from "../components/Seo";
import { isEngState } from "../states/atoms";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40vh;
`;

const Div = styled(motion.div)``;

const Span = styled(motion.span)`
  font-size: 40px;
`;

const divVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const spanVariants = {
  start: { opacity: 0, y: 10 },
  end: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  const isEng = useRecoilValue(isEngState);
  useEffect(() => {}, []);
  return (
    <>
      <Seo title="On The Rocket" />
      <Wrapper>
        {isEng ? (
          <Div variants={divVariants} initial="start" animate="end">
            <Span variants={spanVariants}>H</Span>
            <Span variants={spanVariants}>E</Span>
            <Span variants={spanVariants}>L</Span>
            <Span variants={spanVariants}>L</Span>
            <Span variants={spanVariants}>O</Span>
            <br />
            <br />
            <Span variants={spanVariants}>I</Span>
            <Span variants={spanVariants}>&#39;</Span>
            <Span variants={spanVariants}>m </Span>
            <Span variants={spanVariants}>P</Span>
            <Span variants={spanVariants}>a</Span>
            <Span variants={spanVariants}>r</Span>
            <Span variants={spanVariants}>k </Span>
            <Span variants={spanVariants}>Y</Span>
            <Span variants={spanVariants}>e</Span>
            <Span variants={spanVariants}>o</Span>
            <Span variants={spanVariants}>n</Span>
            <Span variants={spanVariants}>w</Span>
            <Span variants={spanVariants}>o</Span>
            <Span variants={spanVariants}>o</Span>
            <br />
            <br />
            <Span variants={spanVariants}>w</Span>
            <Span variants={spanVariants}>o</Span>
            <Span variants={spanVariants}>r</Span>
            <Span variants={spanVariants}>k </Span>
            <Span variants={spanVariants}>w</Span>
            <Span variants={spanVariants}>i</Span>
            <Span variants={spanVariants}>t</Span>
            <Span variants={spanVariants}>h </Span>
            <Span variants={spanVariants}>s</Span>
            <Span variants={spanVariants}>i</Span>
            <Span variants={spanVariants}>n</Span>
            <Span variants={spanVariants}>c</Span>
            <Span variants={spanVariants}>e</Span>
            <Span variants={spanVariants}>r</Span>
            <Span variants={spanVariants}>i</Span>
            <Span variants={spanVariants}>t</Span>
            <Span variants={spanVariants}>y</Span>
          </Div>
        ) : (
          <Div variants={divVariants} initial="start" animate="end">
            <Span variants={spanVariants}>안</Span>
            <Span variants={spanVariants}>녕</Span>
            <Span variants={spanVariants}>하</Span>
            <Span variants={spanVariants}>세</Span>
            <Span variants={spanVariants}>요</Span>
            <br />
            <br />
            <Span variants={spanVariants}>진</Span>
            <Span variants={spanVariants}>정</Span>
            <Span variants={spanVariants}>성</Span>
            <Span variants={spanVariants}>으</Span>
            <Span variants={spanVariants}>로 </Span>
            <Span variants={spanVariants}>승</Span>
            <Span variants={spanVariants}>부</Span>
            <Span variants={spanVariants}>하</Span>
            <Span variants={spanVariants}>는</Span>
            <br />
            <br />
            <Span variants={spanVariants}>박</Span>
            <Span variants={spanVariants}>연</Span>
            <Span variants={spanVariants}>우 </Span>
            <Span variants={spanVariants}>입</Span>
            <Span variants={spanVariants}>니</Span>
            <Span variants={spanVariants}>다</Span>
          </Div>
        )}
      </Wrapper>
    </>
  );
}

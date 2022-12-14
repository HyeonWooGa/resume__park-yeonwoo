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
      <Seo title="" />
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
            <Span variants={spanVariants}>G</Span>
            <Span variants={spanVariants}>r</Span>
            <Span variants={spanVariants}>o</Span>
            <Span variants={spanVariants}>w</Span>
            <Span variants={spanVariants}>i</Span>
            <Span variants={spanVariants}>n</Span>
            <Span variants={spanVariants}>g </Span>
            <Span variants={spanVariants}>b</Span>
            <Span variants={spanVariants}>y </Span>
            <Span variants={spanVariants}>S</Span>
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
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <br />
            <br />
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>??? </Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <br />
            <br />
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>??? </Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
            <Span variants={spanVariants}>???</Span>
          </Div>
        )}
      </Wrapper>
    </>
  );
}

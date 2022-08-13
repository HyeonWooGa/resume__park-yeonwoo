import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  a {
    font-weight: 600;
    font-size: 18px;
  }
  a.active {
    color: tomato;
  }
  div {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
`;

export default function NavBar() {
  const router = useRouter();
  // console.log(router);
  return (
    <>
      <Nav>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <Link href="/project">
          <a className={router.pathname === "/project" ? "active" : ""}>
            Project
          </a>
        </Link>
      </Nav>
    </>
  );
}

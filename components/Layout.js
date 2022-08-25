import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { isDarkState } from "../states/atoms";
import NavBar from "./NavBar";
import { darkTheme, lightTheme } from "../styles/theme";

export default function Layout({ children }) {
  const isDark = useRecoilValue(isDarkState);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavBar />
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
}

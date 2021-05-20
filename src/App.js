import { useState } from "react";
import Splash from "./Components/Splash";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#8EE4AF",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "#2F2FA2",
  titleColor: "lightpink",
  tagLineColor: "lavender",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;

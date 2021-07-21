import { useState } from "react";

import Header from "./components/Header";
import CalcDisplay from "./components/CalcDisplay";
import CalcButtons from "./components/CalcButtons";
import Footer from "./components/Footer";
import SmallInfoDiv from "./components/SmallInfoDiv";

function App() {
  // TODO: Load last used theme
  const [theme, setTheme] = useState(1);

  const [calcText, setCalcText] = useState("0");

  const changeTheme = (num) => {
    if (num < 1 || num > 3) return;
    console.log(`received theme num: ${num}`);

    setTheme(num);
  };

  const changeCalcText = (text) => {
    console.log(`obtained text: ${text}`);

    setCalcText(text);
  };

  // className={`button two-grid-button1 white-text dif-color-key1 ${'btn-theme' + themeNum}`}
  return (
    <div className={`calc-root ${"calc-root-theme" + theme}`}>
      <SmallInfoDiv currTheme={theme}></SmallInfoDiv>
      <div className="calculator-container">
        <Header onThemeChange={changeTheme} currTheme={theme}></Header>
        <CalcDisplay currTheme={theme} displayText={calcText}></CalcDisplay>
        <CalcButtons
          currTheme={theme}
          onDisplayTextChange={changeCalcText}
        ></CalcButtons>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

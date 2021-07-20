import { useState } from "react";

import Header from "./components/Header";
import CalcDisplay from "./components/CalcDisplay";
import CalcButtons from "./components/CalcButtons";
import Footer from "./components/Footer";

function App() {
  // TODO: Load last used theme
  const [theme, setTheme] = useState(1);

  const [calcText, setCalcText] = useState("0");

  /*
  Command Types:
    1 = number
    2 = Delete
    3 = Reset
    4 = Equal
    5 = Add
    6 = Subtract
    7 = Divide
    8 = Multiply
  */

  const [calcCommands, setCalcCommands] = useState([
    {
      inputType: 1,
      inputVal: 0,
    },
  ]);

  const changeTheme = (num) => {
    if (num < 1 || num > 3) return;
    console.log(`received theme num: ${num}`);

    setTheme(num);
  };

  const changeCalcText = (text) => {
    console.log(
      `obtained text: ${text}, calcCommands length: ${calcCommands.length}, ${calcCommands[0].inputVal}`
    );

    // if (calcCommands.length === 1) {
    //   return setCalcText(calcCommands[0].inputVal);
    // }

    setCalcText(text);
  };

  const onModifyCalcCommands = (commands) => {};

  // className={`button two-grid-button1 white-text dif-color-key1 ${'btn-theme' + themeNum}`}
  return (
    <div className={`calc-root ${"calc-root-theme" + theme}`}>
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

import { useState } from "react";

import Header from "./components/Header";
import CalcDisplay from "./components/CalcDisplay";
import CalcButtons from "./components/CalcButtons";
import Footer from "./components/Footer";

function App() {

  // TODO: Load last used theme
  const [theme, setTheme] = useState(1);

  const changeTheme = (num) => {
    if (num < 1 || num > 3) return;
    console.log(`recieved theme num: ${num}`);

    setTheme(num);
  }

  return (
    <div className='calc-root'>
      <div className="calculator-container">
        <Header onThemeChange={changeTheme} ></Header>
        <CalcDisplay></CalcDisplay>
        <CalcButtons currTheme={theme}></CalcButtons>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

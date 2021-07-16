import { useState } from "react";


const Button = ({ text, wideButtonType, themeNum }) => {
  // gridColumnStart: {1}, gridColumnEnd: 4

  // const [currTheme, setCurrTheme] = useState('btn-theme' + themeNum);

  // const getButtonWithTheme = () => {
  //   if (currTheme > 3 || currTheme < 1) console.error(`Incorrect themeNum passed, value: ${themeNum}`);

  //   setCurrTheme('btn-theme' + themeNum);

  // }


  return (
    <>
      {wideButtonType === 1 ? (
        <div className={`button two-grid-button1 white-text dif-color-key1 ${'btn-theme' + themeNum}`}>
          <p>{text}</p>
        </div>
      ) : wideButtonType === 2 ? (
        <div className={`button two-grid-button2 white-text dif-color-key2 ${'btn-theme' + themeNum}`}>
          <p>{text}</p>
        </div>
      ) : (
        <div
          className={`button ${text === "DEL" ? "white-text dif-color-key1" : ""} ${'btn-theme' + themeNum}`}
        >
          <p>{text}</p>
        </div>
      )
      }
    </>

    // <div className="button" {btnWidth === 2 ? "two-grid-button" : ""}>
    //   <p>{text}</p>
    // </div>
  );
};

export default Button;

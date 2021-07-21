import { useState } from "react";

const Button = ({
  text,
  wideButtonType,
  currTheme,
  // onDisplayTextChange,
  onButtonClick,
}) => {
  // gridColumnStart: {1}, gridColumnEnd: 4

  // const [currTheme, setCurrTheme] = useState('btn-theme' + currTheme);

  // const getButtonWithTheme = () => {
  //   if (currTheme > 3 || currTheme < 1) console.error(`Incorrect currTheme passed, value: ${currTheme}`);

  //   setCurrTheme('btn-theme' + currTheme);

  // }

  // const doButtonClickActions = (text) => {
  //   // doButtonClickActions(text);
  //   onButtonClick(text);
  // };

  return (
    <>
      {wideButtonType === 1 ? (
        <div
          onClick={() => onButtonClick(text)}
          className={`button two-grid-button1 ${`dif-color-theme${currTheme}-key1`} 
          }`}
        >
          <p>{text}</p>
        </div>
      ) : wideButtonType === 2 ? (
        <div
          onClick={() => onButtonClick(text)}
          className={`button two-grid-button2 ${`dif-color-theme${currTheme}-key2`} 
          }`}
        >
          <p>{text}</p>
        </div>
      ) : (
        <div
          onClick={() => onButtonClick(text)}
          className={`button ${
            currTheme === 1
              ? "normal-btn-text-theme1"
              : "normal-text-theme" + currTheme
          } ${
            text === "DEL"
              ? `white-text ${`dif-color-theme${currTheme}-key1`}`
              : ""
          } ${"btn-theme" + currTheme}`}
        >
          <p>{text}</p>
        </div>
      )}
    </>

    // <div className="button" {btnWidth === 2 ? "two-grid-button" : ""}>
    //   <p>{text}</p>
    // </div>
  );
};

export default Button;

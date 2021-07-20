import Button from "./Button";
import { useState, useEffect } from "react";

const CalcButtons = ({ currTheme, onDisplayTextChange }) => {
  const [commands, setCommands] = useState([
    {
      inputType: 1,
      inputVal: 0,
    },
  ]);

  // Holds the current number
  const [number, setNumber] = useState("0");

  // Holds the text to be displayed on calc display
  const [calcDisplayText, setCalcDisplayText] = useState("0");

  // this function called when a symbol is pressed
  const addCommands = (command) => {};

  const changeNumber = (digit) => {
    let digitVal = Number(digit);
    let numberVal = Number(number);

    if (numberVal === 0 && digitVal === 0) {
      console.log("1");
      setNumber(0);
      // } else if (numberVal === 0) {
      //   console.log("2");
      //   setNumber(0);
    } else {
      console.log("3");
      if (number.toString() === "0") {
        setNumber(digit);
      } else {
        setNumber(number.toString() + digit.toString());
      }
    }

    console.log(`Number is: ${number}`);

    // onDisplayTextChange(number);
  };

  const doSymbolActions = (symbol) => {
    switch (symbol) {
      case "+":
        setCalcDisplayText(calcDisplayText + "" + symbol);
        break;

      default:
        console.warn(`weird symbol received: ${symbol}`);
    }

    // reset number state
  };

  // IMPORTANT: Used to run code on initial render AND on every render (when a state changes)
  /* 
  useEffect(() => {
    onDisplayTextChange(number);
    console.log("useEffect called");
  });
  */

  // The use effect below runs on the initial render AND when the number state changes

  useEffect(() => {
    // update display text state
    setCalcDisplayText(number);

    console.log("useEffect for number called");
  }, [number]);

  // runs when display text changes
  useEffect(() => {
    // update the actual calculator text in the display
    onDisplayTextChange(calcDisplayText);

    console.log("useEffect for displayText called");
  }, [calcDisplayText]);

  // Reset number function?

  return (
    <div className={`calc-buttons ${"calc-buttons-theme" + currTheme}`}>
      <Button
        text={7}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={changeNumber}
      ></Button>
      <Button
        text={8}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={changeNumber}
      ></Button>
      <Button
        text={9}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={changeNumber}
      ></Button>
      <Button
        text="DEL"
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
      ></Button>
      <Button
        text={4}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={changeNumber}
      ></Button>
      <Button
        text={5}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={changeNumber}
      ></Button>
      <Button
        text={6}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={changeNumber}
      ></Button>
      <Button
        text="+"
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doSymbolActions}
      ></Button>
      <Button
        text={1}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={changeNumber}
      ></Button>
      <Button
        text={2}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={changeNumber}
      ></Button>
      <Button
        text={3}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={changeNumber}
      ></Button>
      <Button
        text="-"
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doSymbolActions}
      ></Button>
      <Button
        text="."
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
      ></Button>
      <Button
        text={0}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={changeNumber}
      ></Button>
      <Button
        text="/"
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doSymbolActions}
      ></Button>
      <Button
        text="x"
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doSymbolActions}
      ></Button>
      <Button
        text="RESET"
        wideButtonType={1}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
      ></Button>
      <Button
        text="="
        wideButtonType={2}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doSymbolActions}
      ></Button>
    </div>
  );
};

export default CalcButtons;

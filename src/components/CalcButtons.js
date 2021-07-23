import Button from "./Button";
import { useState, useEffect } from "react";

const CalcButtons = ({ currTheme, onDisplayTextChange }) => {
  // Holds the current number (will be used for checking if decimal point already included in number)
  const [number, setNumber] = useState("0");

  // Holds the text to be displayed on calc display
  const [calcDisplayText, setCalcDisplayText] = useState("0");

  // Boolean used to track if decimal point was used
  const [decimalPointUsed, setDecimalPointUsed] = useState(false);

  // Does actions related to the button clicked
  const doButtonActions = (text) => {
    console.log("doButtonActions called");

    // Check if text is a symbol
    let symbolPassed = false;
    symbolPassed = isCharSymbol(text);

    if (symbolPassed === true) setDecimalPointUsed(false);

    // Check if text is a command (e.g. DEL, RESET, =)
    switch (text) {
      case "DEL":
        if (calcDisplayText.length > 0) {
          if (calcDisplayText === "0") return;

          // modify the current number stored
          let modifiedDisplayText = calcDisplayText.substring(
            0,
            calcDisplayText.length - 1
          );
          setNumber(modifiedDisplayText);
          return setCalcDisplayText(modifiedDisplayText);
        }
        return;
      case "RESET":
        return resetCalcDisplay();
      case "=":
        let origText = calcDisplayText;
        let solution = performCalculations(calcDisplayText);
        if (solution === origText) return; // Do nothing because the method did not calculate anything
        setNumber(solution);
        return setCalcDisplayText(solution);
      default:
        // Do nothing, not a command.
        break;
    }

    // Check for double symbols
    let lastCharWasSymbol = wasLastCharSymbol(calcDisplayText);
    if (lastCharWasSymbol && symbolPassed === true) return; // Do nothing. (e.g. '/+' is not valid, so keep it at '/')

    // Check if 0 and symbol
    if (Number(calcDisplayText) === 0 && symbolPassed) return; // Do nothing.

    // Check if 0 was entered when the display was already zero
    if (calcDisplayText === "0" && text === "0") return; // Do nothing.

    // calc text is valued at zero then use the char entered
    if (Number(calcDisplayText) === 0) return setCalcDisplayText(text);

    if (decimalPointUsed === true && text === ".") {
      return;
    }
    if (text === ".") {
      setDecimalPointUsed(true);
    }

    console.log("updated display text");
    // Display the text entered by the user.
    setCalcDisplayText(calcDisplayText.toString() + text.toString());

    // reset number use state if symbol was passed
    // TODO: Adjust when solution is given, maybe reset when = is pressed??
    if (symbolPassed) setNumber("0");
  };

  // Determines whether last char was a symbol
  const wasLastCharSymbol = (text) => {
    let charWasSymbol = false;

    if (text.length > 0) {
      let char = text.charAt(text.length - 1);

      charWasSymbol = isCharSymbol(char);
    }

    return charWasSymbol;
  };

  const isCharSymbol = (char) => {
    let isSymbol = false;
    switch (char) {
      case "+":
        isSymbol = true;
        break;
      case "-":
        isSymbol = true;
        break;
      case "x":
        isSymbol = true;
        break;
      case "/":
        isSymbol = true;
        break;
      default:
        // Do nothing since it is not a symbol
        break;
    }

    return isSymbol;
  };

  const performCalculations = (calcString) => {
    let solution = 0;
    let symbols = calcString.split(/[1234567890.\s]+/);
    symbols = symbols.filter((element) => element); // removing empty elements

    let numbersAndSymbols = calcString.split(/((?:^-)?[0-9\.]+)/g);
    // removing empty elements
    numbersAndSymbols = numbersAndSymbols.filter((element) => element);

    if (Number(numbersAndSymbols[0]) < 0) symbols.shift();

    // Error checking (e.g. "2 +" is invalid ).
    if (numbersAndSymbols.length < 3) return calcString;

    let symbolIndex = 0;

    solution = Number(numbersAndSymbols[0]);
    for (let i = 0; i < numbersAndSymbols.length; i++) {
      if (i % 2 === 0) {
        // Number
        console.log(`number: ${numbersAndSymbols[i]}`);
        if (i >= 2) {
          // do actual calculation with 2 numbers
          let symbol = symbols[symbolIndex];
          switch (symbol) {
            case "+":
              solution = solution + Number(numbersAndSymbols[i]);
              console.log(`Adding ${solution} + ${numbersAndSymbols[i]}`);
              break;
            case "-":
              solution = solution - Number(numbersAndSymbols[i]);
              console.log(`Subtracting ${solution} - ${numbersAndSymbols[i]}`);
              break;
            case "x":
              solution = solution * Number(numbersAndSymbols[i]);
              break;
            case "/":
              solution = solution / Number(numbersAndSymbols[i]);
              break;

            default:
              console.log(`default reached: ${symbol}`);
              break;
          }
          symbolIndex++;
        }
      }
    }

    console.log(`Solution = ${solution}`);
    return solution;
  };

  // Reset calculator display text
  const resetCalcDisplay = () => {
    setCalcDisplayText("0");
    setNumber("0");
    setDecimalPointUsed(false);
  };

  // runs when display text changes
  useEffect(() => {
    // update the actual calculator text in the display
    onDisplayTextChange(calcDisplayText);

    console.log("useEffect for displayText called!!!!!!");
  }, [calcDisplayText]);

  // Reset number function?

  return (
    <div className={`calc-buttons ${"calc-buttons-theme" + currTheme}`}>
      <Button
        text={7}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text={8}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text={9}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text="DEL"
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text={4}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text={5}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text={6}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text="+"
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text={1}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text={2}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text={3}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text="-"
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text="."
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text={0}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text="/"
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text="x"
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text="RESET"
        wideButtonType={1}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
      <Button
        text="="
        wideButtonType={2}
        currTheme={currTheme}
        onDisplayTextChange={onDisplayTextChange}
        onButtonClick={doButtonActions}
      ></Button>
    </div>
  );
};

export default CalcButtons;

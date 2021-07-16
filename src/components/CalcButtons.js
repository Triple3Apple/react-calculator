import Button from "./Button";

const CalcButtons = ({ currTheme }) => {
  return (
    <div className="calc-buttons">
      <Button text={7} themeNum={currTheme}></Button>
      <Button text={8} themeNum={currTheme}></Button>
      <Button text={9} themeNum={currTheme}></Button>
      <Button text="DEL" themeNum={currTheme}></Button>
      <Button text={4} themeNum={currTheme}></Button>
      <Button text={5} themeNum={currTheme}></Button>
      <Button text={6} themeNum={currTheme}></Button>
      <Button text="+" themeNum={currTheme}></Button>
      <Button text={1} themeNum={currTheme}></Button>
      <Button text={2} themeNum={currTheme}></Button>
      <Button text={3} themeNum={currTheme}></Button>
      <Button text="-" themeNum={currTheme}></Button>
      <Button text="." themeNum={currTheme}></Button>
      <Button text={0} themeNum={currTheme}></Button>
      <Button text="/" themeNum={currTheme}></Button>
      <Button text="x" themeNum={currTheme}></Button>
      <Button text="RESET" wideButtonType={1} themeNum={currTheme}></Button>
      <Button text="=" wideButtonType={2} themeNum={currTheme}></Button>
    </div>
  );
};

export default CalcButtons;

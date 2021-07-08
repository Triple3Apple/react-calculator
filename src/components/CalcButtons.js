import Button from "./Button";

const CalcButtons = () => {
  return (
    <div className="calc-buttons">
      <Button text={7}></Button>
      <Button text={8}></Button>
      <Button text={9}></Button>
      <Button text="DEL"></Button>
      <Button text={4}></Button>
      <Button text={5}></Button>
      <Button text={6}></Button>
      <Button text="+"></Button>
      <Button text={1}></Button>
      <Button text={2}></Button>
      <Button text={3}></Button>
      <Button text="-"></Button>
      <Button text="."></Button>
      <Button text={0}></Button>
      <Button text="/"></Button>
      <Button text="x"></Button>
      <Button text="RESET" wideButtonType={1}></Button>
      <Button text="=" wideButtonType={2}></Button>
    </div>
  );
};

export default CalcButtons;

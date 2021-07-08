const Button = ({ text, wideButtonType }) => {
  // gridColumnStart: {1}, gridColumnEnd: 4

  return (
    <>
      {wideButtonType === 1 ? (
        <div className="button two-grid-button1">
          <p>{text}</p>
        </div>
      ) : wideButtonType === 2 ? (
        <div className="button two-grid-button2">
          <p>{text}</p>
        </div>
      ) : (
        <div className="button">
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

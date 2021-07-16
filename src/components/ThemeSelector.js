const ThemeSelector = ({ onThemeChange }) => {
  return (
    <div className="theme-selector">
      <h3 className="theme-text">THEME</h3>
      <div className="selector-container">
        <div className="numbers">
          <h3>1</h3>
          <h3>2</h3>
          <h3>3</h3>
        </div>
        <div className="selector">
          <div
            className="theme-selection theme-selection1"
            onClick={() => onThemeChange(1)}
          ></div>
          <div
            className="theme-selection theme-selection2"
            onClick={() => onThemeChange(2)}
          ></div>
          <div
            className="theme-selection theme-selection3"
            onClick={() => onThemeChange(3)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;

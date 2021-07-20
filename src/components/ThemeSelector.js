const ThemeSelector = ({ onThemeChange, currTheme }) => {
  return (
    <div className="theme-selector">
      <h3 className={`theme-text ${"normal-text-theme" + currTheme}`}>THEME</h3>
      <div className="selector-container">
        <div className={`numbers ${"normal-text-theme" + currTheme}`}>
          <h3>1</h3>
          <h3>2</h3>
          <h3>3</h3>
        </div>
        <div className={`selector ${"calc-buttons-theme" + currTheme}`}>
          <div
            className="theme-selection theme-selection1"
            onClick={() => onThemeChange(1)}
            style={{ opacity: `${currTheme === 1 ? "100" : "0"}` }}
          ></div>
          <div
            className="theme-selection theme-selection2"
            onClick={() => onThemeChange(2)}
            style={{ opacity: `${currTheme === 2 ? "100" : "0"}` }}
          ></div>
          <div
            className="theme-selection theme-selection3"
            onClick={() => onThemeChange(3)}
            style={{ opacity: `${currTheme === 3 ? "100" : "0"}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;

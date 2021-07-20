import ThemeSelector from "./ThemeSelector";

const Header = ({ onThemeChange, currTheme }) => {
  return (
    <header className="header-container">
      <h1 id="app-name" className={"normal-text-theme" + currTheme}>
        calc
      </h1>
      <ThemeSelector
        onThemeChange={onThemeChange}
        currTheme={currTheme}
      ></ThemeSelector>
    </header>
  );
};

export default Header;

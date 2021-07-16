import ThemeSelector from "./ThemeSelector";

const Header = ({ onThemeChange }) => {
  return (
    <header className="header-container">
      <h1 id="app-name">calc</h1>
      <ThemeSelector onThemeChange={onThemeChange}></ThemeSelector>
    </header>
  );
};

export default Header;

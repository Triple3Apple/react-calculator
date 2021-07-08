import ThemeSelector from "./ThemeSelector";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 id="app-name">calc</h1>
      <ThemeSelector></ThemeSelector>
    </div>
  );
};

export default Header;

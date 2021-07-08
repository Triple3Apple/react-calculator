import Header from "./components/Header";
import CalcDisplay from "./components/CalcDisplay";
import CalcButtons from "./components/CalcButtons";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <div className="calculator-container">
        <Header></Header>
        <CalcDisplay></CalcDisplay>
        <CalcButtons></CalcButtons>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

import "./App.css";
import HusForm from "./Components/Form/HusForm";
import StdForm from "./Components/Form/StdForm";
import Header from "./Components/Header/Header";
import Rules from "./Components/Rules/Rules";

function App() {
  return (
    <>
      <Header />
      <StdForm title="Standartinės apdailos" />
      <HusForm title="Huseby/Foss" />
      <Rules />
      <footer>© Svenheim 2025</footer>
    </>
  );
}

export default App;

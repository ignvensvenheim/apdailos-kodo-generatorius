import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Rules from "./Components/Rules/Rules";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <div className="formsContainer">
        <Form title="STANDARTINĖS APDAILOS" formType="standard" />
        <Form title="HUSEBY / FOSS" formType="hus" />
        <Form title="DAŽYMAS" formType="paint" />
      </div>
      <Rules />
      <footer>© Svenheim 2025</footer>
    </div>
  );
}

export default App;

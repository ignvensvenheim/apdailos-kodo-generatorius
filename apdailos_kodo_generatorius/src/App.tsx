import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Rules from "./Components/Rules/Rules";

function App() {
  return (
    <>
      <Header />
      <Form title="STANDARTINĖS APDAILOS" formType="standard" />
      <Form title="HUSEBY / FOSS" formType="hus" />
      <Form title="DAŽYMAS" formType="paint" />
      <Rules />
      <footer>© Svenheim 2025</footer>
    </>
  );
}

export default App;

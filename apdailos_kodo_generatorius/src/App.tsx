import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Rules from "./Components/Rules/Rules";

import StdSurfaceInfoBox from "./Components/StdSurfaceInfoBox/StdSurfaceInfoBox";
import { useContextData } from "./context/Context";

function App() {
  const { lang, setLang, showStdSurfWarning } = useContextData();

  return (
    <div className="appContainer">
      <header>
        <Header />
        <div className="langBtnContainer">
          <button onClick={() => setLang("en")}>en</button>
          <button onClick={() => setLang("lt")}>lt</button>
        </div>
      </header>
      <div className="formsContainer">
        <Form
          title={lang === "lt" ? "STANDARTINĖS APDAILOS" : "STANDARD DECOR"}
          formType="standard"
        />
        <Form title={lang === "lt" ? "DAŽYMAS" : "PAINT"} formType="paint" />
        <Form title="HUSEBY / FOSS" formType="hus" />
      </div>
      {showStdSurfWarning ? <StdSurfaceInfoBox /> : ""}
      <Rules />
      <footer style={{ marginTop: "3rem" }}>© Svenheim 2025</footer>
    </div>
  );
}

export default App;

import { useContext } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Rules from "./Components/Rules/Rules";
import { LangContext } from "./context/LangContext";

function App() {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("LangContext must be used within a LangProvider");
  }

  const { lang, setLang } = context;

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
      <Rules />
      <footer style={{ marginTop: "3rem" }}>© Svenheim 2025</footer>
    </div>
  );
}

export default App;

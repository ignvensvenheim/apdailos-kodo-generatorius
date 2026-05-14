import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Rules from "./Components/Rules/Rules";
import { useTranslation } from "react-i18next";
import { Bounce, ToastContainer } from "react-toastify";

import StdSurfaceInfoBox from "./Components/StdSurfaceInfoBox/StdSurfaceInfoBox";
import { useContextData } from "./context/Context";

function App() {
  const { showStdSurfWarning } = useContextData();
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language).startsWith("lt")
    ? "lt"
    : "en";

  const handleLanguageChange = (language: "en" | "lt") => {
    void i18n.changeLanguage(language);
  };

  return (
    <>
      <header>
        <div className="headerInner">
          <Header />
          <div className="lang-toggle" aria-label={t("language.label")}>
            <button
              type="button"
              className={lang === "en" ? "lang-btn active" : "lang-btn"}
              aria-pressed={lang === "en"}
              onClick={() => handleLanguageChange("en")}
            >
              {t("language.english")}
            </button>
            <button
              type="button"
              className={lang === "lt" ? "lang-btn active" : "lang-btn"}
              aria-pressed={lang === "lt"}
              onClick={() => handleLanguageChange("lt")}
            >
              {t("language.lithuanian")}
            </button>
          </div>
        </div>
      </header>
      <main className="page page--home">
        <div className="formsContainer">
          <Form title={t("forms.standardDecor")} formType="standard" />
          <Form title={t("forms.paint")} formType="paint" />
          <Form title={t("forms.hus")} formType="hus" />
        </div>
        {showStdSurfWarning ? <StdSurfaceInfoBox /> : ""}
        <Rules />
        <footer style={{ marginTop: "3rem" }}>© Svenheim 2025</footer>
      </main>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;

import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Rules from "./Components/Rules/Rules";

function App() {
  return (
    <>
      <Header />
      <Form title="Standartinės apdailos" />
      <Rules />
      <footer>© Svenheim 2025</footer>
    </>
  );
}

export default App;

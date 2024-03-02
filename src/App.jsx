import "./App.css";
import { useToggle } from "./useToggle";

function Demo() {
  const [booleanValue, toggleBooleanValue] = useToggle();
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return (
    <>
      <button onClick={() => toggle()}>{value}</button>
      <button onClick={() => toggle("orange")}>to orange</button>
      <button onClick={() => toggleBooleanValue()}>
        {booleanValue.toString()}
      </button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Demo />
        </div>
      </header>
    </div>
  );
}

export default App;

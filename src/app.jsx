import Search from "./components/search";
import "./app.css";

function App() {
  return (
    <div id="app">
      <hgroup>
        <h1>React Weather</h1>
        <p>Enter a city name to get the weather</p>
      </hgroup>
      <Search />
    </div>
  );
}

export default App;

import './App.css';
import ThemeContext from "./components/ThemeContext"
import Home from "./components/home"

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Home />
      </ThemeContext>
    </div>
  );
}

export default App;

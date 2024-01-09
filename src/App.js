import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data.json";
let Cards = data.map((item) => {
  return <Card info={item} />;
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="places">{Cards}</div>
    </div>
  );
}

export default App;

import "./App.css";
import Urlap from "./component/Urlap";
import DataService from "./model/DataService";

const ds = new DataService();

function App() {
  function kuld(adat) {
    console.log(adat);
    useEffect(() => {
      // végpont csak példa, backend nélkül nem jó úgysem :D
      ds.postData(vegpont, adat);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Űrlap</h1>
      </header>
      <Urlap kuld={kuld}></Urlap>
    </div>
  );
}

export default App;

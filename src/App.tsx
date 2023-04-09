import "./App.css";
import "./global.css";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";

function App() {
  return (
    <div>
      <Header />
      <main className="wrapper">
        <Filters />
      </main>
    </div>
  );
}

export default App;

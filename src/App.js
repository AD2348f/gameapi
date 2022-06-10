import "./App.css";
import GetApi from "./components/GetApi";
import { useState } from "react";
import List from "./components/List";


function App() {
  const [games, setGames] = useState([]);

  return (
    <>
      <GetApi setGames={setGames}/>
      <List games={games} />
    </>
  );
}
export default App;

import "./App.css";
import GetApi from "./components/GetApi";
import { useState } from "react";
import List from "./components/List";
import Menu from "./components/Menu";


function App() {
  const [games, setGames] = useState([]);

  return (
    <>
      <GetApi setGames={setGames}/>
      <Menu />
      <List games={games} />
    </>
  );
}
export default App;

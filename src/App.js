import "./App.css";
import GetApi from "./components/GetApi";
import { useState } from "react";


function App() {
  const [games, setGames] = useState([]);

  return (
    <>
      <GetApi setGames={setGames}/>
    </>
  );
}
export default App;

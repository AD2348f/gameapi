import "./App.css";
import GetApi from "./components/GetApi";
import { useState } from "react";
import List from "./components/List";
import Menu from "./components/Menu";


export default function App() {
  const [plattformFilter, setplattformFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("mmorpg");
  const [sorting, setSorting] = useState("");
  const [games, setGames] = useState([]);
  const [filterActive, setFilterActive] = useState(false);

  return (
    <>
      <Menu
        setplattformFilter={setplattformFilter}
        setFilterActive={setFilterActive}
        filterActive={filterActive}
        setCategoryFilter={setCategoryFilter}
        setSorting={setSorting}
        plattformFilter={plattformFilter}
      />
      <List games={games} />
      <GetApi
        sorting={sorting}
        plattformFilter={plattformFilter}
        categoryFilter={categoryFilter}
        filterActive={filterActive}
        setGames={setGames}
      />
    </>
  );
};
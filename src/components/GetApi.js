import { useEffect } from "react";
import axios from "axios";

function GetApi({
  sorting,
  plattformFilter,
  categoryFilter,
  filterActive,
  setGames,
}) {
  const options1 = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: {
      "sort-by": `${sorting}`,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const options2 = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: {
      platform: `${plattformFilter}`,
      category: `${categoryFilter}`,
      "sort-by": `${sorting}`,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(filterActive ? options2 : options1)
      .then(function (response) {
        setGames(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [plattformFilter, categoryFilter, sorting, filterActive]);
}

export default GetApi;

// process.env.REACT_APP_ACCESS_TOKEN,
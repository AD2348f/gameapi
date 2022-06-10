import { useEffect } from "react";
import axios from "axios";

function GetApi({setGames}) {

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_ACCESS_TOKEN,
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      useEffect(() => {
      axios
      .request(options)
      .then(function (response) {
        setGames(response.data);
        console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
    }, []);

    
}

export default GetApi;
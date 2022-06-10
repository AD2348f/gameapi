function List({ games }) {
    const listItems = games.map((game) => (
        <div key={game.id} className="gameList">
        <div className="gameCard">
          <div className="gameTitle">{game.title}</div>
          <div className="cardDescriptionWrapper">
            <p className="cardDescription">Category:</p> {game.genre}
          </div>
          <div>
            <p className="cardDescription">Description:</p>
            {game.short_description}
          </div>
          <div>
            <div className="cardDescriptionWrapper">
              <p className="cardDescription">Plattform:</p> {game.platform}
            </div>
          </div>
          <div>
            <img src={`${game.thumbnail}`} className="gameImg" alt="game" />
          </div>
        </div>
      </div>
  ));
    return <div className="listWrapper">{listItems}</div>;
}

export default List;
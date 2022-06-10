function List({ games }) {
    const listItems = games.map((game) => (
        <div key={game.id} className="gameList">
          <div>
            <div>{game.title}</div>
            <div>
              <p>Category:</p> {game.genre}
            </div>
            <div>
              <p>Description:</p>
              {game.short_description}
            </div>
            <div>              
                <p>Plattform:</p> {game.platform}              
            </div>
            <div>
              <img src={`${game.thumbnail}`} alt="game"/>
            </div>
          </div>
        </div>
  ));
    return <div className="listWrapper">{listItems}</div>;
}

export default List;
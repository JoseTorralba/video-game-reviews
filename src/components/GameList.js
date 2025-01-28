const GameList = ({ games, onSelectGame }) => {
  return (
    <div className='sidebar'>
      <ul className='sidebar-list'>
        <h2>Results found: {games.length}</h2>
        {games?.map(game => (
          <li key={game.id} onClick={() => onSelectGame(game.id)}>
            <img
              className='poster'
              src={game.background_image}
              alt={game.Title}
            />

            <div>
              <p>{game.name}</p>
              <p>Released: {game.released}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;

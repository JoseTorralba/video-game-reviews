const GameList = ({ games }) => {
  console.log(games);
  return (
    <div className='sidebar'>
      <ul className='sidebar-list'>
        <h2>Results found: X</h2>
        {games?.map(game => (
          <li className='test' key={game.id}>
            <img className='poster' src={game.Poster} alt={game.Title} />

            <div>
              <p>{game.Title}</p>
              <p>Released: {game.Year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;

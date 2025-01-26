const GameOverview = ({ gameOverview }) => {
  return (
    <div className='overview'>
      <ul className='game-overview'>
        {gameOverview?.map(game => (
          <li key={game.id}>
            <div className='game'>
              <img src={game.Poster} alt={game.Title} />

              <div>
                <h2>{game.Title}</h2>
                <h3>{game.Year}</h3>
                <p>{game.Summary}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameOverview;

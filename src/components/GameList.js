import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const GameList = ({ games, onSelectGame, isLoading, error }) => {
  return (
    <div className='sidebar'>
      <ul className='sidebar-list'>
        <h2>Results found: {games.length}</h2>
        {error && <ErrorMessage message={error} />}
        {isLoading ? (
          <Loader />
        ) : (
          games?.map(game => (
            <li key={game.id} onClick={() => onSelectGame(game.id)}>
              <div
                className='game-list-image'
                style={{ backgroundImage: `url(${game.background_image})` }}
              ></div>
              <div>
                <p>{game.name}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default GameList;

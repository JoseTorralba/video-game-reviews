import { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';
import StarRating from './StarRating';
import Loader from './Loader';

const GameOverview = ({
  selectedId,
  onAddReview,
  onDeleteReview,
  reviewed,
}) => {
  const [game, setGame] = useState({});
  const [userRating, setUserRating] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const isPlayed = reviewed.map(game => game.id).includes(selectedId);

  const playedUserRating = reviewed.find(
    game => game.id === selectedId
  )?.userRating;

  function handleAdd() {
    const newPlayedGame = {
      background_image: game.background_image,
      name: game.name,
      id: selectedId,
      userRating,
    };
    onAddReview(newPlayedGame);
    setUserRating('');
  }

  useEffect(() => {
    const controller = new AbortController();
    async function getGameOverview() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(
          `https://api.rawg.io/api/games/${selectedId}?key=0dded3278c844ab48fc5604e089ddc04`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error('Something went wrong with fetching the game...');

        const data = await res.json();
        if (data.Response === 'False') throw new Error('Game not found');

        setGame(data);
        setError('');
      } catch (err) {
        setError(err.message);
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getGameOverview();
  }, [selectedId]);

  useEffect(() => {
    if (!game.name) return;
    document.title = game.name;

    if (game.name === 'NULL') {
      document.title = 'Video Game Reviews';
    }

    return () => {
      document.title = 'Video Game Reviews';
    };
  });

  return (
    <div className='overview'>
      {!selectedId && (
        <p className='overview-tip'>Choose a game from the list to view info</p>
      )}

      {error && <ErrorMessage message={error} />}
      {isLoading ? (
        <Loader />
      ) : (
        selectedId && (
          <ul className='overview-game'>
            <li key={game.id}>
              <div className='overview-container'>
                <div
                  className='overview-image'
                  style={{ backgroundImage: `url(${game.background_image})` }}
                ></div>

                <div className='overview-textbox'>
                  <div>
                    <h2>{game.name}</h2>
                    <h3>Release On: {game.released}</h3>
                  </div>

                  <div>
                    {!isPlayed ? (
                      <>
                        <div className='overview-rating'>
                          <h3>Rate This Game</h3>
                          <StarRating
                            maxRating={5}
                            size={20}
                            onSetRating={setUserRating}
                          />
                        </div>
                        {userRating > 0 && (
                          <button className='overview-btn' onClick={handleAdd}>
                            Add My Review
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        <h3>You rated this game {playedUserRating} stars!</h3>
                        <button
                          className='overview-btn'
                          onClick={() => onDeleteReview(game.id)}
                        >
                          Remove Review
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div
                  className='overview-summary'
                  dangerouslySetInnerHTML={{ __html: game.description }}
                ></div>
              </div>
            </li>
          </ul>
        )
      )}
    </div>
  );
};

export default GameOverview;

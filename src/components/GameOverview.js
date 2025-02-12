import { useEffect, useState } from 'react';
import StarRating from './StarRating';

const GameOverview = ({
  selectedId,
  onAddReview,
  onDeleteReview,
  reviewed,
}) => {
  const [game, setGame] = useState({});
  const [userRating, setUserRating] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const KEY = 'a1fef96712d845f4a4186f1ee3e7033a';

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

  useEffect(
    function () {
      async function getGameOverview() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.rawg.io/api/games/${selectedId}?key=${KEY}`
        );

        const data = await res.json();
        setGame(data);
        setIsLoading(false);
      }

      getGameOverview();
    },
    [selectedId]
  );

  return (
    <div className='overview'>
      {isLoading ? (
        <p>Loading...</p>
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
                    <h3>Release Date: {game.released}</h3>
                  </div>

                  <div>
                    {!isPlayed ? (
                      <>
                        <StarRating
                          maxRating={10}
                          size={20}
                          onSetRating={setUserRating}
                        />

                        {userRating > 0 && (
                          <button className='overview-btn' onClick={handleAdd}>
                            Add Review
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

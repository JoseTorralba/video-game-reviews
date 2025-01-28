import { useEffect, useState } from 'react';

const GameOverview = ({ gameOverview, selectedId }) => {
  const [game, setGame] = useState({});
  const [gameRelease, setGameRelease] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const KEY = 'a1fef96712d845f4a4186f1ee3e7033a';

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
                <div className='overview-header'>
                  <img src={game.background_image} alt={game.name} />

                  <div className='overview-textbox'>
                    <h2>{game.name}</h2>
                    <h3>Release Date: {game.released}</h3>
                  </div>
                </div>

                <div className='overview-summary'>
                  <p>{game.description_raw}</p>
                </div>
              </div>
            </li>
          </ul>
        )
      )}
    </div>
  );
};

export default GameOverview;

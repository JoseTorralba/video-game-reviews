import { useState } from 'react';

const GameReviews = ({ reviewed }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='reviews'>
      <div className='reviews-dropdown'>
        <h2>My Reviewed Games</h2>
        <button className='btn-toggle' onClick={() => setIsOpen(open => !open)}>
          {isOpen ? '-' : '+'}
        </button>
      </div>

      {isOpen && (
        <ul className='reviews-list'>
          {reviewed.map(game => (
            <li className='reviews-item'>
              <img
                className='reviews-poster'
                src={game.Poster}
                alt={game.Title}
              />

              <div className='reviews-info'>
                <h3>{game.Title}</h3>
                <p>Stars Rating</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameReviews;

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
          <li className='reviews-item'>
            <div className='reviews-info'>
              <p>Reviews Here</p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default GameReviews;

import { Link } from 'react-router-dom';
import christianChukwu from '../../data/legends/christian-chukwu.js';

function LegendHub() {
  return (
    <div className="page page-narrow">
      <p className="eyebrow">Legend {christianChukwu.legendNumber}</p>
      <h1>{christianChukwu.name}</h1>
      <p className="lede">"{christianChukwu.nickname}"</p>
      <p>{christianChukwu.summary}</p>

      <div className="simple-list">
        <Link className="simple-list__item" to="/legends/christian-chukwu/story">
          Comic Story
        </Link>
        <Link className="simple-list__item" to="/legends/christian-chukwu/film">
          Short Film
        </Link>
        <Link className="simple-list__item" to="/legends/christian-chukwu/graphics">
          Graphics
        </Link>
        <Link className="simple-list__item" to="/legends/christian-chukwu/apparel">
          Apparel
        </Link>
        <Link className="simple-list__item" to="/legends/christian-chukwu/cards">
          Collectible Cards
        </Link>
      </div>
    </div>
  );
}

export default LegendHub;

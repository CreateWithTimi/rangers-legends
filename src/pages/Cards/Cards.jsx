import christianChukwu from '../../data/legends/christian-chukwu.js';

function Cards() {
  return (
    <div className="page page-narrow">
      <p className="eyebrow">Collectible Cards</p>
      <h1>History as the collectible system.</h1>
      <p className="lede">Card archive foundation for Collection 001.</p>
      <div className="simple-list">
        {christianChukwu.cards.map((card) => (
          <article className="simple-list__item" key={card.id}>
            {card.title}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Cards;

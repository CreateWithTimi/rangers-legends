import christianChukwu from '../../data/legends/christian-chukwu.js';

function Apparel() {
  return (
    <div className="page page-narrow">
      <p className="eyebrow">Apparel</p>
      <h1>Collection 001</h1>
      <p className="lede">Editorial apparel collection foundation. Commerce is not implemented.</p>
      <div className="simple-list">
        {christianChukwu.apparel.map((item) => (
          <article className="simple-list__item" key={item.id}>
            {item.title}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Apparel;

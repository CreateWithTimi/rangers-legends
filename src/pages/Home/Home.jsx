import { Link } from 'react-router-dom';
import christianChukwu from '../../data/legends/christian-chukwu.js';
import PlaceholderBlock from '../../components/ui/PlaceholderBlock.jsx';

function Home() {
  return (
    <div className="page home-page">
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow">Archive x Editorial x Modern Digital Product</p>
          <h1>Rangers Legends</h1>
          <p className="lede">The stories behind the shirt.</p>
        </div>
        <div className="home-hero__placeholder" aria-label="Approved hero artwork placeholder">
          <span>Approved hero artwork placeholder</span>
        </div>
      </section>

      <section className="featured-legend">
        <div>
          <p className="eyebrow">Legend {christianChukwu.legendNumber}</p>
          <h2>{christianChukwu.name}</h2>
          <p className="featured-legend__nickname">"{christianChukwu.nickname}"</p>
          <p>{christianChukwu.shortTitle}</p>
        </div>
        <Link className="button-link" to="/legends/christian-chukwu">
          Open Legend Hub
        </Link>
      </section>

      <div className="home-grid">
        <PlaceholderBlock eyebrow="Comic Story" title="History, drawn again.">
          <p>Reserved for the approved 8-page comic story.</p>
        </PlaceholderBlock>

        <PlaceholderBlock eyebrow="Short Film" title="Coming Soon">
          <p>Film page foundation exists without release date, trailer, runtime, or credits.</p>
        </PlaceholderBlock>

        <PlaceholderBlock eyebrow="Apparel" title="Wear the history.">
          <p>Collection preview only. No prices, sizes, inventory, or shopping flow.</p>
        </PlaceholderBlock>

        <PlaceholderBlock eyebrow="Cards" title="Collect the legacy.">
          <p>Collector archive foundation for C01 through C05.</p>
        </PlaceholderBlock>

        <PlaceholderBlock eyebrow="Living Archive" title="A platform for future legends.">
          <p>Legend 002 and future collections can be added through data and approved assets.</p>
        </PlaceholderBlock>

        <PlaceholderBlock eyebrow="Collection 001" title="Rangers Legends 001">
          <p>The first collection begins with Christian Chukwu, "Chairman".</p>
        </PlaceholderBlock>
      </div>
    </div>
  );
}

export default Home;

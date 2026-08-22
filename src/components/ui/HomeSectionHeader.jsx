function HomeSectionHeader({ number, eyebrow, title, children }) {
  return (
    <div className="home-section-header">
      <div className="home-section-header__meta" aria-label={`Section ${number}`}>
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="home-section-header__body">
        <h2>{title}</h2>
        {children ? <p>{children}</p> : null}
      </div>
    </div>
  );
}

export default HomeSectionHeader;

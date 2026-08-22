function PlaceholderBlock({ eyebrow, title, children }) {
  return (
    <section className="placeholder-block" aria-label={title}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <div className="placeholder-block__content">{children}</div> : null}
    </section>
  );
}

export default PlaceholderBlock;

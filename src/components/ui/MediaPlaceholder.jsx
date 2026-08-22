function MediaPlaceholder({
  label,
  variant = 'default',
  children,
  src,
  alt = '',
  loading = 'lazy',
  objectPosition,
}) {
  return (
    <figure className={`media-placeholder media-placeholder--${variant}`} aria-hidden={src ? undefined : true}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          style={objectPosition ? { objectPosition } : undefined}
        />
      ) : null}
      <div className="media-placeholder__rule" aria-hidden="true" />
      <div className="media-placeholder__content" aria-hidden="true">
        <span>{label}</span>
        {children}
      </div>
    </figure>
  );
}

export default MediaPlaceholder;

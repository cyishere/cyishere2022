const Figure = ({ src, alt, styles }) => {
  const classes = styles
    ? `flex flex-col items-center mb-6 lg:mb-0 ${styles}`
    : "flex flex-col items-center mb-6 lg:mb-0";

  return (
    <figure className={classes}>
      <img
        className="mb-2"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
      <figcaption className="text-base text-gray-400">{alt}</figcaption>
    </figure>
  );
};

export default Figure;

import React from "react";
import ImageLink from "./ImageLink";
import Details from "./Details";

const MovieComponent = ({
  image,
  link,
  title,
  rating,
  author,
  release_date,
  genre,
  plot,
}) => {
  return (
    <div>
      <ImageLink image={image} link={link} />
      <Details
        title={title}
        rating={rating}
        author={author}
        release_date={release_date}
        genre={genre}
        plot={plot}
      />
    </div>
  );
};

export default MovieComponent;

import React from "react";

const ImageLink = ({ image, link }) => {
  return (
    <div>
      <img className="image" src={image} alt="" />
      <a href={link}>Movie Trailer</a>
    </div>
  );
};

export default ImageLink;

import React from 'react'

const Details = ({title, rating, author, release_date, genre, plot}) => {
  return (
    <div>
      <h5>{title}</h5>
      <p>Movie Rating: {rating}</p>
      <p>Author: {author}</p>
      <p>Release date: {release_date}</p>
      <p>Genre: {genre}</p>
      <p>Plot: {plot}</p>
    </div>
  )
}

export default Details
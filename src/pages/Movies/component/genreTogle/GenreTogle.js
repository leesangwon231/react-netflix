import React from 'react';
import "./GenreTogle.css"

const GenreTogle = ({genre}) => {
  return (
    <div className={"genreToggle"}>
        {genre.name}
    </div>
  );
}

export default GenreTogle;
import React from 'react';
import "./GenreTogle.css"
import {useGenreVideos} from "../../../../hooks/getGenreMovies";
import {useNavigate} from "react-router-dom";

const GenreTogle = ({genre}) => {
    const navigate = useNavigate();
    const onClickGenre = (e) => {
        e.preventDefault();
        navigate(`?sParam=${e.target.id}`)
    }
  return (



    <div className={"genreToggle"} onClick={(e) => onClickGenre(e)} id={genre.name}>
        {genre.name}
    </div>
  );
}

export default GenreTogle;
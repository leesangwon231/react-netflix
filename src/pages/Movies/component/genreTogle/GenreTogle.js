import React, {useState} from 'react';
import "./GenreTogle.css"
import {useGenreVideos} from "../../../../hooks/getGenreMovies";
import {useNavigate} from "react-router-dom";

const GenreTogle = ({genre,active,setActive}) => {
    const navigate = useNavigate();

    const onClickGenre = (e) => {
        e.preventDefault();
        navigate(`?sParam=${e.target.id}`)
        setActive(e.target.innerText);
    }
  return (



    <div className={genre.name === active ? `activeToggle` : "genreToggle"} onClick={(e) => onClickGenre(e)} id={genre.name}>
        {genre.name}
    </div>
  );
}

export default GenreTogle;
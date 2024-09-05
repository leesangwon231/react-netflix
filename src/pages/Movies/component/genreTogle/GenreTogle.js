import React, {useState} from 'react';
import "./GenreTogle.css"
import {useGenreVideos} from "../../../../hooks/getGenreMovies";
import {useNavigate} from "react-router-dom";

const GenreTogle = ({genre,active,setActive,data,setSearchMovies}) => {
    const onClickGenre = (e) => {
        e.preventDefault();
        if(active.name === genre.name){
            setActive("");
            setSearchMovies(data);
        }else{
            let filteredMovies = data?.results.reduce(function(acc,cur){
                if (cur.genre_ids.includes(genre.id)) {
                    acc.push(cur);
                }
                return acc;
            },[])
            setSearchMovies({results: filteredMovies });
            setActive(genre);
        }

    }
  return (

    <div className={genre.name === active.name ? `activeToggle` : "genreToggle"} onClick={(e) => onClickGenre(e)} id={genre.name}>
        {genre.name}
    </div>
  );
}

export default GenreTogle;
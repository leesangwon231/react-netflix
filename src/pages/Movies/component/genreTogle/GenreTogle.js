import React from 'react';
import "./GenreTogle.css"


const GenreTogle = ({genre,active,setActive}) => {



    const onClickGenre = (e) => {
        e.preventDefault();
        if(active.name === genre.name){
            setActive("");
        }else{
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
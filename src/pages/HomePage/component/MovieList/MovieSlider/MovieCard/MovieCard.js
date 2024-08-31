import React from 'react'
import './MovieCard.css'

const MovieCard = ({movie}) => {
    return (
        <div className={"movieCard"} style={{backgroundImage : `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}+)`}}>
        </div>

    )
}

export default MovieCard;
import React from 'react'
import './MovieCard.css'
import {Badge} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {faStar,faUser,faFire} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useMoviesGenres} from "../../../../../../hooks/getGenres";

const MovieCard = ({movie}) => {

    const {data: genreData} =useMoviesGenres();
    const chgGenre = (movieData) => {

        if(!movieData){
            return []
        }

        const genreList = movieData.map((id)=>{
            return genreData.find((e) => e.id === id).name;
        })

        return genreList;
    }

    return (
        <div className={"movieCard"} style={{backgroundImage : `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}+)` }}>
            <div className={"movieInfo"}>
                <h1>{movie.title}</h1>
                <div className={"genres"}>
                    {chgGenre(movie.genre_ids).map((id) => (
                        <Badge c bg={"danger"} className={"genre"}>{id}</Badge>
                    ))}
                </div>

                <div className={"detailInfo"}>
                    <div><FontAwesomeIcon icon={faUser} className={"detailIcon"}/>{movie.vote_average}</div>
                    <div><FontAwesomeIcon icon={faStar} className={"detailIcon"}/>{movie.popularity}</div>
                    <div><FontAwesomeIcon icon={faFire} className={"detailIcon"}/>{movie.adult ? 'over 18' : 'under 18'}</div>
                </div>
            </div>
        </div>

    )
}

export default MovieCard;
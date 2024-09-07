import React from 'react'
import './ReLatedMovieCard.css'
import {Badge} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {faStar,faUser,faFire} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useMoviesGenres} from "../../../../hooks/getGenres";


const ReLatedMovieCard = ({movie,setShow,setDetailData}) => {

    const {data:genreData} =useMoviesGenres();

        const chgGenre = (movieData) => {
            return movieData.map((mid) => {
                const chgGenre = genreData?.find((g) => g.id === mid);
                return chgGenre ? chgGenre.name : '기타';
            });
        }

        const onClickCard = (movieData) => {
            setDetailData(movieData);
            setShow(true);
        }




    return (
        <div className={"reLatedMovieCard"} onClick={()=>onClickCard(movie)} style={{backgroundImage : `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}+)` }}>
            <div className={"reLatedMovieInfo"}>
                <h1>{movie.title}</h1>
                <div className={"reLatedGenres"}>
                    {chgGenre(movie?.genre_ids).map((genreNm, index) => (
                        <Badge key={index} bg="danger" className={"genre"}>{genreNm}</Badge>
                    ))}
                </div>
                <div className={"reLatedDetailInfo"}>
                    <div><FontAwesomeIcon icon={faUser} className={"detailIcon"}/>{movie?.vote_average}</div>
                    <div><FontAwesomeIcon icon={faStar} className={"detailIcon"}/>{movie?.popularity}</div>
                    <div><FontAwesomeIcon icon={faFire} className={"detailIcon"}/>{movie?.adult ? 'over 18' : 'under 18'}</div>
                </div>
            </div>
        </div>

    )
}

export default ReLatedMovieCard;
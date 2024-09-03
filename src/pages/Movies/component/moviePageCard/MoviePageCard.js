import React, {useState} from 'react';
import {Badge} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFire, faStar, faUser} from "@fortawesome/free-solid-svg-icons";
import './MoviePageCard.css'

const moviePageCard = ({movie,setShow,setDetailData,genreData}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks

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
      <div className={"movieCard"} onClick={() => onClickCard(movie)}
           style={{backgroundImage: `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}+)`}}>
          <div className={"movieInfo"}>
              <h1>{movie.title}</h1>
              <div className={"genres"}>
                  {chgGenre(movie?.genre_ids).map((genreNm, index) => (
                      <Badge key={index} bg="danger" className={"genre"}>{genreNm}</Badge>
                  ))}
              </div>

              <div className={"detailInfo"}>
                  <div><FontAwesomeIcon icon={faUser} className={"detailIcon"}/>{movie?.vote_average}</div>
                  <div><FontAwesomeIcon icon={faStar} className={"detailIcon"}/>{movie?.popularity}</div>
                  <div><FontAwesomeIcon icon={faFire} className={"detailIcon"}/>{movie?.adult ? 'over 18' : 'under 18'}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default moviePageCard;
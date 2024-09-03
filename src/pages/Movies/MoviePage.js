import React, {useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom";
import {useSearchMovies} from "../../hooks/getSearchMovies";
import './MoviePage.css'
import {useMoviesGenres} from "../../hooks/getGenres";
import GenreTogle from "./component/genreTogle/GenreTogle";
import MoviePageCard from "./component/moviePageCard/MoviePageCard";
import MovieModal from "../../common/MovieModal/MovieModal";

const MoviePage = () => {

    const [keyword] = useSearchParams();
    const [show, setShow] = useState(false);
    const [detailData , setDetailData] = useState([]);

    const {data:searchMovies} = useSearchMovies(keyword.get('sParam'));
    const {data:genres} = useMoviesGenres();

    return (
        <div className={"wrapper"}>
            <MovieModal show = {show} setShow = {setShow}  detailData={detailData}/>
            <div className={"filterArea"}>
                {genres?.map((genre) => (
                    <GenreTogle genre = {genre}/>
                ))}
            </div>
            <div className={"cardArea"}>
                {searchMovies?.map((movie) => (
                    <MoviePageCard movie={movie} setShow={setShow} setDetailData={setDetailData} genreData = {genres}/>
                ))}
            </div>
        </div>

    )
}

export default MoviePage;
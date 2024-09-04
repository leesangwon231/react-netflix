import React, {useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom";
import {useSearchMovies} from "../../hooks/getSearchMovies";
import './MoviePage.css'
import {useMoviesGenres} from "../../hooks/getGenres";
import GenreTogle from "./component/genreTogle/GenreTogle";
import MoviePageCard from "./component/moviePageCard/MoviePageCard";
import MovieModal from "../../common/MovieModal/MovieModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNation from "../../common/PageNation/PageNation";
const MoviePage = () => {
    
    //장르 검색 키워드 검색
    const [keyword] = useSearchParams();
    const [active , setActive] = useState("");


    // 무피 상세 모달창
    const [show, setShow] = useState(false);
    const [detailData , setDetailData] = useState([]);

    const {data:searchMovies} = useSearchMovies(keyword.get('sParam'));
    const {data:genres} = useMoviesGenres();

    //페이징용
    const [moviesData,setMoviesData] = useState([]);

    return (
        <div className={"wrapper"}>
            <MovieModal show = {show} setShow = {setShow}  detailData={detailData}/>
            <div className={"filterArea"}>
                {genres?.map((genre) => (
                    <GenreTogle genre = {genre} active={active} setActive={setActive}/>
                ))}
            </div>
            <div className={"cardArea"}>
                {moviesData?.map((movie) => (
                    <MoviePageCard movie={movie} setShow={setShow} setDetailData={setDetailData} genreData = {genres}/>
                ))}
            </div>
            <PageNation data = {searchMovies} setMoviesData={setMoviesData} pageNum={14} keyword={keyword}/>
        </div>

    )
}

export default MoviePage;
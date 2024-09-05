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



    //페이징용
    const [page,setPage] = useState(1);
    const {data:searchMovies} = useSearchMovies(keyword.get('sParam') === null ? "" :keyword.get('sParam') ,page);
    const {data:genres} = useMoviesGenres();

    useEffect(() => {
        setPage(1)
    }, [keyword]);

    console.log(searchMovies)
    return (
        <div className={"wrapper"}>
            <MovieModal show = {show} setShow = {setShow}  detailData={detailData}/>
            <div className={"filterArea"}>
                {genres?.map((genre) => (
                    <GenreTogle genre = {genre} active={active} setActive={setActive}/>
                ))}
            </div>
            <div className={"cardArea"}>
                {searchMovies?.results.length === 0
                    ? <div className={"notFound"}><h1>검색 된 결과가 없습니다</h1></div>
                    : searchMovies?.results.map((movie) => (
                    <MoviePageCard key={movie.id} movie={movie} setShow={setShow} setDetailData={setDetailData} genreData={genres}/>
                ))}
            </div>
            <PageNation data = {searchMovies} setPage ={setPage} page={page} keword={keyword}/>
        </div>

    )
}

export default MoviePage;
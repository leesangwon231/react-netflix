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

    const[searchMovies,setSearchMovies]=useState();

    //장르 검색 키워드 검색
    const [keyword] = useSearchParams();
    const [active , setActive] = useState("");


    // 무피 상세 모달창
    const [show, setShow] = useState(false);
    const [detailData , setDetailData] = useState([]);


    //페이징용
    const [page,setPage] = useState(1);

    //정렬용
    const [sortFlag, setSortFlag] = useState(false);

    const {data} = useSearchMovies(keyword.get('sParam') === null ? "" :keyword.get('sParam') ,page);
    const {data:genres} = useMoviesGenres();


    const sortMoviesByPopularity = (movies) => {
        let sortedMovies =  movies.sort((a, b) => b.vote_count - a.vote_count);
        let originData = searchMovies;
        originData.results = sortedMovies;
        setSearchMovies(originData);
        console.log(originData);

    };


    //데이터 세팅
    useEffect(() => {
        setSearchMovies(data);
    }, [data]);
    
    //검색할때 초기화
    useEffect(() => {
        setPage(1)
        setActive("")
    }, [keyword]);
    
    
    //페이지 변화시 필터 초기화
    useEffect(() => {
        setActive("")
    }, [page]);


    

    return (
        <div className={"wrapper"}>
            <MovieModal show = {show} setShow = {setShow}  detailData={detailData}/>
            <div className={"filterArea"}>
                {genres?.map((genre) => (
                    <GenreTogle genre = {genre} active={active} setActive={setActive} data={data} setSearchMovies={setSearchMovies}/>
                ))}
            </div>
            <div className={"sortArea"} onClick={() => sortMoviesByPopularity(searchMovies.results)}>Sorting</div>
            <div className={"cardArea"}>
                {searchMovies?.results.length === 0
                    ? <div className={"notFound"}><h1>검색 된 결과가 없습니다</h1></div>
                    : searchMovies?.results.map((movie) => (
                    <MoviePageCard key={movie.id} movie={movie} setShow={setShow} setDetailData={setDetailData} genreData={genres}/>
                ))}
            </div>
            <PageNation data={data} setPage ={setPage} page={page} keword={keyword}/>
        </div>

    )
}

export default MoviePage;
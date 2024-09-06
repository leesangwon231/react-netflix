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
import {MDBCheckbox} from "mdb-react-ui-kit";
import {ToggleButton} from "react-bootstrap";
import ReLatedMovies from "../ReLatedMovies/ReLatedMovies";
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
    const [checked, setChecked] = useState(false);


    const {data} = useSearchMovies(keyword.get('sParam') === null ? "" :keyword.get('sParam') ,page);
    const {data:genres} = useMoviesGenres();


    const sortMoviesByPopularity = (movies,e) => {
        setChecked(e.currentTarget.checked)
        if(checked){
            setSearchMovies(data);
        }else{
            const sortedMovies = [...movies].sort((a, b) => b.vote_count - a.vote_count);
            setSearchMovies(prev => ({
                ...prev,
                results: sortedMovies
            }));
        }
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
        setChecked(false)
    }, [page]);


    

    return (
        <div className={"wrapper"}>
            <MovieModal show = {show} setShow = {setShow}  detailData={detailData}/>
            {searchMovies?.results.length === 0 ? "" : <div className={"filterArea"}>
                {genres?.map((genre) => (
                    <GenreTogle genre = {genre} active={active} setActive={setActive} data={data} setSearchMovies={setSearchMovies}/>
                ))}
            </div>
            }
            {searchMovies?.results.length === 0 ? "" :<div className={"sortArea"}>
                <ToggleButton
                    id="toggle-check"
                    type="checkbox"
                    className="custom-toggle-btn"
                    variant="outline-danger"
                    checked={checked}
                    value="1"
                    onChange={(e) => sortMoviesByPopularity(searchMovies?.results,e)}
                >
                    시청자순
                </ToggleButton>
            </div>}
            <div className={"cardArea"}>
                {searchMovies?.results.length === 0
                    ? <div className={"notFound"}><ReLatedMovies/></div>
                    : searchMovies?.results.map((movie) => (
                    <MoviePageCard key={movie.id} movie={movie} setShow={setShow} setDetailData={setDetailData} genreData={genres}/>
                ))}
            </div>
            {searchMovies?.results.length === 0 ? "" : <PageNation data={data} setPage ={setPage} page={page} keword={keyword}/>}
        </div>

    )
}

export default MoviePage;
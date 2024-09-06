import React, {useState} from 'react'
import {useReLatedMovies} from "../../hooks/getReLatedMovies";
import {useMoviesGenres} from "../../hooks/getGenres";
import MoviePageCard from "../Movies/component/moviePageCard/MoviePageCard";
import MovieModal from "../../common/MovieModal/MovieModal";
import "./ReLatedMovies.css"

const ReLatedMovies = () => {
    const {data:genres} = useMoviesGenres();
    const {data:reLatedMovies} = useReLatedMovies(genres);
    const [show, setShow] = useState(false);
    const [detailData , setDetailData] = useState([]);
    /**/
    return (
        <div className={"reLatedMoviesArea"}>
            <h1>검색 된 결과가 없습니다 :(</h1>
            <h3>이런 영화는 어때요?</h3>
            <div className={"rLatedcardArea"}>
                <MovieModal show={show} setShow={setShow} detailData={detailData}/>
                {reLatedMovies?.map((movie) => (
                    <MoviePageCard key={movie.id} movie={movie} setShow={setShow} setDetailData={setDetailData}
                                   genreData={genres}/>
                ))}
            </div>
        </div>
    )
}

export default ReLatedMovies;
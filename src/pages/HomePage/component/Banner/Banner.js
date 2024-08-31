import React from 'react'
import {usePopularMovies} from "../../../../hooks/getMovies";
import './Banner.css'
import MovieList from "../MovieList/MovieList";
const Banner = () => {


    return (
        <div className={"banner"}>
            <div className={"main-text"}>
                <h1>영화, 시리즈 등을 무제한으로</h1>
            </div>
        </div>
    )
}

export default Banner;
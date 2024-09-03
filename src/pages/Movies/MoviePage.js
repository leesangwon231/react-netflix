import React, {useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom";
import {useSearchMovies} from "../../hooks/getSearchMovies";
import './MoviePage.css'

const MoviePage = () => {

    const [keyword] = useSearchParams();

    const {data:searchMovies} = useSearchMovies(keyword.get('sParam'))

    console.log(searchMovies);

    return (
        <div className={"wrapper"}>
            <div className={"filterArea"}>

            </div>
            <div className={"cardArea"}>
            </div>
        </div>

    )
}

export default MoviePage;
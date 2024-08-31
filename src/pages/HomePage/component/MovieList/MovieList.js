import React from 'react'
import './MovieList.css'
import MovieSlider from './MovieSlider/MovieSlider'
import {useGetMovies} from "../../../../hooks/getMovies";
const MovieList = ({keyword}) => {

    let searchWord = "";

    if(keyword==="Popular"){
        searchWord = "popular"
    }else if(keyword==="Top Rated"){
        searchWord = "top_rated"
    }else if(keyword==="Upcoming"){
        searchWord = "upcoming"
    }

    const {data,isLoading,isError} = useGetMovies(searchWord);


    if(isLoading){
        <h1>Loading</h1>
    }

    if(isError){
        <h1>Error</h1>
    }



    return (
        <div className={"movieList"}>
            <h1>{keyword}</h1>
            <div className={"slider-containers"}>
                <MovieSlider data = {data}/>
            </div>
        </div>
    )
}

export default MovieList;
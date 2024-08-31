import React from 'react'
import Banner from "./component/Banner/Banner";
import MovieList from "./component/MovieList/MovieList";
import './HomePage.css'

const HomePage = () => {
    return (
        <div className={"homePage"}>
            <Banner/>
            <div className={"movieLists"}>
                <MovieList keyword = {"Popular"}/>
                <MovieList keyword = {"Top Rated"}/>
                <MovieList keyword = {"Upcoming"}/>
            </div>

        </div>
    )
}

export default HomePage;
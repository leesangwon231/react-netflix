import React, {useState} from 'react'
import Banner from "./component/Banner/Banner";
import MovieList from "./component/MovieList/MovieList";
import './HomePage.css'
import MovieModal from "../../common/MovieModal/MovieModal";

const HomePage = () => {
    const [show, setShow] = useState(false);
    const [detailData , setDetailData] = useState([]);
    return (
        <div className={"homePage"}>
            <Banner/>
            <MovieModal show = {show} setShow = {setShow}  detailData={detailData}/>
            <div className={"movieLists"}>
                <MovieList keyword = {"Popular"} setShow = {setShow} setDetailData = {setDetailData} />
                <MovieList keyword = {"Top Rated"} setShow = {setShow} setDetailData = {setDetailData} />
                <MovieList keyword = {"Upcoming"} setShow = {setShow} setDetailData = {setDetailData} />
            </div>
            <div className={"footer"}></div>
        </div>
    )
}

export default HomePage;
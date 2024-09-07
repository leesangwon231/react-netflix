import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useReLatedSelectedMovies} from "../../../hooks/getRatedSelectedMovies";
import React, {useState} from "react";
import ReLatedMovieCard from "./ReLatedMovieCard/ReLatedMovieCard";
import "./ReLatedMovieSlider.css"
import MovieModal from "../MovieModal";

const ReLatedMovieSlider = ({id}) =>{



    const {data:selectLatedMovies} = useReLatedSelectedMovies(id?.length===0 ? "1" : id[0]);

    const [show, setShow] = useState(false);
    const [detailData , setDetailData] = useState([]);


    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed : 1100,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={"sliderArea"}>
            <h1>이런 영화는 어떄요?</h1>
            <Slider {...settings}>
                {selectLatedMovies?.map((movie) => (
                    <ReLatedMovieCard movie = {movie} setShow = {setShow} setDetailData = {setDetailData}/>
                ))}
            </Slider>
            {selectLatedMovies && (
                <MovieModal show = {show} setShow = {setShow}  detailData={detailData}/>
            )}
        </div>

    );
}

export default ReLatedMovieSlider;
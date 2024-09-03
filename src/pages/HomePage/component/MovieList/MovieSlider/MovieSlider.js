import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard/MovieCard";
import './MovieSlider.css'
const MovieSlider = ({data,setShow,setDetailData}) => {



    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: false,
                    dots: false

                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };


    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data?.map((movie) => (
                    <MovieCard movie = {movie} setShow = {setShow} setDetailData = {setDetailData}/>
                ))}
            </Slider>
        </div>
    );
}

export default MovieSlider;
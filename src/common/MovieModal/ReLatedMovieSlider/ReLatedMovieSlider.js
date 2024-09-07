import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useReLatedSelectedMovies} from "../../../hooks/getRatedSelectedMovies";

const ReLatedMovieSlider = ({id}) =>{



    const {data:selectLatedMovies} = useReLatedSelectedMovies(id?.length===0 ? "1" : id[0]);

    console.log(selectLatedMovies)


    const settings = {
        dots: false,
        infinite: false,
        // arrows: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        // autoplay: true,

    };
    return (
        <div>
            <Slider {...settings}>
            </Slider>
        </div>

    );
}

export default ReLatedMovieSlider;
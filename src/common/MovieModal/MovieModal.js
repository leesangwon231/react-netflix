import Modal from 'react-bootstrap/Modal';
import React, {useState} from 'react';
import './MovieModal.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFire, faStar, faUser, faCalendar} from "@fortawesome/free-solid-svg-icons";
import {useMoviesGenres} from "../../hooks/getGenres";
import {Badge} from "react-bootstrap";
import PreviewModal from "../PreviewModal/PreviewModal";
import {useVideos} from "../../hooks/getVideos";
import MovieCollapse from "../MovieCollaspe/MovieCollapse";
import {useReviewhMovies} from "../../hooks/getReviewMovies";
import ReLatedMovieSlider from "./ReLatedMovieSlider/ReLatedMovieSlider";
const MovieModal = ({ show, setShow, detailData }) => {

    const [previewShow , setPreviewShow] = useState(false);
    const {data:genreData} =useMoviesGenres();
    const {data: moviePrviews} = useVideos(detailData.id);
    const {data: reviewData} = useReviewhMovies(detailData.id)
    let videoKey = "";

    let reviews = reviewData?.reduce(function (acc, cur) {
        acc.push(cur.content);
        return acc;
    }, []);

    if(reviews?.length === 0){
        reviews.push("해당 게시물은 리뷰가 없습니다.")
    }


    const chgGenre = (movieData) => {
        if(movieData === undefined){
            return [];
        }

        return movieData.map((mid) => {
            const chgGenre = genreData?.find((g) => g.id === mid);
            return chgGenre ? chgGenre.name : 'etc';
        });
    }

    if(moviePrviews !== undefined){
        let findVideos = moviePrviews.filter((preview) => preview.name.includes(detailData.title));
        if(findVideos.length === 0){
            videoKey= " "
        }else{
            videoKey = findVideos[0].key;
        }
    }



    return (
        <>
            <Modal
                show={show}
                onHide={()=>setShow(false)}
                dialogClassName="movie-modal-width"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton className={"movie-header"}>
                    <Modal.Title id="example-custom-modal-styling-title">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={"movie-modal"}>
                    <div className={"imageArea"}>
                        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${detailData?.poster_path}`} alt={"img"}/>
                    </div>
                    <div className={"detailArea"}>
                        <h1>{detailData?.title}</h1>
                        <div className={"genres"}>
                            {chgGenre(detailData?.genre_ids).map((genreNm, index) => (
                                <Badge key={index} bg="danger" className={"genre"}>{genreNm}</Badge>
                            ))}
                        </div>
                        <div><FontAwesomeIcon icon={faUser} className={"detailIcon "}/>{detailData?.vote_average}</div>
                        <div><FontAwesomeIcon icon={faStar} className={"detailIcon"}/>{detailData?.popularity}</div>
                        <div><FontAwesomeIcon icon={faCalendar} className={"detailIcon"}/>{detailData?.release_date}
                        </div>
                        <div><FontAwesomeIcon icon={faFire}
                                              className={"detailIcon"}/>{detailData?.adult ? 'over 18' : 'under 18'}
                        </div>
                        <MovieCollapse title={"줄거리"} content={[detailData?.overview]}/>
                        <MovieCollapse title={"리뷰"} content={reviews}/>
                        <div className={"buttonArea"}>
                            <div><PreviewModal previewShow={previewShow} setPreviewShow={setPreviewShow} videoKey = {videoKey}/></div>
                            {videoKey === " " ? " " :
                                <div className={"teaser_btn"} onClick={() => setPreviewShow(true)}>예고편 보기</div>}
                        </div>
                        <div className={"relatedArea"}>
                            <ReLatedMovieSlider id={detailData?.genre_ids}/>
                        </div>
                    </div>


                </Modal.Body>
            </Modal>
        </>
    );
};

export default MovieModal;
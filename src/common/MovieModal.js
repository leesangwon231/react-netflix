import Modal from 'react-bootstrap/Modal';
import React from 'react';
import './MovieModal.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFire, faStar, faUser, faCalendar} from "@fortawesome/free-solid-svg-icons";

const MovieModal = ({ show, setShow, detailData }) => {
    console.log(detailData)
    return (
        <>
            <Modal
                show={show}
                onHide={()=>setShow(false)}
                dialogClassName="custom-modal-width"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton className={"movie-header"}>
                    <Modal.Title id="example-custom-modal-styling-title">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={"movie-modal"}>
                    <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${detailData?.poster_path}`}/>

                    <h1>{detailData?.title}</h1>
                    <div><FontAwesomeIcon icon={faUser} className={"detailIcon"}/>{detailData?.vote_average}</div>
                    <div><FontAwesomeIcon icon={faStar} className={"detailIcon"}/>{detailData?.popularity}</div>
                    <div><FontAwesomeIcon icon={faCalendar} className={"detailIcon"}/>{detailData?.release_date}</div>
                    <div><FontAwesomeIcon icon={faFire}className={"detailIcon"}/>{detailData?.adult ? 'over 18' : 'under 18'}</div>
                    <h1> {detailData?.overview}</h1>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default MovieModal;
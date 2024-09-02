import React, {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import './PreviewModal.css'
import YouTube from "react-youtube";
import {useVideos} from "../../hooks/getVideos";

const PreviewModal = ({previewShow,setPreviewShow,videoKey}) => {

    const [width, setWidth] = useState()

    return (
      <>
          <Modal
              show={previewShow}
              onHide={()=>setPreviewShow(false)}
              dialogClassName="youtube-modal"
              aria-labelledby="example-custom-modal-styling-title"
          >
              <Modal.Header closeButton className={"youtube-header"}>
                  <Modal.Title id="example-custom-modal-styling-title">
                      <p>Current window width: {width}px</p>
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                      <YouTube
                          className={"youtube"}
                          videoId={videoKey}
                          opts={{
                              width:  "1500",
                              height:  "800",
                              playerVars: {
                                  autoplay: 1, //자동재생 O
                                  rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                                  modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                              },
                          }}
                          //이벤트 리스너
                          onEnd={(e)=>{e.target.stopVideo(0);}}
                      />
              </Modal.Body>
          </Modal>
      </>
  );
}

export default PreviewModal;
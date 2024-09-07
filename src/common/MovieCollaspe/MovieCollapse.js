import React, {useState} from 'react';
import "./MovieCollapse.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";
import { MDBCheckbox } from 'mdb-react-ui-kit';


const MovieCollapse = ({title,content}) => {

    const [toggle , setToggle] = useState(false);
    const [textLineToggle , setTextLineToggle] = useState(Array(content?.length).fill(false))
    const onClickCollapse = () => {
        setToggle(!toggle);
    }

    const onClickTextLine = (index) => {
        let textArray = [...textLineToggle];
        textArray[index] = !textArray[index];
        setTextLineToggle(textArray);
    }






  return (
    <div className={"movieCollapse"}>
        <div className={"collapse-title"}>
            <div>{title}</div>
            <FontAwesomeIcon icon={faCaretUp} className={toggle ? "collapse-rotate" : "collapse-icon"} onClick={onClickCollapse}/>
        </div>
          {content?.map((data,index)=> (
              <div className={toggle ? "collapse-contentArea" : "invisible"}>
                  <div className={textLineToggle[index] ? "collapse-all-content":"collapse-content"} onClick={() => {onClickTextLine(index)}}>{data}</div>
                  <div className={"viewOrHide"}>{textLineToggle[index]? "hide!!" : "view more..."}</div>
              </div>
            ))}
        </div>
              );
          }

export default MovieCollapse;
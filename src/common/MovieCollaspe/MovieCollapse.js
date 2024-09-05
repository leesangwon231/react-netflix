import React, {useState} from 'react';
import "./MovieCollapse.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";

const MovieCollapse = ({title,content}) => {

    const [toggle , setToggle] = useState(false);

    const onClickCollapse = () => {
        setToggle(!toggle);
    }

  return (
    <div className={"movieCollapse"}>
        <div className={"collapse-title"}>
            <div>{title}</div>
            <FontAwesomeIcon icon={faCaretUp} className={toggle ? "collapse-rotate" : "collapse-icon"} onClick={onClickCollapse}/>
        </div>
          {content?.map((data)=> (
              <div className={toggle ? "collapse-contentArea" : "invisible"}>
                  <div className={"content"}>{data}</div>
              </div>
            ))}
        </div>
              );
          }

export default MovieCollapse;
import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom';
import './AppLayout.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const AppLayout = () => {

    const navigate = useNavigate();



    return (
        <div className={"navBarWrap"}>
            <div className={"navBarContainer"}>
                <div className={"logo"} >
                    <img src={"https://about.netflix.com/images/logo.png"} onClick={() => { navigate('/'); }} />
                </div>
                <ul>
                    <li onClick={() => { navigate('/'); }}>Home</li>
                    <li onClick={() => { navigate('/movie'); }}>Movies</li>
                </ul>
                <div className={"searchArea"}>
                    <input type={"text"}/>
                    <FontAwesomeIcon className={"searchIcon"} icon={faSearch} />
                </div>
            </div>
            <Outlet/>
        </div>

    )
}

export default AppLayout;
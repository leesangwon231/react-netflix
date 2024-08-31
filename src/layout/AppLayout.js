import React from 'react'
import { Outlet } from 'react-router-dom';
import './AppLayout.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const AppLayout = () => {
    return (
        <div className={"navBarWrap"}>
            <div className={"navBarContainer"}>
                <div className={"logo"}>
                    <img src={"https://about.netflix.com/images/logo.png"}/>
                </div>
                <ul>
                <li>Home</li>
                    <li>Movies</li>
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
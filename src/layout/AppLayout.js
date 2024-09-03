import React, {useState} from 'react'
import {Outlet, useNavigate} from 'react-router-dom';
import './AppLayout.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const AppLayout = () => {

    const navigate = useNavigate();

    const [keyword,setKeyword] = useState("");


    const submitForm = (event) =>{
        event.preventDefault();
        navigate(`movies?sParam=${keyword}`);
    }


    return (
        <div className={"navBarWrap"}>
            <div className={"navBarContainer"}>
                <div className={"logo"} >
                    <img src={"https://about.netflix.com/images/logo.png"} onClick={() => { navigate('/'); }} />
                </div>
                <ul>
                    <li onClick={() => { navigate('/'); }}>Home</li>
                    <li onClick={() => { navigate('/movies'); }}>Movies</li>
                </ul>
                <div className={"searchArea"}>
                    <form onChange={(event)=>setKeyword(event.target.value)} id={"form"} onSubmit={submitForm}>
                        <FontAwesomeIcon className={"searchIcon"} icon={faSearch}  />
                        <input type={"text"}/>
                        <button type={"submit"}>Search</button>
                    </form>
                </div>
            </div>
            <Outlet/>
        </div>

    )
}

export default AppLayout;
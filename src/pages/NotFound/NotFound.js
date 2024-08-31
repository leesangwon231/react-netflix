import React from 'react'
import  '../NotFound/NotFound.css'
const NotFound = () => {
    return (
        <div className={"pageNotFound"}>
            <img src={"https://www.svgrepo.com/show/372642/sad-face.svg"}/>
            <span className={"codeNum"}>404</span>
            <span className={"detail"}>Page Not Found</span>
        </div>
    )
}

export default NotFound;
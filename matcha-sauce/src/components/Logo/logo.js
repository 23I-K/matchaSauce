import React from 'react'
import './logo.css'
import {Link} from "../Router";

function Logo () {
    return (
        <div className={'logo-container'}>
            <Link to={"/"} className={'logo-text'}>Food Way</Link>
        </div>
    )
}

export default Logo;
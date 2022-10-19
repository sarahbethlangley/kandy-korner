import React from "react"
import { Link, useNavigate } from "react-router-dom"

import "./NavBar.css"

export const NavBar = () => {


    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="ProductList">Products</Link>
            </li>
        
        </ul>
    )
}


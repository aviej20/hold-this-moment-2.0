export default NavHamburger;

import { useState } from "react";

function NavHamburger ({show, onClick}){

    return(
        <button className={`nav__hamburger ${show ? "nav__hamburger--active" : ""}`} onClick={onClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
        </button>
    );
}
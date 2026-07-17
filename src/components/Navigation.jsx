export default Navigation;

import { useState } from "react";
import NavHamburger from "./NavHamburger";
import NavMenu from "./NavMenu";

function Navigation(){

const [navMenuActive, setNavMenuActive] = useState(false);

   function handleMenuClick(){
        setNavMenuActive(prev => !prev);
    }

    return(
        <nav className="nav-container">
            <NavHamburger show={navMenuActive} onClick={handleMenuClick} />
            <NavMenu show={navMenuActive}/>
        </nav>
    );
}
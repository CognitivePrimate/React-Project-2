<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom";
=======
import { useState } from "react";
>>>>>>> 72d58e3bc4a7dc793f72bbfd3edcb1a7785b56cb


function Header() {


    return (
<<<<<<< HEAD
        <header className="Header">
            <Link to="/"><h1>What's for Dinner Recipe Roundup</h1></Link>

            <div className="Nav">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/detailedItem">Detailed Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink to="/foundItem">Found Items Items</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
=======
        <div className="Header">
     
        </div>
    )
>>>>>>> 72d58e3bc4a7dc793f72bbfd3edcb1a7785b56cb

}

export default Header;
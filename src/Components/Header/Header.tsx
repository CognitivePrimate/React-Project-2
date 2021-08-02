import { Link, NavLink } from "react-router-dom";
import { VscHeart } from 'react-icons/vsc';

import "../../App.css";

function Header() {


    return (



        <header className="Header">
            <Link to="/"><h1 className="">Chonk Watchers</h1></Link>

            <div className="Nav">
                <nav>
                    <ul>
                        <li className="HeaderLink">
                            <NavLink  to="/favorite">Favorites <VscHeart /></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;
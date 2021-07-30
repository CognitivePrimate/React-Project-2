import { Link, NavLink } from "react-router-dom";
import { VscHeart } from 'react-icons/vsc';



function Header() {


    return (



        <header className="Header">
            <Link to="/" ><h1>What's for Dinner?</h1></Link>

            <div className="Nav">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/favorite">Favorites <VscHeart /></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;
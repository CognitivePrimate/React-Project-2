import { Link, NavLink } from "react-router-dom";




function Header() {


    return (
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
       
    


}

export default Header;
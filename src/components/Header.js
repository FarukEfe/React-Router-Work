import {Link, NavLink} from "react-router-dom"
import './styles/Header.css'

export default function Header() {
    
    // If you want to style your links when active, use NavLink instead of Link
    /*
    return (
        <>
            <Link to="/">Main Page</Link>
            <Link to="/first">Page 1</Link>
            <Link to="/second">Page 2</Link>
            <Link to="/third">Page 3</Link>
        </>
    )
    */

    // Add exact={true} to the main page link if you want to avoid it being active even when on another page
    // The reason why this occurs is because
    return (
        <>
            <NavLink className="nav-link" activeClassName="active" to="/" exact={true}>Main Page</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/first">Page 1</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/second">Page 2</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/third">Page 3</NavLink>
        </>
    )
}
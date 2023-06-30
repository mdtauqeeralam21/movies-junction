import { Link } from "react-router-dom";

export default function Navbar(){

    return(
<nav className="navbar">
            <h1>Movie Junction</h1>
            <div className="links">
            <Link to='/'>Home</Link>
            <Link to="/add" style={{ 
          color: 'white', 
          backgroundColor: '#e65014',
          borderRadius: '8px' 
        }}>Add Movie</Link>
        <Link to='/notfound'>404</Link>
            </div>
        </nav>
    )
}
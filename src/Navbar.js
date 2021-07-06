import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Tims Blog</h1>
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
    );
}
    
export default Navbar;

import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>This page can't be found</p>
            <Link to='/'>Back to HomePage...</Link>
        </div>
    );
}
 
export default NotFound;
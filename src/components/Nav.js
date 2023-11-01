import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className="nav-ul">
                {/* NOTE : Route are the complete pages that are loaded on links, and links are like the url. */}
                {/* // link tag is used inplace of anchor tag, it loads the page without refreshing */}
                {/* // It comes from Link of react-router-dom */}

                <li><Link to="/">Products</Link></li> 
                <li><Link to="/addProduct">Add Product</Link></li> 
                <li><Link to="/updateProduct">Update Product</Link></li> 
                {/* not creating login link as user will enter only after login */}
                <li><Link to="/logout">Logout</Link></li>  
                <li><Link to="/profile">Profile</Link></li>  
            </ul>
        </div>
    )
}

export default Nav;
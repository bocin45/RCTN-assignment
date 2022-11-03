import React from "react";
import {Link} from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <>
                <nav style={{
                    flexDirection: "column",
                    display: "flex"
                }}>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Experience">Experience</Link>
                    <Link to="/Skills">Skills</Link>
                    <Link to="/Interest">Interest</Link>
                    <Link to="/Awards">Awards</Link>
                </nav>
            </>
        
        );
    }
}

export default NavBar;
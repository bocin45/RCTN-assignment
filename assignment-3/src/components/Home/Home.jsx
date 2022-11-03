import React from "react";
import logo from '../../DK.png';

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Home</h1>
                <img src={logo} alt="log"/>
            </>
        )
    }
}

export default Home;
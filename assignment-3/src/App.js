import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes, Switch} from "react-router-dom";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Interest from "./components/Interest/Interest";
import Skills from "./components/Skills/Skills";
import Awards from "./components/Awards/Awards";
import Home from "./components/Home/Home";

function App() {
    return (
        <div className="App">
            <div style={{
                display: "flex",
            }}>
                <div style={{
                    flex: 1,
                    backgroundColor: "lightgreen"
                }}>
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
                </div>
                <div style={{
                    flex: 4
                }}>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/About' element={<About/>}/>
                        <Route path='/Experience' element={<Experience/>}/>
                        <Route path='/Skills' element={<Skills/>}/>
                        <Route path='/Interest' element={<Interest/>}/>
                        <Route path='/Awards' element={<Awards/>}/>
                    </Routes>
                </div>
            
            </div>
        
        
        </div>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes, Switch} from "react-router-dom";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Interest from "./components/Interest/Interest";
import Skills from "./components/Skills/Skills";
import Awards from "./components/Awards/Awards";
import Home from "./components/Home/Home";
import NavBar from "./components/Navigation/NavBar";

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
                   <NavBar/>
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

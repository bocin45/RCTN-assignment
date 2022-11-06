import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";
import Movie from "./movie/Movie";
import Header from "./header/Header";

function App() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('https://www.omdbapi.com/?s=man&apikey=20cfdf67')
    
    useEffect(() => {
        axios.get(query)
            .then(res => {
                setMovies(res.data.Search)
            })
    }, [query])
    
    const changesQuery = (searchText) => {
       
        setQuery(`https://www.omdbapi.com/?s=${searchText}&apikey=20cfdf67`);
        console.log(query)
    }
    
    
    return (
        <>
            <Header title={"My Movies"} changeQuery={changesQuery}/>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }} className="Movies">
                {
                    movies.map(movie => {
                        return (
                            <Movie key={movie.imdbID} title={movie.Title} poster={movie.Poster}/>
                        )
                    })
                }
            
            </div>
        </>
    );
}

export default App;

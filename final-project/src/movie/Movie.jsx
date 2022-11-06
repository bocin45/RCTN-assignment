const Movie = (props) => {
    
    return (
        <>
            <div key={props.imdbID} className="movie" style={{
                width: 250,
                height: 250,
                border: 1,
                position: "relative",
                margin: 16,
                marginTop: 16,
                marginBottom: 32,
                marginRight: 16,
                marginLeft: 16
            }}>
                <div style={{
                    display: "block"
                }}>
                    <img style={{
                        height: 250,
                        width: 250,
                        objectFit: "cover"
                    }} src={props.poster} className="App-poster" alt="poseter"/>
                    <p>{props.title}</p>
                </div>
             
            </div>
        </>
    )
    
}

export default Movie;
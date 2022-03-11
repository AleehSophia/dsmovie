import MovieScore from "../MovieScore";

function MovieCard() {
    
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pe17f8VDfzbvbHSAKAlcORtBHmW.jpg",
        title: "Alerta Vermelho",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default MovieCard;
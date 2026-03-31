import "./MovieCard.css";

function MovieCard() {
    return (
        <div className="movie_card">
            <img 
                src="https://via.placeholder.com/200"
                alt="movie"
                className="movie-poster"
            />
            <h2>Inception</h2>
            <div className="buttons">
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
    );
}

export default MovieCard;
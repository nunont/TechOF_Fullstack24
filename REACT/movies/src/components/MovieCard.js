

export default function MovieCard({name, gender, rating}){

    return <div className="movie-card">
        <h4>{name}</h4>
        <p>{gender}</p>
        <p>Rating: {rating}/5 ⭐</p>
    </div>
}
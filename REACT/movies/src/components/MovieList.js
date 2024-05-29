import MovieCard from "./MovieCard";


export default function MovieList({movies}) {

    return <div>
        {movies.map((m, i) => 
            <MovieCard key={i} name={m.name} gender={m.gender}
                rating={m.rating}
            />
        )}
    </div>
}
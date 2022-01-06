import './Movies.css'
import Movie from './Movie'

export default function Movies({ movies }) {
  return (
    <div className='Movies'>
      {movies.length > 0 ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <p>No movies to display</p>
      )}
    </div>
  )
}

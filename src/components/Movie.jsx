import './Movie.css'

export default function Movie(props) {
  const { Title: title, Year: year, Type: type, Poster: poster } = props

  return (
    <div className='Movie'>
      <div className='Movie__Column'>
        {poster === 'N/A' ? (
          <img
            className='Movie__Poster'
            src='https://via.placeholder.com/300x450'
            alt='poster'
          />
        ) : (
          <img className='Movie__Poster' src={poster} alt='poster' />
        )}
      </div>
      <div className='Movie__Column'>
        <h1 className='Movie__Title'>{title}</h1>
        <h2 className='Movie__Year'>{year}</h2>
        <ul className='Movie__List'>
          <li className='Movie__ListItem'>{type}</li>
        </ul>
      </div>
    </div>
  )
}

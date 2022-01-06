import { Component } from 'react'
import './Main.css'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

export default class Main extends Component {
  state = {
    movies: [],
    loading: false,
  }

  componentDidMount() {
    this.searchMovies('matrix')
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true }, () => {
      let url = `https://www.omdbapi.com/?s=${str}&apikey=${process.env.REACT_APP_API_KEY}`

      if (type !== 'all') url += `&type=${type}`

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            movies: data.Search || [],
            loading: false,
          })
        })
        .catch((err) => {
          this.setState({ loading: false })
          console.log(err)
        })
    })
  }

  render() {
    let content

    if (this.state.loading) {
      content = <Preloader />
    } else {
      content = (
        <>
          <Search searchMovies={this.searchMovies} />
          <Movies movies={this.state.movies} />
        </>
      )
    }

    return <main className='Main'>{content}</main>
  }
}

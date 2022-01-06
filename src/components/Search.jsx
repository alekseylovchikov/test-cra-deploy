import React from 'react'

export default class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChangeRadio = (e) => {
    this.setState({ type: e.target.name })
  }

  searchMovies = () => {
    this.props.searchMovies(this.state.search, this.state.type)
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <label htmlFor='all'>all</label>
            <input
              onChange={this.handleChangeRadio}
              name='all'
              type='radio'
              id='all'
              checked={this.state.type === 'all'}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <label htmlFor='movie'>movie</label>
            <input
              onChange={this.handleChangeRadio}
              type='radio'
              name='movie'
              id='movie'
              checked={this.state.type === 'movie'}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <label htmlFor='series'>series</label>
            <input
              onChange={this.handleChangeRadio}
              type='radio'
              name='series'
              id='series'
              checked={this.state.type === 'series'}
            />
          </div>
        </div>
        <input
          onChange={this.handleChange}
          value={this.state.search}
          type='text'
          name='search'
          placeholder='Search...'
        />
        <button type='button' onClick={this.searchMovies}>
          search
        </button>
      </div>
    )
  }
}

import React from 'react';
import star from './icon.png';

export default class display extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=7cdf7d7de96673cdc912e661988a1435&language=en-US&query=${this.props.value}&page=1&include_adult=false`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.state.value) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7cdf7d7de96673cdc912e661988a1435&language=en-US&query=${this.props.value}&page=1&include_adult=false`
      )
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              isLoaded: true,
              items: result.results,
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul className="grid">
          <h3 className="trend">Search Results</h3>
          {items.map(item => (
            <li key={item.id} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                alt={item.title}
                className="poster"
              />
              <div className="rating">
                <span className="rate">{item.vote_average}</span>
                <img src={star} className="star" alt="star" />
              </div>
              <h4 className="title">{item.title}</h4>
              <button type="submit" className="detailsBtn">
                See Detalis
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

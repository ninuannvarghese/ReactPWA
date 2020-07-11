import React, { Component } from 'react';
import Axios from 'axios';
import queryString from 'query-string';
import HomeMovieCard from './HomeMovieCard'


class MovieList extends Component {
    state = { movies: [] }

    componentDidMount() {
        this.fetchMovies();

    }

    componentDidUpdate(prevProps) {
        if(this.props.location !== prevProps.location) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        var REQ = `https://api.themoviedb.org/3/search/movie?api_key=<KEY>&query=${q.searchText}`;
        Axios.get(REQ)
            .then(resp=>resp.data)
            .then(data=>data.results)
            .then(movies=>this.setState({movies}))

    }
    render() {
        const movieList = this.state.movies.map((m, index) => <HomeMovieCard movie={m} key={index} />)
        return (
            <div className="row">
                {movieList}
            </div>
        );
    }
}

export default MovieList;

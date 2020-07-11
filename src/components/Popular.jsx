import React, { Component } from 'react';
import axios from 'axios';
import HomeMovieCard from './HomeMovieCard';


class Popular extends Component {
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

        var REQ = `https://api.themoviedb.org/3/movie/popular?api_key=<KEY>&language=en-US&page=1`;

        axios.get(REQ)
            .then(response =>response.data)
            .then(data=>data.results)
            .then(movies=>this.setState({movies}))
            .catch(error => console.log(error));
//console.log(this.state.movies);
    }
    render() {
        //console.log(this.state.movies);
        const movieList = this.state.movies.map((m, index) => <HomeMovieCard movie={m} key={index} />)
        return (
            <div className="row">
                {movieList}
            </div>
        );
    }
}

export default Popular;

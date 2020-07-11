import React, { Component } from 'react';
import Axios from 'axios';
import queryString from 'query-string';

class MovieDetails extends Component {
    state = { movie: {} }

    componentDidMount() {
        this.fetchMovies();
        console.log('this.props', this.props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        var REQ= `https://api.themoviedb.org/3/movie/${q.imdbID}?api_key=<KEY>&language=en-US&page=1`;
        Axios.get(REQ)
            .then(resp => resp.data)
            .then(movie => this.setState({ movie }))

    }

    render() {
        let { movie } = this.state;
        let poster_base_path= 'https://image.tmdb.org/t/p/w500'+movie.poster_path;
        let bg_base_path= 'https://image.tmdb.org/t/p/w500'+movie.backdrop_path;
        let output = <div className="text-center">
            <img src="/images/loading.gif" alt="loading..."/>
        </div>;

        if (movie && Object.keys(movie).length > 0) {
            output = <div className="details-cont" style={{ backgroundImage: `url(${bg_base_path})`}}><div className="card card-image mb-3">
                <div className="text-white">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={poster_base_path} className="card-img" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <div className="card-title">{movie.release_date}</div>
                                    <div className="card-title">Overview</div>
                                    <div className="card-text">{movie.overview}</div>
                                    <p className="card-text">
                                        <button className="btn btn-primary" onClick={() => this.props.history.go(-1)}>Back</button>
                                    </p>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
            </div>
        }

        return output;
    }
}

export default MovieDetails;

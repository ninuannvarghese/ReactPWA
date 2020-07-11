import React from 'react';
import {withRouter} from 'react-router-dom';

const MovieCard = ({movie, history}) => {

    const getMovieDetails = (imdbID) => {
        history.push('/details?imdbID='+imdbID);
    }

    return <div className="col-md-4">
        <div className="card" onClick={ ()=> getMovieDetails(movie.imdbID) }>
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
            </div>
            <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
        </div>
    </div>;
};

export default withRouter(MovieCard);
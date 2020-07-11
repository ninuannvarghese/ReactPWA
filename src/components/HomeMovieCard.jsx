import React from 'react';
import {withRouter} from 'react-router-dom';

const HomeMovieCard = ({movie, history}) => {

    const getMovieDetails = (imdbID) => {
        history.push('/details?imdbID='+imdbID);
    }
    let poster_base_path= 'https://image.tmdb.org/t/p/w500'+movie.poster_path;

    return <div className="col-md-3 col-sm-6 col-12 mb-4">
        <div className="card h-100" onClick={ ()=> getMovieDetails(movie.id) }>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.release_date}</p>
            </div>
            <div className="view overlay">
                <img src={poster_base_path} alt={movie.title} className="card-img-top img-fluid" />
                <div className="mask near-moon-gradient"></div>
            </div>

        </div>
    </div>;
};

export default withRouter(HomeMovieCard);
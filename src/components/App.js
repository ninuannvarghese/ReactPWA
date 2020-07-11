import React, { Component } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import './css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';

class App extends Component {
  state = { message: 'Hello, React!!!' }
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Header />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/movies" component={MovieList} />
            <Route path="/details" component={MovieDetails} />
          </div>

        </div>
          <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
              <div className="container text-center">
                  <small>Ninu Varghese</small>
              </div>
          </footer>
      </BrowserRouter>

    );
  }
}


export default App;
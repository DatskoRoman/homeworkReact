import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import alertify from 'alertifyjs';
import Home from "./components/Home/Home";
import {addLocalStorage, removeMovieFromStorage} from "./Functions/StorageFunctions/storageFunctions";
import ScrollTop from "./components/elements/ScrollTop/ScrollTop";
import Navi from "./components/Navi/Navi";
import FavouriteMovies from "./components/FavouriteMovies/FavouriteMovies";
import Movie from "./components/Movie/Movie";
import PersonInfo from "./components/PersonInfo/PersonInfo";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {

    state = {
        favouriteMovies: [],
    }

    componentDidMount() {
        if (localStorage.getItem("favouriteMovies")) { // First Contact this App 
            let movies = JSON.parse(localStorage.getItem('favouriteMovies'));
            this.setState({
                ...this.state,
                favouriteMovies : movies,
            })
        }
    }

    getFavouriteMovies = favouritesMovie => {
        const stateMovies = this.state.favouriteMovies;
        const addedMovie = stateMovies.find(movie => movie.id === favouritesMovie.id);
        if (!addedMovie) {
            this.setState({
                ...this.state,
                favouriteMovies: [...stateMovies, favouritesMovie],
            })
            addLocalStorage(favouritesMovie)
            alertify.success("Film Başarı İle Eklendi", 2)
        }
        else {
            alertify.error("Bu film zaten listenizde bulunuyor", 2)

        }
    }

    clearFavouriteMovie = id => {
        const filterMovie = this.state.favouriteMovies.filter(movie => movie.id !== id);
        this.setState({
            favouriteMovies: filterMovie
        })
        alertify.success(" Bu Film Başarı İle Silindi", 2)
        removeMovieFromStorage(id)
    }

    clearAllFavouriteMovies = () => {
        this.setState({
            favouriteMovies: []
        })
        if (this.state.favouriteMovies.length) {
            alertify.success(" Bütün Filmler Başarı İle Silindi", 2)
        }

        localStorage.removeItem("favouriteMovies");
    }


    render() {

        const { favouriteMovies } = this.state;

        return (
            <Router>
                <ScrollTop>
                    <React.Fragment>
                        <Navi />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/favourites"
                                   render = {
                                       props => (
                                           <FavouriteMovies
                                               {...props}
                                               favouriteMovies={favouriteMovies}
                                               clearAllFavouriteMovies={this.clearAllFavouriteMovies}
                                               clearFavouriteMovie={this.clearFavouriteMovie}
                                           />
                                       )
                                   }
                            />
                            <Route exact path="/movie/:movieId"
                                   render={
                                       props => (
                                           <Movie
                                               {...props}
                                               getFavouriteMovies={this.getFavouriteMovies}
                                           />
                                       )
                                   }
                            />
                            <Route exact path="/person/:personId" component={PersonInfo} />
                            <Route component={NotFound} />
                        </Switch>
                    </React.Fragment>
                </ScrollTop>
            </Router>
        )
    }

}
export default App;
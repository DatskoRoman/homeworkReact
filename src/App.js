import React, { useEffect, useContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import MoviePage from "./components/MoviePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateContext } from "./State";
import ActorInfoPage from "./components/ActorInfoPage";
import './Style.css';

export default function App() {
    const [state, dispatch] = useContext(StateContext);

    const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
    const constructUrlG = (path) => {
        return `${TMDB_BASE_URL}/movie/${path}?api_key=${atob(
            "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
        )}`;
    };

    // popular fetching
    useEffect(() => {
        fetch(constructUrlG("popular"))
            .then((response) => response.json())
            .then((data) => dispatch({ type: "SET_Movies", payload: data.results }));
    }, []);


    return (
        <Router>
            <div className="App">
                <Header />
                <Route exact path="/" component={() => <Main />} />
                <Route path="/movie/:id" component={MoviePage} />
                <Route path="/actor/:actid" component={ActorInfoPage} />
            </div>
        </Router>
    );
}

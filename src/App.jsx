import { useState } from 'react';
import './assets/scss/main.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieDetails from './views/MovieDetails';
import Home from './views/Home';
import Movies from './views/Movies';
import Series from './views/Series';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route exact path='/movies/:movieId'>
					<MovieDetails />
				</Route>
				<Route path='/movies'>
					<Movies />
				</Route>
				<Route path='/series'>
					<Series />
				</Route>
				<Route path='/'>404</Route>
			</Switch>
		</Router>
	);
}

export default App;

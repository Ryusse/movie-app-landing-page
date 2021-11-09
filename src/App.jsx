import './assets/scss/main.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieDetails from './views/MovieDetails'
import Home from './views/Home'
import Movies from './views/Movies'
import Series from './views/Series'

function App() {
  return (
    <div className='layout'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route exact path='/movies/:movieId'>
            <MovieDetails />
          </Route>
          <Route path='/series'>
            <Series />
          </Route>
          <Route path='/'>404</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

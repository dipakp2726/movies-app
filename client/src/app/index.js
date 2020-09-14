import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesUpdate, MoviesInsert } from "../pages";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/movies/list" component={MoviesList} />
        <Route path="/movies/create" exact component={MoviesInsert} />
        <Route path="/movies/update/:id" exact component={MoviesUpdate} />
      </Switch>
    </Router>
  )
}

export default App
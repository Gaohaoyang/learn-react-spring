import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import './base.css'
import './App.css'

import Basics from './components/Basics'
import UseSpring from './components/useSpring'
import Intro from './components/Intro'

function App() {
  return (
    <Router>
      <div className="content-wrap">
        <ul>
          <li>
            <Link to="/">Intro</Link>
          </li>
          <li>
            <Link to="/Basics">Basics</Link>
          </li>
          <li>
            <Link to="/useSpring">useSpring</Link>
          </li>
        </ul>
      </div>
      <div className="context-wrap">
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route path="/Basics">
            <Basics />
          </Route>
          <Route path="/useSpring">
            <UseSpring />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

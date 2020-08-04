/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring'

import './base.css'
import './App.css'

import Basics from './components/Basics'
import UseSpring from './components/useSpring'
import Intro from './components/Intro'

function App() {
  const [showContent, setShowContent] = useState(true)
  const { transform, boxShadow } = useSpring({
    to: {
      transform: `translateX(${showContent ? 200 : 0}px)`,
      boxShadow: `0px 0px 10px 0px rgba(0, 0, 0, ${showContent ? 0.3 : 0})`,
    },
    config: { mass: 1, tension: 180, friction: 20 },
  })
  return (
    <Router>
      <animated.div
        className="content-wrap"
        style={{
          transform,
          boxShadow,
        }}
      >
        <ul
          onClick={() => {
            setShowContent(false)
          }}
        >
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
      </animated.div>
      <div
        className="content-show"
        onClick={() => {
          setShowContent((s) => !s)
        }}
        style={{
          backgroundImage: `url(${
            showContent
              ? 'https://gw.alicdn.com/tfs/TB1xuKzQoY1gK0jSZFMXXaWcVXa-48-48.png'
              : 'https://gw.alicdn.com/tfs/TB1r9mShP39YK4jSZPcXXXrUFXa-48-48.png'
          })`,
        }}
      />
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

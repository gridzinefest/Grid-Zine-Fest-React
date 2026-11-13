import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import PastFests from './views/past-fests'
import DropCalendar from './views/drop-calendar'
import Drops1 from './views/drops1'
import Page from './views/page'
import Home from './views/home'
import Page1 from './views/page1'
import Newsletter from './views/newsletter'
import Authenticity1 from './views/authenticity1'
import Home1 from './views/home1'
import Contact1 from './views/contact1'
import About from './views/about'
import Page2 from './views/page2'
import DropCalendar1 from './views/drop-calendar1'
import Page3 from './views/page3'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={PastFests} exact path="/past-fests" />
        <Route component={DropCalendar} exact path="/drop-calendar" />
        <Route component={Drops1} exact path="/drops1" />
        <Route component={Page} exact path="/page" />
        <Route component={Home} exact path="/" />
        <Route component={Page1} exact path="/page1" />
        <Route component={Newsletter} exact path="/newsletter" />
        <Route component={Authenticity1} exact path="/authenticity1" />
        <Route component={Home1} exact path="/home1" />
        <Route component={Contact1} exact path="/contact1" />
        <Route component={About} exact path="/about" />
        <Route component={Page2} exact path="/page2" />
        <Route component={DropCalendar1} exact path="/drop-calendar1" />
        <Route component={Page3} exact path="/page3" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

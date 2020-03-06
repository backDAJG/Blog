import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import index from './pages/index'
import NotFound from './pages/Notfound'
import ViewPost from './pages/ViewPost'
import LoginAdmin from './pages/LoginAdmin'
import Register from './pages/Register'
import Profile from './pages/Profile'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={index} />
              <Route exact path="/viewpost" component={ViewPost} />
              <Route exact path="/login" component={LoginAdmin} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact component={NotFound} />
          </Switch>
      </BrowserRouter>
    )
  }
}
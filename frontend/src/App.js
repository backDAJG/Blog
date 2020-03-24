import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import decode from 'jwt-decode'
import index from './pages/index'
import NotFound from './pages/Notfound'
import ViewPost from './pages/ViewPost'
import LoginAdmin from './pages/LoginAdmin'
import Register from './pages/Register'
import Profile from './pages/Profile'

const Logout = () => {
  localStorage.removeItem('usertoken')
  return <Redirect to="/login" />
}

const isAthenticated = () => {
  let access = ''
  const token  = localStorage.getItem('usertoken')
  try {
    const isValid = decode(token)
    if(isValid._id === '5e6573946dae732944112e7c') {
      access = true
    } else {
      access = false
      localStorage.removeItem('usertoken')
    }
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Esta ruta es privada si quieres ingresar debes proporcionar un token de seguridad valido!',
      footer: 'Colfenix GPS'
    })
  }
  return access
}

const MyRoute = (props) => (
  isAthenticated() ? <Route {...props} /> : <Redirect to="/"/>
)

const home = () => (
  <Redirect to="/home" />
)

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>

              <Route exact path="/" component={home} />
              <Route exact path="/home" component={index} />
              <Route exact path="/viewpost" component={ViewPost} />
              <Route exact path="/login" component={LoginAdmin} />
              <MyRoute exact path="/register" component={Register} />
              <MyRoute exact path="/profile" component={Profile} />
              <MyRoute exact path="/logout" component={Logout} />
              <Route exact component={NotFound} />

          </Switch>
      </BrowserRouter>
    )
  }
}
import React, { Component } from 'react'
import '../index.css'
import BarraLateral from '../components/BarraLateral'
import { login } from '../components/UsersFunction'

export default class LoginAdmin extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const User = {
            email: this.state.email,
            password: this.state.password
        }

        login(User).then(res => {
            if(res) {
                this.props.history.push(`/profile`)
            }
        })

    }



    render() {
        return (
            <div className="move">
                <BarraLateral />
                <div className="main-wrapper">
                    <div className="pen-title">
                        <h1>Login Form</h1>
                    </div>
                    <div className="container">
                        <div className="card"></div>
                        <div className="card">
                            <h1 className="title" style={{ "marginTop": "50px" }}>Login</h1>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-container">

                                    <input 
                                    type="text" 
                                    id="#{label}" 
                                    required="required" 
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />

                                    <label htmlFor="#{label}">Username</label>
                                    <div className="bar"></div>
                                </div>
                                <div className="input-container">

                                    <input 
                                    type="password" 
                                    id="#{label}" 
                                    required="required" 
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    />
                                    <label htmlFor="#{label}">Password</label>
                                    <div className="bar"></div>
                                </div>
                                <div className="button-container" style={{ "marginBottom": "50px" }}>
                                    <button className="btn-go"><span>Go</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

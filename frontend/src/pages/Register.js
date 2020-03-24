import React, { Component } from 'react'
import '../index.css'
import BarraLateral from '../components/BarraLateral'
import { register } from '../components/UsersFunction'

export default class Register extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            name: '',
            comfirmPassword: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const User = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            comfirmPassword: this.state.comfirmPassword

        }
        register(User).then(res => {
            if(res === 'Nuevo usuario agregado.') {
                this.props.history.push(`/login`)
            } else if(res === 'Las contraseña no coinciden.' || res === 'La contraseña debe ser mayor a 6 caracteres.') {
                this.setState({
                    password: '',
                    comfirmPassword: ''
                })
            } else if (res === 'El nombre de usuario ya existe.') {
                this.setState({
                    email: ''
                })
            }
        })

    }



    render() {
        return (
            <div className="move">
                <BarraLateral />
                <div className="main-wrapper">
                    <div className="container">
                        <div className="card"></div>
                        <div className="card">
                            <h1 className="title" style={{ "marginTop": "50px" }}>Register</h1>
                            <form noValidate onSubmit={this.onSubmit}>

                                <div className="input-container">

                                    <input
                                        type="text"
                                        id="#{label}"
                                        required="required"
                                        name="name"
                                        value={this.state.namel}
                                        onChange={this.onChange}
                                        autoComplete="off"
                                    />

                                    <label htmlFor="#{label}">name</label>
                                    <div className="bar"></div>
                                </div>

                                <div className="input-container">

                                    <input
                                        type="email"
                                        id="#{label}"
                                        required="required"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        autoComplete="off"
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

                                <div className="input-container">

                                    <input
                                        type="password"
                                        id="#{label}"
                                        required="required"
                                        name="comfirmPassword"
                                        value={this.state.comfirmPassword}
                                        onChange={this.onChange}
                                    />
                                    <label htmlFor="#{label}">Comfirm password</label>
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

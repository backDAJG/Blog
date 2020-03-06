import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import BarraLateral from '../components/BarraLateral'

export default class Profile extends Component {

    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return (
            <div>
                <BarraLateral />
                <div className="main-wrapper">
                    profile
                </div>
            </div>
        )
    }
}

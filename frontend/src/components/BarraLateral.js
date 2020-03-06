import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import BMO from '../images/BMO.jpg'

class BarraLateral extends Component {

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {

        const loginRegLink = (
            <ul className="navbar-nav flex-column text-left">
                <li className="nav-item active">
                    <Link className="nav-link" to="/"><i className="fas fa-home fa-fw mr-2"></i>Blog Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/ViewPost"><i className="fas fa-bookmark fa-fw mr-2"></i>Blog Post</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login"><i className="fas fa-user fa-fw mr-2"></i>Admin</Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav flex-column text-left">
                <li className="nav-item active">
                    <Link className="nav-link" to="/profile"><i className="fas fa-home fa-fw mr-2"></i>profile <span className="sr-only">(current)</span></Link>
                </li>
                <li>
                    <Link className="nav-link" to="" onClick={this.logOut.bind(this)}><i className="fas fa-home fa-fw mr-2"></i>logout <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register"><i className="fas fa-user fa-fw mr-2"></i>Register</Link>
                </li>
            </ul>
        )

        return (
            <header className="header text-center">
                <h1 className="blog-name pt-lg-4 mb-0"> <Link to="/">Colfenix GPS Blog</Link> </h1>

                <nav className="navbar navbar-expand-lg navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navigation" className="collapse navbar-collapse flex-column">
                        <div className="profile-section pt-3 pt-lg-0">
                            <img src={BMO} alt="colfenix GPS" className="profile-image mb-3 rounded-circle mx-auto" />
                            <div className="bio mb-3">Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br /></div>
                            <ul className="social-list list-inline py-3 mx-auto">
                                <li className="list-inline-item"><a href="/"><i className="fab fa-twitter fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="/"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="/"><i className="fab fa-github-alt fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="/"><i className="fab fa-stack-overflow fa-fw"></i></a></li>
                                <li className="list-inline-item"><a href="/"><i className="fab fa-codepen fa-fw"></i></a></li>
                            </ul>
                            <hr />
                        </div>

                        {localStorage.usertoken ? userLink : loginRegLink}

                        <div className="my-2 my-md-3">
                            <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" rel="noopener noreferrer">Get in Touch</a>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(BarraLateral)

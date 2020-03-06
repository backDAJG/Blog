import React, { Component } from 'react'

export default class MailBox extends Component {
    render() {
        return (
            <section className="cta-section theme-bg-light py-5">
		    <div className="container text-center">
			    <h2 className="heading">DevBlog: una plantilla de blog hecha por Colfenix GPS</h2>
			    <div className="intro">Bienvenido a mi blog. Suscríbase y reciba mi última publicación de blog en su bandeja de entrada.</div>
			    <form className="signup-form form-inline justify-content-center pt-3">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="semail">Your email</label>
                        <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
		    </div>
	    </section>
        )
    }
}
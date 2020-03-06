import React, { Component } from 'react'
import '../NotFound.css';


export default class Notfound extends Component {
    render() {
        return (
            <main className="wrapper fondo">
                <div className="error-404">
                    <div className="error-number has-animation"><span>4</span><span><img className="img icon has-animation" src="https://image.flaticon.com/icons/svg/139/139695.svg" alt="post" /></span><span>4</span></div>
                    <p className="type has-animation">404 Error Not Found, No pudimos encontrar lo que estabas buscando.</p>
                </div>
                <div className="moon"></div>
            </main>
        )
    }
}

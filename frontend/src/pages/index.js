import React, { Component } from 'react'
import BarraLateral from '../components/BarraLateral'
import MailBox from '../components/MailBox'
import ListPost from '../components/ListPost'
import Footer from '../components/Footer'

export default class index extends Component {
    render() {
        return (
            <div>
                <BarraLateral />
                <div className="main-wrapper">
                    <MailBox />
                    <ListPost />
                    <Footer />
                </div>
            </div>
        )
    }
}



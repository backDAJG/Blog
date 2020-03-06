import React, { Component } from 'react'
import BMO from '../images/BMO.jpg'
import { Link } from 'react-router-dom'

export default class ListPost extends Component {
    render() {
        return (
            <section className="blog-list px-3 py-5 p-md-5">
                <div className="container">
                    <div className="item mb-5">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={BMO} alt="post" />
                            <div className="media-body">
                                <h3 className="title mb-1"><Link to="/ViewPost">Why Every Developer Should Have A Blog </Link></h3>
                                <div className="meta mb-1"><span className="date">Published 2 days ago</span><span className="time">5 min read</span><span className="comment"><a href="/">8 comments</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="/">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-5">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={BMO} alt="post" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="/">A Guide to Becoming a Full-Stack Developer</a></h3>
                                <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">3 min read</span><span className="comment"><a href="/">26 comments</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="/">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <div className="item mb-5">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={BMO} alt="post" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="/">High Performance JavaScript</a></h3>
                                <div className="meta mb-1"><span className="date">Published 1 month ago</span><span className="time">8 min read</span><span className="comment"><a href="/">12 comments</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="/">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-5">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={BMO} alt="post" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="/">Top 5 JavaScript Frameworks</a></h3>
                                <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">15 min read</span><span className="comment"><a href="/">3 comments</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="/">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <div className="item mb-5">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={BMO} alt="post" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="/">Learn React in 24 Hours</a></h3>
                                <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">10 min read</span><span className="comment"><a href="/">23 comments</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="/">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="media">
                            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={BMO} alt="post" />
                            <div className="media-body">
                                <h3 className="title mb-1"><a href="/">About Remote Working</a></h3>
                                <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">2 min read</span><span className="comment"><a href="/">1 comment</a></span></div>
                                <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                                <a className="more-link" href="/">Read more &rarr;</a>
                            </div>
                        </div>
                    </div>

                    <nav className="blog-nav nav nav-justified my-5">
                        <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="/">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                        <a className="nav-link-next nav-item nav-link rounded" href="/">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                    </nav>

                </div>
            </section>
        )
    }
}

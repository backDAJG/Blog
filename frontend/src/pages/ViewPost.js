import React, { Component } from 'react'
import BarraLateral from '../components/BarraLateral'
import Footer from '../components/Footer'
import BMO from '../images/BMO.jpg'


export default class ListPost extends Component {
    render() {
        return (
            <div>
                <BarraLateral />
                <div className="main-wrapper">

                    <article className="blog-post px-3 py-5 p-md-5">
                        <div className="container">
                            <header className="blog-post-header">
                                <h2 className="title mb-2">Why Every Developer Should Have A Blog</h2>
                                <div className="meta mb-3"><span className="date">Published 3 months ago</span><span className="time">5 min read</span><span className="comment"><a href="/">4 comments</a></span></div>
                            </header>

                            <div className="blog-post-body">
                                <figure className="blog-banner text-center">
                                    <img className="img-fluid" src={BMO} alt="post" />
                                </figure>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
                            </div>



                        </div>
                    </article>
                    <ul className="nav container d-flex justify-content-around">
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-secondary"><i className="far fa-thumbs-up"></i> likes <span className="badge badge-primary">2</span></button>
                        </li>
                        <li className="nav-item">
                            <div type="button" className="btn btn-outline-secondary"><i className="far fa-eye"></i> views <span className="badge badge-primary">2</span></div>
                        </li>
                        <li className="nav-item">
                            <div type="button" className="btn btn-outline-secondary"><i className="far fa-comments"></i> comments <span className="badge badge-primary">2</span></div>
                        </li>
                    </ul>

                    <div className="comments-app" ng-app="commentsApp" ng-controller="CommentsController as cmntCtrl">


                        <div className="comment-form">

                            <div className="comment-avatar">
                                <img src={BMO} alt="post" />
                            </div>

                            <form className="form">
                                <div className="form-row">
                                    <textarea className="form-control mr-md-1 semail" placeholder="Add comment..." required style={{ "resize": "none" }}></textarea>
                                </div>

                                <div className="form-row">
                                    <input className="form-control mr-md-1 semail" placeholder="Email" type="email" />
                                </div>

                                <div className="form-row">
                                    <input type="submit" value="Add Comment" />
                                </div>
                            </form>
                        </div>


                        <div className="comments">

                            <div className="comment">
                                <div className="comment-avatar">
                                    <img src={BMO} alt="post" />
                                </div>
                                <div className="comment-box">
                                    <div className="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste
          nostrum dolorem natus recusandae incidunt voluptatum.</div>
                                    <div className="comment-footer">
                                        <div className="comment-info">
                                            <span className="comment-author">
                                                <span>Sexar</span>
                                            </span>
                                            <span className="comment-date">Feb 2, 2013 11:32:04 PM</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="comment">
                                <div className="comment-avatar">
                                    <img src={BMO} alt="post" />
                                </div>
                                <div className="comment-box">
                                    <div className="comment-text">Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis
                                      totam reprehenderit quasi sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?
        </div>
                                    <div className="comment-footer">
                                        <div className="comment-info">
                                            <span className="comment-author">
                                                <span>Ximme</span>
                                            </span>
                                            <span className="comment-date">Jan 31, 1986 11:32:04 PM</span>
                                        </div>

                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="promo-section theme-bg-light py-5 text-center">
                        <div className="container">
                            <h2 className="title">Promo Section Heading</h2>
                            <p>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                            <figure className="promo-figure">
                                <a href="https://made4dev.com" rel="noopener noreferrer"><img className="img-fluid" src={BMO} alt="post" /></a>
                            </figure>
                        </div>
                    </section>

                    <Footer />

                </div>

            </div>
        )
    }
}

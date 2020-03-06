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
                    <ul class="nav container d-flex justify-content-around">
                        <li class="nav-item">
                            <button type="button" class="btn btn-outline-secondary"><i className="far fa-thumbs-up"></i> likes <span class="badge badge-primary">2</span></button>
                        </li>
                        <li class="nav-item">
                            <div type="button" class="btn btn-outline-secondary"><i className="far fa-eye"></i> views <span class="badge badge-primary">2</span></div>
                        </li>
                        <li class="nav-item">
                            <div type="button" class="btn btn-outline-secondary"><i class="far fa-comments"></i> comments <span class="badge badge-primary">2</span></div>
                        </li>
                    </ul>

                    <div class="comments-app" ng-app="commentsApp" ng-controller="CommentsController as cmntCtrl">


                        <div class="comment-form">

                            <div class="comment-avatar">
                                <img src={BMO} alt="post" />
                            </div>

                            <form class="form">
                                <div class="form-row">
                                    <textarea class="form-control mr-md-1 semail" placeholder="Add comment..." required style={{ "resize": "none" }}></textarea>
                                </div>

                                <div class="form-row">
                                    <input class="form-control mr-md-1 semail" placeholder="Email" type="email" />
                                </div>

                                <div class="form-row">
                                    <input type="submit" value="Add Comment" />
                                </div>
                            </form>
                        </div>


                        <div class="comments">

                            <div class="comment">
                                <div class="comment-avatar">
                                    <img src={BMO} alt="post" />
                                </div>
                                <div class="comment-box">
                                    <div class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste
          nostrum dolorem natus recusandae incidunt voluptatum.</div>
                                    <div class="comment-footer">
                                        <div class="comment-info">
                                            <span class="comment-author">
                                                <span>Sexar</span>
                                            </span>
                                            <span class="comment-date">Feb 2, 2013 11:32:04 PM</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="comment">
                                <div class="comment-avatar">
                                    <img src={BMO} alt="post" />
                                </div>
                                <div class="comment-box">
                                    <div class="comment-text">Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis
                                      totam reprehenderit quasi sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?
        </div>
                                    <div class="comment-footer">
                                        <div class="comment-info">
                                            <span class="comment-author">
                                                <span>Ximme</span>
                                            </span>
                                            <span class="comment-date">Jan 31, 1986 11:32:04 PM</span>
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

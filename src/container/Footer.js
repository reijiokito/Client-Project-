import React, { Component } from 'react';

import logo from '../logo/logo.jpg';
import cong from '../imgs/Cong.jpg';
import tho from '../imgs/Tho.jpg';
import dang from '../imgs/Dang.jpg';
class Footer extends Component {
    render() {
        return (
            <div>
                <div>

                    <div className="col-12 mt-md-0 mt-3 text-center">
                        <h5 className="text-uppercase"><img src={logo} alt="logo" style={{ height: "50" }} /></h5>
                        <p>If you are feeling out of shape, then surely the best way to ensure you do exercise is to have a fitness room right in your own home. Whether you start your regime at morning or night, having a fitness room means you’re more likely to enjoy your workout. However, for many this option has to remain a dream. Thankfully, there are different ways you can bring fitness into your home without spending too much. Checking out ideas online is a great way to be inspired.</p>
                    </div>

                    <hr className="m-5" />
                    <div className="col-12 text-center">
                        <h3 className="text-uppercase m-5">Producers / Programers</h3>
                        <div className="row" style={{ color: "#c41971" }}>
                            <div className="col-4 hovereffect3">
                                <div className="hovereffect">
                                    <img src={cong} alt="Nguyen The Cong" className="img-thumbnail rounded-circle" style={{ height: "330px" }} />
                                    <div className="overlay">
                                        <h2>The Cong</h2>
                                        <p className="set1">
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </p>
                                        <hr />
                                        <hr />
                                        <p className="set2">
                                            <a href="#">
                                            <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>


                                <h4 style={{ fontFamily: "cursive" }}>Project Manager and Developer </h4>
                                <h5 style={{ fontFamily: "cursive" }}><a target="_blank" className="text-dark mb-0" href="https://www.facebook.com/romeothecong"><i class="fab fa-facebook"></i>Nguyen The Cong</a></h5>
                            </div>
                            <div className="col-4 hovereffect3">
                                <div className="hovereffect">
                                    <img src={dang} alt="Nguyen The Cong" className="img-thumbnail rounded-circle" style={{ height: "330px" }} />
                                    <div className="overlay">
                                        <h2>Do Dang</h2>
                                        <p className="set1">
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </p>
                                        <hr />
                                        <hr />
                                        <p className="set2">
                                            <a href="#">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <h4 style={{ fontFamily: "cursive" }}>Data Manager and Developer</h4>
                                <h5 style={{ fontFamily: "cursive" }}><a target="_blank" className="text-dark mb-0" href="https://www.facebook.com/profile.php?id=100004256869086"><i class="fab fa-facebook"></i>Huynh Dang</a></h5>
                            </div>
                            <div className="col-4 hovereffect3">
                                <div className="hovereffect">
                                    <img src={tho} alt="Nguyen The Cong" className="img-thumbnail rounded-circle" style={{ height: "330px" }} />
                                    <div className="overlay">
                                        <h2>Pham Tho</h2>
                                        <p className="set1">
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </p>
                                        <hr />
                                        <hr />
                                        <p className="set2">
                                            <a href="#">
                                            <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <h4 style={{ fontFamily: "cursive" }}>Architecture and Data Developer</h4>
                                <h5 style={{ fontFamily: "cursive" }}><a target="_blank" className="text-dark mb-0" href="https://www.facebook.com/pham.tho.94"><i class="fab fa-facebook"></i>Pham Tho</a></h5>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://gymmover.herokuapp.com"> Gymmover.com</a>
                </div>
            </div >
        );
    }
}

export default Footer;
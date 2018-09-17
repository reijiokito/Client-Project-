import React, { Component } from 'react';

import logo from '../logo/logo.jpg';
class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase"><img src={logo} alt="logo" style={{height:"50"}}/></h5>
                            <p>If you are feeling out of shape, then surely the best way to ensure you do exercise is to have a fitness room right in your own home. Whether you start your regime at morning or night, having a fitness room means you’re more likely to enjoy your workout. However, for many this option has to remain a dream. Thankfully, there are different ways you can bring fitness into your home without spending too much. Checking out ideas online is a great way to be inspired.</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3" />
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://gymmover.herokuapp.com"> Gymmover.com</a>
                </div>
            </footer>
        );
    }
}

export default Footer;
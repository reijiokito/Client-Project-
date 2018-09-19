import React, { Component } from 'react';


import logo from '../logo/logo.jpg';
import Login from './Login';
import Logout from './Logout';
import SignUp from './SignUp';
// import domain from '../domain';

import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
// import axios from '../axios';

class NavBar extends Component {

    state = {

    }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }




    handleTextChange = event => this.props.onsearchChanged(event.target.value);

    render() {

        const display = (this.props.user !== null && this.props.user !== undefined) ? (          //for navbar
            <div>
                <div>
                    <div className="m-2">
                        <Link to={`/profile/${this.props.user ? this.props.user._id : ""}`}>
                            <img height="60px" width="60px" className="img-thumbnail rounded-circle" src="https://cdn3.iconfinder.com/data/icons/mixed-icon-collection/100/2--512.png" alt="img" />
                        </Link>
                    </div>
                </div>

                <div>
                    <Link to="/">
                        <Logout _onLogout={this.props._onLogout} />
                    </Link>
                </div>
            </div>
        ) : (
                <div>
                    <DropdownToggle nav caret>
                        <p style={{ color: "black" }}><i className="far fa-user"></i> Accounts</p>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <div><Login
                                _onLogin={this.props._onLogin} /></div>
                        </DropdownItem>
                        <DropdownItem>
                            <div><SignUp
                                _onSignUp={this.props._onSignUp} /></div>
                        </DropdownItem>

                    </DropdownMenu>

                </div>
            );



        return (
            <div className="container-fluid mt-0 " >
                <Navbar dark expand="md" className="bg-light" >
                    <NavbarBrand href="https://gymmover.herokuapp.com"><img src={logo} alt="" /></NavbarBrand>
                    <Input onChange={this.handleTextChange} type="text" placeholder="  Let's press address here" style={{ width: "50%" }} /><span><i className="fas fa-search" style={{ marginLeft: "-30px" }}></i></span>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>


                            <NavItem className="mr-3 row mt-4">

                                <div className="col-9" style={{ lineHeight: "10px" }}>
                                    <p> HN:01636205055</p>
                                    <p> HCM:0123456789</p>
                                </div>
                                <div className="col-3">
                                    <i className="fas fa-phone mr-3"></i>
                                    <span>24/7</span>
                                </div>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar className="mr-2 mt-3">

                                {display}

                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;




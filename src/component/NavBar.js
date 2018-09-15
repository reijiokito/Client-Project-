import React, { Component } from 'react';


import logo from '../logo/logo.jpg';
import Login from './Login';
import Logout from './Logout';
import SignUp from './SignUp';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class NavBar extends Component {



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

    handleTextChange = event  =>  this.props.onsearchChanged(event.target.value);

    render() {        
        
        const display = (this.props.user !== null && this.props.user !== undefined) ? (          //for navbar
            <div>
                <span className="navbar-text">Welcome, {this.props.user.name}</span>
                <div><Logout
                    _onLogout={this.props._onLogout} /></div>
            </div>
        ) : (
                <div>
                    <DropdownToggle nav caret>
                        Accounts
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
            <div className="container-fluid">
                <Navbar color="dark" dark expand="md" >
                    <NavbarBrand href="http://localhost:3000/"><img src={logo} alt="" /></NavbarBrand>
                    <Input  onChange={this.handleTextChange} type="text"placeholder="  Let's press address here" />
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>About You</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>

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




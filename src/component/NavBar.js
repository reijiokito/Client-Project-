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
        // var PT = (this.props.user && this.props.gymJoin) ? this.props.gymJoin.PT.filter(PT =>       //*take this
        //     PT._id === this.props.user.chosenPT.PT
        // ) : " ";
        // const user = this.props.user;
        // const PTinfo = this.props.PT;
        // const gyminfo = this.props.gymJoin;
        // console.log(user);
        // console.log(PTinfo);
        // console.log(gyminfo)
        // const userPT = this.props.user ? (
        //     (this.props.user.chosenPT.active === true && PT) ? (
        //         <p>
        //             PT: {PT[0].name}
        //             PTID: {PT[0]._id}
        //         </p>
        //     ) : "chua co PT"
        // ) : "chua co User ";

        // const gymUser = this.props.gymJoin ? 
        //     <p>
        //         Gym: {this.props.gymJoin.name}
        //     </p> : "chua co Gym";

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
            <div className="container-fluid mt-0 " >
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="https://gymmover.herokuapp.com"><img src={logo} alt="" /></NavbarBrand>
                    <Input onChange={this.handleTextChange} type="text" placeholder="  Let's press address here" style={{ width: "50%" }} />
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to={`/profile/${this.props.user ? this.props.user._id : ""}`}>
                                    About You
                                </Link>
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




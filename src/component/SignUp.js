import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class SignUp extends Component {

    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onSignUp = event => {
        // console.log(this.refs.name.value);
        // console.log(this.refs.password.value);
        this.props._onSignUp(
            this.refs.username.value,
            this.refs.password.value,
            this.refs.email.value,            
            this.refs.sdt.value,
            this.refs.name.value);
        this.toggle();
    }
    render() {
        return (
            <div>
                <p className="text-center mb-1 p-0" color="success" onClick={this.toggle}>Sign Up</p>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>
                        <div className="form-group">
                            <input type="text" ref="username" className="form-control" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <input type="password" ref="password" className="form-control" placeholder="Enter password" />
                        </div>
                        <div className="form-group">
                            <input type="email" ref="email" className="form-control" placeholder="Enter email" />
                        </div>     
                        <div className="form-group">
                            <input type="text" ref="name" className="form-control" placeholder="Enter username" />
                        </div>                   
                        <div className="form-group">
                            <input type="text" ref="sdt" className="form-control" placeholder="Enter phone number" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onSignUp}>Sign Up</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Back</Button>
                    </ModalFooter>
                </Modal>
            </div >
        );
    }
}


export default SignUp;
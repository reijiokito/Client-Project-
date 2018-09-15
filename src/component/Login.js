import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class Login extends Component {

    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onLogin = event => {
        this.props._onLogin(this.refs.username.value, this.refs.password.value);
        this.toggle();
    }
    render() {
        return (
            <div>
                <p className="text-center mb-1 p-0" color="success" onClick={this.toggle}>Login</p>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>
                        <div className="form-group">
                            <input type="text" ref="username" className="form-control" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <input type="password" ref="password" className="form-control" placeholder="Enter password" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onLogin}>Login</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Back</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Login;
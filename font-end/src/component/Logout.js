import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Logout extends Component {
    render() {
        return (
            <div>
                <Button color="danger" onClick={this.props._onLogout}>Logout</Button>
            </div>
        );
    }
}

export default Logout;
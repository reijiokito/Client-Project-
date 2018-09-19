import React, { Component } from 'react';
import axios from '../axios';

import { Input, Button } from 'reactstrap';
import domain from '../domain';
class ProfilePage extends Component {

    state = {
        user: {}
    }
    componentDidMount() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        axios
            .get(domain.domain + `/api/user/${this.props.match.params.userId}`)
            .then(data => {                
                this.setState({ user: data.data.userFound });
            })
            .catch(err => console.log(err));
    }

    changeValue1 = (event) =>{
        
        document.getElementById("name").readOnly = false;
    }

    changeValue2 = (event) =>{
        
        document.getElementById("phone").readOnly = false;
    }

    render() {
        const user = this.state.user;
        return (
            <div className="row mt-5">
                <div className="col-6">
                    <img className="img-thumbnail rounded-circle" style={{ width: "75%", height: "75%" }} src="http://static2.yan.vn/YanNews/2167221/201807/hot-girl-thai-lan-khien-cdm-phat-cuong-vi-khuon-mat-thien-than-9ca6e86e.jpg" alt="profileImg" />

                </div>
                <div className="col-6 text-left">
                    <p>Email : <Input style={{maxWidth:"75%"}} type="text" id="name" readOnly value={user.email}></Input><i className="fas fa-edit m-1" onClick={this.changeValue1}></i></p>
                    <p>Phone : <Input style={{maxWidth:"75%"}} type="text" id="phone" readOnly value={user.sdt}></Input><i className="fas fa-edit m-1" onClick={this.changeValue2}></i></p>
                    <p>PT : <Input style={{maxWidth:"75%"}} type="text" readOnly value={this.props.userPT }></Input></p>
                    <p>Gym : <Input style={{maxWidth:"75%"}} type="text" readOnly value={this.props.gymUser}></Input></p>
                    <div className="text-right">
                        <Button className="btn-success">Update</Button>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProfilePage;
import React, { Component } from 'react';
import axios from '../axios';
import background from '../imgs/background.jpg';

import domain from '../domain';
class ProfilePage extends Component {

    state={
        user : {}
    }
    componentDidMount(){
        
            axios
                .get(domain.domain + `/api/user/${this.props.match.params.userId}`)
                .then(data => {                    
                    this.setState({user : data.data.userFound});
                })
                .catch(err => console.log(err));
        
    }
    
    render() {        
        const user = this.state.user;
        return (
            <div>
                <div className="col-4 text-light">
                    <img sr={background} alt="profileImg" />

                </div>
                <div className="col-8">
                    <p>Username : {user.name}</p>
                    <p>Email : {user.email}</p>
                    <p>Phone : {user.sdt}</p>                    
                    <p>PT : {user.chosenPT.name}</p> 
                    <p>GymJoin : {user.gymJoin.name}</p> 
                </div>

            </div>
        );
    }
}

export default ProfilePage;
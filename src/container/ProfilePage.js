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
                    console.log(data.data.userFound)   ;
                    this.setState({user : data.data.userFound});
                })
                .catch(err => console.log(err));
        
    }
    
    render() {                
        const user = this.state.user;        
        return (
            <div>
                <div className="col-4 text-dark">
                    <img sr={background} alt="profileImg" />

                </div>
                <div className="col-8">
                    <p>Username : {user.name}</p>
                    <p>Email : {user.email}</p>
                    
                </div>

            </div>
        );
    }
}

export default ProfilePage;
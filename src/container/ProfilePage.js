import React, { Component } from 'react';

import background from '../imgs/background.jpg';

class ProfilePage extends Component {
    render() {
        const user = this.props.user;
        return (
            <div>
                <div className="col-4">
                    <img sr={user.imgUrl} alt="profileImg" />

                </div>
                <div className="col-8">
                    <p>Username : {user.username}</p>
                    <p>Email : {user.email}</p>
                    <p>Phone : {user.phone}</p>}
                </div>

            </div>
        );
    }
}

export default ProfilePage;
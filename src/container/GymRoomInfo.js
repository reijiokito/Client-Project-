import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
class GymRoomInfo extends Component {

    render() {
        console.log(this.props.info);
        return (
            <div>
                <div className="gym-img ">
                    <span className="fa fa-close"></span>
                    <img className="d-block" src={this.props.info.imgUrl} alt="" style={{ width: '350px', height: '200px' }} />

                    {this.props.info ? this.props.info.location : ""}


                </div>
                <div className="gym-info">
                    <h2>{this.props.info ? this.props.info.name : ""}</h2>
                    Price: <p>{this.props.info.price}</p>
                </div>
                <div className="gym-price">
                </div>
                <div >
                    <Link to={`/gym/${this.props.info._id}`}>
                        <Button className="text-center mb-1 p-0 w-75" color="primary">
                            Xem Phòng
                            </Button>
                    </Link>
                </div>

            </div>
        );
    }
}

export default GymRoomInfo;
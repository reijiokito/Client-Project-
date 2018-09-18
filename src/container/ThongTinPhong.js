import React, { Component } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';
import domain from '../domain';
class ThongTinPhong extends Component {
    state = {
        gym: {},
        isOpenInfo: false
    }

    componentDidMount() {
        axios
            .get(domain.domain+`/api/gym/${this.props.match.params.gymId}`)
            .then(data => {
                this.setState({ gym: data.data.place[0] })
            })
            .catch(err => console.log(err));

            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
    }
    render() {
        const allPT = this.state.gym ? (this.state.gym.PT ? this.state.gym.PT.map((PT,key) => <div key={key}><span>{PT.name}</span>:<span>{`     ${PT.profile}`}</span></div>) : "") : "";
        if (this.state.gym) {
            return (
                <div style={{ lineHeight: "300%", textAlign: "left" }} className="ml-5">
                <h1 className = "mt-5">Name: {this.state.gym.name}</h1>
                    <div className="row">
                        <div className="col-6 hovereffect" >
                            <img style={{height:"350px"}}src={this.state.gym.imgUrl} className="img-thumbnail rounded float-left mt-5 mb-4" alt="image" />
                            
                        </div>
                        <div className="col-6 mt-3">
                            <div>Description:   {this.state.gym.description}</div>
                            <div> Address: {this.state.gym.address ? this.state.gym.address.ten : ""} </div>
                            <div>Price: {this.state.gym.price}</div>
                            <a>PTs Room :</a>
                            {allPT}
                            <div>Phone: {this.state.gym.Lienhe} to get help.</div>
                            <Link to={`/bookroom/${this.state.gym._id}`}>
                                <div>
                                    <button className="btn btn-primary btn-lg">Join Now</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }
        else { return "" }
    }
}

export default ThongTinPhong;
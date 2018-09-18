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
    }
    render() {
        const allPT = this.state.gym ? (this.state.gym.PT ? this.state.gym.PT.map((PT,key) => <div key={key}><span>{PT.name}</span>:<span>{`     ${PT.profile}`}</span></div>) : "") : "";
        if (this.state.gym) {
            return (
                <div style={{ lineHeight: "300%", textAlign: "left" }} className="ml-5">
                <h1 className = "mt-5">Tên phòng: {this.state.gym.name}</h1>
                    <div className="row">
                        <div className="col-6" >
                            <img src={this.state.gym.imgUrl} className="img-thumbnail rounded float-left mt-5 mb-4" alt="image" />
                        </div>
                        <div className="col-6 mt-3">
                            <div>Mô tả :   {this.state.gym.description}</div>
                            <div> Địa Điểm: {this.state.gym.address ? this.state.gym.address.ten : ""} </div>
                            <div>Giá thuê: {this.state.gym.price}</div>
                            <a>PT của phòng :</a>
                            {allPT}
                            <div>Liên Hệ: {this.state.gym.Lienhe} để được tư vấn và hỗ trợ.</div>
                            <Link to={`/bookroom/${this.state.gym._id}`}>
                                <div>
                                    <button className="btn btn-primary btn-lg">Thuê Ngay</button>
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
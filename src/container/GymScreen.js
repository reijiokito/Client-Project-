import React, { Component } from 'react';

import { Button } from 'reactstrap'
import { Link } from 'react-router-dom';
import GoogleModal from './GoogleModal';
import axios from '../axios';
import domain from '../domain';

class GymScreen extends Component {

    state = {
        infos: [],
        placeName: ""
    }

    componentDidMount() {
        axios
            .get(domain+domain+"/api/gym")
            .then(data => {
                this.setState({ infos: data.data.places })
            })
            .catch(err => console.log(err));

        axios
            .get(`/api/diadiem/${this.props.match.params.diadiemId}`)
            .then(data => {
                this.setState({ placeName: data.data.place[0].name });
            })
            .catch(err => console.log(err));
    }

    render() {
        const infos = this.state.infos.filter((info) => {
            var stringName = info.name.toUpperCase();
            if (stringName.includes(this.props.sendSearchText().toUpperCase()))
                return info;
        });

        const displayInfo = infos.filter(info => info.diadiem.name.includes(this.state.placeName));
        const allInfo = displayInfo.map((info, key) => (
            <div className="col-12" key={key}>
                <div className=" row border border-dark m-3 rounded">
                    <div className="col-4 mt-3">
                        <h3>{info.name}</h3>
                        <div>
                            <div className="position-relative">
                                <p >{info.location}</p>
                            </div>
                            <div className="mb-3">
                                <GoogleModal address={info.address.googlemap} info={info} />
                            </div>

                        </div>
                        <div>

                            <p>{info.description}</p>
                        </div>
                    </div>
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        <img className="rounded m-3 w-75 position-relative " style={{ maxWidth: "100%", maxHeight: "75%" }} src={info.imgUrl} alt="Imgs" />
                        <Link to={`/gym/${info._id}`}>
                            <Button className="text-center mb-1 p-0 w-75" color="primary">
                                Xem Phòng
                            </Button>
                        </Link>
                    </div>




                </div>
            </div>
        ));

        return (
            <div className="container mt-3">
                <div className="row">
                    {allInfo}
                </div>
            </div>
        );
    }
}

export default GymScreen;
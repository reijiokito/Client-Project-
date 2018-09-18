import React, { Component } from 'react';


import { Link } from 'react-router-dom';

import Caroseul from '../container/Caroseul';
import video from '../videos/TITAN T1-X (Currently TYTAX® T1-X) - ULTIMATE Gym Machine UNLIMITED Workout Possibilities.mp4';

class DiaDiem extends Component {
    state = {

    }


    render() {
        const allPlaces = this.props.places.map(place => (
            <div className="col-3 mt-3 mb-3" style={{overflow:"hidden"}}>
            <div className="hovereffect" key={place._id} >
                <Link to={`/diadiem/${place._id}`} >
                    <img src={place.imgUrl} className="img-thumbnail" alt="Img" />
                    <div>
                        <button className="btn btn-danger w-100">
                            <h3 className="text-center text-light">{place.name}</h3>
                        </button>
                    </div>
                </Link>
            </div>
            </div>
        ));
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

        return (
            <div className="container mt-3">
                <h4>Popular addresses in Viet Nam</h4>
                <div className="row">
                    {allPlaces}
                </div>
                <div className="col-12">
                    <h4>Newest Product</h4>
                    <video autoPlay muted loop id="myVideo" className="img-thumbnail">
                        <source src={video} type="video/mp4" />
                        Your browser does not support HTML5 video.
                  </video>
                </div>
                <hr className="m-3" />
                <div className="col-12">
                    <div style={{ width: "100%", height: "400px !important" }}>
                        <Caroseul />
                    </div>
                </div>
                <hr className="m-3" />
            </div>
        );
    }
}

export default DiaDiem; 
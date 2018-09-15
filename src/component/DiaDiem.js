import React, { Component } from 'react';


import { Link } from 'react-router-dom';

class DiaDiem extends Component {
    state = {

    }

    render() {
        const allPlaces = this.props.places.map(place => (
            <div className="col-4 mt-3 mb-3" key={place._id} >                
                <Link to={`/diadiem/${place._id}`} >
                <img src = {place.imgUrl} className="img-thumbnail"  />
                <div>
                    <button className="btn btn-danger w-100">
                        <h3 className="text-center text-light">{place.name}</h3>                      
                    </button> 
                    </div>                     
                </Link>               
            </div>
        ));
        
        return (
            <div className="container mt-3">
                <div className="row">
                    {allPlaces}
                </div>
            </div>
        );
    }
}

export default DiaDiem; 
import React, { Component } from 'react';
import axios from '../axios';
import domain from '../domain';


class BookGymRoom extends Component {
    state = {

    }



    componentDidMount() {
        axios
            .get(domain.domain + `/api/gym/${this.props.match.params.gymId}`)
            .then(data => {                
                this.setState({
                    PTs: data.data.place[0].PT,
                    gym: data.data.place[0]
                })

            })
            .catch(err => console.log(err));
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    onRegister = (event) => {
        if (!this.props.user)
            alert("Please Login!");
        else {
            let gym = {
                active: true,
                gymID: this.state.gym._id
            }
            if (event.target.name) {
                let PT = {
                    active: true,
                    PT: event.target.name
                }
                this.props._onRegister(gym, PT);
            }
            else {
                let PT = {
                    active: false,
                    PT: event.target.name
                }
                this.props._onRegister(gym, PT);
            }
        }        
    }


    render() {
        const allPT = this.state.PTs ? this.state.PTs.map(PT =>
            <div key={PT._id} className="col-12 float-left">
                <h4>{PT.name}</h4>
                <img className="img-thumbnail w-25 h-25" src={PT.imgUrl} alt="img" />
                <p>
                    
                        <button className="btn btn-info" onClick={this.onRegister} name={PT._id}>
                            Choose
                    </button>               
                </p>
            </div>
        ) : "";

        return (
            <div className="float-left ml-1 text-left">
                <h2>Do you want to tran with our PT?</h2>
                <div key="0" className="col-12 float-left">
                    <h4>I can train by my self</h4>
                    <p>                        
                            <button className="btn btn-info" onClick={this.onRegister}>
                                Choose
                        </button>                       
                    </p>
                </div>
                {allPT}
            </div>
        )
    }
}

export default BookGymRoom;

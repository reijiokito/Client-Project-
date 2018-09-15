import React, { Component } from 'react';
import axios from '../axios';

class BookGymRoom extends Component {
    state = {

    }



    componentDidMount() {
        axios
            .get(`/api/gym/${this.props.match.params.gymId}`)
            .then(data => {
                console.log(data);
                this.setState({
                    PTs: data.data.place[0].PT,
                    gym: data.data.place[0]
                })

            })
            .catch(err => console.log(err));
    }

    onRegister = (event) => {                  
        if (!this.props.user)
            alert("Please Login!");
        else {
            let gym = {
                active: true,
                gymID: this.state.gym._id
            }
            if(event.target.name){
                let PT = {
                    active : true,
                    PT : event.target.name
                }
                this.props._onRegister(gym,PT);
            }
            else{
                let PT = {
                    active : false,
                    PT : event.target.name
                }
                this.props._onRegister(gym,PT);
            }

            

        }
    }


    render() {        
        const allPT = this.state.PTs ? this.state.PTs.map(PT =>
            <div key={PT._id} className="col-12 float-left">
                <h4>{PT.name}</h4>
                <img className="img-thumbnail w-25 h-25"src={PT.imgUrl}/>
                <p>
                    <button className="btn btn-info" onClick={this.onRegister} name={PT._id}>
                        Choose
                    </button>
                </p>
            </div>
        ) : "";

        return (
            <div className="float-left ml-1 text-left">
                <h2>Ban co muon dang ky PT khong?</h2>
                <div key="0" className="col-12 float-left">
                    <h4>Khong su dung PT</h4>
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

// render() {

//     const allPT =
//         this.state.PTs.map(PT => (
//             <div key={PT._id}>
//                 {/* Show PT, sơ qua thôi */}
//                 <div>{PT.name}</div>
//                 <DangKi
//                     _onRegister={this.props._onRegister}
//                     PT={PT._id}
//                     gymID={this.state.gym}
//                     user={this.props.userID} />
//             </div>
//         ))

//     return (
//         <div>
//             <NavBar
//                 _onLogin={this.props._onLogin}
//                 _onSignUp={this.props._onSignUp}
//                 _onLogout={this.props._onLogout}
//                 name={this.props.name}
//             />
//             <div key="0">
//                 <div>Không PT</div>
//                 <DangKi
//                     _onRegister={this.props._onRegister}
//                     PT="0"
//                     gymID={this.state.gym}
//                     user={this.props.userID} />
//             </div>
//             {allPT}
//         </div >
//     );
// }
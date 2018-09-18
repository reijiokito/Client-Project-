import React, { Component } from 'react';
import axios from '../axios';

import { Route, Switch } from 'react-router-dom';

import NavBar from '../component/NavBar';
import DiaDiem from '../component/DiaDiem';
import GymScreen from './GymScreen';
import ProfilePage from './ProfilePage';
import ThongTinPhong from './ThongTinPhong';
import BookGymRoom from './BookGymRoom';


import domain from '../domain';
class HomeScreen extends Component {

    state = {
        // info: [{ name:"Valkira",lat: -30.397, lng: 150.644,diadiem:"3-6 Ha Noi, Vũng Tàu, Bà Rịa - Vũng Tàu",price:"400,000",description:" Với hệ thống trang thiết bị hiện đại, đội ngũ nhân viên nhiệt tình, chuyên nghiệp hứa hẹn sẽ là một điểm dừng chân hoàn hảo du khách." },{name:"MGym", lat: -10.397,price:"300,000", lng: 150.644,diadiem:"3-6 Sai Gon, Vũng Tàu, Bà Rịa - Vũng Tàu",description:" Với hệ thống trang thiết bị hiện đại, đội ngũ nhân viên nhiệt tình, chuyên nghiệp hứa hẹn sẽ là một điểm dừng chân hoàn hảo du khách." },{name: "Rokakiki", lat: -32.397, lng: 100.644,diadiem:"3-6 Ca Mau, Vũng Tàu, Bà Rịa - Vũng Tàu",price:"250,000",description:" Với hệ thống trang thiết bị hiện đại, đội ngũ nhân viên nhiệt tình, chuyên nghiệp hứa hẹn sẽ là một điểm dừng chân hoàn hảo du khách." }],
        // places: [{_id:'1',name:"Ha Noi",imgUrl:"http://img.cdn2.vietnamnet.vn/Images/english/2016/02/13/20/20160213203224-2.jpg"},{_id:'2',name:"Ha Noi",imgUrl:"http://img.cdn2.vietnamnet.vn/Images/english/2016/02/13/20/20160213203224-2.jpg"},{_id:'3',name:"Ha Noi",imgUrl:"http://img.cdn2.vietnamnet.vn/Images/english/2016/02/13/20/20160213203224-2.jpg"},{_id:'4',name:"Ha Noi",imgUrl:"http://img.cdn2.vietnamnet.vn/Images/english/2016/02/13/20/20160213203224-2.jpg"},{_id:'5',name:"Ha Noi",imgUrl:"http://img.cdn2.vietnamnet.vn/Images/english/2016/02/13/20/20160213203224-2.jpg"},{_id:'6',name:"Ha Noi",imgUrl:"http://img.cdn2.vietnamnet.vn/Images/english/2016/02/13/20/20160213203224-2.jpg"}],
        searchText: "",
        places: [],
        choosedPlace: {},
        openProfile: false

    }

    

    changeOpenProfile = () => {
        if (this.state.openProfile)
            this.setState({ openProfile: false })
        else
            this.setState({ openProfile: true })

    }


    componentDidMount() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        axios
            .get(domain.domain + "/api/diadiem")
            .then(data => {
                this.setState({ places: data.data.places })
            })
            .catch(err => console.log(err));
            
    }

    onChangeIsOpenInfo = () => {
        this.props.history.push(`/profile/${this.props.user._id}`)
    }

    onsearchChaged = text => this.setState({ searchText: text });

    sendSearchText = () => this.state.searchText;

    render() {
        const places = this.state.places.filter((place) => {
            var stringName = place.name.toUpperCase();
            if (stringName.includes(this.state.searchText.toUpperCase()))
                return place;
        });


        return (
            <div>
                <NavBar
                    changeOpenProfile={this.changeOpenProfile}
                    gymJoin={this.state.gymJoin}
                    onsearchChanged={this.onsearchChaged}
                    _onLogin={this.props._onLogin}
                    _onSignUp={this.props._onSignUp}
                    _onLogout={this.props._onLogout}
                    user={this.props.user}
                    isLogin={this.props.isLogin} />
                
                <Switch>
                    <Route exact path="/" render={props => {
                        return <DiaDiem {...props} places={places} />
                    }} />
                    <Route exact path="/diadiem/:diadiemId" render={props => {
                        return <GymScreen {...props} onsearchChaged={this.onsearchChaged} sendSearchText={this.sendSearchText} gymJoin={this.state.gymJoin} />
                    }} />
                    <Route exact path="/gym/:gymId" render={props => {
                        return <ThongTinPhong {...props} />
                    }} />
                    <Route exact path="/bookroom/:gymId" render={props => {
                        return <BookGymRoom {...props} _onRegister={this.props._onRegister} isLogin={this.props.isLogin} user={this.props.user} />
                    }} />
                    <Route exact path="/profile/:userId" render={props => {
                        return <ProfilePage {...props} />
                    }} />
                </Switch>

            </div>
        );
    }
}

export default HomeScreen;
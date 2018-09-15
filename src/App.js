import React, { Component } from 'react';
import axios from './axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HomeScreen from './container/HomeScreen';
// import video from './videos/TITAN T1-X (Currently TYTAX® T1-X) - ULTIMATE Gym Machine UNLIMITED Workout Possibilities.mp4';
import { BrowserRouter } from 'react-router-dom';
import backgroundPT from './imgs/backgroundPT.jpg';

class App extends Component {
  state = {
    user: null,
    isLogin: null
  }

  changeIsLogin = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin
    }));
  }

  componentDidMount() {
    axios
      .get("/api/auth/isLogin")
      .then(data => {
        if (data.success === 0)
          this.setState({ isLogin: false });
        else
          this.setState({ isLogin: true, user: data.data.user });
      })
      .catch(err => console.log(err));
  }

  _onLogin = (username, password) => {
    axios
      .post("/api/auth/login", {
        username: username,
        password: password
      })
      .then(response => {
        console.log(response)
        this.setState({
          user: response.data.user

        });        
      })
      .catch(err => {
        console.log(err);
      });
  };

  _onSignUp = (username, password, email, sdt, name) => {
    axios
      .post("/api/user", {
        username: username,
        password: password,
        email: email,
        sdt: sdt,
        name: name
      })
      .then(response => {
        console.log(response);
        this.setState({
          user: response.data.user
        })
      })
      .catch(err => console.log(err));
  }

  _onLogout = () => {
    axios
      .get("/api/auth/logout")
      .then(response => {
        this.setState({
          user: null,
          isLogin: null
        })
      })
      .catch(err => console.log(err));
  }

  _onRegister = (gym, PT) => {
    
      axios
        .put("/api/user/" + this.state.user._id, {
          gymJoin: gym,
          chosenPT: PT
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(err => console.log(err));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video> */}
          {/* <img  src={backgroundPT} alt=""  id="#myImg"/> */}
          <HomeScreen
            gymJoin={this.state.gymJoin}
            _onRegister={this._onRegister}
            _onLogin={this._onLogin}
            _onSignUp={this._onSignUp}
            _onLogout={this._onLogout}
            user={this.state.user}
            isLogin={this.state.isLogin} />


      </div>
      </BrowserRouter>
    );
  }
}

export default App;
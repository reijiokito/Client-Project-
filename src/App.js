import React, { Component } from 'react';
import axios from './axios';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import HomeScreen from './container/HomeScreen';

import { BrowserRouter } from 'react-router-dom';
// import backgroundPT from './imgs/backgroundPT.jpg';
import domain from './domain';
import Footer from './container/Footer';

// import fontaswesome from '@fortawesome/fontawesome-free';

// import SearchBox from './container/SearchBox';
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
  // componentWillReceiveProps(nextProps,nextState) {

  //   if (nextState.user !== this.state.user) {
  //     this.loadData(nextState.user);
  //   }
  // }


  componentDidMount() {
    axios
      .get(domain.domain + "/api/auth/isLogin")
      .then(data => {
        if (data.success === 0)
          this.setState({ isLogin: false });
        else
          this.setState({ isLogin: true, user: data.data.user });
        if (this.state.user && this.state.user.gymJoin.active === "true") {
          axios
            .get(domain.domain + "/api/gym/" + this.state.user.gymJoin.gymID)
            .then(response => {            
              this.setState({
                gymJoin: response.data.place[0]
              });
            })
            .catch(error => console.log(error));
        }
      })
      .catch(err => console.log(err));


  }

  _onLogin = (username, password) => {
    axios
      .post(domain.domain + "/api/auth/login", {
        username: username,
        password: password
      })
      .then(response => {
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
      .post(domain.domain + "/api/user", {
        username: username,
        password: password,
        email: email,
        sdt: sdt,
        name: name,
        gymJoin: { active: "false", gymID: "5b9cd6243da5e12464a7df76" },
        chosenPT: { active: "false", PT: "5b9cd7f53da5e12464a7df7a" }
      })
      .then(response => {
        this.setState({
          user: response.data.user
        })
      })
      .catch(err => console.log(err));
  }

  _onLogout = () => {
    axios
      .get(domain.domain + "/api/auth/logout")
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
      .put(domain.domain + "/api/user/" + this.state.user._id, {
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
        <div>

          <div className="App container middle">

            <div className="row">
              <div className="col-12">

                <HomeScreen
                  gymJoin={this.state.gymJoin}
                  _onRegister={this._onRegister}
                  _onLogin={this._onLogin}
                  _onSignUp={this._onSignUp}
                  _onLogout={this._onLogout}
                  user={this.state.user}
                  isLogin={this.state.isLogin} />
              </div>
              <hr className="m-5" />

              <div className="col-12">
                <Footer />
              </div>
            </div>

          </div>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;

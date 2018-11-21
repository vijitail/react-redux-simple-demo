import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { loginUser, logoutUser } from './Actions';

class App extends Component {
  render() {
    const data = { name: "Vijit" };
    return (
      <div>
      {!this.props.auth.isAuth ? 
        <button onClick={() => this.props.login(data)} >Login</button>
      : (
          <div>
              {this.props.auth.data.name} <br/>
              <button onClick={() => this.props.logout()} >Logout</button>
          </div>
      )} 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapActionsToProps = {
  login: loginUser, 
  logout: logoutUser
}

export default connect(mapStateToProps, mapActionsToProps)(App);

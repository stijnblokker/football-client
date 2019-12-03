import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from './football.png'
import './style.css'
// import Home from "./components/Home";
import TeamListContainer from "./components/TeamListContainer";
import TeamDetailsContainer from "./components/TeamDetailsContainer";
import PlayerDetailsContainer from "./components/PlayerDetailsContainer"
// import LoginFormContainer from "./components/LoginFormContainer";

class App extends Component {
  render() {
    // console.log('login?', this.props.loggedIn);

    return (
      <div className="container">
        <header>
          <img src={logo} alt="football logo" />
          <h1>Football app</h1>
          <hr />
        </header>
        <nav>
          <h2>
            <Link to="/">Teams</Link> 
            {/* {this.props.team.name && <Link to={``}>this.props.team.name</Link>} */}
            {/* {this.props.player.name  && this.props.player.name} */}
          </h2> 

        </nav>
        {/* <Link to="/"> Home </Link> */}

        {/* {this.props.loggedIn ? (
          "You're logged in"
        ) : (
          <Link to="/login"> Login</Link>
        )} */}
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact component={TeamListContainer} />
        <Route path="/teams/:id" exact component={TeamDetailsContainer} />
        <Route path="/players/:id" exact component={PlayerDetailsContainer} />
        {/* <Route path="/login" exact component={LoginFormContainer} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // loggedIn: state.auth !== null
    teams: state.teams,
    team: state.team,
    player: state.player
  };
};

export default connect(mapStateToProps)(App);

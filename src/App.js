import React, { useEffect } from "react";
import { Switch, Route,withRouter } from "react-router-dom";
import Login from "./components/user/Login"
import Register from "./components/user/Register"
import "./CSS/App.css"
import styled from "styled-components"
import Promotion from "./components/AdvertForm"
import CarouselContainer from './components/Slider'
import AppForm from './components/AppForm'
import UserDashboard from './components/UserDashboard'
import NotFoundPage from './components/NotFoundPage';
import {
  mobilePortrait,
} 
from "./styles/theme.styles"
// import privateRoute from "../../utils/privateRoute";
// import './App.css'
import Payment from "./pages/payment";
import AppinfoContainer from "./components/AppinfoContainer"


function App({ appState, user, checkToken, logout }) {
  useEffect(() => {
  }, []);
  return (
    <div className="App">
   

    <div className="container">
      <Logo>
    {/* <div className="logo-div">
          <img src={logo} className="logo" />
          </div> */}
          </Logo>
    <Switch>
    <Route exact path="/">
    <CarouselContainer/>
          </Route>
      <Route exact path="/login">
        <Login />
      </Route>
        <Route exact path ="/Register">
          <Register />
          </Route>
          <Route exact path="/promotion">
            <Promotion />
          </Route>
          <Route exact path="/appform">
            <AppForm />
          </Route>
            <Route exact path="/payment">
            <Payment />
            </Route>
            <Route exact path="/info">
              <AppinfoContainer />
              </Route>
              <Route exact path="/Dashboard">
              <UserDashboard />
              <Route component={NotFoundPage} />
            </Route>
            </Switch>
          </div>
          </div>

  );
}
const Logo = styled.div`
.logo {
  z-index: 1;
  padding-top: 37px;
  position: absolute;
  top: -30px;
  left:1px;
  height:101px;
  @media ${mobilePortrait} {
    z-index: 1;
    padding-top: 36px;
    height: 96px;
    width: 89px;
    .img {
      position: sticky;
      top: 0;
    }
  }
}
`;
export default withRouter(App);
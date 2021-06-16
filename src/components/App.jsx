import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import {initializingAC } from '../redux/appReducer';
import MainPageContainer from './MainPage/MainPageContainer';
import Login from './Login/Login';
import SettingPageContainer from './SettingPage/SettingPageContainer';

class App extends React.Component {
  componentDidMount(){
    this.props.initializingAC()
  }
  render(){
    return (
      <>
      <Redirect to="/MainPage"/>
       <Route path="/admin" render={()=><SettingPageContainer/>}/>
       <Route path="/MainPage" render={()=><MainPageContainer/>}/>
       <Route path="/login" render={()=><Login/>}/>
      
      </>
    );
  }
}



export default connect(null, {initializingAC} )(App);

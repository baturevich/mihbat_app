import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import {initializingAC } from '../redux/appReducer';
import MainPageContainer from './MainPage/MainPageContainer';
import SettingPageContainer from './SettingPage/SettingPageContainer';

class App extends React.Component {
  componentDidMount(){
    this.props.initializingAC()
  }
  render(){
    return (
      <>
       <Redirect to="/admin"/>
       <Route path="/MainPage"  render={()=> <MainPageContainer/>} />
       <Route path="/admin" render={()=><SettingPageContainer/>}/>
      </>
    );
  }
}



export default connect(null, {initializingAC} )(App);

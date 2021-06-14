import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import {initializingAC } from '../redux/appReducer';
import VkSettingContainer from './Vk/VkSettingContainer';
import VkLoginContainer from './Vk/VkLogin/VkLoginContainer';
import VkProfileContainer from './Vk/VkProfile/VkProfileContainer';
import VkNewsContainer from './Vk/VkNews/VkNewsContainer';
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
       
        {/* VK */}
        {/* <Route path="/admin"  render={()=> <VkSettingContainer/>} /> */}
        {/* <Route path="/VkLogin" render={() => <VkLoginContainer/>} />
        <Route path="/VkNews" render={()=><VkNewsContainer/>}/>
        <Route path="/VkProfile" render={()=><VkProfileContainer/>}/> */}
        {/* Main_page  */}
      </>
    );
  }
}



export default connect(null, {initializingAC} )(App);

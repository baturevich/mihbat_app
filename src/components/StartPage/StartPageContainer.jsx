import React from 'react';
import { connect } from 'react-redux';
import StartPage from './StartPage';

const StartPageContainer = (props)=>{
    return(
        <StartPage />
    )
}

export default connect(null,null)(StartPageContainer)
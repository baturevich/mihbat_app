import React from 'react'
import { connect } from 'react-redux'
import SettingPage from './SettingPage'

const SettingPageContainer = (props)=>{
    return(
        <SettingPage appData={props.appData}/>
    )
}
const mapStateToProps = (state)=>({appData: state.appData})
export default connect(mapStateToProps,null)(SettingPageContainer)
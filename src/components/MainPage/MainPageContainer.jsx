import React from 'react'
import { connect } from 'react-redux'
import { toggleInvestModalAC, toggleStartUpModalAC } from '../../redux/appReducer'
import MainPage from './MainPage'

const MainPageContainer = (props) => {
    return (
        <MainPage appData={props.appData}
        toggleInvestModalAC={props.toggleInvestModalAC}
        toggleStartUpModalAC={props.toggleStartUpModalAC}
         />

    )
}
const mapStateToprops = (state) =>({appData:state.appData})
export default connect(mapStateToprops, {toggleInvestModalAC,toggleStartUpModalAC})(MainPageContainer)
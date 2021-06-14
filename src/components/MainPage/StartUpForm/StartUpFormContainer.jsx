import React from 'react'
import { connect } from 'react-redux'
import { toggleStartUpModalAC } from '../../../redux/appReducer'
import StartUpForm from './StartUpForm'

const StartUpFormContainer =(props)=>{
    return(
        <StartUpForm appData={props.appData}
        toggleStartUpModalAC={props.toggleStartUpModalAC}
        />
    )
}
const mapStateToProps = (state)=>({appData: state.appData})
export default connect(mapStateToProps,{toggleStartUpModalAC})(StartUpFormContainer)

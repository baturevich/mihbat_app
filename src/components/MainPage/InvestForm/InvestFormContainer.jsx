import React from 'react'
import { connect } from 'react-redux'
import { addOrderAC, toggleInvestModalAC } from '../../../redux/appReducer'
import InvestForm from './InvestForm'

const InvestModalContainer = (props)=>{
    return(
        <InvestForm appData={props.appData}
        toggleInvestModalAC={props.toggleInvestModalAC}
        addOrderAC={props.addOrderAC}
        />
    )
}
const mapStateToprops = (state) =>({appData:state.appData})

export default connect(mapStateToprops,{toggleInvestModalAC,addOrderAC})(InvestModalContainer)
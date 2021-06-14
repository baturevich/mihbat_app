import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { changeAddPhotosAC, changeAddPhotosCountAC, changeMainPhotoAC, changeUserDataAC  } from '../../../redux/vkReducer'
import VkLogin from './Vklogin'

class VkLoginContainer extends React.Component{
    
    render(){
        return(
            <VkLogin vk_data={this.props.vk_data} 
            changeUserDataAC={this.props.changeUserDataAC}
            changeAddPhotosAC={this.props.changeAddPhotosAC}
            changeAddPhotosCountAC={this.props.changeAddPhotosCountAC}
            changeMainPhotoAC={this.props.changeMainPhotoAC}
            goToVkPage={this.goToVkPage}
            />
        )
    }
}

const mapStateToprops = (state) =>({vk_data:state.vkData})
export default compose(connect(mapStateToprops,
    {changeUserDataAC,
    changeMainPhotoAC,
    changeAddPhotosCountAC,
    changeAddPhotosAC}),withRouter)(VkLoginContainer)
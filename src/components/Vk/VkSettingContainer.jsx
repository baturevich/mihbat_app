import React from 'react'
import { connect } from 'react-redux'
import {
  changeAddPhotosAC,
  changeAddPhotosCountAC, changeMainPhotoAC,
  changePostDataAC, changeUserDataAC
} from '../../redux/vkReducer'
import VkSetting from './VkSetting'


class VkSettingContainer extends React.Component {
  
  render() {
    return(
      <VkSetting
      vk_data={this.props.vk_data}
      changeUserDataAC={this.props.changeUserDataAC}
      changeAddPhotosAC={this.props.changeAddPhotosAC}
      changeAddPhotosCountAC={this.props.changeAddPhotosCountAC}
      changeMainPhotoAC={this.props.changeMainPhotoAC}
      changePostDataAC={this.props.changePostDataAC}
    />
    )
  }
}
const mapStateToprops = (state) => {
  return {
    vk_data: state.vkData,
  }
}

export default connect(mapStateToprops,
  { changeUserDataAC, changeAddPhotosAC, changeAddPhotosCountAC, changeMainPhotoAC, changePostDataAC })
  (VkSettingContainer);
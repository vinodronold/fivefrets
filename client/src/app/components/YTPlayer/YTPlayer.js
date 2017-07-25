import React, { Component } from 'react'

class YTPlayer extends Component {
  constructor() {
    super()
    this.PlayerID = 'YTPlayer'
  }
  componentDidMount = () => this.props.MountYTPlayer(this.PlayerID, this.props.ytid)
  componentDidUnMount = () => this.props.UnMountYTPlayer(this.PlayerID)
  
  render = () =>
    <div>
      <div className="YTClearSpace" />
      <div className="YTPlayer" id={this.PlayerID} />
    </div>
}
export default YTPlayer

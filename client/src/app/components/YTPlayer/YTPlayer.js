import React, { Component } from 'react'
import glamorous from 'glamorous'

const YTClearSpace = glamorous.div({
  minHeight: '12rem'
})
const YTPlayerDiv = glamorous.div({
  position: 'fixed',
  transform: 'scale(.75)',
  transformOrigin: 'bottom left',
  bottom: '.5rem',
  left: '.5rem'
})

class YTPlayer extends Component {
  constructor() {
    super()
    this.PlayerID = 'YTPlayer'
  }
  componentDidMount = () => this.props.MountYTPlayer(this.PlayerID, this.props.ytid)
  componentDidUnMount = () => this.props.UnMountYTPlayer(this.PlayerID)

  render = () =>
    <div>
      <YTClearSpace />
      <YTPlayerDiv id={this.PlayerID} />
    </div>
}
export default YTPlayer

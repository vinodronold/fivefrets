import React, { Component } from 'react'
import YouTubePlayer from 'youtube-player'
import { PLAYER_STATUS } from '../../constants'

class YTPlayer extends Component {
  constructor() {
    super()
    this.player = null
    this.status = null
    this.player_events = null
    this.player_id = 'YTPlayer'
  }

  componentDidMount() {
    const { id, PlayerStatusChanged } = this.props
    this.player = YouTubePlayer(this.player_id, {
      videoId: id,
      height: 'auto',
      width: 'auto',
      playerVars: { playsinline: 1, showinfo: 0, fs: 0 }
    })

    this.player_events = this.player.on('stateChange', ({ data }) => {
      if (!(this.status === data)) {
        this.status = data
        PlayerStatusChanged(data)
      }
    })
  }
  componentDidUpdate() {
    this.status = this.props.status
    switch (this.props.status) {
      case PLAYER_STATUS.PAUSED:
        this.player.pauseVideo()
        break
      case PLAYER_STATUS.PLAYING:
        this.player.playVideo()
        break
      case PLAYER_STATUS.ENDED:
        this.player.stopVideo()
        break
      default:
    }
  }
  componentWillUnmount() {
    this.player.off(this.player_events)
    this.player.destroy()
  }
  shouldComponentUpdate = nextProps => !(nextProps.status === this.status)

  render() {
    return (
      <div>
        <div className="YTClearSpace" />
        <div className="YTPlayer" id={this.player_id} />
      </div>
    )
  }
}

export default YTPlayer

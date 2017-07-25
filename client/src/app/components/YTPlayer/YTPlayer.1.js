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
    this.timer = null
  }

  async tick() {
    let { activechord, max, next, MoveChordTo, PlayerStatusChanged } = this.props
    if (activechord < max) {
      let t = await this.player.getCurrentTime()
      if (t >= next) {
        MoveChordTo(activechord + 1)
      }
    }
    if (activechord === max) {
      PlayerStatusChanged(PLAYER_STATUS.ENDED)
    }
  }

  componentDidMount() {
    const { id, PlayerStatusChanged } = this.props
    this.player = YouTubePlayer(this.player_id, {
      videoId: id,
      height: 'auto',
      width: 'auto',
      playerVars: { playsinline: 1, showinfo: 0, fs: 0, controls: 0 }
    })

    this.player_events = this.player.on('stateChange', ({ data }) => {
      clearInterval(this.timer)
      if (data === PLAYER_STATUS.PLAYING) {
        this.timer = setInterval(this.tick.bind(this), 100)
      }
      if (!(this.status === data)) {
        this.status = data
        PlayerStatusChanged(data)
      }
      // LOOK FOR SAGA -> https://jaysoo.ca/2016/01/03/managing-processes-in-redux-using-sagas/
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
        this.player.stopVideo().then(this.props.MoveChordTo(1))
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

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
    let { chords, activechord, MoveChordTo, PlayerStatusChanged } = this.props
    let max = Object.keys(chords).length
    if (activechord < max) {
      let next = chords[activechord + 1].t
      let t = await this.player.getCurrentTime()
      if (t >= next) {
        MoveChordTo(activechord + 1)
        if (activechord === max) {
          PlayerStatusChanged(PLAYER_STATUS.PAUSED)
        }
      }
    }
  }
  startTimer() {
    this.timer = setInterval(this.tick.bind(this), 100)
  }
  stopTimer() {
    clearInterval(this.timer)
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
        this.player.pauseVideo().then(this.stopTimer.bind(this))
        break
      case PLAYER_STATUS.PLAYING:
        this.player.playVideo().then(this.startTimer.bind(this))
        break
      case PLAYER_STATUS.ENDED:
        this.player.stopVideo().then(() => {
          this.stopTimer.bind(this)
          this.props.MoveChordTo(1)
          console.log('stopped.! THIS IS NOT WORKING')
        })
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

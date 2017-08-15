import React, { Component } from 'react'
import Layout from './Layout'
import Loader from '../Loader'

class PlayerLayout extends Component {
  componentDidMount() {
    const { match, player, GetSong } = this.props
    if (!player.ytid) {
      GetSong(match.params.id)
    }
  }
  render() {
    return this.props.song ? <Layout {...this.props} /> : <Loader />
  }
}

export default PlayerLayout

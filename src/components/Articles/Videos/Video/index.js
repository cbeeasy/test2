import React, { Component } from 'react'
// import axios from 'axios'
// import { URL } from '../../../../config'

import {
  firebaseDB, firebaseLooper, firebaseTeams, firebaseVideos
} from '../../../../firebase'

import styles from '../../articles.css'
import Header from './header'
import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosRelated'

class VideoArticle extends Component {
  state = {
    article: [],
    team: [],
    teams: [],
    related: []
  }

  componentWillMount () {
    // axios.get(`${URL}/videos?id=${this.props.match.params.id}`).then((response) => {
    //   const article = response.data[0]

    //   axios.get(`${URL}/teams?id=${article.team}`).then((axiosResponse) => {
    //     this.setState({
    //       article,
    //       team: axiosResponse.data
    //     })
    //     this.getRelated()
    //   })
    // })

    firebaseDB
      .ref(`videos/${this.props.match.params.id}`)
      .once('value')
      .then((snapshot) => {
        const article = snapshot.val()
        firebaseTeams
          .orderByChild('teamId')
          .equalTo(article.team)
          .once('value')
          .then((snapshot2) => {
            const team = firebaseLooper(snapshot2)
            this.setState({
              article,
              team
            })
          })
      })
  }

  getRelated = () => {
    // axios.get(`${URL}/teams`).then((response) => {
    //   const teams = response.data
    //   axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`).then((axiosResponse) => {
    //     this.setState({
    //       teams,
    //       related: axiosResponse.data
    //     })
    //   })
    // })

    firebaseTeams.once('value').then((snapshot) => {
      const teams = firebaseLooper(snapshot)

      firebaseVideos
        .orderByChild('team')
        .equalTo(this.state.article.team)
        .limitToFirst(3)
        .once('value')
        .then((snapshot2) => {
          const related = firebaseLooper(snapshot2)
          console.log(related)
          this.setState({
            teams,
            related
          })
        })
    })
  }

  render () {
    const article = this.state.article
    const team = this.state.team

    return (
      <div>
        <Header teamData={team[0]} />
        <div className={styles.videoWrapper}>
          <h1>{article.title}</h1>
          <iframe
            title='videoplayer'
            width='100%'
            height='300px'
            src={`https://www.youtube.com/embed/${article.url}`}
          />
        </div>
        <VideosRelated data={this.state.related} teams={this.state.teams} />
      </div>
    )
  }
}

export default VideoArticle

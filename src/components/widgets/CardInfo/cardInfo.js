import React from 'react'
import FontAwesome from 'react-fontawesome'

import moment from 'moment'

import styles from './cardInfo.css'

const CardInfo = (props) => {
  const teamName = (teams, team) => {
    // const data = teams.find(item => item.id === team) <-- axios
    const data = teams.find(item => item.teamId === team)
    if (data) {
      return data.name
    }
    return false
  }

  const formatDate = date => moment(date).format(' DD-MM-YYYY')

  return (
    <div className={styles.cardNfo}>
      <span className={styles.teamName}>{teamName(props.teams, props.team)}</span>
      <span className={styles.date}>
        <FontAwesome name='clock-o' />
        {/* {props.date} */}
        {formatDate(props.date)}
      </span>
    </div>
  )
}

export default CardInfo

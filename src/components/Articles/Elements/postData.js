import React from 'react'
import moment from 'moment'
import styles from '../articles.css'

const formatDate = date => moment(date).format(' DD-MM-YYYY')

const postData = props => (
  <div className={styles.articlePostData}>
    <div>
      Date:
      <span>{formatDate(props.data.date)}</span>
    </div>
    <div>
      Author:
      <span>{props.data.author}</span>
    </div>
  </div>
)

export default postData

import React from 'react'

import NewsSlider from '../widgets/NewsSlider/slider'
import NewsList from '../widgets/NewsList/newsList'
import VideosList from '../widgets/VideosList/videosList'

const Home = () => (
  <div>
    <NewsSlider
      type='featured'
      start={0}
      amount={3}
      // **** on onverride settings !!! cf ...props.settings dans slider_templates.js
      settings={{
        dots: true
      }}
    />
    {/* } Attention 5 est lié avec amount={5} */}
    <NewsList type='card' loadmore start={0} amount={3} />
    <VideosList type='card' title loadmore start={0} amount={3} />
  </div>
)

export default Home

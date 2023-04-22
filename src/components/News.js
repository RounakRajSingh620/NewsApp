import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey-Top Headlines</h2>
        <NewsItem title="myTitle" description="mydesc" />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />

      </div>
    )
  }
}

export default News

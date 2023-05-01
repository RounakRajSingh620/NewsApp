import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = ` https://newsapi.org/v2/top-headlines?country=in&apiKey=9bcc7f5567eb41a0a52c8885f755801b&page=1pageSize=${}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.aricles, totalResults: parsedData.totalResults })
  }
  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9bcc7f5567eb41a0a52c8885f755801b&page=${this.state.page - 1}&pageSize=${}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults)) {

    }
    else {

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9bcc7f5567eb41a0a52c8885f755801b&page=${this.state.page + 1}&pageSize=${} `;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>NewsMonkey-Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}


        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

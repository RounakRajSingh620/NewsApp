import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl ? "https://th.bing.com/th/id/R.ca0bc1b3b2ae4c237f5ecffeaa442181?rik=EkBYtdEYSIVgFg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f01%2fbeautiful-wallpaper-39.jpg&ehk=dUX8Qlz0ClF18r8HQj8I6vVmKHhdPGv2kxUu3fCR15c%3d&risl=&pid=ImgRaw&r=0" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

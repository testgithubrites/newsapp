import React, { Component } from 'react'

export class NewsItem extends Component {

  
  render() {
    let { title, description, imageUrl, newsUrl, author, date , source } = this.props;
    return (
      <div>
        <div className="card" >
        <span className={`position-absolute top-0 mt-2 translate-middle badge rounded-pill bg-danger`} style={{left:'90%' , zIndex:'1'}}>{source}
            </span>
          <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/08/11/600x338/The-renewed-investor-interest-comes-in-the-wake-of_1689644643780_1691722605723.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Read more</a>
          </div>
        </div>

      </div>
    )
  }
}

export default NewsItem
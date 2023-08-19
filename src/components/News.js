import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
export class News extends Component {

  static defaultProps ={
      country :'in',
      pageSize : 8,
      category :'general',
      
  }


  static propTypes = {
       country : PropTypes.string,
       pageSize : PropTypes.number,
       category : PropTypes.string,
       
  }
 
   capitalize = (string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1)
   }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `NewsFire - ${this.capitalize(this.props.category)}`
  }


     async updateNews(){

this.props.setProgress(10)

      const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d2c176b4f1154011bfc365560fe9326f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
 
    this.setState({loading:true})


    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    console.log(parsedData);
     this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
    this.props.setProgress(100)
    }

    

  async componentDidMount() {
    this.updateNews()
    
  }


  fetchMoreData = async() => {
      this.setState({page:++this.state.page})
     let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d2c176b4f1154011bfc365560fe9326f&page=${this.state.page}&pageSize=${this.props.pageSize}`
  


    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      
    });
  };
  



  render() {
    return (
      <div className="container my-3 ">
        <h1 className="mb-5 text-center" style={{marginTop:'90px'}}>NewsFire - Top Headlines on {this.capitalize(this.props.category)}</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row mx-2 ">
          {this.state.articles.map((element) => {
           return <div className="col-md-4 mb-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date = {element.publishedAt}
                  source={element.source.name}
                />
              </div>
          
          })}
        </div>
        </div>
        </InfiniteScroll>
        
         
          
          </div>
    );
  }
}

export default News;

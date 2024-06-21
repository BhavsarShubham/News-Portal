import React, { useEffect, useState } from "react";
import "./news.css";

export const News = ({ searchQuery, category }) => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async (query = '', category = '') => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4191e0ba35d142e0ad9917dffe93cf76`;
    if (query) {
      url = `https://newsapi.org/v2/everything?q=${query}&apiKey=4191e0ba35d142e0ad9917dffe93cf76`;
    } else if (category) {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4191e0ba35d142e0ad9917dffe93cf76`;
    }
    let resp = await fetch(url);
    let data = await resp.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData(searchQuery, category);
  }, [searchQuery, category]);

  return (
    <>
      <div className="mainDiv">
        {
          mynews.map((ele, index) => (
            <div className="card" key={index} style={{ width: "350px", height: "350px", marginLeft: "7rem", marginTop: "2rem", alignItems: "center" }}>
              <img src={ele.urlToImage == null ? "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=eEnb05ue" : ele.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ele.author == null || ele.author === "" ? "Breaking NEWS!" : ele.author}</h5>
                <p className="card-text">{ele.title}</p>
                <a href={ele.url} target="_blank" className="btn btn-primary">Read More</a>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default News;
